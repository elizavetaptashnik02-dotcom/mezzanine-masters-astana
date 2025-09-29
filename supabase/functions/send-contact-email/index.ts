import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactRequest {
  name: string;
  phone: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, message }: ContactRequest = await req.json();
    
    console.log("Received contact form submission:", { name, phone });

    // Get SMTP configuration from environment
    const mailHost = Deno.env.get("MAIL_HOST");
    const mailPort = Deno.env.get("MAIL_PORT");
    const emailUser = Deno.env.get("EMAIL_USER");
    const emailPass = Deno.env.get("EMAIL_PASS");

    if (!mailHost || !mailPort || !emailUser || !emailPass) {
      throw new Error("SMTP configuration is missing");
    }

    // Create email body
    const emailBody = `
Новая заявка с сайта

Имя: ${name}
Телефон: ${phone}
${message ? `Комментарий: ${message}` : ''}

---
Отправлено через форму "Рассчитайте стоимость за 1 минуту"
    `.trim();

    console.log("Connecting to SMTP server:", mailHost);

    // Use SMTP connection to send email
    const conn = await Deno.connect({
      hostname: mailHost,
      port: parseInt(mailPort),
      transport: "tcp",
    });

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    // Read initial greeting
    const greeting = new Uint8Array(1024);
    await conn.read(greeting);
    console.log("Server greeting:", decoder.decode(greeting));

    // EHLO command
    await conn.write(encoder.encode(`EHLO ${mailHost}\r\n`));
    const ehloResponse = new Uint8Array(1024);
    await conn.read(ehloResponse);
    console.log("EHLO response:", decoder.decode(ehloResponse));

    // AUTH LOGIN
    await conn.write(encoder.encode("AUTH LOGIN\r\n"));
    const authResponse = new Uint8Array(1024);
    await conn.read(authResponse);
    
    // Send username (base64)
    const usernameB64 = btoa(emailUser);
    await conn.write(encoder.encode(`${usernameB64}\r\n`));
    const userResponse = new Uint8Array(1024);
    await conn.read(userResponse);
    
    // Send password (base64)
    const passwordB64 = btoa(emailPass);
    await conn.write(encoder.encode(`${passwordB64}\r\n`));
    const passResponse = new Uint8Array(1024);
    await conn.read(passResponse);
    console.log("Auth response:", decoder.decode(passResponse));

    // MAIL FROM
    await conn.write(encoder.encode(`MAIL FROM:<${emailUser}>\r\n`));
    const mailFromResponse = new Uint8Array(1024);
    await conn.read(mailFromResponse);

    // RCPT TO
    await conn.write(encoder.encode(`RCPT TO:<${emailUser}>\r\n`));
    const rcptToResponse = new Uint8Array(1024);
    await conn.read(rcptToResponse);

    // DATA
    await conn.write(encoder.encode("DATA\r\n"));
    const dataResponse = new Uint8Array(1024);
    await conn.read(dataResponse);

    // Send email content
    const emailContent = `From: ${emailUser}
To: ${emailUser}
Subject: Новая заявка с сайта - ${name}
Content-Type: text/plain; charset=utf-8

${emailBody}
.
`;
    await conn.write(encoder.encode(emailContent));
    const sendResponse = new Uint8Array(1024);
    await conn.read(sendResponse);
    console.log("Send response:", decoder.decode(sendResponse));

    // QUIT
    await conn.write(encoder.encode("QUIT\r\n"));
    const quitResponse = new Uint8Array(1024);
    await conn.read(quitResponse);
    
    conn.close();

    console.log("Email sent successfully");

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);

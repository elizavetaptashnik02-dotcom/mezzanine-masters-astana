import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Calculator from "@/components/Calculator";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Services />
      <Process />
      <Calculator />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;

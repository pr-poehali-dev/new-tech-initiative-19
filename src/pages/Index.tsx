import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
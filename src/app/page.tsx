import Header from '@/components/site/Header';
import Hero from '@/components/site/Hero';
import Services from '@/components/site/Services';
import Portfolio from '@/components/site/Portfolio';
import Testimonials from '@/components/site/Testimonials';
import ContactSection from '@/components/site/ContactSection';
import Footer from '@/components/site/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

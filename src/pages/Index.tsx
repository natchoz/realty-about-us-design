
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import WhyBuyWithUs from '@/components/WhyBuyWithUs';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <WhyBuyWithUs />
      <Footer />
    </div>
  );
};

export default Index;

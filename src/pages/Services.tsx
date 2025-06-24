
import Navbar from '@/components/Navbar';
import ServicesHero from '@/components/ServicesHero';
import ServicesList from '@/components/ServicesList';
import ServicesCTA from '@/components/ServicesCTA';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
      <Footer />
    </div>
  );
};

export default Services;

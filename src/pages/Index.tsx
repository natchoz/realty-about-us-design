
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ValuesSection from '@/components/ValuesSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <TeamSection />
      <ValuesSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;

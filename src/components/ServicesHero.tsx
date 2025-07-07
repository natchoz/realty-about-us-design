
import { ArrowDown } from 'lucide-react';
import realEstateKeys from '@/assets/real-estate-keys.jpg';
import realEstatePlanning from '@/assets/real-estate-planning.jpg';

const ServicesHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-amber-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="flex gap-4">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src={realEstateKeys} 
                  alt="Real Estate Keys" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent"></div>
              </div>
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src={realEstatePlanning} 
                  alt="Real Estate Planning" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            บริการ<span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">ครบวงจร</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            K Plus Agency ให้บริการด้านอสังหาริมทรัพย์แบบครบวงจร 
            ตั้งแต่การขาย-เช่า ไปจนถึงการออกแบบและก่อสร้าง 
            ด้วยทีมผู้เชี่ยวชาญที่มีประสบการณ์มากมาย
          </p>
          <div className="flex justify-center">
            <ArrowDown className="h-6 w-6 text-teal-600 animate-bounce" />
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default ServicesHero;

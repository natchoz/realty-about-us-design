
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-amber-50 py-20 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-blue-500/5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-teal-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Rating Section */}
            <div className="flex items-center gap-2 text-amber-600">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-lg font-medium text-gray-700">
                4.9/5 จากลูกค้ากว่า 2,000 ราย
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                มากกว่า <span className="text-amber-600">15 ปี</span>
              </h1>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                ของความเชี่ยวชาญ
              </h2>
              <h3 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                อสังหาริมทรัพย์
              </h3>
            </div>

            {/* Description */}
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>บริษัท เค พลัส เอเจนซี่ แอนด์ ดีเวลลอปเม้นท์</strong> คือบริษัทตัวแทนนายหน้าอสังหาริมทรัพย์ที่เชี่ยวชาญด้านการ ซื้อ ขาย เช่า และลงทุนอสังหาริมทรัพย์
              </p>
              <p>
                ด้วยประสบการณ์และความเข้าใจลึกซึ้งในตลาด เรามุ่งมั่นในการให้บริการอย่างมืออาชีพ โปร่งใส และตรงไปตรงมา
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link to="/services">
                <Button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group">
                  ดูโครงการของเรา
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-2 border-teal-600 text-teal-700 hover:bg-teal-50 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                นัดหมายปรึกษาโครงการ
              </Button>
            </div>
          </div>

          {/* Right side - Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern real estate office"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">15+</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">15+ ปี</p>
                    <p className="text-gray-600">ประสบการณ์</p>
                  </div>
                </div>
              </div>

              {/* Floating Success Card */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2K+</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">2,000+</p>
                    <p className="text-gray-600">ลูกค้าพอใจ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

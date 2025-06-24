
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gold-50 to-gold-100 py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-white/50"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-gold-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">4.9/5 จากลูกค้ากว่า 2,000 ราย</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              มากกว่า <span className="text-gradient">15 ปี</span><br />
              ของความเชี่ยวชาญ<br />
              <span className="text-gold-600">อสังหาริมทรัพย์</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Prime Estate คือผู้นำด้านอสังหาริมทรัพย์ที่มุ่งมั่นสร้างสรรค์โครงการคุณภาพ 
              พร้อมบริการที่เหนือความคาดหมาย เพื่อตอบสนองทุกความต้องการของคุณ
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold-600 hover:bg-gold-700 text-white group">
                ดูโครงการของเรา
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-gold-600 text-gold-600 hover:bg-gold-50">
                นัดหมายชมโครงการ
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="aspect-square relative">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern building"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-gold-600 mb-2">2,000+</div>
                <div className="text-gray-600 font-medium">ลูกค้าที่พึงพอใจ</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-gold-600 mb-2">15+</div>
                <div className="text-gray-600 font-medium">ปีประสบการณ์</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { Card, CardContent } from '@/components/ui/card';
import { Search, Users, ShieldCheck } from 'lucide-react';

const WhyBuyWithUs = () => {
  const features = [
    {
      icon: Search,
      title: 'ผู้เชี่ยวชาญด้านอสังหาริมทรัพย์',
      description: 'เค พลัส เอเจนซี่ เป็นผู้เชี่ยวชาญในการค้นหาอสังหาริมทรัพย์ที่ดีที่สุดในประเทศไทย',
    },
    {
      icon: Users,
      title: 'ผู้เชี่ยวชาญด้านบริการครบวงจร',
      description: 'เราพร้อมช่วยเหลือคุณในทุกขั้นตอน ตั้งแต่การซื้อ ขาย เช่า ออกแบบ ตกแต่ง และหาเฟอร์นิเจอร์ที่เหมาะสมให้คุณ',
    },
    {
      icon: ShieldCheck,
      title: 'โปร่งใสและน่าเชื่อถือ',
      description: 'เรามุ่งมั่นในความโปร่งใส ความซื่อสัตย์ และความเป็นเลิศในทุกขั้นตอนของธุรกิจ เพื่อให้คุณได้รับความสะดวกสบายและความพึงพอใจสูงสุด',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-teal-50 via-blue-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ทำไมต้อง <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">ซื้อกับเรา?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ค้นหาอสังหาริมทรัพย์ที่เหมาะสมกับคุณในราคาที่ดีที่สุด
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-teal-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-blue-600 transition-all duration-500 group-hover:scale-110">
                  <feature.icon className="h-10 w-10 text-teal-600 group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 group-hover:text-teal-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg flex-grow">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional decorative elements */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              พร้อมให้บริการคุณแล้ววันนี้
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              ด้วยประสบการณ์และความเชี่ยวชาญ เราพร้อมช่วยให้คุณค้นพบอสังหาริมทรัพย์ในฝันของคุณ
            </p>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default WhyBuyWithUs;

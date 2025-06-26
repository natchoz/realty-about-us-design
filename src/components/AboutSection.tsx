
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Heart, Target, Users, Building2 } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'ความน่าเชื่อถือ',
      description: 'บริการอย่างมืออาชีพ โปร่งใส และตรงไปตรงมา ด้วยประสบการณ์ที่เชี่ยวชาญ',
    },
    {
      icon: Target,
      title: 'ความเชี่ยวชาญ',
      description: 'เชี่ยวชาญด้านการซื้อ ขาย เช่า และลงทุนอสังหาริมทรัพย์ทุกประเภท',
    },
    {
      icon: Users,
      title: 'บริการครบวงจร',
      description: 'ให้บริการธุรกิจที่ครบจบทุกธุรกิจที่เกี่ยวเนื่องกับอสังหาริมทรัพย์',
    },
    {
      icon: Building2,
      title: 'เครือข่ายกว้าง',
      description: 'เป็นศูนย์กลางส่งอสังหาริมทรัพย์ให้กับผู้แทนขายทั่วประเทศ',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            เกี่ยวกับ <span className="text-gold-600">เค พลัส เอเจนซี่</span>
          </h2>
          <div className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              <strong>บริษัท เค พลัส เอเจนซี่ แอนด์ ดีเวลลอปเม้นท์</strong> 
              คือบริษัทตัวแทนนายหน้าอสังหาริมทรัพย์ที่เชี่ยวชาญด้านการ ซื้อ ขาย เช่า และลงทุนอสังหาริมทรัพย์
            </p>
            <p>
              ด้วยประสบการณ์และความเข้าใจลึกซึ้งในตลาด เรามุ่งมั่นในการให้บริการอย่างมืออาชีพ โปร่งใส และตรงไปตรงมา
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Professional real estate office"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
          
          <div className="animate-slide-up">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Target className="h-8 w-8 text-gold-600" />
                วิสัยทัศน์ (Vision)
              </h3>
              <div className="bg-gold-50 p-6 rounded-xl border-l-4 border-gold-600">
                <p className="text-lg text-gray-700 leading-relaxed">
                  มุ่งมั่นสู่การเป็น<strong>ผู้นำในกลุ่มธุรกิจตัวแทนนายหน้าอสังหาริมทรัพย์ชั้นนำของประเทศ</strong> 
                  การขาย นายหน้า ตัวแทนอสังหาริมทรัพย์ ซึ่งเป็นตัวแทนยุคใหม่ในรูปแบบที่ครบวงจร
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-gold-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">ให้บริการธุรกิจที่ครบจบทุกธุรกิจที่เกี่ยวเนื่องกับที่อยู่อาศัยหรืออสังหาริมทรัพย์อื่นๆ</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-gold-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">ครอบคลุมการบริการทั้งผู้ประกอบการผู้พัฒนาและลูกค้าทั้งรายย่อย</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-gold-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">เป็นนายหน้าศูนย์กลางส่งอสังหาริมทรัพย์ให้กับผู้แทนขายหรือบริษัทขนาดใหญ่ไปจนถึงรายย่อยทั่วประเทศ</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-gold-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">มีสินค้า ธุรกิจที่เกี่ยวเนื่องครอบคลุมครบวงจร</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-gold-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-600 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-gold-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Credentials Section */}
        <div className="mt-20 bg-gradient-to-r from-gold-50 to-gold-100 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              ความเป็นมืออาชีพที่คุณไว้วางใจได้
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              เรามุ่งมั่นในการสร้างความเชื่อมั่นและความไว้วางใจจากลูกค้าทุกท่าน 
              ด้วยบริการที่มีคุณภาพ ความซื่อสัตย์ และการดำเนินธุรกิจที่โปร่งใส 
              เพื่อให้คุณได้รับประสบการณ์ที่ดีที่สุดในการซื้อขายอสังหาริมทรัพย์
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

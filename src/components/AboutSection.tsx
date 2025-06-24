
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Heart, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'ความน่าเชื่อถือ',
      description: 'ใบอนุญาต และการรับรองที่ครบถ้วนจากหน่วยงานราชการ',
    },
    {
      icon: Award,
      title: 'คุณภาพเป็นเลิศ',
      description: 'ได้รับรางวัลต่างๆ มากมายด้านการพัฒนาอสังหาริมทรัพย์',
    },
    {
      icon: Heart,
      title: 'ใส่ใจลูกค้า',
      description: 'บริการหลังการขายที่ดีเยี่ยม พร้อมดูแลตลอดการใช้งาน',
    },
    {
      icon: Lightbulb,
      title: 'นวัตกรรม',
      description: 'ใช้เทคโนโลยีล่าสุดในการออกแบบและก่อสร้าง',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            เกี่ยวกับ <span className="text-gold-600">Prime Estate</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            เราเป็นบริษัทอสังหาริมทรัพย์ที่ก่อตั้งขึ้นในปี 2008 
            ด้วยวิสัยทัศน์ในการสร้างสรรค์ที่อยู่อาศัยและพื้นที่เชิงพาณิชย์ที่มีคุณภาพ 
            เพื่อยกระดับคุณภาพชีวิตของผู้คนในสังคม
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Modern living room"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
          
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              พันธกิจของเรา
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              มุ่งมั่นในการพัฒนาโครงการที่ตอบสนองไลฟ์สไตล์ของคนยุคใหม่ 
              ด้วยการออกแบบที่ใส่ใจในรายละเอียด การใช้วัสดุคุณภาพดี 
              และการบริการที่เป็นเลิศ
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold-600 rounded-full mt-3"></div>
                <p className="text-gray-700">การออกแบบเพื่อการอยู่อาศัยที่ยั่งยืน</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold-600 rounded-full mt-3"></div>
                <p className="text-gray-700">การใช้เทคโนโลยีเพื่อประสิทธิภาพสูงสุด</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold-600 rounded-full mt-3"></div>
                <p className="text-gray-700">การสร้างชุมชนที่เข้มแข็งและน่าอยู่</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
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
      </div>
    </section>
  );
};

export default AboutSection;

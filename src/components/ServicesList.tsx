
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  TrendingUp, 
  PiggyBank, 
  Sofa, 
  Palette, 
  HardHat,
  ArrowRight
} from 'lucide-react';

const ServicesList = () => {
  const services = [
    {
      id: 1,
      icon: Home,
      title: "ตัวแทนขายและเช่าอสังหาริมทรัพย์",
      description: "เราดูแลตั้งแต่การรับฝากขาย–เช่า จัดประเมินราคา จัดทำและโปรโมทประกาศ วางแผนการตลาด รวมถึงนัดหมายลูกค้าเยี่ยมชมสถานที่ และประสานงานปิดการขายหรือสัญญาเช่า ด้วยความเป็นมืออาชีพสูง",
      features: ["ประเมินราคาฟรี", "โปรโมทประกาศ", "นัดหมายลูกค้า", "ประสานงานปิดดีล"],
      color: "from-teal-500 to-teal-600"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "ที่ปรึกษางานการตลาดอสังหาริมทรัพย์",
      description: "ช่วยวางกลยุทธ์การตลาด ทั้งวิจัยตลาด วิเคราะห์กลุ่มเป้าหมาย และแนวโน้มในพื้นที่ ต่อยอดด้วยแผนประชาสัมพันธ์ออนไลน์-ออฟไลน์ จัดทำภาพถ่ายและวิดีโอโปรโมต และให้คำแนะนำเชิงกลยุทธ์เพื่อเพิ่มโอกาสขาย/เช่าได้รวดเร็วขึ้น",
      features: ["วิจัยตลาด", "วิเคราะห์กลุ่มเป้าหมาย", "ถ่ายภาพ-วิดีโอ", "กลยุทธ์การตลาด"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 3,
      icon: PiggyBank,
      title: "ให้คำปรึกษาด้านการลงทุนอสังหาริมทรัพย์",
      description: "ให้ข้อมูลเชิงลึกในการลงทุน วิเคราะห์ศักยภาพตลาด คำนวณผลตอบแทน ประเมินความเสี่ยง พร้อมคำแนะนำเรื่องแผนการเงิน การจัดโครงสร้างการลงทุน และกลยุทธ์ซื้อ–ขาย–ถือครองอย่างยั่งยืน เช่นเดียวกับที่ปรึกษาการลงทุนมืออาชีพเพื่อผลตอบแทนที่มั่นคง",
      features: ["วิเคราะห์ศักยภาพตลาด", "คำนวณผลตอบแทน", "ประเมินความเสี่ยง", "กลยุทธ์ลงทุนยั่งยืน"],
      color: "from-amber-500 to-amber-600"
    },
    {
      id: 4,
      icon: Sofa,
      title: "จำหน่ายเฟอร์นิเจอร์และของตกแต่ง",
      description: "เราคัดสรรเฟอร์นิเจอร์ และของตกแต่งคุณภาพสูง ทั้งดีไซน์สวยงามและใช้งานจริง พร้อมบริการออกแบบจัดวางภายในร้านหรือหน้างาน ให้ลูกค้าเลือกสินค้าที่เหมาะกับพื้นที่และสไตล์ได้ครบจบในที่เดียว",
      features: ["เฟอร์นิเจอร์คุณภาพสูง", "ดีไซน์สวยงาม", "บริการจัดวาง", "ครบจบในที่เดียว"],
      color: "from-teal-600 to-blue-500"
    },
    {
      id: 5,
      icon: Palette,
      title: "ออกแบบและตกแต่งภายใน",
      description: "บริการออกแบบครบวงจร ตั้งแต่แนวคิด (\"conceptual design\") การจัดผังพื้นที่ การเลือกวัสดุและโทนสี การทำรูปแบบ 2D/3D รวมถึงควบคุมงานติดตั้งจริง จัดการโครงการจนเสร็จสมบูรณ์ตามแนวทางของลูกค้าอย่างกลมกลืนและใช้งานได้จริง",
      features: ["Conceptual Design", "ออกแบบ 2D/3D", "เลือกวัสดุและโทนสี", "ควบคุมงานติดตั้ง"],
      color: "from-blue-600 to-amber-500"
    },
    {
      id: 6,
      icon: HardHat,
      title: "รับเหมาก่อสร้าง/ตกแต่งต่อเติม",
      description: "ทีมวิศวกรและช่างผสานงานตั้งแต่เตรียมไซต์ งานโครงสร้าง งานระบบ จนถึงงานเก็บละเอียดหลังงานหลักเสร็จ เราบริหารจัดการวัสดุ จัดหาช่างเฉพาะทาง และควบคุมงบประมาณ–เวลา เพื่อให้งานเสร็จตรงตามข้อกำหนดและคุณภาพสูงสุด",
      features: ["ทีมวิศวกรมืออาชีพ", "ช่างเฉพาะทาง", "ควบคุมงบประมาณ", "คุณภาพสูงสุด"],
      color: "from-amber-600 to-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            บริการของเรา
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            บริการครบวงจรด้านอสังหาริมทรัพย์ที่ตอบโจทย์ทุกความต้องการของคุณ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">จุดเด่น:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all duration-300"
                >
                  เรียนรู้เพิ่มเติม
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;

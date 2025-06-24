
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Zap, Globe } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      icon: Target,
      title: 'ความเป็นเลิศ',
      description: 'มุ่งมั่นสร้างสรรค์ผลงานที่มีคุณภาพสูงสุด ด้วยความใส่ใจในทุกรายละเอียด',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'ลูกค้าเป็นศูนย์กลาง',
      description: 'ใส่ใจและเข้าใจความต้องการของลูกค้า เพื่อมอบประสบการณ์ที่ดีที่สุด',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Zap,
      title: 'นวัตกรรม',
      description: 'นำเทคโนโลยีและแนวคิดใหม่ๆ มาพัฒนาโครงการให้ทันสมัยและยั่งยืน',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Globe,
      title: 'ความรับผิดชอบต่อสังคม',
      description: 'ส่งเสริมการพัฒนาที่ยั่งยืนและเป็นมิตรต่อสิ่งแวดล้อม',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ค่านิยม<span className="text-gold-600">หลัก</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ค่านิยมที่เป็นหัวใจสำคัญในการดำเนินธุรกิจของเรา 
            และเป็นแนวทางในการสร้างสรรค์โครงการทุกแห่ง
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gold-600 transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

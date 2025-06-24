
import { Building2, Users, MapPin, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Building2,
      number: '50+',
      label: 'โครงการที่เสร็จสมบูรณ์',
      description: 'ทั้งที่อยู่อาศัยและเชิงพาณิชย์',
    },
    {
      icon: Users,
      number: '2,000+',
      label: 'ลูกค้าที่พอใจ',
      description: 'และยังคงเลือกใช้บริการเรา',
    },
    {
      icon: MapPin,
      number: '15',
      label: 'จังหวัดที่เราดำเนินการ',
      description: 'ครอบคลุมพื้นที่ทั่วประเทศ',
    },
    {
      icon: Award,
      number: '25+',
      label: 'รางวัลที่ได้รับ',
      description: 'จากองค์กรชั้นนำต่างๆ',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gold-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ความสำเร็จ<span className="text-gold-600">ในตัวเลข</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ความภาคภูมิใจในผลงานที่ผ่านมา และพร้อมสร้างสรรค์โครงการใหม่ๆ 
            เพื่อตอบสนองความต้องการของลูกค้า
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <stat.icon className="h-10 w-10 text-gold-600" />
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                {stat.number}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h4>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-3xl p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                เริ่มต้นสร้างบ้านในฝันของคุณ
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                พร้อมให้คำปรึกษาฟรี และนำเสนอโซลูชั่นที่เหมาะสมกับไลฟ์สไตล์และงบประมาณของคุณ
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200">
                  ปรึกษาฟรี
                </button>
                <button className="border-2 border-gold-600 text-gold-600 hover:bg-gold-50 px-8 py-4 rounded-xl font-semibold transition-colors duration-200">
                  ดาวน์โหลดแคตตาล็อก
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Modern house exterior"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-sm font-medium">ส่วนลดพิเศษ</div>
                <div className="text-2xl font-bold">5%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

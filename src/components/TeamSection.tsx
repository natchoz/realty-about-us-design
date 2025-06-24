
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'คุณวิทยา สมบูรณ์',
      position: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'ผู้บริหารระดับสูงที่มีประสบการณ์กว่า 20 ปีในธุรกิจอสังหาริมทรัพย์',
    },
    {
      name: 'คุณสุภา ธนากุล',
      position: 'Chief Marketing Officer',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'ผู้เชี่ยวชาญด้านการตลาดและยุทธศาสตร์การขาย',
    },
    {
      name: 'คุณประยุทธ วิศวกุล',
      position: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'วิศวกรมืออาชีพที่ดูแลด้านเทคนิคและนวัตกรรม',
    },
    {
      name: 'คุณอรุณี ศิลปกุล',
      position: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'สถาปนิกและนักออกแบบที่มีวิสัยทัศน์ทันสมัย',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ทีมงาน<span className="text-gold-600">มืออาชีพ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ทีมผู้เชี่ยวชาญที่มีประสบการณ์และความเชี่ยวชาญในแต่ละสาขา 
            พร้อมที่จะมอบบริการที่ดีที่สุดให้กับคุณ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-gold-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.description}</p>
                  <div className="flex gap-3">
                    <button className="p-2 bg-gold-100 hover:bg-gold-600 rounded-lg transition-colors duration-200 group/btn">
                      <Linkedin className="h-4 w-4 text-gold-600 group-hover/btn:text-white" />
                    </button>
                    <button className="p-2 bg-gold-100 hover:bg-gold-600 rounded-lg transition-colors duration-200 group/btn">
                      <Mail className="h-4 w-4 text-gold-600 group-hover/btn:text-white" />
                    </button>
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

export default TeamSection;

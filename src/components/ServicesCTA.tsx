
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Mail, Clock } from 'lucide-react';

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            พร้อมให้คำปรึกษาเพื่อคุณ
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            ทีมผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาฟรี 
            เพื่อหาโซลูชันที่เหมาะสมกับความต้องการของคุณ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">โทรศัพท์</h3>
              <p className="opacity-90">02-xxx-xxxx</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Line</h3>
              <p className="opacity-90">@kplusagency</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">อีเมล</h3>
              <p className="opacity-90">info@kplusagency.co.th</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-teal-600 hover:bg-gray-100 font-semibold px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              ปรึกษาฟรี
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-teal-600 font-semibold px-8"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              แชท Line
            </Button>
          </div>

          <div className="flex items-center justify-center text-white/80">
            <Clock className="h-5 w-5 mr-2" />
            <span>เปิดให้บริการ จันทร์-ศุกร์ 9:00-18:00 น.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;

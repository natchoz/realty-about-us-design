
import { Building, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                <Building className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold">Prime Estate</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              ผู้นำด้านอสังหาริมทรัพย์ที่มุ่งมั่นสร้างสรรค์โครงการคุณภาพ 
              เพื่อตอบสนองทุกความต้องการของคุณ
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">บริการของเรา</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-gold-400 transition-colors">บ้านเดี่ยว</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">ทาวน์เฮ้าส์</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">คอนโดมิเนียม</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">อาคารพาณิชย์</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">ที่ดิน</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">ข้อมูลบริษัท</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-gold-400 transition-colors">เกี่ยวกับเรา</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">ข่าวสาร</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">ร่วมงานกับเรา</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">นักลงทุนสัมพันธ์</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">CSR</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">ติดต่อเรา</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold-500" />
                <span>02-123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold-500" />
                <span>info@primeestate.co.th</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold-500 mt-1" />
                <span>123 ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพฯ 10500</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2024 Prime Estate Co., Ltd. สงวนลิขสิทธิ์ทุกประการ
            </p>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-gold-400 transition-colors">นโยบายความเป็นส่วนตัว</a>
              <a href="#" className="hover:text-gold-400 transition-colors">เงื่อนไขการใช้งาน</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

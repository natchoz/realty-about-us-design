
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, Building, Users, Phone, FileText } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'หน้าแรก', href: '#', icon: Home },
    { name: 'ประเภทอสังหาฯ', href: '#', icon: Building },
    { name: 'เกี่ยวกับเรา', href: '#', icon: Users },
    { name: 'บทความ', href: '#', icon: FileText },
    { name: 'ติดต่อเรา', href: '#', icon: Phone },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                <Building className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">Prime Estate</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gold-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </a>
            ))}
            <Button className="bg-gold-600 hover:bg-gold-700 text-white">
              ปรึกษาฟรี
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gold-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gold-600 block px-3 py-2 text-base font-medium flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-gold-600 hover:bg-gold-700 text-white">
                  ปรึกษาฟรี
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

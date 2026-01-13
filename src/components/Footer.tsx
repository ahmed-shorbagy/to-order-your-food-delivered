import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'X', icon: Twitter, href: '#' },
];

const footerLinks = [
  { name: 'الرئيسية', href: '/' },
  { name: 'المميزات', href: '/#features' },
  { name: 'المقالات', href: '/#articles' },
  { name: 'تحميل', href: '/#download' },
];

const legalLinks = [
  { name: 'شروط الخدمة', href: '/terms' },
  { name: 'سياسة الخصوصية', href: '/privacy' },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto container-padding py-16">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="تو اوردر" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-white/70 max-w-md mb-6 leading-relaxed">
              المنصة الشاملة لعشاق الطعام وأصحاب المطاعم وشركاء التوصيل.
              اختبر مستقبل توصيل الطعام اليوم.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">قانوني</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2024 تو اوردر. جميع الحقوق محفوظة.
          </p>
          <p className="text-white/50 text-sm">
            صُنع بـ 💚 لعشاق الطعام في كل مكان
          </p>
        </div>
      </div>
    </footer>
  );
}

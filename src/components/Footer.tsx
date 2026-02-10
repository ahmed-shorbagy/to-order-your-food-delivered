import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/1D3rsenPDy/?mibextid=wwXIfr' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/toorder_egy?igsh=MXJuNXIzZTFzYjBjZA%3D%3D&utm_source=qr' },
];

const footerLinks = [
  { name: 'الرئيسية', href: '/' },
  { name: 'من نحن', href: '/about' },
  { name: 'المميزات', href: '/#features' },
  { name: 'المقالات', href: '/#articles' },
  { name: 'تحميل', href: '/#download' },
];

const legalLinks = [
  { name: 'سياسة الخصوصية', href: '/privacy' },
  { name: 'سياسة التوصيل والشحن', href: '/delivery-policy' },
  { name: 'سياسة الاسترداد والإلغاء', href: '/refund-policy' },
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

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-primary" />
                <span>مدينة الشروق، القاهرة، مصر</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:toorderegy@gmail.com" className="hover:text-primary transition-colors">
                  toorderegy@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+201021087933" className="hover:text-primary transition-colors" dir="ltr">
                  +201021087933
                </a>
              </div>
            </div>

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
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-white/50 text-sm">
              © 2024 تو اوردر. جميع الحقوق محفوظة.
            </p>
            <p className="text-white/50 text-sm">
              صُنع بـ 💚 لعشاق الطعام في كل مكان
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-1 select-none">
            <span className="text-white/30 text-[10px] uppercase tracking-[0.2em]">Developed by</span>
            <a
              href="https://devosoftware.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center lg:items-end group cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="text-2xl font-bold tracking-tighter leading-none text-white group-hover:text-primary transition-colors">
                DEVO
              </span>
              <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/60 leading-none mt-1">
                Software Services
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

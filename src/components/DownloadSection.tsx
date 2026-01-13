import { motion } from 'framer-motion';
import { Apple, Play, Smartphone, Store, Bike } from 'lucide-react';
import appScreenshot2 from '@/assets/app-screenshot-2.jpg';

const apps = [
  {
    id: 'customer',
    name: 'تو اوردر',
    subtitle: 'للعملاء',
    description: 'اطلب وجباتك المفضلة من أي مكان',
    icon: Smartphone,
    color: 'from-primary to-secondary',
  },
  {
    id: 'restaurant',
    name: 'تو اوردر أدمن',
    subtitle: 'للمطاعم',
    description: 'إدارة عمليات مطعمك بسهولة',
    icon: Store,
    color: 'from-secondary to-primary',
  },
  {
    id: 'driver',
    name: 'تو اوردر بارتنر',
    subtitle: 'للسائقين',
    description: 'ابدأ الكسب على جدولك الخاص',
    icon: Bike,
    color: 'from-primary to-secondary',
  },
];

export function DownloadSection() {
  return (
    <section id="download" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-muted/50 to-transparent" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            حمّل <span className="gradient-text">التطبيق</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            ابدأ في ثواني. متوفر على iOS و Android للعملاء والمطاعم وشركاء التوصيل.
          </p>
        </motion.div>

        {/* App Preview Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <img
            src={appScreenshot2}
            alt="تطبيقات تو اوردر - حمّل الآن"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl"
          />
        </motion.div>

        {/* App Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {apps.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card p-8 hover-lift text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center mb-6 shadow-green group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-1">
                    {app.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">{app.subtitle}</p>
                  <p className="text-muted-foreground mb-6">{app.description}</p>

                  {/* Store Buttons */}
                  <div className="flex gap-3 justify-center">
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 bg-foreground text-background py-3 px-4 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      <Apple className="w-5 h-5" />
                      <span className="hidden sm:inline">App Store</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 bg-foreground text-background py-3 px-4 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      <Play className="w-5 h-5 fill-current" />
                      <span className="hidden sm:inline">Play Store</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl gradient-primary p-8 md:p-12 text-center shadow-green-lg"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-4">
              جاهز تبدأ؟
            </h3>
            <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
              انضم لآلاف العملاء السعداء وشركاء المطاعم والسائقين اليوم.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-white text-foreground py-4 px-8 rounded-xl font-bold text-lg hover:bg-white/90 transition-colors shadow-lg"
              >
                <Apple className="w-6 h-6" />
                تحميل لـ iOS
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-white/20 text-white border-2 border-white/30 py-4 px-8 rounded-xl font-bold text-lg hover:bg-white/30 transition-colors"
              >
                <Play className="w-6 h-6 fill-current" />
                تحميل لـ Android
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

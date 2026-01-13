import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Star } from 'lucide-react';
import appScreenshot from '@/assets/app-screenshot-1.jpeg';

export function HeroSection() {
  const scrollToDownload = () => {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Right Content (Text - RTL) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-right order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-foreground">
                التطبيق رقم #1 لتوصيل الطعام
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-tight mb-6">
              الاختيار{' '}
              <span className="gradient-text">الصح</span>
              <br />
              يبدأ من{' '}
              <span className="gradient-text">هنا</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 lg:mr-0 mb-8">
              المنصة الشاملة لعشاق الطعام وأصحاب المطاعم وشركاء التوصيل.
              اطلب وجباتك المفضلة وتوصل في دقائق.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToDownload}
                size="lg"
                className="gradient-primary text-white font-semibold px-8 py-6 text-lg shadow-green-lg hover:shadow-green transition-all duration-300 hover:-translate-y-1"
              >
                <ChevronLeft className="ml-2 w-5 h-5" />
                حمّل التطبيق
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById('features')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="border-2 border-primary/30 text-foreground font-semibold px-8 py-6 text-lg hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
              >
                اعرف أكثر
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12"
            >
              {[
                { value: '+50 ألف', label: 'مستخدم نشط' },
                { value: '+1000', label: 'مطعم' },
                { value: '4.9', label: 'تقييم التطبيق' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-2xl sm:text-3xl gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Left Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-start order-1 lg:order-2"
          >
            <div className="relative">
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-8 -right-8 glass-card p-4 shadow-soft-lg z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-white text-lg">🍕</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">تم الطلب!</p>
                    <p className="text-xs text-muted-foreground">يوصل خلال 15 دقيقة</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-8 glass-card p-4 shadow-soft-lg z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 space-x-reverse">
                    {['🍔', '🌮', '🍜'].map((emoji, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-accent flex items-center justify-center border-2 border-white"
                      >
                        <span className="text-sm">{emoji}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-foreground">+500 طبق</p>
                </div>
              </motion.div>

              {/* Phone mockup with actual app screenshot */}
              <div className="relative w-[280px] sm:w-[320px] lg:w-[380px]">
                <div className="absolute inset-0 gradient-primary rounded-[3rem] blur-2xl opacity-30" />
                <img
                  src={appScreenshot}
                  alt="تطبيق تو اوردر - واجهة طلب الطعام"
                  className="relative w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}

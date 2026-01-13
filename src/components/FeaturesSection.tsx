import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Percent, 
  Smartphone, 
  BarChart3, 
  Menu, 
  Building2, 
  Clock, 
  Bell, 
  Wallet,
  Users,
  Store,
  Bike
} from 'lucide-react';

const tabs = [
  {
    id: 'customers',
    label: 'للعملاء',
    icon: Users,
    color: 'from-primary to-secondary',
    features: [
      {
        icon: MapPin,
        title: 'تتبع مباشر',
        description: 'تابع طلبك لحظة بلحظة من المطعم لباب بيتك بدقة عالية.',
      },
      {
        icon: Percent,
        title: 'خصومات ضخمة',
        description: 'استمتع بعروض حصرية وكاش باك ومكافآت ولاء على كل طلب.',
      },
      {
        icon: Smartphone,
        title: 'تجربة سلسة',
        description: 'واجهة سهلة الاستخدام للتصفح السريع والطلب والدفع الآمن.',
      },
    ],
  },
  {
    id: 'restaurants',
    label: 'للمطاعم',
    icon: Store,
    color: 'from-secondary to-primary',
    features: [
      {
        icon: Menu,
        title: 'إدارة القائمة',
        description: 'حدّث قائمتك وأسعارك وتوفر المنتجات في الوقت الفعلي بسهولة.',
      },
      {
        icon: BarChart3,
        title: 'خزينة موحدة',
        description: 'تتبع جميع إيراداتك ومدفوعاتك وتحليلاتك في لوحة تحكم واحدة.',
      },
      {
        icon: Building2,
        title: 'نمّي عملك',
        description: 'وصل لآلاف العملاء الجدد ووسّع نطاق توصيلك.',
      },
    ],
  },
  {
    id: 'drivers',
    label: 'للسائقين',
    icon: Bike,
    color: 'from-primary to-secondary',
    features: [
      {
        icon: Clock,
        title: 'ساعات مرنة',
        description: 'اشتغل على جدولك الخاص. كن رئيس نفسك واكسب وقت ما تحب.',
      },
      {
        icon: Bell,
        title: 'إشعارات فورية',
        description: 'احصل على تنبيهات طلبات مباشرة مع مسارات محسّنة لتوصيل أسرع.',
      },
      {
        icon: Wallet,
        title: 'أرباح موثوقة',
        description: 'هيكل دفع شفاف مع تحويلات أسبوعية وحوافز إضافية.',
      },
    ],
  },
];

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState('customers');

  const activeTabData = tabs.find((tab) => tab.id === activeTab)!;

  return (
    <section id="features" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto container-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            مصمم <span className="gradient-text">للجميع</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            سواء كنت جوعان، تدير مطعم، أو توصّل الفرحة – عندنا الحل المثالي لك.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'gradient-primary text-white shadow-green'
                    : 'bg-muted text-muted-foreground hover:bg-accent'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </motion.button>
            );
          })}
        </div>

        {/* Features Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {activeTabData.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group glass-card p-8 hover-lift"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeTabData.color} flex items-center justify-center mb-6 shadow-green group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

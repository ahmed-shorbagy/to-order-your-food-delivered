import { motion } from 'framer-motion';
import { Apple, Play, Smartphone, Store, Bike } from 'lucide-react';

const apps = [
  {
    id: 'customer',
    name: 'To Order',
    subtitle: 'For Customers',
    description: 'Order your favorite meals from anywhere',
    icon: Smartphone,
    color: 'from-primary to-secondary',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=500&fit=crop',
  },
  {
    id: 'restaurant',
    name: 'To Order Admin',
    subtitle: 'For Restaurants',
    description: 'Manage your restaurant operations',
    icon: Store,
    color: 'from-secondary to-primary',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=300&h=500&fit=crop',
  },
  {
    id: 'driver',
    name: 'To Order Partner',
    subtitle: 'For Drivers',
    description: 'Start earning on your schedule',
    icon: Bike,
    color: 'from-primary to-secondary',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=300&h=500&fit=crop',
  },
];

export function DownloadSection() {
  return (
    <section id="download" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-muted/50 to-transparent" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
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
            Download the <span className="gradient-text">App</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in seconds. Available on iOS and Android for customers, restaurants, and
            delivery partners.
          </p>
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
                <div className="glass-card overflow-hidden hover-lift">
                  {/* Phone Mockup */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-muted to-accent/50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
                      className="relative w-32 z-0"
                    >
                      <div className="bg-foreground rounded-2xl p-1.5 shadow-2xl">
                        <div className="bg-background rounded-xl overflow-hidden">
                          <img
                            src={app.image}
                            alt={app.name}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center shadow-green`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-foreground">
                          {app.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{app.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">{app.description}</p>

                    {/* Store Buttons */}
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="flex-1 flex items-center justify-center gap-2 bg-foreground text-background py-3 px-4 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                      >
                        <Apple className="w-5 h-5" />
                        <span className="hidden sm:inline">App Store</span>
                      </a>
                      <a
                        href="#"
                        className="flex-1 flex items-center justify-center gap-2 bg-foreground text-background py-3 px-4 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                      >
                        <Play className="w-5 h-5 fill-current" />
                        <span className="hidden sm:inline">Play Store</span>
                      </a>
                    </div>
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
              Join thousands of happy customers, restaurant partners, and delivery drivers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-white text-foreground py-4 px-8 rounded-xl font-bold text-lg hover:bg-white/90 transition-colors shadow-lg"
              >
                <Apple className="w-6 h-6" />
                Download for iOS
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-white/20 text-white border-2 border-white/30 py-4 px-8 rounded-xl font-bold text-lg hover:bg-white/30 transition-colors"
              >
                <Play className="w-6 h-6 fill-current" />
                Download for Android
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

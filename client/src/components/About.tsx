import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

/**
 * About Section Component
 * Design: Split layout with text and background image
 * - Glassmorphic text panel
 * - Staggered list animations
 * - Professional typography
 */

const aboutImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663499609887/kptPzTY85JJpPm5b5qXZZM/about-section-bg-Zy2QK5nvqYyxPhBYUdeLXz.webp';

const highlights = [
  { title: 'Kalite', description: 'Yüksek standartlarda hizmet sunumu' },
  { title: 'Güvenilirlik', description: 'Zamanında ve bütçe içinde projeler' },
  { title: 'Deneyim', description: '15+ yıllık inşaat sektörü tecrübesi' },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('${aboutImageUrl}')`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hakkımızda
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Beto Construction, İstanbul'da faaliyet gösteren, modern inşaat teknikleri ve geleneksel işçilik becerisini birleştiren bir inşaat firmasıdır. Müşteri memnuniyeti ve kaliteli hizmet sunumu bizim temel değerlerimizdir.
            </p>
            <p className="text-base text-gray-400 mb-8 leading-relaxed">
              Her projede, en yüksek standartları koruyarak, zamanında ve bütçe içinde teslim etme taahhüdü veriyoruz. Deneyimli ekibimiz, konut, ticari ve endüstriyel projeler konusunda uzmanlaşmıştır.
            </p>

            {/* Highlights */}
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 glass-card p-4"
                  variants={itemVariants}
                >
                  <CheckCircle2 className="w-6 h-6 text-white/80 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-1">{highlight.title}</h3>
                    <p className="text-sm text-gray-400">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { number: '100+', label: 'Tamamlanan Proje' },
              { number: '500+', label: 'Memnun Müşteri' },
              { number: '15+', label: 'Yıl Deneyim' },
              { number: '5.0★', label: 'Müşteri Puanı' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 text-center"
                whileHover={{ y: -8 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

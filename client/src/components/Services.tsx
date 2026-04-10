import { motion } from 'framer-motion';
import { Hammer, Home, Building2, Wrench, Leaf, Zap } from 'lucide-react';

/**
 * Services Section Component
 * Design: Grid of glassmorphic cards with metallic icons
 * - Staggered fade-in animations
 * - Hover lift + glow effects
 * - 3-column responsive grid
 */

const services = [
  {
    title: 'Beton İşleri',
    description: 'Yüksek kaliteli beton işleri ve temel uygulamaları',
    icon: Hammer,
  },
  {
    title: 'Tadilat & Renovasyon',
    description: 'Modern tasarımla yapıların yenilenmesi ve iyileştirilmesi',
    icon: Home,
  },
  {
    title: 'Temel ve Yapı İnşaatı',
    description: 'Sağlam temeller ve dayanıklı yapı inşaatı hizmetleri',
    icon: Building2,
  },
  {
    title: 'Ticari Projeler',
    description: 'Büyük ölçekli ticari ve endüstriyel projeler',
    icon: Wrench,
  },
  {
    title: 'Dış Mekan Uygulamaları',
    description: 'Bahçe, teras ve dış mekan tasarımı',
    icon: Leaf,
  },
  {
    title: 'Elektrik & Mekanik',
    description: 'Profesyonel elektrik ve mekanik sistem kurulumu',
    icon: Zap,
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="relative py-20 md:py-32 bg-gradient-to-b from-transparent via-black/20 to-transparent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Beto Construction olarak, inşaat endüstrisinin tüm alanlarında profesyonel hizmetler sunuyoruz
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="glass-card group hover:border-white/30 transition-all duration-300 p-6 cursor-pointer"
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 0 30px rgba(74, 144, 226, 0.2)',
                }}
              >
                {/* Icon */}
                <div className="mb-4 inline-block">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center group-hover:from-white/30 group-hover:to-white/10 transition-all duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Indicator */}
                <div className="mt-4 inline-block text-white/0 group-hover:text-white/100 transition-all duration-300 text-sm font-semibold">
                  Detaylar →
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

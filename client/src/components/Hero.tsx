import { motion } from 'framer-motion';
import { Phone, FileText } from 'lucide-react';

/**
 * Hero Section Component
 * Design: Fullscreen hero with background image, dark overlay, and glassmorphic content card
 * - Parallax scrolling effect
 * - Fade-in + slide-up animations
 * - CTA buttons with metallic styling
 */

const heroImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663499609887/kptPzTY85JJpPm5b5qXZZM/hero-construction-bg-bxVmoCRMrh3Rn9qHe9zdLD.webp';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${heroImageUrl}')`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 relative z-10 flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="glass-card backdrop-blur-xl bg-white/8 border border-white/15 p-8 md:p-12 max-w-2xl text-center"
          variants={itemVariants}
        >
          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            variants={itemVariants}
          >
            Güvenilir ve Modern İnşaat Çözümleri
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8"
            variants={itemVariants}
          >
            Beto Construction ile sağlam ve kaliteli yapılar
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <button className="metallic-btn flex items-center justify-center gap-2 text-base">
              <FileText size={20} />
              Teklif Al
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 border border-white/30 rounded-lg text-white hover:bg-white/5 transition-all duration-300 text-base font-semibold">
              <Phone size={20} />
              Hemen Ara
            </button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mt-8 pt-8 border-t border-white/10 text-sm text-gray-400"
            variants={itemVariants}
          >
            <p>📞 0507 998 64 12 | 📍 Kağıthane, İstanbul</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

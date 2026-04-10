import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

/**
 * Contact Section Component
 * Design: Contact form with company info and glassmorphic styling
 * - Form submission handling
 * - Contact information display
 * - Working hours
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 const handleSubmit = () => {
  const message = `Ad: ${formData.name}
Telefon: ${formData.phone}
Hizmet: ${formData.service}
Mesaj: ${formData.message}`;

  window.open(`https://wa.me/905079986412?text=${encodeURIComponent(message)}`, "_blank");
};

  const message = `Ad: ${formData.name}
Telefon: ${formData.phone}
Hizmet: ${formData.service}
Mesaj: ${formData.message}`;

  const whatsappURL = `https://wa.me/905079986412?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

  setFormData({ name: '', phone: '', service: '', message: '' });
};
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-b from-transparent via-black/20 to-transparent">
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
            İletişim
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Bize ulaşın ve profesyonel inşaat çözümleri için teklif alın
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Phone */}
            <motion.a
              href="tel:05079986412"
              className="glass-card p-6 flex items-start gap-4 hover:border-white/30 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center group-hover:from-white/30 group-hover:to-white/10 transition-all duration-300 flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Telefon</h3>
                <p className="text-gray-400">0507 998 64 12</p>
              </div>
            </motion.a>

            {/* Address */}
            <motion.div
              className="glass-card p-6 flex items-start gap-4"
              variants={itemVariants}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Adres</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  4. Levent Emniyetevleri, Yeniçeri Sk. No:42<br />
                  İstanbul Gökyapı İş Merkezi No:1<br />
                  34416 Kağıthane / İstanbul
                </p>
              </div>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              className="glass-card p-6 flex items-start gap-4"
              variants={itemVariants}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Çalışma Saatleri</h3>
                <p className="text-gray-400 text-sm">
                  Pazartesi - Cuma: 09:00 - 18:00<br />
                  Cumartesi: 09:00 - 14:00<br />
                  Pazar: Kapalı
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-white mb-2">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all duration-300"
                  placeholder="Adınız Soyadınız"
                />
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-white mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all duration-300"
                  placeholder="0507 998 64 12"
                />
              </motion.div>

              {/* Service Selection */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-white mb-2">
                  Hizmet Seçimi
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-all duration-300"
                >
                  <option value="">Hizmet Seçiniz</option>
                  <option value="concrete">Beton İşleri</option>
                  <option value="renovation">Tadilat & Renovasyon</option>
                  <option value="foundation">Temel ve Yapı İnşaatı</option>
                  <option value="commercial">Ticari Projeler</option>
                  <option value="outdoor">Dış Mekan Uygulamaları</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-white mb-2">
                  Mesaj
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all duration-300 resize-none"
                  placeholder="Mesajınızı yazınız..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="button"
        onClick={() => alert("buton çalıştı")}
                className="metallic-btn w-full"
                variants={itemVariants}
              >
                <Send size={20} />
                Gönder
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

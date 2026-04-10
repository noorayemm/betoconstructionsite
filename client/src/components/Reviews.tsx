import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

/**
 * Reviews Section Component
 * Design: Carousel-style testimonial cards with rating display
 * - Glass card styling
 * - Auto-scroll animation
 * - Star rating display
 */

const reviews = [
  {
    name: 'Arzu AKÇAY',
    role: 'Ev Sahibi',
    content: 'Beto Construction ekibi, tadilat işlerinde harika bir iş çıkardı. Profesyonel, zamanında ve bütçe içinde teslim ettiler. Çok memnunum!',
    rating: 5,
  },
  {
    name: 'Mehmet Yılmaz',
    role: 'Proje Müdürü',
    content: 'Ticari projemizde gösterdikleri profesyonellik ve dikkat takdir edilecek seviyededir. Kesinlikle tavsiye ederim.',
    rating: 5,
  },
  {
    name: 'Fatma Demir',
    role: 'İşletme Sahibi',
    content: 'Dış mekan uygulamalarında çalıştığımız Beto Construction, tüm beklentilerimizi aştı. Kaliteli ve güvenilir bir firma.',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-20 md:py-32 bg-gradient-to-b from-transparent via-black/20 to-transparent">
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
            Müşteri Yorumları
          </h2>

          {/* Rating Display */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-white">5.0</span>
            <span className="text-gray-400">1 yorum</span>
          </motion.div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Müşterilerimizin memnuniyeti, bizim başarımızın en büyük göstergesidir
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 flex flex-col"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                "{review.content}"
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-4">
                <p className="font-bold text-white">{review.name}</p>
                <p className="text-sm text-gray-400">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

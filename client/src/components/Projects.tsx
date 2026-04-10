import { motion } from 'framer-motion';

/**
 * Projects Section Component
 * Design: Masonry-style image grid with hover overlays
 * - Zoom on hover effect
 * - Smooth reveal on scroll
 * - Project name and description overlay
 */

const projects = [
  {
    title: 'Beton İşleri Projesi',
    description: 'Profesyonel beton işleri ve temel uygulaması',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663499609887/kptPzTY85JJpPm5b5qXZZM/project-1-concrete-work-BFCynPMRR2nrxoDfBjdL2j.webp',
  },
  {
    title: 'Modern Tadilat',
    description: 'Çağdaş tasarımla yapının yenilenmesi',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663499609887/kptPzTY85JJpPm5b5qXZZM/project-2-renovation-etUAnzHYmV4HniaygXb2bx.webp',
  },
  {
    title: 'Ticari Bina İnşaatı',
    description: 'Geniş ölçekli ticari proje uygulaması',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663499609887/kptPzTY85JJpPm5b5qXZZM/project-3-commercial-i3bNDoxm3iAvF7ytkgFL7B.webp',
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-gradient-to-b from-transparent via-black/10 to-transparent">
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
            Projelerimiz
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Beto Construction tarafından tamamlanan başarılı projeler
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg h-80 cursor-pointer"
              variants={itemVariants}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content Overlay */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-6 text-white"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

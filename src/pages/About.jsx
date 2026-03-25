import { motion } from 'framer-motion'
import { Award, Target, Heart, Users } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTheme } from '../context/ThemeContext'

export default function About() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const stats = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '50K+', label: 'Happy Clients' },
    { number: '200+', label: 'Premium Brands' },
    { number: '100%', label: 'Authenticity Guaranteed' }
  ]

  const values = [
    { icon: Award, title: 'Excellence', description: 'We curate only the finest timepieces from the world\'s most prestigious watchmakers.' },
    { icon: Target, title: 'Precision', description: 'Every watch in our collection meets the highest standards of quality and craftsmanship.' },
    { icon: Heart, title: 'Passion', description: 'Our team shares an unwavering passion for horology and exceptional customer service.' },
    { icon: Users, title: 'Trust', description: 'Building lasting relationships through transparency, authenticity, and dedicated support.' }
  ]

  return (
    <div className={`min-h-screen ${isDark ? 'bg-luxury-dark' : 'bg-gray-100'}`}>
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-luxury-red rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-luxury-red uppercase tracking-[0.3em] mb-4">Our Story</p>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>About TIMELESS</h1>
            <p className={`max-w-3xl mx-auto text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              Since 2010, TIMELESS has been the premier destination for luxury watch enthusiasts. 
              We believe that a watch is more than an instrument—it's a legacy, a statement, a companion for life's most significant moments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-luxury-red mb-2">{stat.number}</p>
                <p className={isDark ? 'text-white/60' : 'text-gray-600'}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={`py-16 ${isDark ? 'bg-luxury-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-luxury-red/20 rounded-full blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800"
                  alt="Watch craftsmanship"
                  className={`relative rounded-2xl p-2 ${isDark ? 'glass' : 'bg-white shadow-xl'}`}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-luxury-red uppercase tracking-[0.3em] mb-4">Our Mission</p>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Connecting You to History
              </h2>
              <p className={`mb-6 leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                At TIMELESS, we understand that purchasing a luxury watch is a significant decision. 
                That's why we've dedicated ourselves to creating an experience that matches the 
                excellence of the timepieces we offer.
              </p>
              <p className={`leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                Every watch in our collection is carefully selected by our team of horological 
                experts, ensuring authenticity, quality, and lasting value. We partner directly 
                with authorized dealers and prestigious brands to bring you the finest selection 
                of Swiss and luxury timepieces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-luxury-red uppercase tracking-[0.3em] mb-4">What Drives Us</p>
            <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-8 text-center hover:border-luxury-red/50 transition-colors ${
                  isDark ? 'glass' : 'bg-white shadow-lg'
                }`}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-luxury-red/20 flex items-center justify-center">
                  <value.icon className="text-luxury-red" size={28} />
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{value.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-luxury-black' : 'bg-gray-200'}`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-luxury-gold rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Experience TIMELESS Today
            </h2>
            <p className={`mb-8 text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              Visit our showroom or browse online to discover your perfect timepiece. 
              Our experts are here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/watches" className="btn-primary">
                Browse Collection
              </a>
              <a href="/contact" className={`px-8 py-3 border uppercase tracking-wider hover:border-luxury-red hover:text-luxury-red transition-colors ${
                isDark ? 'border-white/30 text-white' : 'border-gray-400 text-gray-900'
              }`}>
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
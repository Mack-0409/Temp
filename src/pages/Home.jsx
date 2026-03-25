import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Truck, Clock, Award, Star } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingCart from '../components/FloatingCart'
import WatchCard from '../components/WatchCard'
import { useTheme } from '../context/ThemeContext'
import { watches, brands, testimonials, features } from '../data/watches'

export default function Home() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  const featuredWatches = watches.slice(0, 4)
  const trendingWatches = watches.slice(4, 8)

  return (
    <div className={`min-h-screen ${isDark ? 'bg-luxury-dark' : 'bg-gray-100'}`}>
      <Navbar />
      <FloatingCart />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-luxury-watches-display-5652/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-dark/90 via-luxury-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-luxury-dark/30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-luxury-red uppercase tracking-[0.3em] mb-4"
            >
              Premium Collection
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Time is <span className="text-gradient">Luxury</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/70 mb-8 leading-relaxed"
            >
              Discover the world\'s most prestigious timepieces. From iconic classics to contemporary masterpieces.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/watches" className="btn-primary flex items-center gap-2">
                Explore Collection
                <ArrowRight size={20} />
              </Link>
              <Link to="/brands" className="px-8 py-3 border border-white/30 text-white uppercase tracking-wider hover:border-luxury-red hover:text-luxury-red transition-colors">
                Our Brands
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      <section className={`py-20 ${isDark ? 'bg-luxury-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-luxury-red/20 flex items-center justify-center">
                  {feature.icon === 'Shield' && <Shield className="text-luxury-red" size={28} />}
                  {feature.icon === 'Truck' && <Truck className="text-luxury-red" size={28} />}
                  {feature.icon === 'Clock' && <Clock className="text-luxury-red" size={28} />}
                  {feature.icon === 'Award' && <Award className="text-luxury-red" size={28} />}
                </div>
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                <p className={`text-sm ${isDark ? 'text-white/50' : 'text-gray-500'}`}>{feature.description}</p>
              </motion.div>
            ))}
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
            <p className="text-luxury-red uppercase tracking-[0.3em] mb-4">Curated Selection</p>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Featured Timepieces</h2>
            <p className={`max-w-2xl mx-auto ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              Hand-picked masterpieces from the world\'s most prestigious watchmakers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredWatches.map((watch, index) => (
              <WatchCard key={watch.id} watch={watch} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/watches" className="inline-flex items-center gap-2 text-luxury-red hover:gap-4 transition-all">
              View All Watches <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-luxury-black' : 'bg-gray-200'}`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-red rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-gold rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-luxury-red uppercase tracking-[0.3em] mb-4">Legacy & Excellence</p>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Luxury Brands</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {brands.slice(0, 6).map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className={`w-32 h-32 md:w-40 md:h-40 glass rounded-2xl flex items-center justify-center p-6 ${isDark ? 'bg-white/5' : 'bg-white shadow-lg'}`}>
                  <span className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white/80' : 'text-gray-700'}`}>{brand.name}</span>
                </div>
                <span className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>{brand.country}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/brands" className="btn-primary">
              Explore All Brands
            </Link>
          </motion.div>
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
            <p className="text-luxury-red uppercase tracking-[0.3em] mb-4">Most Wanted</p>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Trending Now</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingWatches.map((watch, index) => (
              <WatchCard key={watch.id} watch={watch} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className={`py-24 ${isDark ? 'bg-luxury-black' : 'bg-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-luxury-red uppercase tracking-[0.3em] mb-4">What They Say</p>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Client Testimonials</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass p-8 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-white shadow-lg'}`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                  ))}
                </div>
                <p className={`mb-6 leading-relaxed ${isDark ? 'text-white/70' : 'text-gray-600'}`}>"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</h4>
                    <p className={`text-sm ${isDark ? 'text-white/50' : 'text-gray-500'}`}>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-red/20 to-luxury-gold/20" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Subscribe to Our Newsletter
            </h2>
            <p className={`mb-8 text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              Be the first to know about new arrivals, exclusive offers, and luxury watch news
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-6 py-4 rounded-lg focus:outline-none focus:border-luxury-red transition-colors ${
                  isDark 
                    ? 'bg-white/10 border border-white/20 text-white placeholder-white/50' 
                    : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
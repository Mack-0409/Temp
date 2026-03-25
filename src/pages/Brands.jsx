import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingCart from '../components/FloatingCart'
import WatchCard from '../components/WatchCard'
import { useTheme } from '../context/ThemeContext'
import { watches, brands } from '../data/watches'

export default function Brands() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className={`min-h-screen ${isDark ? 'bg-luxury-dark' : 'bg-gray-100'}`}>
      <Navbar />
      <FloatingCart />

      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-luxury-red uppercase tracking-[0.3em] mb-4">World-Class Makers</p>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Brands</h1>
            <p className={`max-w-2xl mx-auto ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              We partner with the world's most prestigious watchmakers, bringing you an unparalleled 
              collection of luxury timepieces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-8 text-center hover:border-luxury-red/50 transition-colors group ${
                  isDark ? 'glass' : 'bg-white shadow-lg'
                }`}
              >
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:bg-luxury-red/20 transition-colors ${
                  isDark ? 'bg-white/5' : 'bg-gray-100'
                }`}>
                  <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{brand.name.charAt(0)}</span>
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{brand.name}</h3>
                <div className="space-y-2">
                  <div className={`flex items-center justify-center gap-2 text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                    <MapPin size={14} />
                    <span>{brand.country}</span>
                  </div>
                  <div className={`flex items-center justify-center gap-2 text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                    <Calendar size={14} />
                    <span>Est. {brand.founded}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {brands.map((brand) => {
            const brandWatches = watches.filter(w => w.brand === brand.name)
            if (brandWatches.length === 0) return null

            return (
              <motion.section
                key={brand.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-luxury-red/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-luxury-red">{brand.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{brand.name}</h2>
                    <p className={`text-sm ${isDark ? 'text-white/50' : 'text-gray-500'}`}>{brandWatches.length} timepieces</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {brandWatches.map((watch, index) => (
                    <WatchCard key={watch.id} watch={watch} index={index} />
                  ))}
                </div>
              </motion.section>
            )
          })}
        </div>
      </div>

      <Footer />
    </div>
  )
}
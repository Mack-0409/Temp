import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, Minus, Plus, Heart, Share2, Truck, Shield, Clock, ArrowLeft, Check } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingCart from '../components/FloatingCart'
import WatchCard from '../components/WatchCard'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import { useTheme } from '../context/ThemeContext'
import { watches } from '../data/watches'

export default function ProductDetails() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const { addToCart } = useCart()
  const { addToast } = useToast()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const watch = watches.find(w => w.id === parseInt(id))
  const relatedWatches = watches.filter(w => w.brand === watch?.brand && w.id !== watch?.id).slice(0, 4)

  if (!watch) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-luxury-dark' : 'bg-gray-100'}`}>
        <div className="text-center">
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Watch Not Found</h1>
          <Link to="/watches" className="text-luxury-red hover:underline">
            Browse Watches
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart({ ...watch, quantity })
    addToast(`${watch.name} added to cart!`, 'success')
  }

  const images = [watch.image, watch.image, watch.image]

  return (
    <div className={`min-h-screen ${isDark ? 'bg-luxury-dark' : 'bg-gray-100'}`}>
      <Navbar />
      <FloatingCart />

      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link to="/watches" className={`inline-flex items-center gap-2 hover:text-luxury-red transition-colors ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              <ArrowLeft size={20} />
              Back to Collection
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className={`relative aspect-square rounded-2xl overflow-hidden mb-4 ${isDark ? 'glass' : 'bg-white shadow-lg'}`}>
                <motion.img
                  src={images[activeImage]}
                  alt={watch.name}
                  className="w-full h-full object-cover"
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-luxury-red text-white text-sm font-medium rounded-full">
                  {watch.category}
                </div>
              </div>
              <div className="flex gap-4">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-24 h-24 rounded-lg overflow-hidden border-2 transition-colors ${
                      activeImage === i ? 'border-luxury-red' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-luxury-red uppercase tracking-[0.2em] mb-2">{watch.brand}</p>
              <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{watch.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < watch.rating ? 'text-yellow-400 fill-yellow-400' : isDark ? 'text-white/20' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className={isDark ? 'text-white/50' : 'text-gray-500'}>({watch.rating} rating)</span>
                <span className={`text-sm ${watch.stock > 5 ? 'text-green-500' : 'text-yellow-500'}`}>
                  {watch.stock > 5 ? 'In Stock' : `Only ${watch.stock} left`}
                </span>
              </div>

              <p className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ${watch.price.toLocaleString()}
              </p>

              <p className={`mb-8 leading-relaxed ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                {watch.description}
              </p>

              <div className="mb-8">
                <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Key Features</h3>
                <ul className="space-y-3">
                  {watch.features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-3 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                      <Check size={18} className="text-luxury-red" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className={`flex items-center rounded-lg ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className={`p-3 transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-200'}`}
                  >
                    <Minus size={20} className={isDark ? 'text-white' : 'text-gray-900'} />
                  </button>
                  <span className={`px-6 font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className={`p-3 transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-200'}`}
                  >
                    <Plus size={20} className={isDark ? 'text-white' : 'text-gray-900'} />
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 btn-primary"
                >
                  Add to Cart - ${(watch.price * quantity).toLocaleString()}
                </button>
                <button className={`p-4 rounded-lg transition-colors ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'}`}>
                  <Heart size={24} className={isDark ? 'text-white' : 'text-gray-900'} />
                </button>
                <button className={`p-4 rounded-lg transition-colors ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'}`}>
                  <Share2 size={24} className={isDark ? 'text-white' : 'text-gray-900'} />
                </button>
              </div>

              <div className={`grid grid-cols-3 gap-4 pt-8 ${isDark ? 'border-t border-white/10' : 'border-t border-gray-200'}`}>
                <div className="text-center">
                  <Truck className="mx-auto text-luxury-red mb-2" size={24} />
                  <p className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Free Shipping</p>
                </div>
                <div className="text-center">
                  <Shield className="mx-auto text-luxury-red mb-2" size={24} />
                  <p className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-600'}`}>2 Year Warranty</p>
                </div>
                <div className="text-center">
                  <Clock className="mx-auto text-luxury-red mb-2" size={24} />
                  <p className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-600'}`}>24/7 Support</p>
                </div>
              </div>
            </motion.div>
          </div>

          {relatedWatches.length > 0 && (
            <section className="mt-24">
              <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>More from {watch.brand}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedWatches.map((w, i) => (
                  <WatchCard key={w.id} watch={w} index={i} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
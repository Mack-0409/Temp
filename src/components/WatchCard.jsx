import { motion } from 'framer-motion'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import { useTheme } from '../context/ThemeContext'

export default function WatchCard({ watch, index = 0 }) {
  const { addToCart } = useCart()
  const { addToast } = useToast()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(watch)
    addToast(`${watch.name} added to cart!`, 'success')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={`/product/${watch.id}`} className="group block">
        <div className={`relative rounded-2xl overflow-hidden border transition-all duration-500 group-hover:border-luxury-red/50 ${
          isDark 
            ? 'bg-white/5 border-white/10' 
            : 'bg-white border-gray-200 shadow-lg'
        }`}>
          <div className="relative aspect-square overflow-hidden">
            <motion.img
              src={watch.image}
              alt={watch.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleAddToCart}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-luxury-red text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <Heart size={18} className="text-white" />
            </motion.button>

            <div className="absolute top-4 left-4 px-3 py-1 bg-luxury-red text-white text-xs font-medium rounded-full">
              {watch.category}
            </div>
          </div>

          <div className="p-5">
            <p className="text-luxury-red text-sm uppercase tracking-wider mb-1">
              {watch.brand}
            </p>
            <h3 className={`text-lg font-semibold mb-2 group-hover:text-luxury-red transition-colors ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {watch.name}
            </h3>
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < watch.rating ? 'text-yellow-400 fill-yellow-400' : isDark ? 'text-white/20' : 'text-gray-300'}
                />
              ))}
              <span className={`text-sm ml-1 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>({watch.rating})</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ${watch.price.toLocaleString()}
              </span>
              <span className={`text-sm ${watch.stock > 5 ? 'text-green-500' : 'text-yellow-500'}`}>
                {watch.stock > 5 ? 'In Stock' : `Only ${watch.stock} left`}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
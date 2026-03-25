import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'
import { Link } from 'react-router-dom'

export default function FloatingCart() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={`fixed right-0 top-0 bottom-0 w-full max-w-md z-50 ${
              isDark ? 'bg-luxury-dark glass-dark' : 'bg-white shadow-xl'
            }`}
          >
            <div className="flex flex-col h-full">
              <div className={`flex items-center justify-between p-6 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Shopping Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
                >
                  <X size={24} className={isDark ? 'text-white' : 'text-gray-900'} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <p className={isDark ? 'text-white/50' : 'text-gray-500'}>Your cart is empty</p>
                    <Link
                      to="/watches"
                      onClick={() => setIsCartOpen(false)}
                      className="inline-block mt-4 text-luxury-red hover:underline"
                    >
                      Browse Watches
                    </Link>
                  </div>
                ) : (
                  cart.map(item => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className={`flex gap-4 p-4 rounded-lg ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.name}</h3>
                        <p className={`text-sm ${isDark ? 'text-white/50' : 'text-gray-500'}`}>{item.brand}</p>
                        <p className="text-luxury-red font-semibold mt-1">
                          ${item.price.toLocaleString()}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className={`p-1 rounded ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-200 hover:bg-gray-300'}`}
                          >
                            <Minus size={14} className={isDark ? 'text-white' : 'text-gray-900'} />
                          </button>
                          <span className={isDark ? 'text-white' : 'text-gray-900'}>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className={`p-1 rounded ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-200 hover:bg-gray-300'}`}
                          >
                            <Plus size={14} className={isDark ? 'text-white' : 'text-gray-900'} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 text-luxury-red hover:bg-luxury-red/20 rounded ml-auto"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className={`p-6 ${isDark ? 'border-t border-white/10' : 'border-t border-gray-200'}`}>
                  <div className="flex justify-between mb-4">
                    <span className={isDark ? 'text-white/70' : 'text-gray-600'}>Subtotal</span>
                    <span className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      ${cartTotal.toLocaleString()}
                    </span>
                  </div>
                  <Link
                    to="/cart"
                    onClick={() => setIsCartOpen(false)}
                    className="block w-full btn-primary text-center"
                  >
                    Checkout
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
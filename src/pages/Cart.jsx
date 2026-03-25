import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const shipping = cart.length > 0 ? 0 : 0
  const total = cartTotal + shipping

  return (
    <div className={`min-h-screen ${isDark ? 'bg-luxury-dark' : 'bg-gray-100'}`}>
      <Navbar />

      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link to="/" className={`inline-flex items-center gap-2 hover:text-luxury-red transition-colors mb-4 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              <ArrowLeft size={20} />
              Continue Shopping
            </Link>
            <h1 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Shopping Cart</h1>
          </motion.div>

          {cart.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? 'bg-white/10' : 'bg-gray-200'}`}>
                <ShoppingBag size={40} className={isDark ? 'text-white/30' : 'text-gray-400'} />
              </div>
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Your cart is empty</h2>
              <p className={`mb-8 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Looks like you haven't added any watches yet.</p>
              <Link to="/watches" className="btn-primary inline-flex items-center gap-2">
                Browse Watches <ArrowRight size={20} />
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <AnimatePresence mode="popLayout">
                  {cart.map((item, index) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex gap-6 rounded-2xl p-6 mb-6 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white shadow-lg border border-gray-200'}`}
                    >
                      <Link to={`/product/${item.id}`}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-40 h-40 object-cover rounded-lg"
                        />
                      </Link>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="text-luxury-red text-sm uppercase tracking-wider">{item.brand}</p>
                            <Link to={`/product/${item.id}`} className={`text-xl font-semibold hover:text-luxury-red transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              {item.name}
                            </Link>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className={`p-2 transition-colors ${isDark ? 'text-white/50 hover:text-luxury-red' : 'text-gray-400 hover:text-luxury-red'}`}
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                        <p className={`text-sm mb-4 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>{item.category}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'}`}
                            >
                              <Minus size={16} className={isDark ? 'text-white' : 'text-gray-900'} />
                            </button>
                            <span className={`font-semibold w-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'}`}
                            >
                              <Plus size={16} className={isDark ? 'text-white' : 'text-gray-900'} />
                            </button>
                          </div>
                          <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            ${(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-1"
              >
                <div className={`rounded-2xl p-8 sticky top-32 ${isDark ? 'glass' : 'bg-white shadow-lg'}`}>
                  <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className={`flex justify-between ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                      <span>Subtotal</span>
                      <span>${cartTotal.toLocaleString()}</span>
                    </div>
                    <div className={`flex justify-between ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                      <span>Shipping</span>
                      <span className="text-green-500">{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
                    </div>
                    <div className={`border-t pt-4 flex justify-between text-xl font-bold ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                      <span className={isDark ? 'text-white' : 'text-gray-900'}>Total</span>
                      <span className={isDark ? 'text-white' : 'text-gray-900'}>${total.toLocaleString()}</span>
                    </div>
                  </div>

                  <button className="w-full btn-primary mb-4">
                    Proceed to Checkout
                  </button>

                  <p className={`text-sm text-center ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                    Free shipping on all orders over $500
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
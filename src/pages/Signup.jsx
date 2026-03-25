import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, User, Eye, EyeOff, Phone } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useToast } from '../context/ToastContext'
import { useTheme } from '../context/ThemeContext'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()
  const { addToast } = useToast()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const validate = () => {
    const newErrors = {}
    if (!name) newErrors.name = 'Name is required'
    if (!email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format'
    if (!password) newErrors.password = 'Password is required'
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password'
    else if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    
    if (Object.keys(validationErrors).length === 0) {
      addToast('Account created successfully! Welcome to TIMELESS.', 'success')
      navigate('/')
    }
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-luxury-dark' : 'bg-gray-100'}`}>
      <Navbar />

      <div className="pt-32 pb-16 min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className={`rounded-3xl p-8 md:p-12 ${isDark ? 'glass' : 'bg-white shadow-xl'}`}>
            <div className="text-center mb-8">
              <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Create Account</h1>
              <p className={isDark ? 'text-white/60' : 'text-gray-600'}>Join TIMELESS and explore luxury</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={`text-sm mb-2 block ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Full Name</label>
                <div className="relative">
                  <User className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-white/50' : 'text-gray-400'}`} size={20} />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className={`w-full rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-luxury-red transition-colors ${
                      isDark 
                        ? 'bg-white/10 border border-white/20 text-white placeholder-white/50' 
                        : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
                {errors.name && <p className="text-luxury-red text-sm mt-2">{errors.name}</p>}
              </div>

              <div>
                <label className={`text-sm mb-2 block ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Email</label>
                <div className="relative">
                  <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-white/50' : 'text-gray-400'}`} size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={`w-full rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-luxury-red transition-colors ${
                      isDark 
                        ? 'bg-white/10 border border-white/20 text-white placeholder-white/50' 
                        : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
                {errors.email && <p className="text-luxury-red text-sm mt-2">{errors.email}</p>}
              </div>

              <div>
                <label className={`text-sm mb-2 block ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Phone (Optional)</label>
                <div className="relative">
                  <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-white/50' : 'text-gray-400'}`} size={20} />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone"
                    className={`w-full rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-luxury-red transition-colors ${
                      isDark 
                        ? 'bg-white/10 border border-white/20 text-white placeholder-white/50' 
                        : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`text-sm mb-2 block ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Password</label>
                <div className="relative">
                  <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-white/50' : 'text-gray-400'}`} size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password"
                    className={`w-full rounded-xl pl-12 pr-12 py-3 focus:outline-none focus:border-luxury-red transition-colors ${
                      isDark 
                        ? 'bg-white/10 border border-white/20 text-white placeholder-white/50' 
                        : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-white/50 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && <p className="text-luxury-red text-sm mt-2">{errors.password}</p>}
              </div>

              <div>
                <label className={`text-sm mb-2 block ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Confirm Password</label>
                <div className="relative">
                  <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-white/50' : 'text-gray-400'}`} size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    className={`w-full rounded-xl pl-12 pr-12 py-3 focus:outline-none focus:border-luxury-red transition-colors ${
                      isDark 
                        ? 'bg-white/10 border border-white/20 text-white placeholder-white/50' 
                        : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
                {errors.confirmPassword && <p className="text-luxury-red text-sm mt-2">{errors.confirmPassword}</p>}
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" className="w-4 h-4 mt-1 accent-luxury-red" required />
                <span className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  I agree to the{' '}
                  <a href="#" className="text-luxury-red hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-luxury-red hover:underline">Privacy Policy</a>
                </span>
              </div>

              <button type="submit" className="w-full btn-primary">
                Create Account
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className={isDark ? 'text-white/60' : 'text-gray-600'}>
                Already have an account?{' '}
                <Link to="/login" className="text-luxury-red hover:underline font-medium">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
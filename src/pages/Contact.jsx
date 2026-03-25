import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useToast } from '../context/ToastContext'
import { useTheme } from '../context/ThemeContext'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const { addToast } = useToast()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const handleSubmit = (e) => {
    e.preventDefault()
    addToast('Message sent successfully! We\'ll get back to you soon.', 'success')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    { icon: MapPin, title: 'Address', content: '123 Luxury Lane, Beverly Hills, CA 90210' },
    { icon: Phone, title: 'Phone', content: '+1 (800) 555-TIME' },
    { icon: Mail, title: 'Email', content: 'concierge@timeless.com' },
    { icon: Clock, title: 'Hours', content: 'Mon-Sat: 10AM - 8PM, Sun: 12PM - 6PM' }
  ]

  return (
    <div className={`min-h-screen ${isDark ? 'bg-luxury-dark' : 'bg-gray-100'}`}>
      <Navbar />

      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-luxury-red uppercase tracking-[0.3em] mb-4">Get In Touch</p>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Us</h1>
            <p className={`max-w-2xl mx-auto ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              Have questions about our collection? Our luxury watch experts are here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className={`rounded-3xl p-8 md:p-12 h-full ${isDark ? 'glass' : 'bg-white shadow-lg'}`}>
                <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`text-sm mb-2 block ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-red transition-colors ${
                          isDark 
                            ? 'bg-white/10 border border-white/20 text-white placeholder-white/50' 
                            : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        required
                      />
                    </div>
                    <div>
                      <label className={`text-sm mb-2 block ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-red transition-colors ${
                          isDark 
                            ? 'bg-white/10 border border-white/20 text-white placeholder-white/50' 
                            : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className={`text-sm mb-2 block ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-red transition-colors ${
                        isDark 
                          ? 'bg-white/10 border border-white/20 text-white placeholder-white/50' 
                          : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      required
                    />
                  </div>

                  <div>
                    <label className={`text-sm mb-2 block ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5}
                      className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-red transition-colors resize-none ${
                        isDark 
                          ? 'bg-white/10 border border-white/20 text-white placeholder-white/50' 
                          : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      required
                    />
                  </div>

                  <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className={`rounded-3xl p-8 md:p-12 ${isDark ? 'glass' : 'bg-white shadow-lg'}`}>
                <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Information</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-luxury-red/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-luxury-red" size={20} />
                      </div>
                      <div>
                        <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                        <p className={isDark ? 'text-white/60' : 'text-gray-600'}>{item.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className={`rounded-3xl p-8 md:p-12 ${isDark ? 'glass' : 'bg-white shadow-lg'}`}>
                <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Visit Our Showroom</h2>
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.715220361542!2d-118.40035732366668!3d34.0736292731571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147d9%3A0x29a9751103a5e957!2sBeverly%20Hills%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className={isDark ? 'grayscale invert' : ''}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
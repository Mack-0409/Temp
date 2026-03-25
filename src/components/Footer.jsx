import { Link } from 'react-router-dom'
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <footer className={`border-t ${isDark ? 'bg-luxury-black border-white/10' : 'bg-gray-200 border-gray-300'}`}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">
                <span className="text-luxury-red">TIME</span>
                <span className={isDark ? 'text-white' : 'text-gray-900'}>LESS</span>
              </span>
            </Link>
            <p className={`mb-6 leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              Your destination for premium luxury timepieces. Curated collection of the world's finest watches since 2010.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className={`p-2 rounded-full hover:bg-luxury-red transition-colors ${
                    isDark ? 'bg-white/10 text-white' : 'bg-gray-300 text-gray-700'
                  }`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={`font-semibold mb-6 uppercase tracking-wider ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Watches', 'Brands', 'About', 'Contact'].map(link => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className={`hover:text-luxury-red transition-colors ${isDark ? 'text-white/60' : 'text-gray-600'}`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-6 uppercase tracking-wider ${isDark ? 'text-white' : 'text-gray-900'}`}>Top Brands</h4>
            <ul className="space-y-3">
              {['Rolex', 'Omega', 'Patek Philippe', 'Cartier', 'TAG Heuer', 'Hublot'].map(brand => (
                <li key={brand}>
                  <Link
                    to="/brands"
                    className={`hover:text-luxury-red transition-colors ${isDark ? 'text-white/60' : 'text-gray-600'}`}
                  >
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-6 uppercase tracking-wider ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Us</h4>
            <ul className="space-y-4">
              <li className={`flex items-start gap-3 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                <MapPin size={18} className="text-luxury-red flex-shrink-0 mt-1" />
                <span>123 Luxury Lane, Beverly Hills, CA 90210</span>
              </li>
              <li className={`flex items-center gap-3 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                <Phone size={18} className="text-luxury-red flex-shrink-0" />
                <span>+1 (800) 555-TIME</span>
              </li>
              <li className={`flex items-center gap-3 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                <Mail size={18} className="text-luxury-red flex-shrink-0" />
                <span>concierge@timeless.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${
          isDark ? 'border-white/10' : 'border-gray-300'
        }`}>
          <p className={`text-sm ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
            © 2024 TIMELESS. All rights reserved.
          </p>
          <div className={`flex gap-6 text-sm ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
            <a href="#" className="hover:text-luxury-red transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-luxury-red transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-luxury-red transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
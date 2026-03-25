import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingCart from '../components/FloatingCart'
import WatchCard from '../components/WatchCard'
import WatchCardSkeleton from '../components/WatchCardSkeleton'
import { useTheme } from '../context/ThemeContext'
import { watches } from '../data/watches'

export default function Watches() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const brands = ['All', ...new Set(watches.map(w => w.brand))]
  const categories = ['All', ...new Set(watches.map(w => w.category))]

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const filteredWatches = watches
    .filter(watch => {
      const matchesSearch = watch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        watch.brand.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesBrand = selectedBrand === 'All' || watch.brand === selectedBrand
      const matchesCategory = selectedCategory === 'All' || watch.category === selectedCategory
      return matchesSearch && matchesBrand && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price
        case 'price-high': return b.price - a.price
        case 'name': return a.name.localeCompare(b.name)
        default: return 0
      }
    })

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedBrand('All')
    setSelectedCategory('All')
    setSortBy('featured')
  }

  const activeFilters = [selectedBrand, selectedCategory].filter(f => f !== 'All').length

  return (
    <div className={`min-h-screen ${isDark ? 'bg-luxury-dark' : 'bg-gray-100'}`}>
      <Navbar />
      <FloatingCart />

      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Collection</h1>
            <p className={isDark ? 'text-white/60' : 'text-gray-600'}>Discover {watches.length} premium timepieces from world-renowned brands</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className={`lg:w-64 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}
            >
              <div className={`rounded-2xl p-6 sticky top-32 ${isDark ? 'glass' : 'bg-white shadow-lg'}`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Filters</h3>
                  {activeFilters > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-luxury-red text-sm hover:underline"
                    >
                      Clear ({activeFilters})
                    </button>
                  )}
                </div>

                <div className="mb-6">
                  <label className={`text-sm mb-2 block ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Brand</label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className={`w-full rounded-lg px-4 py-2 focus:outline-none focus:border-luxury-red ${
                      isDark 
                        ? 'bg-white/10 border border-white/20 text-white' 
                        : 'bg-gray-100 border border-gray-300 text-gray-900'
                    }`}
                  >
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className={`text-sm mb-2 block ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className={`w-full rounded-lg px-4 py-2 focus:outline-none focus:border-luxury-red ${
                      isDark 
                        ? 'bg-white/10 border border-white/20 text-white' 
                        : 'bg-gray-100 border border-gray-300 text-gray-900'
                    }`}
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={`text-sm mb-2 block ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className={`w-full rounded-lg px-4 py-2 focus:outline-none focus:border-luxury-red ${
                      isDark 
                        ? 'bg-white/10 border border-white/20 text-white' 
                        : 'bg-gray-100 border border-gray-300 text-gray-900'
                    }`}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name</option>
                  </select>
                </div>
              </div>
            </motion.aside>

            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row gap-4 mb-8"
              >
                <div className="relative flex-1">
                  <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-white/50' : 'text-gray-500'}`} size={20} />
                  <input
                    type="text"
                    placeholder="Search watches..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-luxury-red transition-colors ${
                      isDark 
                        ? 'bg-white/10 border border-white/20 text-white placeholder-white/50' 
                        : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className={`absolute right-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-white/50 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`lg:hidden flex items-center justify-center gap-2 rounded-xl px-6 py-3 ${
                    isDark 
                      ? 'bg-white/10 border border-white/20 text-white' 
                      : 'bg-white border border-gray-300 text-gray-900'
                  }`}
                >
                  <SlidersHorizontal size={20} />
                  Filters {activeFilters > 0 && `(${activeFilters})`}
                </button>
              </motion.div>

              <div className="flex items-center justify-between mb-6">
                <p className={isDark ? 'text-white/60' : 'text-gray-600'}>
                  Showing {filteredWatches.length} of {watches.length} watches
                </p>
                <div className={`flex items-center gap-2 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  <span>Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className={`bg-transparent focus:outline-none ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  >
                    {[...Array(6)].map((_, i) => (
                      <WatchCardSkeleton key={i} />
                    ))}
                  </motion.div>
                ) : filteredWatches.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                  >
                    <p className={`text-lg mb-4 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>No watches found matching your criteria</p>
                    <button
                      onClick={clearFilters}
                      className="text-luxury-red hover:underline"
                    >
                      Clear filters
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  >
                    {filteredWatches.map((watch, index) => (
                      <WatchCard key={watch.id} watch={watch} index={index} />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="min-h-screen bg-luxury-dark flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="relative">
          <motion.div
            className="w-20 h-20 border-4 border-white/10 rounded-full"
          />
          <motion.div
            className="absolute top-0 left-0 w-20 h-20 border-4 border-luxury-red rounded-full border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-2xl font-bold">
            <span className="text-luxury-red">TIME</span>
            <span className="text-white">LESS</span>
          </span>
        </motion.div>
        <motion.p
          className="text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Loading luxury...
        </motion.p>
      </motion.div>
    </div>
  )
}
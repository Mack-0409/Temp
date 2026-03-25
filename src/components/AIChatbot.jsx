import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const quickReplies = [
  "Help me find a watch",
  "Which brand is best?",
  "Explain watch features",
  "Care instructions"
]

const botResponses = {
  "help me find a watch": "I'd be happy to help you find the perfect watch! Consider these factors:\n\n1. **Purpose**: Are you looking for a daily wear, formal occasion, or diving watch?\n2. **Budget**: We have options from $2,800 to $185,000\n3. **Brand**: Each brand has its heritage - Rolex (reliability), Omega (innovation), Patek Philippe (status)\n\nWould you like me to show you watches from a specific brand or price range?",
  
  "which brand is best": "This depends on what you value most:\n\n🕐 **Rolex** - The most recognized luxury brand. Known for quality and resale value.\n\n⚡ **Omega** - Excellent value, innovative technology, popular thanks to James Bond.\n\n💎 **Patek Philippe** - Ultimate status symbol. The Nautilus is iconic.\n\n🎨 **Cartier** - French elegance, timeless designs.\n\n🏃 **TAG Heuer** - Great entry point to Swiss watches, racing heritage.\n\nWhat matters most to you in a watch?",
  
  "explain watch features": "Here are key watch features to understand:\n\n🔧 **Movement**: Automatic (self-winding) or Quartz (battery)\n\n💧 **Water Resistance**: 30m = splash resistant, 100m+ = swimming, 300m+ = diving\n\n💎 **Crystal**: Sapphire crystal is scratch-resistant\n\n📅 **Complications**: Extra features like date, chronograph, moon phase\n\n⌚ **Case Size**: 38-42mm is standard for men\n\nWould you like more details on any specific feature?",
  
  "care instructions": "To keep your luxury watch in top condition:\n\n1. **Service** every 5-7 years by authorized dealer\n2. **Clean** with soft cloth and mild soap\n3. **Store** in watch box when not in use\n4. **Avoid** extreme temperatures and magnetic fields\n5. **Wind** automatic watches monthly if not worn\n\nShall I help you with anything else?",
  
  "default": "Hello! I'm your luxury watch assistant. I can help you with:\n\n🕐 Finding the perfect watch\n💎 Understanding watch features\n🏷️ Brand recommendations\n✨ Care and maintenance tips\n\nJust ask me anything or choose from the quick replies below!"
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ text: botResponses.default, isBot: true }])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const findResponse = (userInput) => {
    const input = userInput.toLowerCase()
    
    for (const key of Object.keys(botResponses)) {
      if (input.includes(key)) {
        return botResponses[key]
      }
    }
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! How can I assist you with your luxury watch journey today?"
    }
    
    if (input.includes('price') || input.includes('cost') || input.includes('expensive')) {
      return "Our watches range from $2,800 to $185,000. The most popular range is $5,000-$15,000. Would you like to see watches in a specific price range?"
    }
    
    if (input.includes('water') || input.includes('diving') || input.includes('swim')) {
      return "For water activities, I recommend:\n\n🌊 **Rolex Submariner** - 300m, the classic diver\n\n🌊 **Omega Seamaster** - 300m, James Bond's choice\n\n🌊 **TAG Heuer Aquaracer** - 300m, great value\n\nWhat's your planned activity?"
    }
    
    if (input.includes('gift') || input.includes('present') || input.includes('anniversary')) {
      return "What a thoughtful gift! I'd recommend:\n\n💝 **For Her**: Cartier Tank, Omega Seamaster 28mm, Patek Philippe Twenty-4\n\n💝 **For Him**: Rolex Datejust, Omega Speedmaster, TAG Heuer Carrera\n\nWhat's your budget range?"
    }
    
    return "I understand you'd like to know more. Could you specify what aspect interests you most? I can help with brands, features, prices, or recommendations!"
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { text: input, isBot: false }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const response = findResponse(input)
      setMessages(prev => [...prev, { text: response, isBot: true }])
      setIsTyping(false)
    }, 1000 + Math.random() * 500)
  }

  const handleQuickReply = (reply) => {
    setInput(reply)
    setTimeout(handleSend, 100)
  }

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-r from-luxury-red to-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-luxury-red/50"
      >
        <Bot size={28} className="text-white" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] z-50 rounded-2xl overflow-hidden shadow-2xl ${
              isDark ? 'bg-luxury-dark' : 'bg-white'
            }`}
          >
            <div className={`p-4 flex items-center justify-between ${isDark ? 'bg-luxury-black' : 'bg-gray-100'}`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-luxury-red to-red-600 rounded-full flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Luxury Watch AI</h3>
                  <p className={`text-xs ${isDark ? 'text-green-400' : 'text-green-600'}`}>Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-200'}`}
              >
                <X size={20} className={isDark ? 'text-white' : 'text-gray-900'} />
              </button>
            </div>

            <div className={`h-80 overflow-y-auto p-4 space-y-4 ${isDark ? 'bg-luxury-dark' : 'bg-gray-50'}`}>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      msg.isBot
                        ? isDark 
                          ? 'bg-white/10 text-white' 
                          : 'bg-gray-200 text-gray-900'
                        : 'bg-luxury-red text-white'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className={`p-3 rounded-2xl ${isDark ? 'bg-white/10' : 'bg-gray-200'}`}>
                    <Loader2 size={20} className={`animate-spin ${isDark ? 'text-white' : 'text-gray-900'}`} />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className={`p-3 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
              <div className="flex flex-wrap gap-2 mb-3">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                      isDark 
                        ? 'bg-white/10 text-white/80 hover:bg-luxury-red hover:text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-luxury-red hover:text-white'
                    }`}
                  >
                    {reply}
                  </button>
                ))}
              </div>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className={`flex-1 px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-luxury-red ${
                    isDark 
                      ? 'bg-white/10 text-white placeholder-white/50' 
                      : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                  }`}
                />
                <button
                  onClick={handleSend}
                  className="w-10 h-10 bg-luxury-red rounded-full flex items-center justify-center"
                >
                  <Send size={18} className="text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
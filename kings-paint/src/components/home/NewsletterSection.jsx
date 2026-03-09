// src/components/home/ContactSection.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  ChevronRight
} from 'lucide-react'
import toast from 'react-hot-toast'

const ContactSection = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      toast.success('Successfully subscribed to newsletter!')
      setEmail('')
      setIsSubmitting(false)
    }, 1000)
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll respond within 24 hours.')
      setName('')
      setEmail('')
      setMessage('')
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    { 
      icon: Phone, 
      title: 'Call Us', 
      value: '+233 594 42 9752',
      link: 'tel:+233594429752',
      description: 'Mon-Fri 8am-6pm'
    },
    { 
      icon: Mail, 
      title: 'Email Us', 
      value: 'Kingspaintdepotgh@gmail.com',
      link: 'mailto:Kingspaintdepotgh@gmail.com',
      description: '24/7 Support'
    },
    { 
      icon: MapPin, 
      title: 'Visit Us', 
      value: 'Weija SCC, Accra',
      link: 'https://maps.google.com/?q=Weija+SCC+Accra+Ghana',
      description: 'Showroom Open'
    },
    { 
      icon: Clock, 
      title: 'Working Hours', 
      value: '8:00 AM - 6:00 PM',
      description: 'Monday - Saturday'
      // No link property for Clock item
    }
  ]

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/kings_paintdepotgh', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/kingspaintdepot', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/kingspaintdepot', label: 'Twitter' },
    { icon: MessageCircle, href: 'https://wa.me/233594429752', label: 'WhatsApp' }
  ]

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #8B6B4D 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#8B6B4D] text-sm font-medium uppercase tracking-[0.2em] mb-3 block">
            Get in Touch
          </span>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-3">
            Let's <span className="font-semibold text-[#8B6B4D]">Connect</span>
          </h2>

          <p className="text-gray-500 text-sm mt-4 max-w-2xl mx-auto">
            Reach out for inquiries, support, or just to say hello
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            const isClickable = item.link !== undefined
            
            // If clickable, render as Link, otherwise as div
            const CardWrapper = isClickable ? motion.a : motion.div
            
            return (
              <CardWrapper
                key={index}
                href={isClickable ? item.link : undefined}
                target={isClickable && item.link.startsWith('http') ? '_blank' : undefined}
                rel={isClickable && item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -3 }}
                className="group bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#8B6B4D]/10 flex items-center justify-center group-hover:bg-[#8B6B4D] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#8B6B4D] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">{item.title}</h3>
                    <p className="text-sm font-semibold text-gray-900 mb-1">{item.value}</p>
                    <p className="text-xs text-gray-400">{item.description}</p>
                  </div>
                </div>
              </CardWrapper>
            )
          })}
        </motion.div>

        {/* Main Contact Area - Split View */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Send us a Message</h3>
            <p className="text-gray-500 text-sm mb-6">We'll get back to you within 24 hours</p>
            
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B6B4D]/20 focus:border-[#8B6B4D] transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B6B4D]/20 focus:border-[#8B6B4D] transition-colors"
                />
              </div>
              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B6B4D]/20 focus:border-[#8B6B4D] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-amber-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Side - Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Newsletter Card */}
            <div className="bg-gradient-to-br from-[#5D8A7A] to-[#171b17ff] rounded-2xl p-6 lg:p-8 text-white">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-white/80 text-sm mb-6">
                Subscribe to our newsletter for exclusive offers and painting tips
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-[#8B6B4D] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              
              <p className="text-white/60 text-xs mt-4">
                By subscribing, you agree to our Privacy Policy
              </p>
            </div>

            {/* Social Links Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-800 transition-colors group"
                    >
                      <Icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                    </motion.a>
                  )
                })}
              </div>
              <p className="text-gray-400 text-xs mt-4">
                Connect with us on social media for daily inspiration
              </p>
            </div>

            {/* Map Preview Card */}
            <motion.a
              href="https://maps.google.com/?q=Weija+SCC+Accra+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="block bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#8B6B4D]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#8B6B4D]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Find Us</h4>
                  <p className="text-xs text-gray-500">Weija SCC, Accra - Ghana</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
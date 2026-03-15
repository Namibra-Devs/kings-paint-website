// src/pages/ContactPage.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
  Check,
  AlertCircle,
  User,
  Edit3,
  HelpCircle
} from 'lucide-react'
import toast from 'react-hot-toast'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll respond within 24 hours.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+233 594 42 9752',
      link: 'tel:+233594429752',
      description: 'Mon-Fri, 8am - 6pm',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'Kingspaintdepotgh@gmail.com',
      link: 'mailto:Kingspaintdepotgh@gmail.com',
      description: '24/7 Support',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Weija SCC, Accra',
      link: 'https://maps.google.com/?q=Weija+SCC+Accra+Ghana',
      description: 'Showroom Open',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: '8:00 AM - 6:00 PM',
      description: 'Monday - Saturday',
      color: 'from-purple-500 to-purple-600',
      isLink: false
    }
  ]

  const faqs = [
    {
      question: "What are your delivery options?",
      answer: "We offer free delivery on orders above GH₵500 within Accra. For other locations, delivery charges apply based on distance. Express delivery is available for an additional fee."
    },
    {
      question: "Do you offer color matching services?",
      answer: "Yes! Our color matching service can replicate any color you bring in. Just bring a sample (fabric, paper, or object) and we'll create the perfect match."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of purchase for unopened products. Custom mixed colors are non-returnable. Please bring your receipt for all returns."
    },
    {
      question: "Do you offer trade discounts?",
      answer: "Yes, we offer special pricing for contractors, interior designers, and businesses. Register as a trade customer to access exclusive discounts."
    },
    {
      question: "How do I find the right paint finish?",
      answer: "Our experts can guide you! Generally, flat/matte for low-traffic areas, eggshell/satin for living areas, and semi-gloss/gloss for kitchens, bathrooms, and trim."
    }
  ]

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/contact-hero.jpg" 
            alt="Contact Kings Paint Depot"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#C4A962] rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-black" />
              </div>
              <span className="text-[#C4A962] font-medium tracking-wider">GET IN TOUCH</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's <span className="text-[#C4A962]">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Have questions about our products or need expert advice? 
              We're here to help with all your painting needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-20">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              const Wrapper = item.isLink === false ? 'div' : motion.a
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Wrapper
                    href={item.link}
                    target={item.link?.startsWith('http') ? '_blank' : '_self'}
                    rel={item.link?.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="block bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className="p-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-[#8B6B4D] font-medium mb-2">{item.value}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </Wrapper>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 lg:p-10"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B6B4D] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B6B4D] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+233 123 456 789"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B6B4D] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <Edit3 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="General Inquiry"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B6B4D] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B6B4D] focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#8B6B4D] to-[#5D8A7A] text-white px-6 py-4 rounded-xl font-semibold hover:from-[#9B7E5E] hover:to-[#6D9A8A] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Right Side - Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map Card */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="h-[300px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127095.48811864792!2d-0.2941873885499206!3d5.591583274434159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7c0b7b7b7b%3A0x8b8b8b8b8b8b8b8b!2sWeija%2C%20Accra!5e0!3m2!1sen!2sgh!4v1630000000000!5m2!1sen!2sgh"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kings Paint Depot Location"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                  <p className="text-gray-600 mb-4">Weija SCC, Accra - Ghana</p>
                  <a
                    href="https://maps.google.com/?q=Weija+SCC+Accra+Ghana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#8B6B4D] hover:text-[#C4A962] font-medium transition-colors"
                  >
                    Get Directions
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-gradient-to-r from-[#8B6B4D] to-[#5D8A7A] rounded-3xl shadow-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="font-semibold text-white/70">Closed</span>
                  </div>
                  <div className="pt-3 border-t border-white/20 mt-3">
                    <p className="text-sm text-white/80">
                      Holiday hours may vary. Please call ahead.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links Card */}
              <div className="bg-white rounded-3xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://instagram.com/kings_paintdepotgh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[120px] bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-xl font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com/kingspaintdepot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[120px] bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-xl font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Facebook className="w-5 h-5" />
                    Facebook
                  </a>
                  <a
                    href="https://twitter.com/kingspaintdepot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[120px] bg-gradient-to-r from-sky-400 to-sky-500 text-white px-4 py-3 rounded-xl font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Twitter className="w-5 h-5" />
                    Twitter
                  </a>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a
                    href="https://wa.me/233594429752"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat on WhatsApp: +233 594 42 9752</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#8B6B4D] font-medium tracking-wider mb-3 block">
              HAVE QUESTIONS?
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-[#C4A962]">Questions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our products and services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-[#8B6B4D] transition-transform duration-300 ${
                      activeFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: activeFaq === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-gray-500">
              Still have questions?{' '}
              <Link to="/faq" className="text-[#8B6B4D] hover:text-[#C4A962] font-medium">
                Visit our full FAQ page
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0a120a] to-[#1a2a1a]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <HelpCircle className="w-16 h-16 text-[#C4A962] mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Need Expert Advice?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our color experts are here to help you choose the perfect paint for your project
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-[#C4A962] text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#8B6B4D] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Browse Products
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
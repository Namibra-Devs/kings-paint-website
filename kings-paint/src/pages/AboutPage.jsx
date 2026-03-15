// src/pages/AboutPage.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Building2, 
  Heart, 
  Trophy, 
  Users,
  BadgeCheck,
  Globe,
  Sparkles,
  Target,
  Eye,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Palette,
  Brush,
  Home,
  Sun,
  Droplets,
  Wrench
} from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { label: 'Years of Experience', value: '25+', icon: Trophy, color: 'from-amber-500 to-amber-600' },
    { label: 'Happy Customers', value: '50K+', icon: Users, color: 'from-green-500 to-green-600' },
    { label: 'Products', value: '500+', icon: Palette, color: 'from-blue-500 to-blue-600' },
    { label: 'Certified Experts', value: '100+', icon: BadgeCheck, color: 'from-purple-500 to-purple-600' },
  ]

  const team = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      image: "/images/team/john-smith.jpg",
      bio: "25 years of experience in paint manufacturing and color technology.",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      name: "Sarah Johnson",
      role: "Head of Color Design",
      image: "/images/team/sarah-johnson.jpg",
      bio: "Award-winning color specialist with a passion for creating perfect palettes.",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      name: "Mike Wilson",
      role: "Technical Director",
      image: "/images/team/mike-wilson.jpg",
      bio: "Expert in paint chemistry and sustainable manufacturing processes.",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      name: "Emily Brown",
      role: "Customer Experience Manager",
      image: "/images/team/emily-brown.jpg",
      bio: "Dedicated to ensuring every customer finds their perfect color.",
      social: { twitter: "#", linkedin: "#" }
    }
  ]

  const values = [
    {
      icon: BadgeCheck,
      title: "Quality First",
      description: "We never compromise on quality. Every product meets the highest standards."
    },
    {
      icon: Heart,
      title: "Customer Centric",
      description: "Your satisfaction is our priority. We're here to help at every step."
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Constantly evolving to bring you the latest in paint technology."
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and sustainable manufacturing."
    }
  ]

  const timeline = [
    { year: "1995", title: "Founded", description: "Started as a small family-owned paint store" },
    { year: "2005", title: "Expansion", description: "Opened our first manufacturing facility" },
    { year: "2015", title: "Innovation", description: "Launched eco-friendly product line" },
    { year: "2024", title: "Today", description: "Serving thousands of customers nationwide" }
  ]

  const categories = [
    { name: "Interior Paints", icon: Home, count: 45, color: "from-amber-600 to-amber-700" },
    { name: "Exterior Paints", icon: Sun, count: 32, color: "from-orange-600 to-orange-700" },
    { name: "Specialty Finishes", icon: Sparkles, count: 28, color: "from-purple-600 to-purple-700" },
    { name: "Primers", icon: Droplets, count: 15, color: "from-blue-600 to-blue-700" },
    { name: "Tools & Supplies", icon: Wrench, count: 38, color: "from-gray-600 to-gray-700" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/about-hero.jpg" 
            alt="Kings Paint Depot"
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
                <Building2 className="w-6 h-6 text-black" />
              </div>
              <span className="text-[#C4A962] font-medium tracking-wider">ABOUT US</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Crafting Colors,
              <span className="text-[#C4A962]"> Creating Dreams</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Transforming spaces with premium quality paints and exceptional service since 1995
            </p>
            
            {/* Quick Stats */}
            <div className="flex gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-[#C4A962]">28+</div>
                <div className="text-sm text-gray-400">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#C4A962]">50k+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#C4A962]">500+</div>
                <div className="text-sm text-gray-400">Products</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-[#8B6B4D] font-medium tracking-wider mb-3 block">OUR STORY</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                More Than Just
                <span className="text-[#C4A962]"> Paint</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 1995 by John Smith, Kings Paint Depot started as a small family-owned paint store 
                with a simple mission: to provide the highest quality paints and exceptional customer service 
                to our local community.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over the years, we've grown into a trusted name in the paint industry, serving homeowners, 
                contractors, and designers across Ghana. Despite our growth, we've never lost sight of 
                our core values: quality, integrity, and customer satisfaction.
              </p>
              
              {/* Timeline */}
              <div className="relative mt-12">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-12 mb-8"
                  >
                    <div className="absolute left-0 top-1 w-8 h-8 bg-[#C4A962] rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="text-sm font-bold text-[#8B6B4D] mb-1">{item.year}</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-500">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/images/about/store-1.jpg" 
                    alt="Store"
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover"
                  />
                  <img 
                    src="/images/about/team-1.jpg" 
                    alt="Team"
                    className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="/images/about/factory.jpg" 
                    alt="Factory"
                    className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                  />
                  <img 
                    src="/images/about/lab.jpg" 
                    alt="Lab"
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-2xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#C4A962]/20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#C4A962]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">25+</div>
                    <div className="text-sm text-gray-500">Years of Excellence</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Gradient Cards */}
      <section className="py-24 bg-gradient-to-br from-[#0a120a] to-[#1a2a1a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Impact in <span className="text-[#C4A962]">Numbers</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're proud of what we've achieved and grateful to our customers for making it possible
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8B6B4D]/20 to-[#5D8A7A]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className={`inline-block p-4 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-[#8B6B4D] font-medium tracking-wider mb-3 block">WHY CHOOSE US</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Mission & <span className="text-[#C4A962]">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guided by principles that put quality and customer satisfaction first
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-[#8B6B4D] to-[#5D8A7A] rounded-3xl p-8 text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                To empower creativity and transformation through innovative paint solutions, 
                while maintaining our commitment to quality, sustainability, and customer satisfaction.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white"
            >
              <div className="w-16 h-16 bg-[#C4A962]/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#C4A962]" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be Ghana's most trusted paint company, known for exceptional quality, 
                innovative products, and unparalleled customer service.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-[#C4A962]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#C4A962]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-[#8B6B4D] font-medium tracking-wider mb-3 block">OUR RANGE</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Explore Our <span className="text-[#C4A962]">Collections</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From interior to exterior, we have everything you need for your next project
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer"
                >
                  <Link to={`/products/category/${category.name.toLowerCase().replace(' ', '-')}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                    <div className="relative p-6 text-white">
                      <Icon className="w-10 h-10 mb-3" />
                      <h3 className="font-semibold mb-1">{category.name}</h3>
                      <p className="text-sm opacity-80">{category.count} Products</p>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-[#8B6B4D] font-medium tracking-wider mb-3 block">OUR TEAM</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet the <span className="text-[#C4A962]">Experts</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals passionate about helping you find the perfect color
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={member.social.twitter} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#C4A962] transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href={member.social.linkedin} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#C4A962] transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#C4A962] text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Store</h3>
                <p className="text-gray-600 mb-8">
                  Come visit us at our showroom in Weija SCC. Our experts are ready to help you find the perfect colors for your project.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#C4A962]/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#C4A962]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium">Weija SCC, Accra - Ghana</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#C4A962]/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#C4A962]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">+233 594 42 9752</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#C4A962]/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[#C4A962]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">Kingspaintdepotgh@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#C4A962]/10 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#C4A962]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Working Hours</p>
                      <p className="font-medium">Mon-Sat: 8am - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <img 
                  src="/images/store-location.jpg" 
                  alt="Store Location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#C4A962] text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#8B6B4D] hover:text-white transition-colors"
                  >
                    Get Directions
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#8B6B4D] to-[#5D8A7A]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Browse our products or visit our showroom for expert advice
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/products"
                className="bg-white text-[#8B6B4D] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl"
              >
                Shop Now
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#8B6B4D] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
// src/pages/AboutPage.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  BuildingOfficeIcon, 
  HeartIcon, 
  TrophyIcon, 
  UserGroupIcon,
  CheckBadgeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const AboutPage = () => {
  const stats = [
    { label: 'Years of Experience', value: '25+', icon: TrophyIcon },
    { label: 'Happy Customers', value: '50K+', icon: UserGroupIcon },
    { label: 'Products', value: '500+', icon: BuildingOfficeIcon },
    { label: 'Certified Experts', value: '100+', icon: CheckBadgeIcon },
  ]

  const team = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      image: "/api/placeholder/300/300",
      bio: "25 years of experience in paint manufacturing and color technology."
    },
    {
      name: "Sarah Johnson",
      role: "Head of Color Design",
      image: "/api/placeholder/300/300",
      bio: "Award-winning color specialist with a passion for creating perfect palettes."
    },
    {
      name: "Mike Wilson",
      role: "Technical Director",
      image: "/api/placeholder/300/300",
      bio: "Expert in paint chemistry and sustainable manufacturing processes."
    },
    {
      name: "Emily Brown",
      role: "Customer Experience Manager",
      image: "/api/placeholder/300/300",
      bio: "Dedicated to ensuring every customer finds their perfect color."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About PaintPro</h1>
            <p className="text-xl text-primary-100">
              Transforming spaces with quality paints and exceptional service since 1995
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1995 by John Smith, PaintPro started as a small family-owned paint store 
                with a simple mission: to provide the highest quality paints and exceptional customer service 
                to our local community.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've grown into a trusted name in the paint industry, serving homeowners, 
                contractors, and designers across the country. Despite our growth, we've never lost sight of 
                our core values: quality, integrity, and customer satisfaction.
              </p>
              <p className="text-gray-600">
                Today, PaintPro offers over 500 products, from premium interior and exterior paints to 
                specialty finishes and professional tools. Our team of color experts and technical specialists 
                are always ready to help you find the perfect solution for your project.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img src="/api/placeholder/300/300" alt="Store" className="rounded-lg shadow-lg" />
              <img src="/api/placeholder/300/300" alt="Team" className="rounded-lg shadow-lg mt-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-block p-3 bg-primary-100 rounded-full text-primary-600 mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <GlobeAltIcon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower creativity and transformation through innovative paint solutions, 
                while maintaining our commitment to quality, sustainability, and customer satisfaction.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <HeartIcon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Quality in everything we do</li>
                <li>✓ Customer-first approach</li>
                <li>✓ Innovation and sustainability</li>
                <li>✓ Integrity and transparency</li>
                <li>✓ Community focus</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals passionate about helping you find the perfect color
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Browse our products or contact our experts for personalized advice
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/products"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Shop Now
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
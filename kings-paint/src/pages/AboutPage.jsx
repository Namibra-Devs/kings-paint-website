// src/pages/AboutPage.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  Wrench,
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    {
      label: "Years of Experience",
      value: "25+",
      icon: Trophy,
      color: "from-amber-500 to-amber-600",
    },
    {
      label: "Happy Customers",
      value: "50K+",
      icon: Users,
      color: "from-green-500 to-green-600",
    },
    {
      label: "Products",
      value: "500+",
      icon: Palette,
      color: "from-blue-500 to-blue-600",
    },
    {
      label: "Certified Experts",
      value: "100+",
      icon: BadgeCheck,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const team = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      image: "/images/team/john-smith.jpg",
      bio: "25 years of experience in paint manufacturing and color technology.",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Sarah Johnson",
      role: "Head of Color Design",
      image: "/images/team/sarah-johnson.jpg",
      bio: "Award-winning color specialist with a passion for creating perfect palettes.",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Mike Wilson",
      role: "Technical Director",
      image: "/images/team/mike-wilson.jpg",
      bio: "Expert in paint chemistry and sustainable manufacturing processes.",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Emily Brown",
      role: "Customer Experience Manager",
      image: "/images/team/emily-brown.jpg",
      bio: "Dedicated to ensuring every customer finds their perfect color.",
      social: { twitter: "#", linkedin: "#" },
    },
  ];

  const values = [
    {
      icon: BadgeCheck,
      title: "Quality First",
      description:
        "We never compromise on quality. Every product meets the highest standards.",
    },
    {
      icon: Heart,
      title: "Customer Centric",
      description:
        "Your satisfaction is our priority. We're here to help at every step.",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description:
        "Constantly evolving to bring you the latest in paint technology.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description:
        "Committed to eco-friendly practices and sustainable manufacturing.",
    },
  ];

  const timeline = [
    {
      year: "1995",
      title: "Founded",
      description: "Started as a small family-owned paint store",
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Opened our first manufacturing facility",
    },
    {
      year: "2015",
      title: "Innovation",
      description: "Launched eco-friendly product line",
    },
    {
      year: "2024",
      title: "Today",
      description: "Serving thousands of customers nationwide",
    },
  ];

  const categories = [
    {
      name: "Interior Paints",
      icon: Home,
      count: 45,
      color: "from-amber-600 to-amber-700",
    },
    {
      name: "Exterior Paints",
      icon: Sun,
      count: 32,
      color: "from-orange-600 to-orange-700",
    },
    {
      name: "Specialty Finishes",
      icon: Sparkles,
      count: 28,
      color: "from-purple-600 to-purple-700",
    },
    {
      name: "Primers",
      icon: Droplets,
      count: 15,
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Tools & Supplies",
      icon: Wrench,
      count: 38,
      color: "from-gray-600 to-gray-700",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/banner1.png"
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
              <div className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-amber-800" />
              </div>
              <span className="text-amber-600 font-medium tracking-wider">
                ABOUT US
              </span>
            </div>
            <h1 className="text-5xl lg:text-5xl font-bold text-white mb-6">
              Crafting Colors,
              <span className="text-amber-600"> Creating Dreams</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Transforming spaces with premium quality paints and exceptional
              service since 1995
            </p>

            {/* Quick Stats */}
            <div className="flex gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-amber-600">28+</div>
                <div className="text-sm text-gray-400">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600">5k+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600">500+</div>
                <div className="text-sm text-gray-400">Products</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-black">
        <div className="container mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-600 font-medium tracking-wider mb-3 block">
                OUR STORY
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                More Than Just Paint
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                Founded in 1995 by John Smith, Kings Paint Depot started as a
                small family-owned paint store with a simple mission: to provide
                the highest quality paints and exceptional customer service to
                our local community.
              </p>
              <p className="text-white/70 mb-6 leading-relaxed">
                Over the years, we've grown into a trusted name in the paint
                industry, serving homeowners, contractors, and designers across
                Ghana. Despite our growth, we've never lost sight of our core
                values: quality, integrity, and customer satisfaction.
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
                    <div className="absolute left-0 top-1 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="text-sm font-bold text-amber-600 mb-1">
                      {item.year}
                    </div>
                    <h4 className="text-lg font-semibold text-white/80 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-white/60">{item.description}</p>
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
                <div className="space-y-2">
                  <img
                    src="/images/tools.png"
                    alt="Store"
                    className="rounded-sm shadow-sm w-full h-52 object-cover"
                  />
                  <img
                    src="/images/paint-service.avif"
                    alt="Team"
                    className="rounded-sm shadow-sm w-full h-74 object-cover"
                  />
                </div>
                <div className="space-y-2 mt-8">
                  <img
                    src="/images/chalk3.jpeg"
                    alt="Factory"
                    className="rounded-sm shadow-sm w-full h-74 object-cover"
                  />
                  <img
                    src="/images/door4.jpeg"
                    alt="Lab"
                    className="rounded-sm shadow-sm w-full h-58 object-cover"
                  />
                </div>
              </div>

             
            </motion.div>
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
            <span className="text-amber-600 font-medium tracking-wider mb-3 block">
              WHY CHOOSE US
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guided by principles that put quality and customer satisfaction
              first
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-black to-[#5D8A7A] rounded-md p-8 text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                To empower creativity and transformation through innovative
                paint solutions, while maintaining our commitment to quality,
                sustainability, and customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-md p-8 text-white"
            >
              <div className="w-16 h-16 bg-[#C4A962]/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be Ghana's most trusted paint company, known for exceptional
                quality, innovative products, and unparalleled customer service.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-md border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-[#C4A962]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

     

      {/* Team Section */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-[#8B6B4D] font-medium tracking-wider mb-3 block">
              OUR TEAM
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet the <span className="text-[#C4A962]">Experts</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals passionate about helping you find the
              perfect color
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
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#C4A962] transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#C4A962] transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[#C4A962] text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-md shadow-md p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Visit Our Store
                </h3>
                <p className="text-gray-600 mb-8">
                  Come visit us at our showroom in Weija SCC. Our experts are
                  ready to help you find the perfect colors for your project.
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
               <a
                    href="https://maps.google.com/?q=Weija+SCC+Accra+Ghana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#8B6B4D] hover:text-[#C4A962] font-medium transition-colors"
                  >
                    Get Directions
                    <ChevronRight className="w-4 h-4" />
                  </a>
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

      
    </div>
  );
};

export default AboutPage;

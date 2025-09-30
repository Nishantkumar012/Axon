
  import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Check, Zap, Lock, Users, Sparkles,
  Menu, X, FileText, Layout, Database, Share2, Globe, Star
} from 'lucide-react';
import { motion } from 'framer-motion';

const AxionLanding = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: FileText, title: 'Rich Text Editor', description: 'Beautiful, distraction-free writing with powerful formatting options' },
    { icon: Layout, title: 'Block-Based System', description: 'Modular content blocks that you can mix, match, and arrange' },
    { icon: Database, title: 'Smart Databases', description: 'Create custom databases, tables, and kanban boards effortlessly' },
    { icon: Share2, title: 'Real-time Collaboration', description: 'Work together with your team in real-time, anywhere' },
    { icon: Zap, title: 'Lightning Fast', description: 'Optimized performance for instant loading and smooth interactions' },
    { icon: Lock, title: 'Secure & Private', description: 'Your data is encrypted and protected with enterprise-grade security' }
  ];

  const pricingPlans = [
    { name: 'Free', price: '$0', description: 'Perfect for individuals getting started', features: ['Unlimited pages', '5 collaborators', 'Basic blocks', '5MB file uploads', 'Mobile apps'] },
    { name: 'Pro', price: '$10', description: 'For power users and small teams', features: ['Everything in Free', 'Unlimited collaborators', 'Advanced blocks', 'Unlimited file uploads', 'Version history', 'Priority support'], popular: true },
    { name: 'Enterprise', price: 'Custom', description: 'For large organizations', features: ['Everything in Pro', 'Custom integrations', 'Advanced security', 'Dedicated support', 'SLA guarantee', 'Custom contracts'] }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">A</div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Axion</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <button className="text-gray-700 hover:text-blue-600 transition-colors">Sign In</button>
            <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 px-6">
            <a href="#features" className="block text-gray-700 hover:text-blue-600 py-2">Features</a>
            <a href="#pricing" className="block text-gray-700 hover:text-blue-600 py-2">Pricing</a>
            <a href="#about" className="block text-gray-700 hover:text-blue-600 py-2">About</a>
            <button className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">Sign In</button>
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2.5 rounded-xl font-medium">Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-gradient-to-br from-white to-blue-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-8 hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Introducing Axion 2.0</span>
          </motion.div>

          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:1}} className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Your workspace for <span className="text-blue-600">everything</span>
          </motion.h1>

          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:0.2}} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Write, plan, collaborate, and organize. All in one beautiful, lightning-fast workspace.
          </motion.p>

          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:0.4}} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="group bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-xl font-medium text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <span>Start for free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-xl font-medium text-lg border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
              Watch demo
            </button>
          </motion.div>

          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Check className="w-4 h-4 text-blue-500" />
              <span>Free forever</span>
            </div>
            <div className="flex items-center space-x-1">
              <Check className="w-4 h-4 text-blue-500" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center space-x-1">
              <Check className="w-4 h-4 text-blue-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="text-4xl md:text-5xl font-bold mb-4">Everything you need to do your best work</motion.h2>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8, delay:0.2}} className="text-xl text-gray-600 max-w-2xl mx-auto">Powerful features designed to help you organize your thoughts and collaborate seamlessly</motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div key={idx} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5, delay: idx*0.2}} className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="text-4xl md:text-5xl font-bold mb-4">Simple, transparent pricing</motion.h2>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8, delay:0.2}} className="text-xl text-gray-600">Choose the plan that's right for you</motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <motion.div key={idx} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5, delay: idx*0.3}} className={`relative p-8 rounded-2xl transition-all duration-300 ${plan.popular ? 'bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-2xl scale-105' : 'bg-white border border-gray-200 hover:shadow-xl'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>{plan.description}</p>

              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.price !== 'Custom' && <span className={plan.popular ? 'text-blue-100' : 'text-gray-600'}>/month</span>}
              </div>

              <button className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 mb-6 ${plan.popular ? 'bg-white text-blue-600 hover:shadow-lg' : 'bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:shadow-lg hover:scale-105'}`}>Get Started</button>

              <div className="space-y-3">
                {plan.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-center space-x-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-blue-500'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to transform your workflow?</h2>
          <p className="text-xl text-blue-100 mb-10">Join millions of users who trust Axion for their daily work</p>
          <button className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-medium text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2">
            <span>Get started for free</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-700 py-12 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center text-white font-bold text-sm">A</div>
              <span className="text-xl font-bold">Axion</span>
            </div>
            <p className="text-sm">All-in-one workspace for productivity and collaboration.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Subscribe</h4>
            <form className="flex flex-col space-y-3">
              <input type="email" placeholder="Your email" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all duration-300">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2025 Axion. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Globe className="w-5 h-5 hover:text-blue-600 transition-colors" />
            <Users className="w-5 h-5 hover:text-blue-600 transition-colors" />
            <Zap className="w-5 h-5 hover:text-blue-600 transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AxionLanding;






// import React from "react";
// import {
//   CheckCircle,
//   Zap,
//   Globe,
//   Users,
//   ArrowRight,
// } from "lucide-react";

// const AxionLanding = () => {
//   return (
//     <div className="min-h-screen bg-white text-gray-900">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//           <div className="absolute top-40 -right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//           <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
//         </div>

//         <div className="container mx-auto px-6 py-24 text-center relative z-10">
//           <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//             Organize Your Work with <span className="text-blue-600">Axion</span>
//           </h1>
//           <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
//             A modern productivity tool to manage your notes, tasks, and
//             collaboration—all in one place.
//           </p>
//           <div className="mt-8 flex justify-center gap-4">
//             <a
//               href="#"
//               className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transition"
//             >
//               Get Started Free
//             </a>
//             <a
//               href="#"
//               className="px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-600 font-semibold hover:bg-blue-50 transition"
//             >
//               Learn More
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-24 bg-white relative">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-16">
//             Everything you need to <span className="text-blue-600">succeed</span>
//           </h2>
//           <div className="grid md:grid-cols-3 gap-12">
//             {[
//               {
//                 icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
//                 title: "Organized Notes",
//                 desc: "Keep your ideas, notes, and docs neatly structured and easy to find.",
//               },
//               {
//                 icon: <Users className="w-10 h-10 text-blue-600" />,
//                 title: "Team Collaboration",
//                 desc: "Work together seamlessly with real-time updates and sharing.",
//               },
//               {
//                 icon: <Zap className="w-10 h-10 text-blue-600" />,
//                 title: "Fast & Secure",
//                 desc: "Enjoy blazing fast performance with enterprise-grade security.",
//               },
//             ].map((f, i) => (
//               <div
//                 key={i}
//                 className="p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 shadow-md hover:shadow-lg transition"
//               >
//                 {f.icon}
//                 <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
//                 <p className="mt-2 text-gray-600">{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-16">
//             Simple <span className="text-blue-600">Pricing</span>
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {[
//               {
//                 name: "Free",
//                 price: "$0",
//                 desc: "For individuals just getting started.",
//                 features: ["Unlimited notes", "Basic collaboration", "5GB storage"],
//                 highlighted: false,
//               },
//               {
//                 name: "Pro",
//                 price: "$12",
//                 desc: "For professionals who need more power.",
//                 features: [
//                   "Unlimited everything",
//                   "Advanced collaboration",
//                   "50GB storage",
//                   "Priority support",
//                 ],
//                 highlighted: true,
//               },
//               {
//                 name: "Enterprise",
//                 price: "Custom",
//                 desc: "For large teams and organizations.",
//                 features: [
//                   "Unlimited everything",
//                   "Custom integrations",
//                   "Dedicated manager",
//                   "Unlimited storage",
//                 ],
//                 highlighted: false,
//               },
//             ].map((plan, i) => (
//               <div
//                 key={i}
//                 className={`p-8 rounded-2xl border shadow-md hover:shadow-xl transition flex flex-col justify-between ${
//                   plan.highlighted
//                     ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white border-blue-600"
//                     : "bg-white border-gray-200"
//                 }`}
//               >
//                 <div>
//                   <h3
//                     className={`text-2xl font-bold mb-4 ${
//                       plan.highlighted ? "text-white" : "text-gray-900"
//                     }`}
//                   >
//                     {plan.name}
//                   </h3>
//                   <p
//                     className={`text-4xl font-extrabold mb-4 ${
//                       plan.highlighted ? "text-white" : "text-gray-900"
//                     }`}
//                   >
//                     {plan.price}
//                   </p>
//                   <p
//                     className={`mb-6 ${
//                       plan.highlighted ? "text-blue-100" : "text-gray-600"
//                     }`}
//                   >
//                     {plan.desc}
//                   </p>
//                   <ul className="space-y-3">
//                     {plan.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-2">
//                         <CheckCircle
//                           className={`w-5 h-5 ${
//                             plan.highlighted ? "text-blue-200" : "text-blue-600"
//                           }`}
//                         />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <a
//                   href="#"
//                   className={`mt-8 block text-center px-6 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg ${
//                     plan.highlighted
//                       ? "bg-white text-blue-600 hover:bg-blue-50"
//                       : "bg-blue-600 text-white hover:bg-blue-700"
//                   }`}
//                 >
//                   {plan.highlighted ? "Go Pro" : "Get Started"}
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-blue-50 py-12 mt-16 border-t border-blue-100">
//         <div className="container mx-auto px-6 text-center md:text-left">
//           <div className="grid md:grid-cols-3 gap-12 mb-8">
//             <div>
//               <h3 className="text-xl font-bold text-blue-600 mb-4">Axion</h3>
//               <p className="text-gray-600">
//                 All-in-one workspace to write, plan, and collaborate.
//               </p>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-3">Product</h4>
//               <ul className="space-y-2 text-gray-600">
//                 <li><a href="#" className="hover:text-blue-600">Features</a></li>
//                 <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
//                 <li><a href="#" className="hover:text-blue-600">Docs</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-3">Company</h4>
//               <ul className="space-y-2 text-gray-600">
//                 <li><a href="#" className="hover:text-blue-600">About</a></li>
//                 <li><a href="#" className="hover:text-blue-600">Careers</a></li>
//                 <li><a href="#" className="hover:text-blue-600">Contact</a></li>
//               </ul>
//             </div>
//           </div>

//           <div className="pt-6 border-t border-blue-100 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-sm text-gray-600">&copy; 2025 Axion. All rights reserved.</p>
//             <div className="flex space-x-6 mt-4 md:mt-0 text-gray-600">
//               <a href="#" className="hover:text-blue-600 transition">
//                 <Globe className="w-5 h-5" />
//               </a>
//               <a href="#" className="hover:text-blue-600 transition">
//                 <Users className="w-5 h-5" />
//               </a>
//               <a href="#" className="hover:text-blue-600 transition">
//                 <Zap className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Blob Animation */}
//       <style >{`
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//         @keyframes blob {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AxionLanding;









//  <style>{`
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//         @keyframes blob {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//       `}</style>







// import React, { useState, useEffect } from 'react';
// import { 
//   ArrowRight, 
//   Check, 
//   Zap, 
//   Lock, 
//   Users, 
//   Sparkles,
//   Menu,
//   X,
//   FileText,
//   Layout,
//   Database,
//   Share2,
//   Globe,
//   Star
// } from 'lucide-react';

// const AxionLanding = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const features = [
//     {
//       icon: FileText,
//       title: 'Rich Text Editor',
//       description: 'Beautiful, distraction-free writing with powerful formatting options'
//     },
//     {
//       icon: Layout,
//       title: 'Block-Based System',
//       description: 'Modular content blocks that you can mix, match, and arrange'
//     },
//     {
//       icon: Database,
//       title: 'Smart Databases',
//       description: 'Create custom databases, tables, and kanban boards effortlessly'
//     },
//     {
//       icon: Share2,
//       title: 'Real-time Collaboration',
//       description: 'Work together with your team in real-time, anywhere'
//     },
//     {
//       icon: Zap,
//       title: 'Lightning Fast',
//       description: 'Optimized performance for instant loading and smooth interactions'
//     },
//     {
//       icon: Lock,
//       title: 'Secure & Private',
//       description: 'Your data is encrypted and protected with enterprise-grade security'
//     }
//   ];

//   const pricingPlans = [
//     {
//       name: 'Free',
//       price: '$0',
//       description: 'Perfect for individuals getting started',
//       features: [
//         'Unlimited pages',
//         '5 collaborators',
//         'Basic blocks',
//         '5MB file uploads',
//         'Mobile apps'
//       ]
//     },
//     {
//       name: 'Pro',
//       price: '$10',
//       description: 'For power users and small teams',
//       features: [
//         'Everything in Free',
//         'Unlimited collaborators',
//         'Advanced blocks',
//         'Unlimited file uploads',
//         'Version history',
//         'Priority support'
//       ],
//       popular: true
//     },
//     {
//       name: 'Enterprise',
//       price: 'Custom',
//       description: 'For large organizations',
//       features: [
//         'Everything in Pro',
//         'Custom integrations',
//         'Advanced security',
//         'Dedicated support',
//         'SLA guarantee',
//         'Custom contracts'
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
//       }`}>
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
//                 A
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//                 Axion
//               </span>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
//               <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</a>
//               <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">About</a>
//               <button className="text-gray-600 hover:text-purple-600 transition-colors">Sign In</button>
//               <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
//                 Get Started
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button 
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
//             >
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {mobileMenuOpen && (
//             <div className="md:hidden mt-4 pb-4 space-y-3">
//               <a href="#features" className="block text-gray-600 hover:text-purple-600 py-2">Features</a>
//               <a href="#pricing" className="block text-gray-600 hover:text-purple-600 py-2">Pricing</a>
//               <a href="#about" className="block text-gray-600 hover:text-purple-600 py-2">About</a>
//               <button className="block w-full text-left text-gray-600 hover:text-purple-600 py-2">Sign In</button>
//               <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-xl font-medium">
//                 Get Started
//               </button>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-6 relative overflow-hidden">
//         {/* Background Gradients */}
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//         <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//         <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

//         <div className="max-w-7xl mx-auto relative">
//           <div className="text-center max-w-4xl mx-auto">
//             <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-8 hover:scale-105 transition-transform">
//               <Sparkles className="w-4 h-4" />
//               <span className="text-sm font-medium">Introducing Axion 2.0</span>
//             </div>

//             <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent leading-tight">
//               Your workspace for
//               <br />
//               <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//                 everything
//               </span>
//             </h1>

//             <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
//               Write, plan, collaborate, and organize. All in one beautiful, lightning-fast workspace that adapts to the way you work.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//               <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-medium text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
//                 <span>Start for free</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="px-8 py-4 rounded-xl font-medium text-lg border-2 border-gray-200 hover:border-purple-600 hover:text-purple-600 transition-all duration-300">
//                 Watch demo
//               </button>
//             </div>

//             <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500">
//               <div className="flex items-center space-x-1">
//                 <Check className="w-4 h-4 text-green-500" />
//                 <span>Free forever</span>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <Check className="w-4 h-4 text-green-500" />
//                 <span>No credit card</span>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <Check className="w-4 h-4 text-green-500" />
//                 <span>Cancel anytime</span>
//               </div>
//             </div>
//           </div>

//           {/* Hero Image/Demo */}
//           <div className="mt-20 relative">
//             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
//             <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 transform hover:scale-105 transition-transform duration-500">
//               <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8">
//                 <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                   </div>
//                   <div className="space-y-3">
//                     <div className="h-8 bg-gradient-to-r from-purple-200 to-blue-200 rounded-lg w-3/4"></div>
//                     <div className="h-4 bg-gray-200 rounded w-full"></div>
//                     <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//                     <div className="h-4 bg-gray-200 rounded w-4/6"></div>
//                     <div className="grid grid-cols-2 gap-4 pt-4">
//                       <div className="h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg"></div>
//                       <div className="h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//               Everything you need to do your best work
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Powerful features designed to help you organize your thoughts and collaborate seamlessly
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, idx) => (
//               <div 
//                 key={idx}
//                 className="group p-8 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 bg-white hover:scale-105"
//               >
//                 <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
//                   <feature.icon className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Social Proof */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <p className="text-sm text-gray-500 uppercase tracking-wide mb-8">Trusted by teams at</p>
//             <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
//               {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company, idx) => (
//                 <div key={idx} className="text-2xl font-bold text-gray-400">{company}</div>
//               ))}
//             </div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mt-16">
//             <div className="text-center p-8">
//               <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
//                 1M+
//               </div>
//               <div className="text-gray-600">Active users worldwide</div>
//             </div>
//             <div className="text-center p-8">
//               <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
//                 99.9%
//               </div>
//               <div className="text-gray-600">Uptime guarantee</div>
//             </div>
//             <div className="text-center p-8">
//               <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
//                 4.9/5
//               </div>
//               <div className="text-gray-600">User satisfaction</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section id="pricing" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//               Simple, transparent pricing
//             </h2>
//             <p className="text-xl text-gray-600">Choose the plan that's right for you</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {pricingPlans.map((plan, idx) => (
//               <div 
//                 key={idx}
//                 className={`relative p-8 rounded-2xl ${
//                   plan.popular 
//                     ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl scale-105' 
//                     : 'bg-white border border-gray-200 hover:shadow-xl'
//                 } transition-all duration-300`}
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                     <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
//                       <Star className="w-4 h-4 fill-current" />
//                       <span>Most Popular</span>
//                     </div>
//                   </div>
//                 )}

//                 <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
//                   {plan.name}
//                 </h3>
//                 <p className={`text-sm mb-6 ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
//                   {plan.description}
//                 </p>

//                 <div className="mb-6">
//                   <span className="text-5xl font-bold">{plan.price}</span>
//                   {plan.price !== 'Custom' && <span className={plan.popular ? 'text-purple-100' : 'text-gray-600'}>/month</span>}
//                 </div>

//                 <button className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 mb-6 ${
//                   plan.popular 
//                     ? 'bg-white text-purple-600 hover:shadow-lg' 
//                     : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:scale-105'
//                 }`}>
//                   Get Started
//                 </button>

//                 <div className="space-y-3">
//                   {plan.features.map((feature, fidx) => (
//                     <div key={fidx} className="flex items-center space-x-3">
//                       <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
//                       <span className={`text-sm ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
//                         {feature}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
//         </div>

//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Ready to transform your workflow?
//           </h2>
//           <p className="text-xl text-purple-100 mb-10">
//             Join millions of users who trust Axion for their daily work
//           </p>
//           <button className="group bg-white text-purple-600 px-8 py-4 rounded-xl font-medium text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2">
//             <span>Get started for free</span>
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-400 py-12 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-4 gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
//                   A
//                 </div>
//                 <span className="text-xl font-bold text-white">Axion</span>
//               </div>
//               <p className="text-sm">Your all-in-one workspace for productivity and collaboration.</p>
//             </div>

//             <div>
//               <h4 className="text-white font-semibold mb-4">Product</h4>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Templates</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Integrations</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-white font-semibold mb-4">Company</h4>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-white font-semibold mb-4">Legal</h4>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Terms</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Security</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">GDPR</a></li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-sm">&copy; 2024 Axion. All rights reserved.</p>
//             <div className="flex items-center space-x-6 mt-4 md:mt-0">
//               <a href="#" className="hover:text-purple-400 transition-colors">
//                 <Globe className="w-5 h-5" />
//               </a>
//               <a href="#" className="hover:text-purple-400 transition-colors">
//                 <Users className="w-5 h-5" />
//               </a>
//               <a href="#" className="hover:text-purple-400 transition-colors">
//                 <Share2 className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <style>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AxionLanding;
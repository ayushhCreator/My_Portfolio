import React, { useState } from 'react';
import { Phone, Mail, Linkedin, Instagram, Facebook, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   // Here you would typically send the data to a server
  //   alert('Message sent! (This is a demo functionality)');
  //   setFormData({
  //     name: '',
  //     email: '',
  //     subject: '',
  //     message: ''
  //   });
  // };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: "+91 7464026177",
      link: "tel:+917464026177"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: "araj09510@gmail.com",
      link: "mailto:araj09510@gmail.com"
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      details: "ayush-raj-633526186",
      link: "https://linkedin.com/in/ayush-raj-633526186"
    },
    {
      icon: <Instagram size={24} />,
      title: "Instagram",
      details: "ayushh_74",
      link: "https://www.instagram.com/ayushh_74"
    },
    {
      icon: <Facebook size={24} />,
      title: "Facebook",
      details: "ayushh74",
      link: "https://www.facebook.com/ayushh74"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-cyan-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-600"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-start group"
                    >
                      <div className="bg-teal-100 p-3 rounded-full text-teal-600 mr-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{info.title}</h4>
                        <p className="text-gray-700 group-hover:text-teal-600 transition-colors">{info.details}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div> */}
            
            <div className="lg:col-span-3">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-500 hover-lift border border-gray-100 animate-scaleIn">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                  Send Me a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Message</span>
                </h3>
                
                <form action="https://formspree.io/f/mayrqpnd"
  method="POST" >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="animate-fadeIn animation-delay-300">
                      <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 hover:border-gray-300"
                        required
                      />
                    </div>
                    
                    <div className="animate-fadeIn animation-delay-600">
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 hover:border-gray-300"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6 animate-fadeIn animation-delay-900">
                    <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 hover:border-gray-300"
                      required
                    />
                  </div>
                  
                  <div className="mb-8 animate-fadeIn animation-delay-1200">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 resize-none hover:border-gray-300"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="text-center animate-fadeIn animation-delay-1200">
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center mx-auto group animate-pulseGlow"
                    >
                      Send Message 
                      <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
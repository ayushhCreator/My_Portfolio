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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Contact Me</h2>
        <div className="w-20 h-1 bg-teal-600 mx-auto mb-12"></div>
        
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
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
                
                <form action="https://formspree.io/f/mayrqpnd"
  method="POST" >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-colors resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors duration-300 shadow flex items-center"
                  >
                    Send Message <Send size={16} className="ml-2" />
                  </button>
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
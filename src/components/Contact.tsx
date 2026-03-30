import React, { useState } from 'react';
import { Phone, Mail, Linkedin, Globe, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import Reveal from './Reveal';
import TiltCard from './TiltCard';

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

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: personalInfo.phone,
      link: `tel:${personalInfo.phone.replace(/\s+/g, '')}`
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      details: "ayush-raj-633526186",
      link: personalInfo.linkedin
    },
    {
      icon: <Globe size={24} />,
      title: "Portfolio",
      details: personalInfo.portfolio,
      link: `https://${personalInfo.portfolio}`
    }
  ];

  return (
    <section id="contact" className="section-shell">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
          <h2 className="section-title">
            Contact <span className="brand-gradient">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">Have an opportunity or idea? Let’s connect.</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2" delay={0.05}>
            <aside className="space-y-4">
            {contactInfo.map((info) => (
              <TiltCard key={info.title} className="glass-card p-5">
                <a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
                    {info.icon}
                  </span>
                  <span>
                    <p className="text-xs uppercase tracking-wide text-slate-400">{info.title}</p>
                    <p className="text-slate-100 text-sm font-medium mt-1">{info.details}</p>
                  </span>
                </a>
              </TiltCard>
            ))}
            </aside>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <TiltCard className="glass-card p-6 md:p-8">
            <h3 className="text-2xl font-bold text-slate-100 mb-8 text-center">
              Send a <span className="brand-gradient">Message</span>
            </h3>

            <form action="https://formspree.io/f/mayrqpnd" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-slate-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
                    required
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="subject" className="block text-sm text-slate-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
                  required
                />
              </div>

              <div className="mb-7">
                <label htmlFor="message" className="block text-sm text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 resize-none"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-7 py-3 font-semibold text-white transition-transform duration-300 hover:scale-[1.02]"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </div>
            </form>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
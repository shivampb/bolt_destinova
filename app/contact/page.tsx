"use client";
import Head from 'next/head';
import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Head>
        <title>Contact Us - Destinova AI Labs</title>
        <meta name="description" content="Get in touch with Destinova AI Labs for inquiries and support." />
      </Head>
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-6 py-16">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
            <p className="text-lg text-gray-600">
              Have questions or want to collaborate? Reach out to us and let's build the future of AI together.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#ff7626]" />
                <span className="text-gray-700">+91 704 108 3626</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#ff7626]" />
                <span className="text-gray-700">business@destinovaailabs.in</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#ff7626]" />
                <span className="text-gray-700">India</span>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Send Us a Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff7626]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff7626]"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff7626]"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff7626]"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#ff7626] text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
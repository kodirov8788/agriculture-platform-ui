"use client";

import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-gray-600">Have questions about your harvest? We are here to help.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="bg-agri-green text-white p-10 rounded-2xl shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium opacity-80 mb-1">Phone</p>
                  <p className="text-lg">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium opacity-80 mb-1">Email</p>
                  <p className="text-lg">hello@agriflow.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="p-2 bg-white/10 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium opacity-80 mb-1">Office</p>
                  <p className="text-lg">123 Harvest Lane<br />Green Valley, CA 90210</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/20">
             <div className="flex gap-4">
               {/* Social icons placeholder */}
             </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          <form 
            action="https://formspree.io/f/YOUR_FORM_ID" // User to replace
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-agri-green focus:border-transparent outline-none transition-all"
                placeholder="John Farmer"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-agri-green focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-agri-green focus:border-transparent outline-none transition-all"
                placeholder="How can we help you grow?"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-agri-green text-white font-bold py-4 rounded-btn hover:bg-agri-dark transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

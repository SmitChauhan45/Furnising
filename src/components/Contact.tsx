import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  // Replace with actual contact information
  const phoneNumber = "+91 98981 33942";
  const whatsappNumber = "+91 98981 33942";
  
  return (
    <section id="contact" className="py-16 bg-amber-50">
      <div className="container px-4 mx-auto md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Have questions about our products or want to place a custom order? Contact us directly.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-md p-8 transform transition-transform hover:scale-[1.02] hover:shadow-lg">
              <div className="mb-6">
                <h3 className="mb-4 font-serif text-2xl font-bold text-gray-900">Contact Information</h3>
                <p className="mb-6 text-gray-600">
                  We'd love to hear from you. Feel free to reach out through any of the following methods:
                </p>
                
                <div className="space-y-4">
                  <a 
                    href={`tel:${phoneNumber}`} 
                    className="flex items-center p-3 transition-colors rounded-md bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="p-3 mr-4 rounded-full bg-amber-100">
                      <Phone className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Call us directly (Kamlesh Kumar Chauhan)</p>
                      <p className="font-medium text-gray-700">{phoneNumber}</p>
                    </div>
                  </a>
                  
                  <a 
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 transition-colors rounded-md bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="p-3 mr-4 bg-green-100 rounded-full">
                      <MessageSquare className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Message on WhatsApp</p>
                      <p className="font-medium text-gray-700">Quick Response</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="mb-3 text-lg font-medium text-gray-900">Business Hours</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 transform transition-transform hover:scale-[1.02] hover:shadow-lg">
              <h3 className="mb-6 font-serif text-2xl font-bold text-gray-900">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Ronak Chauhan"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="ronak@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="I'm interested in..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-4 py-3 font-medium text-white transition-colors rounded-md bg-amber-600 hover:bg-amber-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
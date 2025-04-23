import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-playfair text-center mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-playfair mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-kaveri-gold hover:bg-kaveri-brown">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info and Map */}
            <div className="space-y-8">
              {/* Contact Image */}
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="/mehndi-powder-pack.jpg"
                  alt="Contact Us"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contact Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-playfair mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-kaveri-gold text-xl">📍</span>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-gray-600">123 Main Street, City Name, Country</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-kaveri-gold text-xl">📞</span>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">+1 (234) 567-8900</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-kaveri-gold text-xl">✉️</span>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">info@kaveri.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-playfair mb-6">Our Location</h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155710122!2d-73.987844924164!3d40.757978971389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact; 
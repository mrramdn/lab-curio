"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react"


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 animated-bg" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full fluid-morph blur-xl" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full fluid-morph blur-xl" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-12 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Have questions about Lab Curio? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl glass-button flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-foreground/70">info@labcurio.com</p>
                      <p className="text-foreground/70">support@labcurio.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl glass-button flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-foreground/70">University Campus</p>
                      <p className="text-foreground/70">Innovation Lab Building</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl glass-button flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-foreground/70">+62 123 456 7890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl glass-button flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office Hours</h3>
                      <p className="text-foreground/70">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-foreground/70">Saturday: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start glass-card">
                    Join Our Discord Community
                  </Button>
                  <Button variant="outline" className="w-full justify-start glass-card">
                    Follow Us on Social Media
                  </Button>
                  <Button variant="outline" className="w-full justify-start glass-card">
                    Subscribe to Newsletter
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass-button border-0 focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass-button border-0 focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass-button border-0 focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl glass-button border-0 focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full glass-button hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitted(true)
    setIsLoading(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-primary font-bold text-lg">SamoCity</h1>
                <p className="text-xs text-muted-foreground">Fine Dining Restaurant</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-foreground hover:text-accent transition-colors">
                HOME
              </Link>
              <Link href="/menu" className="text-foreground hover:text-accent transition-colors">
                MENU
              </Link>
              <Link href="/#about" className="text-foreground hover:text-accent transition-colors">
                ABOUT
              </Link>
              <a href="#" className="text-accent font-medium">
                CONTACT US
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Menu 
                className="w-6 h-6 text-foreground cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              />
            </div>



          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link 
                href="/" 
                className="block text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/menu" 
                className="block text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                MENU
              </Link>
              <Link 
                href="/#about" 
                className="block text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <a 
                href="#" 
                className="block text-accent font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT US
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[250px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(7, 80, 86, 0.7), rgba(7, 80, 86, 0.7)), url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-5xl font-light mb-4">GET IN TOUCH</h2>
          <p className="text-xl">We're here to make your stay exceptional</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-light text-foreground mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-green-800 mb-2">Message Sent Successfully!</h4>
                  <p className="text-green-700">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="+254 700 000 000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-foreground">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="mt-1 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-light text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Our Location</h4>
                    <p className="text-muted-foreground">
                      123 Uhuru Highway<br />
                      Nairobi CBD, 00100<br />
                      Kenya
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Phone Numbers</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Reception: +254 700 123 456</p>
                      <p>Reservations: +254 700 123 457</p>
                      <p>Restaurant: +254 700 123 458</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Email Addresses</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>info@grandnairobi.co.ke</p>
                      <p>reservations@grandnairobi.co.ke</p>
                      <p>events@grandnairobi.co.ke</p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Operating Hours</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Reception: 24/7</p>
                      <p>Restaurant: 6:00 AM - 11:00 PM</p>
                      <p>Concierge: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-8 p-6 bg-secondary rounded-lg">
                <h4 className="font-medium text-secondary-foreground mb-4">Need Immediate Assistance?</h4>
                <div className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Restaurant Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-light text-center text-secondary-foreground mb-8">Find Us</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder for map - in a real implementation, you'd use Google Maps or similar */}
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-muted-foreground mb-2">Interactive Map</h4>
                  <p className="text-muted-foreground">
                    SamoCity Restaurant - 123 Uhuru Highway, Nairobi
                  </p>
                  <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">SamoCity</h3>
                  <p className="text-sm opacity-90">Fine Dining Restaurant</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4 max-w-md">
                Experience exceptional cuisine and warm Kenyan hospitality in the heart of Nairobi. 
                Your dining satisfaction is our commitment.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <div><Link href="/" className="hover:text-accent">Home</Link></div>
                <div><Link href="/menu" className="hover:text-accent">Menu</Link></div>
                <div><Link href="/#about" className="hover:text-accent">About</Link></div>
                <div><Link href="/contact" className="hover:text-accent">Contact</Link></div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <p>+254 700 123 456</p>
                <p>info@grandnairobi.co.ke</p>
                <p>123 Uhuru Highway, Nairobi</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
            <p>&copy; 2024 SamoCity. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
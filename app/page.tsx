"use client"

import { useState, useRef, useEffect } from "react"
import { Facebook, Twitter, Instagram, Search, MapPin, Phone, Mail, Clock, X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function HomePage() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  const menuItems = [
    { name: "Nyama Choma Supreme", category: "Main Course", price: "KSH 3,500" },
    { name: "Grilled Tilapia", category: "Main Course", price: "KSH 3,200" },
    { name: "Chicken Curry", category: "Main Course", price: "KSH 2,800" },
    { name: "Pilau Rice", category: "Main Course", price: "KSH 2,200" },
    { name: "Continental Breakfast", category: "Breakfast", price: "KSH 2,500" },
    { name: "Traditional Kenyan Breakfast", category: "Breakfast", price: "KSH 1,800" },
    { name: "Samosa Platter", category: "Appetizers", price: "KSH 800" },
    { name: "Chicken Wings", category: "Appetizers", price: "KSH 1,200" },
    { name: "Chocolate Lava Cake", category: "Desserts", price: "KSH 1,400" },
    { name: "Tiramisu", category: "Desserts", price: "KSH 1,200" },
    { name: "Nairobi Sunset Cocktail", category: "Beverages", price: "KSH 1,200" },
    { name: "Kenyan AA Coffee", category: "Beverages", price: "KSH 450" },
    { name: "Fresh Mango Juice", category: "Beverages", price: "KSH 600" },
    { name: "French Fries", category: "Appetizers", price: "KSH 650" }
  ]

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  return (
    <div className="min-h-screen bg-background">
      {/* Top Header Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+254 700 123 456</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@luxuryhotel.co.ke</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Facebook className="w-4 h-4 hover:text-accent cursor-pointer" />
            <Twitter className="w-4 h-4 hover:text-accent cursor-pointer" />
            <Instagram className="w-4 h-4 hover:text-accent cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-primary font-bold text-xl">SamoCity</h1>
                <p className="text-sm text-muted-foreground">Fine Dining Restaurant</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-accent font-medium hover:text-primary transition-colors">
                HOME
              </a>
              <Link href="/menu" className="text-foreground hover:text-accent transition-colors">
                MENU
              </Link>
              <a href="#about" className="text-foreground hover:text-accent transition-colors">
                ABOUT
              </a>
              <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
                CONTACT US
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Menu 
                className="w-6 h-6 text-foreground cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 relative" ref={searchRef}>
              <div className="relative">
                <Search 
                  className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" 
                  onClick={() => setSearchOpen(!searchOpen)}
                />
                
                {searchOpen && (
                  <div className="absolute right-0 top-8 w-80 bg-background border border-border rounded-lg shadow-lg p-4 z-50">
                    <div className="flex items-center gap-2 mb-3">
                      <Search className="w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search menu items..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1"
                        autoFocus
                      />
                      <X 
                        className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer"
                        onClick={() => setSearchOpen(false)}
                      />
                    </div>
                    
                    {searchQuery && (
                      <div className="max-h-60 overflow-y-auto">
                        {filteredItems.length > 0 ? (
                          <div className="space-y-2">
                            {filteredItems.map((item, index) => (
                              <Link key={index} href="/menu" onClick={() => setSearchOpen(false)}>
                                <div className="p-3 hover:bg-muted rounded-lg cursor-pointer transition-colors">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h4 className="font-medium text-sm">{item.name}</h4>
                                      <p className="text-xs text-muted-foreground">{item.category}</p>
                                    </div>
                                    <span className="text-sm font-medium text-primary">{item.price}</span>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-4 text-muted-foreground text-sm">
                            No items found for "{searchQuery}"
                          </div>
                        )}
                      </div>
                    )}
                    
                    {!searchQuery && (
                      <div className="text-center py-4 text-muted-foreground text-sm">
                        Start typing to search menu items...
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <a 
                href="#" 
                className="block text-accent font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </a>
              <Link 
                href="/menu" 
                className="block text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                MENU
              </Link>
              <a 
                href="#about" 
                className="block text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </a>
              <Link 
                href="/contact" 
                className="block text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-[80px]">
            
            <div className="w-full md:w-auto h-[800px] rounded-lg shadow-lg overflow-hidden">
              <img
                src="/poster.jpeg"
                alt="Promotional Poster"
                className="h-full w-auto max-w-full object-contain"
              />
            </div>

            {/* 3 square cards – each ~266 × 240 px with inner gap */}
            <div className="w-full md:w-[240px] flex flex-col gap-4 h-[800px]">
              {[
                { name: "MAIN COURSES", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Hearty dishes with authentic flavors" },
                { name: "BEVERAGES",   image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Refreshing drinks and premium cocktails" },
                { name: "DESSERTS",    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", description: "Sweet treats to end your meal" }
              ].map((service) => (
                <div
                  key={service.name}
                  className="relative group cursor-pointer flex-1 w-full bg-card rounded-lg shadow-lg overflow-hidden"
                >
                  {/* No inner padding/gap */}
                  <div className="absolute inset-0 rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* text overlay */}
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex flex-col items-center justify-center p-3 group-hover:bg-black/40 transition-all duration-300">
                    <h3 className="text-white font-medium text-base text-center mb-1">{service.name}</h3>
                    <p className="text-white/90 text-xs text-center">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-light mb-4 text-foreground">CHEF'S RECOMMENDATIONS</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover our signature dishes crafted with the finest ingredients and authentic Kenyan spices
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "Grilled Tilapia",
                price: "KSH 2,500",
                period: "",
                image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                features: ["Fresh Fish", "Coconut Rice", "Local Spices", "Garden Salad"]
              },
              {
                name: "Nyama Choma Platter",
                price: "KSH 3,200",
                period: "",
                image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                features: ["Premium Beef", "Traditional Marinade", "Ugali", "Sukuma Wiki"]
              },
              {
                name: "Chicken Curry",
                price: "KSH 2,100",
                period: "",
                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                features: ["Tender Chicken", "Coconut Curry", "Basmati Rice", "Fresh Herbs"]
              },
              {
                name: "Pilau Rice",
                price: "KSH 1,800",
                period: "",
                image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                features: ["Aromatic Spices", "Tender Meat", "Basmati Rice", "Kachumbari"]
              },
              {
                name: "French Fries",
                price: "KSH 650",
                period: "",
                image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                features: ["Golden Crispy", "Sea Salt", "Ketchup", "Garlic Mayo"]
              },
              {
                name: "Chocolate Mousse",
                price: "KSH 1,200",
                period: "",
                image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                features: ["Rich Chocolate", "Whipped Cream", "Berry Garnish", "Mint Leaves"]
              },
            ].map((dish, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-xl text-foreground mb-2">{dish.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-primary font-bold text-2xl">{dish.price}</span>
                  </div>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {dish.features.map((feature, idx) => (
                        <span key={idx} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-center text-sm text-muted-foreground mt-2">
                    Available for walk-in orders
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-light text-secondary-foreground mb-3">About SamoCity</h2>
                <div className="space-y-2 text-secondary-foreground">
                  <p className="text-sm leading-relaxed">
                    Located in the heart of Nairobi, SamoCity offers an exceptional dining experience that celebrates the rich culinary heritage of Kenya while embracing international flavors.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Our passionate chefs craft each dish using the finest local ingredients and traditional cooking methods, creating memorable meals that tell the story of Kenyan cuisine.
                  </p>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">100+</div>
                    <div className="text-xs text-secondary-foreground">Menu Items</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">15+</div>
                    <div className="text-xs text-secondary-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">5★</div>
                    <div className="text-xs text-secondary-foreground">Customer Rating</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Restaurant Interior"
                  className="rounded-lg shadow-lg w-full h-32 object-cover"
                />
                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-2 rounded-lg shadow-lg">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span className="font-medium text-xs">Prime Location</span>
                  </div>
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
              <div className="flex gap-4">
                <Facebook className="w-5 h-5 hover:text-accent cursor-pointer" />
                <Twitter className="w-5 h-5 hover:text-accent cursor-pointer" />
                <Instagram className="w-5 h-5 hover:text-accent cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>123 Uhuru Highway, Nairobi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+254 700 123 456</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@grandnairobi.co.ke</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <div><Link href="/" className="hover:text-accent">Home</Link></div>
                <div><Link href="/menu" className="hover:text-accent">Menu</Link></div>
                <div><a href="#about" className="hover:text-accent">About</a></div>
                <div><Link href="/contact" className="hover:text-accent">Contact</Link></div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
            <p>&copy; 2024 SamoCity. All rights reserved. | Fine dining redefined.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
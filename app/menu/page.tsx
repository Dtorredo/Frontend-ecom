"use client"

import { useState } from "react"
import { Star, Clock, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    // Breakfast
    {
      id: 1,
      name: "Continental Breakfast Platter",
      description: "Fresh pastries, seasonal fruits, artisanal jams, and premium coffee",
      price: "KSH 2,500",
      category: "Breakfast",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: true,
      rating: 4.8
    },
    {
      id: 2,
      name: "Traditional Kenyan Breakfast",
      description: "Ugali, sukuma wiki, fried eggs, and chai tea",
      price: "KSH 1,800",
      category: "Breakfast",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: false,
      rating: 4.6
    },
    {
      id: 3,
      name: "Eggs Benedict Royale",
      description: "Poached eggs, smoked salmon, hollandaise sauce on English muffin",
      price: "KSH 2,200",
      category: "Breakfast",
      image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: false,
      rating: 4.7
    },
    {
      id: 4,
      name: "Acai Bowl Supreme",
      description: "Organic acai, granola, fresh berries, coconut flakes, and honey",
      price: "KSH 1,950",
      category: "Breakfast",
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: true,
      rating: 4.9
    },

    // Appetizers
    {
      id: 5,
      name: "Samosa Platter",
      description: "Crispy pastries filled with spiced vegetables or meat, served with tamarind chutney",
      price: "KSH 800",
      category: "Appetizers",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: true,
      rating: 4.5
    },
    {
      id: 6,
      name: "Chicken Wings",
      description: "Grilled wings marinated in peri-peri sauce with fresh herbs",
      price: "KSH 1,200",
      category: "Appetizers",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: false,
      rating: 4.4
    },
    {
      id: 7,
      name: "Bruschetta",
      description: "Toasted bread topped with fresh tomatoes, basil, and mozzarella",
      price: "KSH 950",
      category: "Appetizers",
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: false,
      rating: 4.3
    },

    // Main Course
    {
      id: 8,
      name: "Nyama Choma Supreme",
      description: "Grilled premium beef with traditional spices, served with ugali and vegetables",
      price: "KSH 3,500",
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: true,
      rating: 4.8
    },
    {
      id: 9,
      name: "Grilled Tilapia",
      description: "Lake Victoria tilapia with coconut rice, sukuma wiki, and mango salsa",
      price: "KSH 3,200",
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: true,
      rating: 4.6
    },
    {
      id: 10,
      name: "Chicken Curry",
      description: "Tender chicken in coconut curry sauce with basmati rice and fresh herbs",
      price: "KSH 2,800",
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: false,
      rating: 4.7
    },
    {
      id: 11,
      name: "Pilau Rice",
      description: "Aromatic spiced rice with tender meat pieces and served with kachumbari",
      price: "KSH 2,200",
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: false,
      rating: 4.5
    },

    // Desserts
    {
      id: 12,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, vanilla ice cream and berry compote",
      price: "KSH 1,400",
      category: "Desserts",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: true,
      rating: 4.9
    },
    {
      id: 13,
      name: "Tiramisu",
      description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
      price: "KSH 1,200",
      category: "Desserts",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: false,
      rating: 4.6
    },
    {
      id: 14,
      name: "Fruit Pavlova",
      description: "Light meringue base topped with whipped cream and fresh tropical fruits",
      price: "KSH 1,100",
      category: "Desserts",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: false,
      rating: 4.4
    },

    // Beverages
    {
      id: 15,
      name: "Nairobi Sunset Cocktail",
      description: "Premium rum, tropical fruit juices, and fresh mint served over ice",
      price: "KSH 1,200",
      category: "Beverages",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: true,
      rating: 4.8
    },
    {
      id: 16,
      name: "Kenyan AA Coffee",
      description: "Single origin coffee beans from the highlands, served black or with milk",
      price: "KSH 450",
      category: "Beverages",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: true,
      rating: 4.7
    },
    {
      id: 17,
      name: "Fresh Mango Juice",
      description: "Freshly squeezed mango juice from local mangoes, naturally sweet",
      price: "KSH 600",
      category: "Beverages",
      image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: false,
      rating: 4.5
    },
    {
      id: 18,
      name: "French Fries",
      description: "Golden crispy fries served with ketchup and garlic mayo",
      price: "KSH 650",
      category: "Appetizers",
      image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popular: false,
      rating: 4.3
    }
  ]

  const categories = ["All", "Breakfast", "Appetizers", "Main Course", "Desserts", "Beverages"]

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

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
              <a href="#" className="text-accent font-medium">
                MENU
              </a>
              <Link href="/#about" className="text-foreground hover:text-accent transition-colors">
                ABOUT
              </Link>
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
              <a 
                href="#" 
                className="block text-accent font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                MENU
              </a>
              <Link 
                href="/#about" 
                className="block text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
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
      <section
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(7, 80, 86, 0.6), rgba(7, 80, 86, 0.6)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-5xl font-light mb-4">OUR MENU</h2>
          <p className="text-xl">Savor the finest flavors from around the world</p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={activeCategory === category ? "bg-primary text-primary-foreground" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-4 text-foreground">
            {activeCategory === "All" ? "All Menu Items" : activeCategory}
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {activeCategory === "All" 
              ? "Discover our complete selection of carefully crafted dishes" 
              : `Explore our ${activeCategory.toLowerCase()} selection`
            }
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-card rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300">
                {/* Image */}
                <div className="w-full h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-card-foreground">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm text-muted-foreground">{item.rating}</span>
                    </div>
                  </div>
                  
                  {item.popular && (
                    <Badge className="bg-accent text-accent-foreground text-xs mb-2">Popular</Badge>
                  )}
                  
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">{item.price}</span>
                    <span className="text-sm text-muted-foreground">Walk-in only</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Hours */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-light text-center mb-8 text-secondary-foreground">Dining Hours</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <h3 className="font-medium text-secondary-foreground">Weekdays</h3>
                </div>
                <div className="text-secondary-foreground space-y-1 text-sm">
                  <p>Monday - Friday</p>
                  <p><strong>7:00 AM - 10:00 PM</strong></p>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <h3 className="font-medium text-secondary-foreground">Saturday</h3>
                </div>
                <div className="text-secondary-foreground space-y-1 text-sm">
                  <p><strong>8:00 AM - 11:00 PM</strong></p>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <h3 className="font-medium text-secondary-foreground">Sunday</h3>
                </div>
                <div className="text-secondary-foreground space-y-1 text-sm">
                  <p><strong>9:00 AM - 10:00 PM</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-foreground rounded-full"></div>
            </div>
            <span className="font-bold">SamoCity</span>
          </div>
          <p className="text-sm opacity-90">Experience culinary excellence | Call: +254 700 123 456</p>
        </div>
      </footer>
    </div>
  )
}
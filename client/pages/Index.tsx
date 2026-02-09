import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock, MapPin, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const featuredItems = [
    {
      name: "Signature Golden Latte",
      description:
        "Our secret blend of turmeric, ginger, and honey, steamed with oat milk.",
      price: "$6.50",
      image:
        "https://images.pexels.com/photos/1714950/pexels-photo-1714950.jpeg",
      category: "Coffee",
    },
    {
      name: "Butter Croissant",
      description:
        "Flaky, buttery, and baked fresh every morning in our stone oven.",
      price: "$4.25",
      image:
        "https://images.pexels.com/photos/14122685/pexels-photo-14122685.jpeg",
      category: "Pastry",
    },
    {
      name: "Artisan Avocado Toast",
      description:
        "Sourdough bread topped with mashed avocado, chili flakes, and a poached egg.",
      price: "$12.00",
      image:
        "https://images.pexels.com/photos/34083022/pexels-photo-34083022.jpeg",
      category: "Brunch",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/32884002/pexels-photo-32884002.jpeg"
            alt="Prince's Den Interior"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-1 mb-6">
              <Star className="h-4 w-4 text-accent fill-accent" />
              <span className="text-sm font-medium tracking-wide uppercase">
                Voted #1 Cafe in the City
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-[1.1]">
              Where Every Sip Tells a Story.
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-xl leading-relaxed">
              Step into Prince's Den, a sanctuary for coffee lovers and
              dreamers. Handcrafted brews, artisanal bites, and an atmosphere
              that feels like home.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 text-lg h-14"
              >
                <Link to="/menu">
                  Explore Menu <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-lg h-14 bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm"
              >
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="h-6 w-6 text-accent" />
              <div>
                <p className="text-xs uppercase tracking-wider text-accent font-bold">
                  Open Daily
                </p>
                <p className="font-medium">7:00 AM - 9:00 PM</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="h-6 w-6 text-accent" />
              <div>
                <p className="text-xs uppercase tracking-wider text-accent font-bold">
                  Our Location
                </p>
                <p className="font-medium">123 Espresso Way, Brew City</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Coffee className="h-6 w-6 text-accent" />
              <div>
                <p className="text-xs uppercase tracking-wider text-accent font-bold">
                  Call Us
                </p>
                <p className="font-medium">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Chef's Favorites
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our carefully curated selection of signature drinks and
              seasonal treats, crafted with the finest ingredients and a whole
              lot of love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">
                      {item.price}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full text-accent hover:text-accent hover:bg-accent/10"
                    >
                      Order <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-10 h-14 border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              <img
                src="https://images.pexels.com/photos/32884002/pexels-photo-32884002.jpeg"
                alt="Cafe Vibe"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] text-center">
                <p className="text-4xl font-serif font-bold text-primary mb-1">
                  10k+
                </p>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
              A Perfect Den for Work, Friends, and Coffee.
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Star className="h-6 w-6 text-accent fill-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">
                    Premium Quality
                  </h4>
                  <p className="text-muted-foreground">
                    We source only the highest grade Arabica beans from
                    sustainable farms across the globe.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Star className="h-6 w-6 text-accent fill-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">
                    Cozy Atmosphere
                  </h4>
                  <p className="text-muted-foreground">
                    Designed for comfort. Fast Wi-Fi, plenty of outlets, and
                    comfortable seating for your productivity.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Star className="h-6 w-6 text-accent fill-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">
                    Artisan Bakery
                  </h4>
                  <p className="text-muted-foreground">
                    Every pastry is baked in-house daily by our expert pastry
                    chefs using traditional methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Join the Coffee Club
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Get early access to seasonal launches, special event invites, and a
            little something special on your birthday.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              required
            />
            <Button className="rounded-full px-10 h-14 text-lg bg-accent hover:bg-accent/90 text-white font-bold">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

import { Layout } from "@/components/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Coffee, Croissant, Utensils, Zap } from "lucide-react";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Items", icon: <Zap className="w-4 h-4" /> },
    {
      id: "coffee",
      name: "Handcrafted Coffee",
      icon: <Coffee className="w-4 h-4" />,
    },
    { id: "tea", name: "Loose Leaf Tea", icon: <Zap className="w-4 h-4" /> },
    {
      id: "bakery",
      name: "Fresh Bakery",
      icon: <Croissant className="w-4 h-4" />,
    },
    {
      id: "breakfast",
      name: "All-Day Breakfast",
      icon: <Utensils className="w-4 h-4" />,
    },
  ];

  const menuItems = [
    {
      id: 1,
      category: "coffee",
      name: "Prince's Signature Brew",
      description: "Our medium-dark roast with notes of chocolate and caramel.",
      price: "$4.50",
      image:
        "https://images.pexels.com/photos/1714950/pexels-photo-1714950.jpeg",
    },
    {
      id: 2,
      category: "coffee",
      name: "Vanilla Bean Latte",
      description:
        "Espresso with steamed milk and Madagascar vanilla bean syrup.",
      price: "$5.75",
      image:
        "https://images.pexels.com/photos/1714950/pexels-photo-1714950.jpeg",
    },
    {
      id: 3,
      category: "bakery",
      name: "Almond Croissant",
      description:
        "Twice-baked with almond cream and topped with toasted almonds.",
      price: "$4.95",
      image:
        "https://images.pexels.com/photos/14122685/pexels-photo-14122685.jpeg",
    },
    {
      id: 4,
      category: "breakfast",
      name: "Smoked Salmon Bagel",
      description:
        "Toasted bagel with cream cheese, capers, onions, and premium salmon.",
      price: "$13.50",
      image:
        "https://images.pexels.com/photos/34083022/pexels-photo-34083022.jpeg",
    },
    {
      id: 5,
      category: "tea",
      name: "Matcha Ceremonial Latte",
      description:
        "Stone-ground Japanese matcha whisked with your choice of milk.",
      price: "$6.25",
      image:
        "https://images.pexels.com/photos/1714950/pexels-photo-1714950.jpeg",
    },
    {
      id: 6,
      category: "bakery",
      name: "Wild Berry Muffin",
      description:
        "Bursting with fresh blueberries and topped with a sugar crumble.",
      price: "$3.95",
      image:
        "https://images.pexels.com/photos/14122685/pexels-photo-14122685.jpeg",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      <section className="bg-primary/5 py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
            Our Menu
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of specialty coffee, artisanal teas,
            and handcrafted bites. Every item is made-to-order with the freshest
            ingredients.
          </p>
        </div>
      </section>

      <section className="py-12 border-b sticky top-[64px] sm:top-[80px] bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                className={`rounded-full px-6 py-2 h-auto ${activeCategory === cat.id ? "bg-primary" : "hover:bg-primary/10"}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col bg-card border rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-primary font-bold shadow-sm">
                    {item.price}
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent px-2 py-1 bg-accent/10 rounded-md">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <Button className="w-full rounded-xl py-6 font-bold uppercase tracking-wider text-xs">
                    Add to Order
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl font-serif text-muted-foreground">
                No items found in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Seasonal Promo */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-accent/10 rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>

          <div className="w-full md:w-1/2 relative z-10">
            <span className="text-accent font-bold uppercase tracking-widest mb-4 block">
              Limited Time Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Seasonal Pumpkin Spice Collection
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Our autumn favorites are back! Try our Pumpkin Spice Latte or our
              fresh-baked Pumpkin Cream Muffins before they're gone.
            </p>
            <Button
              size="lg"
              className="rounded-full px-10 h-14 bg-primary hover:bg-primary/90"
            >
              Order Seasonal Specials
            </Button>
          </div>

          <div className="w-full md:w-1/2 relative z-10">
            <img
              src="https://images.pexels.com/photos/1714950/pexels-photo-1714950.jpeg"
              alt="Seasonal Special"
              className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

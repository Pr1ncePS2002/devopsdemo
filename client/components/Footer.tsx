import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Coffee className="h-8 w-8 text-accent" />
              <span className="text-3xl font-serif font-bold">
                Prince's Den
              </span>
            </Link>
            <p className="text-primary-foreground/70 max-w-md mb-8 leading-relaxed">
              Experience the perfect blend of tradition and modern brewing at
              Prince's Den. Our beans are ethically sourced and roasted to
              perfection, bringing you a little piece of heaven in every cup.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-white transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-white transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-white transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Our Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li>Mon - Fri: 7:00 AM - 8:00 PM</li>
              <li>Saturday: 8:00 AM - 9:00 PM</li>
              <li>Sunday: 8:00 AM - 7:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/50 text-sm">
          <p>
            © {new Date().getFullYear()} Prince's Den. All rights reserved.
            Crafted with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

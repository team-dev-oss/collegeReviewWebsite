
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  LinkedinIcon, 
  YoutubeIcon 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-12 md:py-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-display font-bold text-foreground mb-4">
              Campus<span className="text-primary">Review</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Helping students make informed decisions about their education through authentic reviews and comprehensive college information.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <YoutubeIcon className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/colleges" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  College Directory
                </Link>
              </li>
              <li>
                <Link to="/rankings" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  College Rankings
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Student Reviews
                </Link>
              </li>
              <li>
                <Link to="/scholarships" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} CampusReview. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

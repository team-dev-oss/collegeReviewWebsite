
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-primary/5"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 translate-x-[-30%] translate-y-[30%]"></div>
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 translate-x-[30%]"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wide text-primary bg-primary/10 rounded-full animate-fade-in">
            Student-powered college reviews
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-foreground mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Find your <span className="text-gradient">perfect college</span> with real student reviews
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Compare colleges, read honest student reviews, and make confident decisions about your higher education future.
          </p>

          <div className="max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="relative shadow-lg rounded-full">
              <input
                type="text"
                placeholder="Search for colleges, programs, or reviews..."
                className="w-full h-14 pl-6 pr-14 bg-background border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="absolute right-2 top-2 p-2.5 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '400ms' }}>
            <span>Popular:</span>
            <Link to="/colleges/mit" className="hover:text-primary transition-colors">MIT</Link>
            <span>•</span>
            <Link to="/colleges/harvard" className="hover:text-primary transition-colors">Harvard</Link>
            <span>•</span>
            <Link to="/colleges/stanford" className="hover:text-primary transition-colors">Stanford</Link>
            <span>•</span>
            <Link to="/colleges/uc-berkeley" className="hover:text-primary transition-colors">UC Berkeley</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

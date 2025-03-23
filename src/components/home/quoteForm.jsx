"use client"
import { useEmailContext } from '@/context/EmailContext';
import Link from 'next/link';
import React from 'react';

export default function QuoteForm() {
  const { isEmpty, setIsEmpty } = useEmailContext();

  const handleChange = ({ target }) => {
    setIsEmpty(target.value);
  };

  return (
    <div className="flex flex-col items-center p-4 md:p-8 bg-white">
      <div className="text-center bg-gradient-to-r from-purple-500 to-purple-300 p-6 md:p-8 rounded-lg w-full md:w-3/4 flex flex-col md:flex-row gap-8">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-white text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-left">
          Ready to Leave Your Mark?
          </h2>
          <p className="text-purple-100 mb-4 md:mb-8 text-left text-sm md:text-base">
          Drop us an email and let&apos;s start establishing your presence today!
          <br/>
          Still got some doubts? Drop your email and let us take care of the rest!

          </p>
        </div>
        
        {/* Form Section */}
        <form className="flex flex-col sm:flex-row justify-center gap-4 items-center w-full md:w-auto">
          <input 
            type="email" 
            placeholder="Your email" 
            value={isEmpty}
            onChange={handleChange}
            required 
            className="w-full sm:w-auto px-4 py-2 rounded-lg h-11 border-none outline-none focus:ring-2 focus:ring-purple-300"
          />
          <Link href="/about#contactForm"> 
            <button 
              type="submit" 
              className="w-full sm:w-auto px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Contact us
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

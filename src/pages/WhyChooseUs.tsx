import React from 'react';
import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className="py-16">
      {/* Purple Section with Logo Design and Characters */}
      <div className="relative bg-[#b384f6] rounded-xl overflow-hidden">
        <div className="absolute top-0 right-0">
          <div className="bg-white/10 rounded-full w-48 h-48 -mr-24 -mt-24"></div>
        </div>
        <div className="absolute bottom-0 left-0">
          <div className="bg-white/10 rounded-full w-36 h-36 -ml-16 -mb-16"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  {/* N-shaped design with characters */}
                  <div className="relative">
                    <div className="bg-white transform -rotate-12 w-full h-96 rounded-3xl shadow-xl">
                      <div className="absolute top-5 left-8">
                        <img 
                          src="/lovable-uploads/ab8539ca-5225-4545-a4c5-f13bb5025e3a.png" 
                          alt="Character 1"
                          className="w-36 h-36 object-cover rounded-full"
                        />
                      </div>
                      <div className="absolute top-5 right-8">
                        <img 
                          src="/lovable-uploads/ab8539ca-5225-4545-a4c5-f13bb5025e3a.png" 
                          alt="Character 2"
                          className="w-36 h-36 object-cover rounded-full"
                        />
                      </div>
                      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                        <img 
                          src="/lovable-uploads/ab8539ca-5225-4545-a4c5-f13bb5025e3a.png" 
                          alt="Character 3"
                          className="w-36 h-36 object-cover rounded-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex space-x-1">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 text-white">
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-white/20 text-white">
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We Understand What Drives You
              </h2>
              {/* <p className="text-lg mb-8 text-white/90">
                With so many educational options available, choosing the right college can be overwhelming. 
                Our platform provides authentic reviews and insights from real students to help you make the 
                best decision for your future.
              </p> */}
              <p className="text-lg mb-8 text-white/90">
              It is not about how hard you work but it is about how smartly you manage your time, 
              resources, mind, and efforts to work together for a better result.
              </p>
              <p className="text-lg mb-8 text-white/90">
              In the present era, time is money, and to value your money and efforts, 
              we bring forth admissionshala.com, an admission consultant in ____________. 
              We are an extraordinarily selective digital platform fabricated specially for aspiring students to counsel,guide, and help in career mapping.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 mt-1 bg-white/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-lg text-white/90">Unbiased reviews from real students and alumni</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 mt-1 bg-white/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-lg text-white/90">Comprehensive insights about academics, campus life, and more</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 mt-1 bg-white/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-lg text-white/90">Tools and resources to compare colleges and make informed decisions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Review Form Section (AdmissionShala style) */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Share Your College Experience</h2>
            <p className="text-lg text-gray-600">
              Help future students make informed decisions by sharing your insights about your college
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-1">
                    College Name
                  </label>
                  <input
                    type="text"
                    id="college"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter college name"
                  />
                </div>
                
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                    Program/Major
                  </label>
                  <input
                    type="text"
                    id="program"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your program or major"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                  Overall Rating
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      aria-label={`Rate ${star} stars`}
                      className="text-yellow-400 hover:text-yellow-500 focus:outline-none"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Review
                </label>
                <textarea
                  id="review"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Share your experience at this college..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit Your Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

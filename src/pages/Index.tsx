
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import ReviewCard from '@/components/ReviewCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  const featuredColleges = [
    {
      name: 'Harvard University',
      location: 'Cambridge, MA',
      imageSrc: 'https://images.unsplash.com/photo-1583995010703-2d9a1b444e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      rating: 4.8,
      reviewCount: 1254,
    },
    {
      name: 'Stanford University',
      location: 'Stanford, CA',
      imageSrc: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      rating: 4.7,
      reviewCount: 1087,
    },
    {
      name: 'MIT',
      location: 'Cambridge, MA',
      imageSrc: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      rating: 4.9,
      reviewCount: 1432,
    },
    {
      name: 'UC Berkeley',
      location: 'Berkeley, CA',
      imageSrc: 'https://images.unsplash.com/photo-1580490031803-2ffb18655da9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      rating: 4.6,
      reviewCount: 978,
    },
  ];

  const recentReviews = [
    {
      name: 'Michael Johnson',
      college: 'Harvard University',
      program: 'Computer Science',
      year: 'Class of 2022',
      rating: 5,
      review: 'My experience at Harvard was transformative. The computer science program is rigorous but extremely rewarding. The professors are world-class experts who are surprisingly accessible. The community is collaborative rather than cutthroat, and I formed lifelong friendships and professional connections.',
    },
    {
      name: 'Sophia Chen',
      college: 'Stanford University',
      program: 'Engineering',
      year: 'Class of 2023',
      rating: 4,
      review: "Stanford's engineering program offers incredible resources and opportunities. The campus is beautiful, and the Silicon Valley location provides unique access to tech companies and internships. While the workload is demanding, the knowledge and skills gained are worth it.",
    },
    {
      name: 'David Rodriguez',
      college: 'MIT',
      program: 'Physics',
      year: 'Class of 2021',
      rating: 5,
      review: 'MIT set the gold standard for physics education. The coursework is challenging, but the collaborative atmosphere makes it manageable. Research opportunities abound, and I was able to work alongside Nobel laureates. The problem-solving skills I developed have been invaluable in my career.',
    },
  ];

  const stats = [
    { value: '25,000+', label: 'Reviews' },
    { value: '3,500+', label: 'Colleges' },
    { value: '98%', label: 'Student Satisfaction' },
    { value: '500k+', label: 'Monthly Visitors' },
  ];

  // Popular categories similar to AdmissionShala
  const popularCategories = [
    { name: 'Engineering', icon: '🔧', count: 1250 },
    { name: 'Medical', icon: '⚕️', count: 950 },
    { name: 'Business', icon: '💼', count: 1120 },
    { name: 'Law', icon: '⚖️', count: 680 },
    { name: 'Arts', icon: '🎨', count: 790 },
    { name: 'Science', icon: '🔬', count: 850 },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Banner - AdmissionShala style */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 lg:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white animate-on-scroll">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Find Your Perfect College
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100">
                Explore thousands of student reviews, compare colleges, and make informed decisions about your future
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/colleges"
                  className="bg-white text-blue-700 hover:bg-blue-50 transition-colors px-6 py-3 rounded-md font-medium inline-flex items-center justify-center"
                >
                  Explore Colleges
                </Link>
                <Link 
                  to="/reviews"
                  className="bg-blue-700 text-white hover:bg-blue-800 transition-colors border border-blue-200 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center"
                >
                  Read Reviews
                </Link>
              </div>
            </div>
            <div className="hidden md:block animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="College students"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Search Bar Section */}
      <section className="py-8 bg-white shadow-md relative -mt-6 rounded-t-3xl">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6 animate-on-scroll">
            <h2 className="text-2xl font-bold text-center mb-6">Find College Reviews</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="Search by college name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularCategories.map((category, index) => (
              <Link 
                key={category.name}
                to={`/category/${category.name.toLowerCase()}`}
                className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow animate-on-scroll"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-medium text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} colleges</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Colleges - Card Based Layout */}
      <section className="py-12 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Colleges</h2>
            <Link 
              to="/colleges"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredColleges.map((college, index) => (
              <Card 
                key={college.name}
                className="animate-on-scroll overflow-hidden hover:shadow-lg transition-shadow"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={college.imageSrc} 
                    alt={college.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{college.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{college.location}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900 mr-1">{college.rating}</span>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < Math.floor(college.rating) 
                                ? 'text-yellow-400 fill-yellow-400' 
                                : i < college.rating 
                                  ? 'text-yellow-400 fill-yellow-400' 
                                  : 'text-gray-300'
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-xs text-gray-600">
                        ({college.reviewCount})
                      </span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded"
                  >
                    <Link to={`/colleges/${college.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      View Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Statistics - AdmissionShala Style */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">By The Numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="animate-on-scroll flex flex-col items-center text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="text-4xl md:text-5xl font-bold mb-2 text-white">
                  {stat.value}
                </p>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Reviews */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Recent Student Reviews</h2>
            <Link 
              to="/reviews"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentReviews.map((review, index) => (
              <ReviewCard
                key={review.name}
                name={review.name}
                college={review.college}
                program={review.program}
                year={review.year}
                rating={review.rating}
                review={review.review}
                delay={`${index * 100}ms`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wide text-blue-700 bg-blue-100 rounded-full">
              Share Your Experience
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Help Other Students Make Better Decisions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Your honest review can help thousands of students find their perfect college match
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white transition-colors px-6 py-3 rounded-md font-medium"
              >
                Write a Review
              </Link>
              <Link 
                to="/how-it-works"
                className="bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 transition-colors px-6 py-3 rounded-md font-medium"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section - AdmissionShala Style */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto grid gap-6">
            {[
              { 
                question: "How do I find reviews for a specific college?", 
                answer: "You can use the search bar at the top of the page to find reviews for a specific college. You can also browse colleges by category or check our featured colleges section." 
              },
              { 
                question: "How are college ratings calculated?", 
                answer: "College ratings are calculated based on an aggregate of student reviews across multiple factors including academics, campus life, facilities, faculty, and value for money." 
              },
              { 
                question: "Can I write a review if I'm a current student?", 
                answer: "Yes! We encourage reviews from both current students and alumni. Current students provide valuable insights about the present state of the college." 
              },
              { 
                question: "Are the reviews verified?", 
                answer: "We have a verification process in place to ensure reviews are written by actual students. While we cannot verify 100% of reviews, we use various methods to maintain the integrity of our platform." 
              },
            ].map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg p-6 animate-on-scroll bg-gray-50"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

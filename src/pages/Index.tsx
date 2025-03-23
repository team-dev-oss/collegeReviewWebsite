
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import ReviewCard from '@/components/ReviewCard';

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
      review: 'Stanford's engineering program offers incredible resources and opportunities. The campus is beautiful, and the Silicon Valley location provides unique access to tech companies and internships. While the workload is demanding, the knowledge and skills gained are worth it.',
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

  return (
    <>
      <Hero />
      
      {/* Featured Colleges */}
      <section className="py-16 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold tracking-tight text-foreground mb-4">
              Featured Colleges
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore top-rated institutions based on real student reviews
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredColleges.map((college, index) => (
              <div 
                key={college.name}
                className="animate-on-scroll bg-white border border-border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={college.imageSrc} 
                    alt={college.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium text-foreground">{college.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{college.location}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-foreground">{college.rating}</span>
                      <div className="flex ml-1">
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
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {college.reviewCount} reviews
                    </span>
                  </div>
                  <Link 
                    to={`/colleges/${college.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="mt-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center"
                  >
                    View details
                    <svg 
                      className="ml-1 h-4 w-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              to="/colleges"
              className="inline-flex items-center justify-center text-sm font-medium text-white bg-primary px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
            >
              View all colleges
              <svg 
                className="ml-2 h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Statistics */}
      <section className="py-16 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="animate-on-scroll flex flex-col items-center text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Reviews */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold tracking-tight text-foreground mb-4">
              Recent Student Reviews
            </h2>
            <p className="text-lg text-muted-foreground">
              Authentic experiences shared by real students
            </p>
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
          
          <div className="mt-10 text-center">
            <Link 
              to="/reviews"
              className="inline-flex items-center justify-center text-sm font-medium text-white bg-primary px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
            >
              Read more reviews
              <svg 
                className="ml-2 h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wide text-primary bg-primary/10 rounded-full">
              Join our community
            </span>
            <h2 className="text-3xl font-display font-bold tracking-tight text-foreground mb-4">
              Share your college experience
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Help future students make informed decisions by sharing your insights and experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/signup"
                className="inline-flex items-center justify-center text-sm font-medium text-white bg-primary px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                Write a review
              </Link>
              <Link 
                to="/how-it-works"
                className="inline-flex items-center justify-center text-sm font-medium text-foreground bg-white border border-border px-6 py-3 rounded-full hover:bg-secondary transition-colors"
              >
                Learn how it works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;

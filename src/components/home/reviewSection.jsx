import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      image: '/about.webp',
      name: 'Path2Parenting',
      role: 'Parenting Coach',
      content: "We are thrilled with the results we've achieved thanks to Advert Monks. Our masterclass now reaches a wider audience and receives daily inquiries. Kudos to Ankush and his exceptional team for their outstanding work!",
    },
    {
      id: 2,
      image: '/about.webp',
      name: 'Sarika',
      role: ' Cloud Kitchen (Owner)',
      content: "Advert Monks stands out as the best SMM agency I've encountered. Their defining strength lies in their unparalleled commitment to delivering results with remarkable speed. Every client, including myself, yearns for these qualities, and Advert Monks exceeds expectations. Their dedication to swift, effective outcomes sets them apart in the industry.",
    },
    {
      id: 3,
      image: '/about.webp',
      name: 'Rohan Mayekar',
      role: 'Owner - Storybags Travel Solutions',
      content: "I've been working with ADVERT MONKS for over a year now, and they've been handling Instagram posts for my business. The journey hasn't been without challenges—we faced some issues along the way—but I truly appreciate their commitment to resolving them and finding solutions.Their creativity, consistency, and ability to adapt to my requirements have been impressive. They're open to feedback and always strive to deliver better results, which is why I continue to work with them.If you're looking for a digital marketing agency that values long-term partnerships and is willing to grow with you, I'd recommend ADVERT MONKS.",
    },
    {
      id: 4,
      image: '/about.webp',
      name: 'Jai Moolchandani',
      role: 'Owner - Maharana cab',
      content: "Excellent Service, the team was very cooperative and polite. I like work nature ! I recommend to work with advert Monks",
    },
    {
      id: 5,
      image: '/about.webp',
      name: 'Barkha paarcha ',
      role: 'Yoga Coach',
      content: "Advert Monks has been amazing in managing my social media they've helped boost my engagement significantly, Working with them has been a seamless and enjoyable experience. I highly recommend Advert Monks to anyone looking to elevate their social media game ..",
    },
    // Add more reviewers here
  ];

  return (
    <div id='reviews' className="bg-gray-100 py-10 px-4 md:px-10 flex flex-col md:flex-row md:justify-around gap-10 h-auto md:h-[40rem] ">
      
      {/* Reviews Section */}
      <div className="flex flex-col items-center w-full px-3 md:px-0 md:w-2/4">
        <div className="overflow-y-auto h-auto scrollbar-hide">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`rounded-lg bg-gray-50 p-6 md:p-8 mb-6 shadow-lg flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 1 ? "md:ml-16" : ""}`}
            >
              <Image
                src={review.image}
                alt={review.name}
                width={80}
                height={80}
                className="rounded-full w-24 h-24 mx-auto md:mx-0 flex self-center"
              />
              <div className="text-center md:text-left">
                <p className="text-purple-600 font-semibold mb-2">
                  {review.content} Satisfied Users
                </p>
                <h3 className="text-lg md:text-xl font-bold">{review.name}</h3>
                <p className="text-sm text-gray-600">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marketing Section */}
      <div className="mt-8 md:mt-16 flex flex-col justify-center items-center md:items-start w-full md:w-1/3">
        <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-4 md:mb-8">
          Hit Your Marketing Goals With Advert Monks
        </h2>
        <p className="text-center md:text-left text-gray-500 max-w-xs md:max-w-md mb-4 md:mb-8">
          Our team makes sure there&apos;s a little something for every business. Whether it&apos;s SEO and content writing services for an organic presence, advertising your business on social media, or creating ads best optimized for social media, Advert Monks makes sure you get what you want.
        </p>
        <Link href='/about#services'>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg">
          Discover More
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ReviewSection;

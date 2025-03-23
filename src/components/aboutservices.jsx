import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-start">
    <div className="mb-4">
      <Image src={icon} alt={`${title} Icon`} width={48} height={48} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-purple-600 mb-4">Services</div>

      <div className="flex flex-wrap items-center mb-12">
        <div className="w-full lg:w-2/3 pr-0 lg:pr-8 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
          <p className="text-gray-600 mb-6">
            Our team understands and listens to your needs. Whatever your business goals or target industry, we have something for everyone. So whether you need the full suite or just a specific service, browse our list, pick what you like and let&apos;s get building your digital presence.
          </p>
        </div>
        <div className="w-full hidden lg:w-1/3 md:flex self-center">
          <Image
            src="/callus.webp"
            alt="Avatar"
            width={200}
            height={180}
            className="ml-auto"
          />
        </div>
      </div>

      <Link href='/about#contactForm'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          icon="/reputation.png"
          title="Brand Building"
          description="Your brand is the voice of your product. At Advert Monks, our growing experience in building brand images ensures your social media account shows your brand’s values that calls out to your customers."
        />
        <ServiceCard
          icon="/curation.png"
          title="SEO Curation"
          description="When people don't search further than Google's first page, Advert Monks ensures traffic on your website by curating its design and content with trending keywords to improve ranking across search engines."
        />
        <ServiceCard
          icon="/process.png"
          title="Social Media Strategizing"
          description="Our team understands the nuances of each media platform, what makes them run, and puts it into a strategy for your business. Because nothing is stronger than a recommendation from a trusted friend."
        />
        <ServiceCard
          icon="/content.png"
          title="Content Creation"
          description="Good content builds relationships that bring in revenue. That's why Advert Monks helps you write content that takes your business' legacy and does its story justice, in a way your customers appreciate."
        />
        <ServiceCard
          icon="/content-marketing.png"
          title="Social Media Analytics"
          description="Simply putting up your content on various platforms is one step. Another is to understand the feedback data. That's why our team carefully analyses all your metrics to mould your content into reaching your target audience."
        />
        <ServiceCard
          icon="/video-editing.png"
          title="Video Production"
          description="If a picture can speak a thousand words, imagine what a video can do. Understanding and using this, our team helps you create online videos for your business that attracts customers to make them stay."
        />
      </div>
        </Link>
    </div>
  );
};

export default ServicesSection;

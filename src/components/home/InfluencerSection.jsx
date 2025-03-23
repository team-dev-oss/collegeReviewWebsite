import Image from "next/image";
import { Button } from "../ui/button";
import AvatarCircles from "@/components/magicui/avatar-circles";
import Link from "next/link";

const InfluencerSection = () => {
  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
  ];

  return (
    <>
      <div>
        <section className="flex flex-col md:flex-row p-6 md:px-10 pt-28 w-full gap-8 md:gap-16 items-center">
          {/* Text Section */}
          <div className="w-full md:w-2/3 text-left md:ml-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-5 w-full md:w-3/4">
              The Ladder to <br /> Stepping Up Your Digital Presence
            </h1>
            <p className="text-base md:text-lg font-light mb-4">
              You can&apos;t buy engagement; you have to build it. And
              that&apos;s what Advert Monks excels in. With expertly crafted
              stories to display your business like a trophy, we help take care
              of your marketing needs so you can focus on the innovation part.
              How do we do it? Let&apos;s walk through our list of services
              below!
            </p>
            <Link href='/about#services'>
            <Button>Discover More</Button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="flex w-full md:w-2/4 relative gap-3">
            <div className="flex-col mt-4 relative">
              <Image
                className="rounded-tl-3xl mb-4 bg-gradient-to-r from-purple-500 to-purple-600"
                src="/av1.png"
                alt="Influencer 1"
                width={250}
                height={250}
                priority
              />
              <Image
                src="/av2.png"
                className="rounded-bl-3xl bg-gradient-to-r from-purple-500 to-purple-600"
                alt="Influencer 2"
                width={250}
                height={250}
                priority
              />
              <p className="absolute bottom-4  -left-8 bg-white rounded-full px-2 md:px-4 py-1 text-xs md:text-sm">
                4126+ <br /> <span className="text-xs">Popular Influencer</span>
              </p>
            </div>
            <div className="flex-col relative">
              <Image
                className="rounded-tr-3xl mb-4 bg-gradient-to-r from-purple-500 to-purple-600"
                src="/av3.png"
                alt="Influencer 3"
                width={250}
                height={250}
                priority
              />
              <AvatarCircles
                className="absolute top-28 md:top-48 -right-6 md:-right-10 rounded-full px-2 md:px-3 py-1 text-xs md:text-sm"
                numPeople={99}
                avatarUrls={avatarUrls}
              />
              <Image
                className="rounded-br-3xl bg-gradient-to-r from-purple-500 to-purple-600"
                src="/av4.png"
                alt="Influencer 4"
                width={250}
                height={250}
                priority
              />
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <div className="flex flex-col md:flex-row px-6 md:px-20 gap-4 md:gap-24 mt-4 pb-10">
      <p className="text-2xl md:text-4xl mb-4 md:mb-0 flex items-center">
        Not Satisfied? <br />
        Take Their Word for It!
      </p>
      
      <div className="flex overflow-x-auto md:flex-wrap px-10 md:px-0 gap-20 md:gap-12">
        {/* Wrapping each logo in a container with consistent width for carousel effect */}
        <div className="flex-shrink-0 w-auto flex items-center">
          <Image
            src="/Daily Dose Cafe.png"
            alt="Daily Dose Cafe"
            width={60}
            height={60}
            priority
          />
        </div>
        
        <div className="flex-shrink-0 w-auto flex items-center">
          <Image
            src="/IMG-20240506-WA0005-removebg-preview.png"
            alt="Client Logo"
            width={100}
            height={60}
            priority
          />
        </div>
        
        <div className="flex-shrink-0 w-auto flex items-center">
          <Image
            src="/m cyber academy logo.png"
            alt="Cyber Academy"
            width={60}
            height={60}
            
            priority
          />
        </div>
        
        <div className="flex-shrink-0 w-auto flex items-center">
          <Image
            src="/Maharanacabs.jpg"
            alt="Maharana Cabs"
            width={160}
            height={60}
            priority
          />
        </div>
        
        <div className="flex-shrink-0 w-auto flex items-center">
          <Image
            src="/Rawat Catering.png"
            alt="Rawat Catering"
            width={120}
            height={60}
            priority
          />
        </div>
        
        <div className="flex-shrink-0 w-auto flex items-center">
          <Image
            src="/Storybags.png"
            alt="Storybags"
            width={140}
            height={60}
            priority
          />
        </div>
      </div>
    </div>
      </div>
    </>
  );
};

export default InfluencerSection;

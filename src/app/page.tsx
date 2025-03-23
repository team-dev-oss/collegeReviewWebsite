import Image from "next/image";
import InfluencerSection from "@/components/home/InfluencerSection"
import ReviewSection from "@/components/home/reviewSection"
import TeamSection from "@/components/home/teamSection";
import WhyNubiSection from "@/components/home/whySection";
import QuoteForm from "@/components/home/quoteForm";
import Footer from "@/components/footer";
import Header from "@/components/header";
export default function Home() {
  return (
   <>
   {/* <Header/> */}
   <section>
   <InfluencerSection/>
   </section>
   <section className="pt-16">
   <WhyNubiSection />
   </section>
   <section  >
   <ReviewSection/>
   </section>
   <section>
   <TeamSection/>
   </section>
   <section>
   <QuoteForm/>
   </section>
   {/* <Footer/> */}
   </>
  );
}

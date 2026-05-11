import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { Specialties } from "@/components/sections/Specialties";
import { Areas } from "@/components/sections/Areas";
import { MeetKayden } from "@/components/sections/MeetKayden";
import { NumbersDontLie } from "@/components/sections/NumbersDontLie";
import { Testimonials } from "@/components/sections/Testimonials";
import { SeeTheFullPicture } from "@/components/sections/SeeTheFullPicture";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Specialties />
        <Areas />
        <MeetKayden />
        <NumbersDontLie />
        <Testimonials />
        <SeeTheFullPicture />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { Areas } from "@/components/sections/Areas";
import { MeetKayden } from "@/components/sections/MeetKayden";
import { Specialties } from "@/components/sections/Specialties";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Areas />
        <MeetKayden />
        <Specialties />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { ContactForm } from "@/components/site/ContactForm";
import { agent, social } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Kayden",
  description: `Call, text, email, or DM Kayden Palmer. ${agent.phone} · ${agent.email}.`,
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHeader
          eyebrow="Contact"
          title="Three lines"
          italic="to Kayden."
          intro="Call goes straight to him. Text usually faster. Form below for the long version."
        />

        <section className="bg-[#0a0a0a] pb-28">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="border-t border-white/[0.08] pt-10 space-y-10">
                  <div>
                    <span className="tag-lime">Phone</span>
                    <a
                      href={agent.phoneHref}
                      className="block mt-5 display-caps text-3xl md:text-4xl text-white hover:text-lime-400 transition"
                    >
                      {agent.phone}
                    </a>
                    <p className="mt-2 font-mono text-[12px] text-white/55">
                      Answer in 15 min or less · 24/7 ok to text
                    </p>
                  </div>

                  <div>
                    <span className="tag-lime">Email</span>
                    <a
                      href={agent.emailHref}
                      className="block mt-5 display-caps text-xl md:text-2xl text-white hover:text-lime-400 transition break-all"
                    >
                      {agent.email}
                    </a>
                  </div>

                  <div>
                    <span className="tag-lime">Instagram</span>
                    <div className="mt-5 space-y-1.5">
                      <a
                        href={social.instagramBusiness.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block font-mono text-base text-white hover:text-lime-400 transition"
                      >
                        {social.instagramBusiness.handle}
                      </a>
                      <a
                        href={social.instagramPersonal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block font-mono text-base text-white/65 hover:text-lime-400 transition"
                      >
                        {social.instagramPersonal.handle}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

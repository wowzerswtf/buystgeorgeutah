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

        <section className="bg-bone pb-28">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="border-t hairline pt-8 space-y-10">
                  <div>
                    <p className="eyebrow">Phone</p>
                    <a
                      href={agent.phoneHref}
                      className="block mt-3 font-display text-4xl md:text-5xl tracking-[-0.02em] text-ink hover:text-sandstone-deep transition"
                    >
                      {agent.phone}
                    </a>
                    <p className="mt-2 font-mono text-[12px] text-ink-muted">
                      Answer in 15 min or less · 24/7 ok to text
                    </p>
                  </div>

                  <div>
                    <p className="eyebrow">Email</p>
                    <a
                      href={agent.emailHref}
                      className="block mt-3 font-display text-2xl md:text-3xl tracking-[-0.02em] text-ink hover:text-sandstone-deep transition break-all"
                    >
                      {agent.email}
                    </a>
                  </div>

                  <div>
                    <p className="eyebrow">Instagram</p>
                    <div className="mt-3 space-y-1">
                      <a
                        href={social.instagramBusiness.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block font-mono text-base text-ink hover:text-sandstone-deep transition"
                      >
                        {social.instagramBusiness.handle}
                      </a>
                      <a
                        href={social.instagramPersonal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block font-mono text-base text-ink-muted hover:text-sandstone-deep transition"
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

import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Team } from "@/components/site/Team";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Zephyr Projects Limited — Multidisciplinary Consulting & Project Management" },
      { name: "description", content: "A private consulting house operating at the intersection of strategy, capital, and the built environment. Senior-led engagements across consultancy, development, design, and capacity building." },
      { property: "og:title", content: "Zephyr Projects Limited" },
      { property: "og:description", content: "Architects of enduring enterprise value. Strategy, design, and disciplined execution." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

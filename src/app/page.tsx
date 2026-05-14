import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ResearchFocus from "@/components/ResearchFocus";
import SecurityNotes from "@/components/SecurityNotes";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ResearchFocus />
        <SecurityNotes />
        <Contact />
      </main>
    </>
  );
}

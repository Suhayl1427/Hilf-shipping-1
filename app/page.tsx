import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Business from "@/components/Business";
import WhyUs from "@/components/WhyUs";
import Teams from "@/components/Teams";
import Clients from "@/components/Clients";
import CargoFilm from "@/components/CargoFilm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Page() {
  return (
    <>
      <a href="#about" className="skip">Skip to content</a>
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <About />
        <Business />
        <WhyUs />
        <Teams />
        <Clients />
        <CargoFilm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

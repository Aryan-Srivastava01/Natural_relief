import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import CTA from "../components/Cta";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Contact from "../components/Contact";
import VideoTestimonials from "../components/VideoTestimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoTestimonials/>
      <Stats />
      <Process />
      <Products />
      <Testimonials />
      <CTA />
      <Contact/>
      <Footer />
    </>
  );
}

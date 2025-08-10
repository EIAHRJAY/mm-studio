import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import PreTestimonials from "../components/PreTestimonials";
import Program from "../components/Program";
import TestimonialsIntro from "../components/TestimonialIntro";

export default function Home() {
    return (
     <>
     <Hero/>
      <WhyUs/>
      
      <TestimonialsIntro/>
      <Program/>
      <PreTestimonials/>

      <Testimonials/>
      </>
    );
  }
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useMemo } from "react";

function TestimonialCard() {
  const testimonials = useMemo(
    () => [
      {
        quote:
          "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
        name: "Sarah Chen",
        designation: "Product Manager at TechFlow",
        src: "/imgs/testimonial-4.jpg",
      },
      {
        quote:
          "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
        name: "Michael Rodriguez",
        designation: "CTO at InnovateSphere",
        src: "/imgs/testimonial-2.jpg",
      },
      {
        quote:
          "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
        name: "Emily Watson",
        designation: "Operations Director at CloudScale",
        src: "/imgs/testimonial-3.jpg",
      },
      {
        quote:
          "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
        name: "James Kim",
        designation: "Engineering Lead at DataPro",
        src: "/imgs/testimonial-1.jpg",
      },
    ],
    []
  );

  return (
    <section aria-label="Testimonials Section">
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}

export { TestimonialCard };

"use client";

import React from "react";
import { TestimonialCard } from "./TestimonialCard";

function TestimonialSection() {
  return (
    <section className=" text-center p-7" aria-label="Testimonials Section">
      {/* Heading Section */}
      <div className="mb-10">
        <h2 className="tracking-tighter text-4xl sm:text-5xl md:text-6xl font-extrabold">
          <span className="bg-gradient-to-r from-gray-300 to-blue-600 text-transparent bg-clip-text">
            Testimonials
          </span>
        </h2>
        <p className="text-gray-300 font-semibold mt-4 max-w-xl mx-auto">
          See what our clients say
        </p>
      </div>

      {/* Testimonials */}
      <div>
        <TestimonialCard />
      </div>
    </section>
  );
}

export default TestimonialSection;

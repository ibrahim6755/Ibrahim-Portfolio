"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Define the types for Hero component props
interface HeroProps extends React.ComponentPropsWithoutRef<"section"> {
  gradient?: boolean;
  blur?: boolean;
  title: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  ({ className, gradient = true, blur = true, title, subtitle, titleClassName, subtitleClassName, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative flex min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background",
          className
        )}
        {...props}
      >
        {/* Background effects */}
        {gradient && (
          <div className="absolute top-0 isolate flex w-full items-start justify-center">
            {blur && <div className="absolute top-0 h-32 w-full bg-transparent opacity-10 backdrop-blur-md" />}
            <div className="absolute inset-auto h-12 w-[28rem] -translate-y-[-30%] rounded-full bg-primary/60 opacity-80 blur-3xl" />
            <motion.div
              initial={{ width: "8rem" }}
              whileInView={{ width: "16rem" }}
              transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              className="absolute top-0 h-24 -translate-y-[20%] rounded-full bg-primary/60 blur-2xl"
            />
            <motion.div
              initial={{ width: "15rem" }}
              whileInView={{ width: "30rem" }}
              transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              className="absolute inset-auto h-0.5 -translate-y-[-10%] bg-primary/60"
            />
          </div>
        )}

        {/* Main content */}
        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          className="absolute top-24 container flex flex-col items-center text-center px-5 md:px-10 gap-4 -translate-y-40 sm:-translate-y-48"
        >
          {/* Title */}
          <h1 className={cn("text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary", titleClassName)}>
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && <p className={cn("text-xl text-muted-foreground", subtitleClassName)}>{subtitle}</p>}
        </motion.div>
      </section>
    );
  }
);

Hero.displayName = "Hero";

export { Hero };

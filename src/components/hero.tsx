"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Define the types for Hero component props
interface HeroProps extends React.ComponentPropsWithoutRef<"section"> {
  gradient?: boolean;
  blur?: boolean;
  title: string;
  subtitle?: string;
  actions?: { label: string; href: string; variant?: "default" | "secondary" | "outline" }[];
  titleClassName?: string;
  subtitleClassName?: string;
  actionsClassName?: string;
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    { 
      className, 
      gradient = true, 
      blur = true, 
      title, 
      subtitle, 
      actions, 
      titleClassName, 
      subtitleClassName, 
      actionsClassName, 
      ...props 
    }, 
    ref
  ) => {
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
            {blur && (
              <div className="absolute top-0 h-32 w-full bg-transparent opacity-10 backdrop-blur-md" />
            )}

            {/* Main glow effect */}
            <div className="absolute inset-auto h-12 w-[28rem] -translate-y-[-30%] rounded-full bg-primary/60 opacity-80 blur-3xl" />

            {/* Lamp effect */}
            <motion.div
              initial={{ width: "8rem" }}
              whileInView={{ width: "16rem" }}
              transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              className="absolute top-0 h-24 -translate-y-[20%] rounded-full bg-primary/60 blur-2xl"
            />

            {/* Top glowing line */}
            <motion.div
              initial={{ width: "15rem" }}
              whileInView={{ width: "30rem" }}
              transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              className="absolute inset-auto h-0.5 -translate-y-[-10%] bg-primary/60"
            />

            {/* Left gradient cone */}
            <motion.div
              initial={{ opacity: 0.5, width: "15rem" }}
              whileInView={{ opacity: 1, width: "30rem" }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute right-1/2 h-56 w-[30rem] bg-gradient-conic bg-blue-400 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
            >
              <div className="absolute left-0 w-full h-40 bottom-0 bg-background [mask-image:linear-gradient(to_top,white,transparent)]" />
              <div className="absolute left-0 w-40 h-full bottom-0 bg-background [mask-image:linear-gradient(to_right,white,transparent)]" />
            </motion.div>

            {/* Right gradient cone */}
            <motion.div
              initial={{ opacity: 0.5, width: "15rem" }}
              whileInView={{ opacity: 1, width: "30rem" }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent bg-blue-400 [--conic-position:from_290deg_at_center_top]"
            >
              <div className="absolute right-0 w-40 h-full bottom-0 bg-background [mask-image:linear-gradient(to_left,white,transparent)]" />
              <div className="absolute right-0 w-full h-40 bottom-0 bg-background [mask-image:linear-gradient(to_top,white,transparent)]" />
            </motion.div>
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
          <h1
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary",
              titleClassName
            )}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className={cn("text-xl text-muted-foreground", subtitleClassName)}>
              {subtitle}
            </p>
          )}

          {/* Action buttons
          {actions && actions.length > 0 && (
            <div className={cn("flex flex-wrap justify-center gap-4", actionsClassName)}>
              {actions.map((action, index) => (
                <Button key={index} variant={action.variant || "default"} asChild>
                  <Link href={action.href}>{action.label}</Link>
                </Button>
              ))}
            </div>
          )} */}
        </motion.div>
      </section>
    );
  }
);

Hero.displayName = "Hero";

export { Hero };

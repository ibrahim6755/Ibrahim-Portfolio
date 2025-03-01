import About from "./my-components/About";
import { Footer } from "./my-components/Footer";
import MyNavbar from "./my-components/MyNavbar";
import ProjectSection from "./my-components/ProjectSection";
import TestimonialSection from "./my-components/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container max-w-screen-xl w-full mx-auto px-4 md:px-12 min-h-screen">
      {/* Navbar */}
      <header>
        <nav className="flex flex-col md:flex-row items-center justify-between py-6">
          <div className="my-info">
            <h2 className="font-bold text-3xl bg-gradient-to-r from-gray-300 to-blue-600 text-transparent bg-clip-text">
              Ibrahim Ghani
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <MyNavbar />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row py-24 items-center justify-between" aria-label="Hero Section">
        {/* Left Side */}
        <div className="left w-full md:w-2/4 text-center md:text-left">
          <h1 className="tracking-tighter text-4xl md:text-6xl font-extrabold">
          {`I'm a Web Developer`}
          </h1>
          <h1 className="tracking-tighter text-4xl md:text-6xl font-extrabold mt-[2px] md:mt-[-1px]">
            that{" "}
            <span className="bg-gradient-to-r from-gray-300 to-blue-600 text-transparent bg-clip-text">
              writes code.
            </span>
          </h1>
          <p className="my-6 md:my-8 text-sm md:text-md text-gray-200">
            Meet Ibrahim Ghani, a web developer who can turn caffeine into clean
            and functional designs. Passionate about both coding and finding the
            perfect GIF to express excitement.
          </p>
          <p className="text-gray-200 font-bold text-sm md:text-base">
            Building web sample templates when not working on any project.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="right flex justify-center md:justify-end mt-10 md:mt-0">
          <Image
            src="/imgs/hero.png"
            alt="Ibrahim Ghani - Web Developer"
            width={400}
            height={400}
            priority
            loading="eager"
            className="drop-shadow-[0px_10px_30px_rgba(96,165,250,0.8)] rounded-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 about" aria-label="About Section">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 projects flex flex-col items-center justify-around" aria-label="Projects Section">
        <ProjectSection />
      </section>

      {/* Testimonials Section */}
      <section className="py-16 projects flex flex-col items-center justify-around" aria-label="Testimonials Section">
        <TestimonialSection />
      </section>

      {/* Footer */}
      <footer id="footer" className="py-6">
        <Footer />
      </footer>
    </main>
  );
}

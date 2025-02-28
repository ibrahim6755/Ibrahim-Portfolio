import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

function About() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 p-8 md:p-0">
      
      {/* Left Section - Optimized Image */}
      <div className="left hidden md:block w-full md:w-1/2">
        <Image
          className="w-[80%] md:w-[500px] mx-auto rounded-lg"
          src="/imgs/about.png"
          alt="About Ibrahim Ghani - Web Developer"
          width={500}
          height={500}
          priority
        />
      </div>

      {/* Right Section - Accordion */}
      <div className="right w-full md:w-1/2 text-center">
        <h1 className="tracking-tighter text-4xl md:text-[60px] font-extrabold mt-[-10px] md:mt-[-28px] mb-10">
          <span className="bg-gradient-to-r from-gray-300 to-blue-600 text-transparent bg-clip-text">
            About
          </span>
        </h1>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg md:text-base">Qualification</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Doing Bachelors in Software Engineering from CUST
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg md:text-base">Certification</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              <div className="space-y-2">
                <p>Certified Frontend Developer from Super Tech Institute</p>
                <p>Certified FullStack Web Developer from Super Tech Institute</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg md:text-base">Languages</AccordionTrigger>
            <AccordionContent className="flex flex-wrap justify-center gap-4 text-gray-300">
              {["HTML", "CSS", "JavaScript"].map((lang) => (
                <p key={lang} className="bg-gray-800 px-3 py-1 rounded-md">{lang}</p>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg md:text-base">Skills</AccordionTrigger>
            <AccordionContent className="flex flex-wrap justify-center gap-4 text-gray-300">
              {["Web Designing", "Static Web Development", "Dynamic Web Development"].map((skill) => (
                <p key={skill} className="bg-gray-800 px-3 py-1 rounded-md">{skill}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default About;

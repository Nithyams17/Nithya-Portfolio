"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Box = ({ img, text, subtext, className, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className={`relative rounded-xl overflow-hidden ${className} hover:scale-105 hover:rotate-y-12 hover:shadow-2xl hover:shadow-black/50 transition-all duration-500 cursor-pointer`}
      style={{ height: "300px", perspective: "1000px" }}
    >
      {img && (
        <Image
          src={img}
          alt="img"
          fill={true}
          style={{ objectFit: 'cover' }}
          className={`rounded-xl transition-all duration-1000 ${isVisible ? 'blur-sm' : 'blur-none'}`}
        />
      )}

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-black/40 text-white dark:text-white transition-all duration-500 hover:bg-black/20">
        {text && (
          <h2
            className={`text-lg font-semibold mb-2 hover:text-yellow-300 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-4 blur-md'
            }`}
          >
            {text}
          </h2>
        )}
        {subtext && (
          <p
            className={`text-sm text-gray-200 hover:text-gray-100 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-4 blur-md'
            }`}
          >
            {subtext}
          </p>
        )}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Skills() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("nithyagowdaa1727@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Box
          img="/b1.svg"
          text="I prioritize client collaboration, fostering open communication"
          className="md:col-span-2"
        />

        <Box
          img="/glob.webp"
          text="I'm flexible with time zone communications"
        />
<Box
  img="/tech.webp"
  text="I constantly strive to improve"
>
  <div className="mt-4">
    <h3 className="text-sm mb-1">My tech stack</h3>
    <div className="flex flex-wrap gap-2 justify-center">
      {[
        "ReactJS",
        "Express",
        "Typescript",
        "NextJS",
        "Native",
        "Mobile",
      ].map((tech, i) => (
        <span
          key={i}
          className="bg-purple-600/30 text-white dark:text-purple-300 text-xs px-2 py-1 rounded-md"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
</Box>


        <Box
          img="/team.webp"
          text="Tech enthusiast with a passion for development."
        />

        <Box
          img="/dev.webp"
          text="The Inside Scoop"
          subtext="Currently building on JS Animation and Real Time Communication."
        />
      </div>

      {/* CTA section */}
      <div className="w-full mt-10 bg-gradient-to-r from-purple-600 to-indigo-600 flex justify-center items-center py-16 rounded-xl transition-all duration-500 ease-in-out">
        <div className="w-full max-w-3xl px-6 text-center text-white flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6">
            Do you want to start a project together?
          </h2>
          <button
            onClick={handleCopy}
            className={`relative bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition-all duration-300 transform ${
              copied ? "scale-110 bg-green-400" : "hover:scale-105"
            }`}
          >
            {copied ? (
              <span className="text-green-800">Email Copied!</span>
            ) : (
              "Copy my email address"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

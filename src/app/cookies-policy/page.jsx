'use client';

import dynamic from 'next/dynamic';
import { ThumbsUp } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MotionDiv = dynamic(() => import('framer-motion').then((m) => m.motion.div), {
  ssr: false,
});
const MotionH1 = dynamic(() => import('framer-motion').then((m) => m.motion.h1), {
  ssr: false,
});
const MotionP = dynamic(() => import('framer-motion').then((m) => m.motion.p), {
  ssr: false,
});
const MotionImg = dynamic(() => import('framer-motion').then((m) => m.motion.img), {
  ssr: false,
});

const LikeButton = () => { 
  const [liked, setLiked] = useState(false);

  return (
    <button
      className={`absolute bottom-6 right-6 p-2 rounded-full shadow-lg bg-blue-700 text-white transition-all ${
        liked ? "text-blue-600 scale-110" : "text-gray-500 hover:scale-110"
      }`}
      onClick={() => setLiked(!liked)}
    >
      <ThumbsUp className="w-6 h-6" />
    </button>
  );
};


export default function Home() {
  return (
    <div className="h-auto mx-0 py-0 sm:pt-8">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Cookies Policy Content */}
      <MotionDiv
        className="w-full max-w-[90%] md:max-w-[75%] mx-auto mt-10 md:mt-50 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <MotionH1
          className="text-3xl md:text-[70px] font-bold text-[#0c005b] mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Cookies Policy
        </MotionH1>

        <MotionP
          className="text-sm md:text-[16px] text-gray-700 mb-6 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          At Welcome Card, we are committed to protecting and respecting your privacy.
          We are also committed to being transparent about how we collect, process, share,
          and manage your personal data when you visit our website or use any of our channels
          or applications.
        </MotionP>

        <MotionP
          className="text-[#5a00a1] font-light mb-6 md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Last updated: 2nd December 2022
        </MotionP>

        {/* Image with Like Button */}
        <MotionDiv className="relative flex justify-center">
          <MotionImg
            src="two-business.jpg"
            alt="Cookies Policy"
            className="w-full mt-4 md:mt-10 rounded-lg"
          />
          <LikeButton />
        </MotionDiv>

        <div className="mt-10 md:mt-50">
          <h2 className="text-lg md:text-[20px] font-semibold text-[#0c005b] mb-3 md:mb-4">
            Cookies: What are they?
          </h2>
          <p className="text-sm md:text-[16px] text-gray-700 leading-relaxed md:leading-[2em] mb-6 md:mb-10">
            A "cookie" is a small text file that is stored on your computer, tablet or phone when you visit a website.
            Some cookies are deleted when you close your browser. These are known as session cookies.
            Others remain on your device until they expire, or you delete them from your cache. These are known as
            persistent cookies and enable us to remember things about you as a returning visitor.
            To find out more about cookies, visit
            <a href="https://www.allaboutcookies.org" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              {" "}https://www.allaboutcookies.org
            </a>.
          </p>
        </div>

        <div>
          <h2 className="text-lg md:text-[20px] font-semibold text-[#0c005b] mb-3 md:mb-4">
            Cookies - how we use them
          </h2>
          <p className="text-sm text-gray-700 mb-3 md:mb-4">
            If you delete cookies relating to this website we will not remember things about you, including your cookie preferences,
            and you will be treated as a first-time visitor the next time you visit the site.
            We use cookies (and other similar technologies) to:
          </p>
          <ul className="list-disc list-outside space-y-2">
            <li>Provide products and services that you request and to provide a secure online environment</li>
            <li>Manage our marketing relationships.</li>
            <li>Improve the performance of our services</li>
            <li>Help us decide which of our products, services and offers may be relevant for your need.</li>
            <li>Give you a better online experience and track website performance</li>
            <li>Help us make our website more relevant to you.</li>
          </ul>
        </div>
      </MotionDiv>

      <Footer />
    </div>
  );
}

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I fund my card?",
      answer: "You can fund your card at Welcome Card kiosk. We will be partnering with several outlets within cities to make funding closer to our users.",
    },
    {
      question: "Can I order a card before traveling to my new destination country?",
      answer: "No, the card is waiting for you at your destination country. Lookout for a Welcome Card kiosk to register and fund your card.",
    },
    {
      question: "How can I manage my card?",
      answer: "You can activate and block your Welcome card on the mobile App. You can also set PIN and reset PIN on the App. Kindly check the settings on the App.",
    },
    {
      question: "Are there top-up limits?",
      answer: "Top-up is in line with anti-fraud limits per currency in the destination country. For example, daily top-up limit in the UK is less than £10,000 and in the USA less than $10,000 or its equivalence.",
    },
    {
      question: "Can I reuse my card after leaving my destination country?",
      answer: "You can only reuse the card if it has not expired and is still funded by the time you visit the same destination country again.",
    },
    {
      question: "What happens if I misplace my card?",
      answer: "Go into the mobile app and block the card. This function will make the card inactive and keep your funds secured.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="flex flex-col items-center mt-16 lg:mt-40 px-4">
      <div className="w-full max-w-[90%] sm:max-w-[75%] text-left sm:text-center ">
        <h2 className="text-[24px] sm:text-[32px] md:text-[50px] font-black text-[#0c005b]">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 bg-white shadow-lg rounded-xl p-4 sm:p-5 tracking-wide w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-2">
              <div
                className={`cursor-pointer px-4 py-3 rounded-xl transition-all duration-300 ${
                  openIndex === index ? "bg-[#f5f6ff] text-[#0c005b] font-bold" : "bg-white text-[#0c005b]"
                }`}
                onClick={() => toggleAnswer(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-lg font-bold">{faq.question}</span>
                  <button className="text-xl sm:text-2xl font-bold cursor-pointer">
                    {openIndex === index ? "−" : "+"}
                  </button>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, scaleY: 0 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      exit={{ opacity: 0, scaleY: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden bg-[#f5f6ff] text-[#0c005b] mt-2 rounded-b-xl px-2 py-2"
                    >
                      <p className="text-sm sm:text-base leading-relaxed font-light text-black text-left">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

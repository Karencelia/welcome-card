export default function FAQ() {
    return (
      <div id="faq" className="flex flex-col items-center mt-16 px-4">
        {/* FAQ Section */}
        <div className="w-full max-w-[90%] sm:max-w-[75%] text-center">
          <h2 className="text-[24px] sm:text-[32px] md:text-[36px] font-black text-[#0c005b]">
            Frequently Asked Questions
          </h2>
  
          {/* FAQ Container */}
          <div className="mt-8 bg-white shadow-lg rounded-xl p-4 sm:p-5 w-full">
            {[
              "How can I fund my card?",
              "Can I order a card before traveling to my new destination country?",
              "How can I manage my card?",
              "Are there top-up limits?",
              "Can I reuse my card after leaving my destination country?",
              "What happens if I misplace my card?",
            ].map((question, index) => (
              <div
                key={index}
                className="py-3 sm:py-4 flex justify-between items-center"
              >
                <span className="text-sm sm:text-lg font-semibold text-[#0c005b]">
                  {question}
                </span>
                <button className="text-black text-xl sm:text-2xl font-bold">
                  +
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
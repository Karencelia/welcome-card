export default function FAQ() {
    return(
        <div className="flex flex-col items-center mt-20">
            {/* FAQ Section */}
    <div className="mt-40 px-10 w-full max-w-[70%] text-center">
        <h2 className="text-[36px] font-black text-[#0c005b]">Frequently Asked Questions</h2>

        <div className="mt-10 bg-white shadow-lg rounded-lg p-5">
            <div className="py-4 flex justify-between items-center">
                <span className="text-lg font-semibold text-[#0c005b]">How can I fund my card?</span>
                <button className="text-black text-2xl font-bold">+</button>
            </div>

            <div className="py-4 flex justify-between items-center">
                <span className="text-lg font-semibold text-[#0c005b]">Can I order a card before traveling to my new destination country?</span>
                <button className="text-black text-2xl font-bold">+</button>
            </div>

            <div className="py-4 flex justify-between items-center">
                <span className="text-lg font-semibold text-[#0c005b]">How can I manage my card?</span>
                <button className="text-black text-2xl font-bold">+</button>
            </div>

            <div className="py-4 flex justify-between items-center">
                <span className="text-lg font-semibold text-[#0c005b]">Are there top-up limits?</span>
                <button className="text-black text-2xl font-bold">+</button>
            </div>

            <div className="py-4 flex justify-between items-center">
                <span className="text-lg font-semibold text-[#0c005b]">Can I reuse my card after leaving my destination country?</span>
                <button className="text-black text-2xl font-bold">+</button>
            </div>

            <div className="py-4 flex justify-between items-center">
                <span className="text-lg font-semibold text-[#0c005b]">What happens if I misplace my card?</span>
                <button className="text-black text-2xl font-bold">+</button>
            </div>
        </div>
    </div>

        </div>
    );
}
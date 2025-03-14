export default function Features() {
    return (
        <div className="flex flex-col items-center mt-20">
            <img src="image-2.webp" alt="World Travel Landmarks" className="w-[65%] mt-20 rounded-[10px] shadow-[8px_8px_0_0_#ff5781]" />

            <div className="text-center mt-20">
                <h2 className="text-[36px] font-black text-[#0c005b]">Get your Card in 3 Steps</h2>
            </div>

            {/* Steps Grid - Keep 3 columns on desktop, stack on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 justify-center items-stretch mt-12 px-6 md:px-32">
                {/* Step 1 */}
                <div className="border-4 border-[#0c005b] rounded-2xl p-6 text-left w-full md:max-w-[300px] min-h-[250px]">
                    <img src="Group-3607.svg" alt="Locate Kiosk" width={50} className="mb-4" />
                    <h3 className="text-2xl font-black text-[#0c005b]">Locate our Kiosk</h3>
                    <p className="text-[#333] mt-3 leading-relaxed">
                        Immediately arriving at your destination country, visit a welcome card kiosk close to you in any airport.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="border-4 border-[#0c005b] rounded-2xl p-6 text-left w-full md:max-w-[300px] min-h-[250px]">
                    <img src="Group-3608.svg" alt="Register" width={50} className="mb-4" />
                    <h3 className="text-2xl font-black text-[#0c005b]">Register</h3>
                    <p className="text-[#333] mt-3 leading-relaxed">
                        Fill in your details and get your physical card.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="border-4 border-[#0c005b] rounded-2xl p-6 text-left w-full md:max-w-[300px] min-h-[250px]">
                    <img src="Group-3609.svg" alt="Fund Account" width={50} className="mb-4" />
                    <h3 className="text-2xl font-black text-[#0c005b]">Fund your account</h3>
                    <p className="text-[#333] mt-3 leading-relaxed">
                        Fund your new card with dollars and get the equivalent amount in the local currency of your destination country.
                    </p>
                </div>
            </div>

            {/* iPhone Mockup & Text - iPhone at the top on mobile, side-by-side on desktop */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-20 px-4 md:px-10 w-full">
                {/* iPhone Mockup */}
                <div className="relative w-full flex justify-center">
                    <img src="iphone-mockup-cards.webp" alt="iPhone Mockup" width={550} />
                </div>

                {/* Text Section */}
                <div className="text-center md:text-left max-w-[600px]">
                    <h2 className="text-[40px] font-black text-[#0c005b]">Your transactions in one app!</h2>
                    <p className="text-[#333] mt-4 text-lg">
                        Get instant updates on your financial activities and balance after a transaction. No wait time - move on to the next transaction.
                    </p>

                    {/* Features List */}
                    <div className="mt-6 space-y-4">
                        <div className="flex items-center gap-3">
                            <img src="check.svg" width="20" alt="Check" />
                            <span className="text-lg font-semibold text-[#0c005b]">Transparent transaction activity</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="check.svg" width="20" alt="Check" />
                            <span className="text-lg font-semibold text-[#0c005b]">100% security guaranteed</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="check.svg" width="20" alt="Check" />
                            <span className="text-lg font-semibold text-[#0c005b]">No wait time - instant transaction reflection</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

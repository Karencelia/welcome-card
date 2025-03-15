export default function Features() {
    return (
        <div id="features" className="flex flex-col items-center mt-16">
            {/* Main Image */}
            <img src="image-2.webp" 
                alt="World Travel Landmarks" 
                className="w-[65%] mt-10 rounded-[10px] shadow-[8px_8px_0_0_#ff5781]" 
            />

            {/* Title */}
            <div className="text-center mt-12">
                <h2 className="text-[32px] md:text-[36px] font-black text-[#0c005b]">Get your Card in 3 Steps</h2>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 justify-center items-center mt-8 px-4 md:px-20">
                {[
                    { img: "Group-3607.svg", title: "Locate our Kiosk", text: "Immediately arriving at your destination country, visit a welcome card kiosk close to you in any airport." },
                    { img: "Group-3608.svg", title: "Register", text: "Fill in your details and get your physical card." },
                    { img: "Group-3609.svg", title: "Fund your account", text: "Fund your new card with dollars and get the equivalent amount in the local currency of your destination country." }
                ].map((step, index) => (
                    <div key={index} className="border-4 border-[#0c005b] rounded-2xl p-5 text-left w-full md:max-w-[280px] min-h-[220px] flex flex-col">
                        <img src={step.img} alt={step.title} width={45} className="mb-3" />
                        <h3 className="text-xl font-black text-[#0c005b]">{step.title}</h3>
                        <p className="text-[#333] mt-2 text-sm leading-relaxed">{step.text}</p>
                    </div>
                ))}
            </div>

            {/* iPhone Mockup & Text - Adjusted for Better Centering */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mt-16 px-4 w-full max-w-[1000px] mx-auto">
                {/* iPhone Mockup */}
                <div className="w-full md:w-[50%] flex justify-end">
                    <img src="iphone-mockup-cards.webp" alt="iPhone Mockup" width={420} className="md:w-auto" />
                </div>

                {/* Text Section */}
                <div className="text-center md:text-left w-full md:w-[50%] max-w-[450px]">
                    <h2 className="text-[32px] md:text-[34px] font-black text-[#0c005b] leading-tight">
                        Your transactions in one app!
                    </h2>
                    <p className="text-[#333] mt-3 text-base text-left">
                        Get instant updates on your financial activities and balance after a transaction. No wait time - move on to the next transaction.
                    </p>

                    {/* Features List */}
                    <div className="mt-4 space-y-3">
                        {[
                            "Transparent transaction activity",
                            "100% security guaranteed",
                            "No wait time - instant transaction reflection"
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <img src="check.svg" width="18" alt="Check" />
                                <span className="text-base font-semibold text-[#0c005b]">{feature}</span>
                            </div> 
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

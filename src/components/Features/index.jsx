export default function Features() {
    return (
        <div id="features" className="flex flex-col items-center px-4">
            <div className="text-center mt-16 lg:mt-40">
                <h2 className="text-[32px] md:text-[46px] font-black text-[#0c005b] tracking-tight">
                    Get your Card in 3 Steps
                </h2>
            </div>

            <div className="w-[75%] flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-stretch mt-8 w-full">
                    {[
                        { img: "Group-3607.svg", title: "Locate our Kiosk", text: "Immediately arriving at your destination country, visit a welcome card kiosk close to you in any airport." },
                        { img: "Group-3608.svg", title: "Register", text: "Fill in your details and get your physical card." },
                        { img: "Group-3609.svg", title: "Fund your account", text: "Fund your new card with dollars and get the equivalent amount in the local currency of your destination country." }
                    ].map((step, index) => (
                        <div key={index} className="border-4 border-[#0c005b] rounded-2xl p-8 text-left w-full min-h-[320px] flex flex-col">
                            <img src={step.img} alt={step.title} width={55} className="mb-4" />
                            <h3 className="text-xl font-black text-[#0c005b]">{step.title}</h3>
                            <p className="text-[#333] mt-2 text-base leading-relaxed flex-grow">{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-center mt-40 px-4 md:px-12 lg:px-20">
                <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full flex justify-center">
                        <img 
                            src="iphone-mockup-cards.webp" 
                            alt="iPhone Mockup" 
                            className="w-[90%] md:w-[500px] lg:w-[600px]" 
                        />
                    </div>

                    <div className="text-left w-full">
                        <h2 className="text-[38px] md:text-[46px] font-black text-[#0c005b] leading-tight">
                            Your transactions in one app!
                        </h2>
                        <p className="text-lg md:text-xl text-[#333] mt-3">
                            Get instant updates on your financial activities and balance after a transaction done locally. No wait time - move on to the next transaction.
                        </p>

                        <div className="mt-6 space-y-4">
                            {[
                                "Transparent transaction activity",
                                "100% security guaranteed",
                                "No wait time - instant transaction reflection"
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <img src="check.svg" width={22} alt="Check" />
                                    <span className="text-lg md:text-xl font-light text-[#0c005b]">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

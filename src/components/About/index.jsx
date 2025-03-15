export default function About() {
    return (
        <div id="about" className="flex flex-col items-center mt-16 lg:mt-10 px-4">
            {/* Main Image */}
            <img src="image-1.webp" alt="World Travel Landmarks" className="w-[90%] lg:w-[65%] rounded-[10px] shadow-[8px_8px_0_0_#5a00a1]" />

            {/* Content Wrapper (Same width as image) */}
            <div className="w-[90%] lg:w-[65%] mt-8 lg:mt-10 space-y-12 lg:space-y-16">
                {/* Travel Section */}
                <div className="flex flex-col gap-4 lg:gap-6">
                    <div className="flex flex-col p-3 rounded-xl">
                        <img src="travel.svg" alt="Travel Icon" width={40} className="lg:w-[45px]" />
                    </div>
                    <div>
                        <h3 className="text-[24px] lg:text-[30px] font-black text-[#0c005b]">Travel without worry.</h3>
                        <p className="text-base lg:text-lg text-[#333] mt-2">
                            We love a good story and even better a good traveling experience. Experience the best while visiting a
                            new country with an easy way to pay and make transactions.
                        </p>
                    </div>
                </div>

                {/* Payment Section */}
                <div className="flex flex-col gap-4 lg:gap-6 mt-20 lg:mt-60">
                    <div className="p-3 rounded-xl">
                        <img src="MONEY.svg" alt="Payment Icon" width={40} className="lg:w-[45px]" />
                    </div>
                    <div>
                        <h3 className="text-[24px] lg:text-2xl font-black text-[#0c005b]">Pay without limits.</h3>
                        <p className="text-base lg:text-lg text-[#333] mt-2">
                            With no limitation to your credit balance score, you get to buy, shop, pay, and enjoy the luxury of
                            traveling to a new destination without any payment limitations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

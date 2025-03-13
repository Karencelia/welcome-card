export default function About() {
    return (
        <div className="flex flex-col items-center mt-20">
            <img src="image-1.webp" alt="World Travel Landmarks" className="w-[65%] rounded-[10px] shadow-[8px_8px_0_0_#5a00a1]" />

            <div className="w-[65%] mt-10 space-y-16">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col p-3 rounded-xl">
                        <img src="travel.svg" alt="Travel Icon" width={45} />
                    </div>
                    <div>
                        <h3 className="text-[30px] font-black text-[#0c005b]">Travel without worry.</h3>
                        <p className="text-lg text-[#333] text-[16px] mt-2">
                            We love a good story and even better a good traveling experience; experience the best while visiting a
                            new country with an easy way to pay and make transactions.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-6 mt-60">
                    <div className="p-3 rounded-xl">
                        <img src="MONEY.svg" alt="Payment Icon" width={45} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-[#0c005b]">Pay without limits.</h3>
                        <p className="text-lg text-[#333333] text-[16px] mt-2">
                            With no limitation to your credit balance score, you get to buy, shop, pay and enjoy the luxury of
                            traveling to a new destination without any payment limitations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
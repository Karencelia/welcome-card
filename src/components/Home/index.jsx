import Navbar from "@/components/Navbar/index";
import About from "@/components/About/index";
import Features from "@/components/Features/index";
import FAQ from "@/components/FAQ/index";
import Footer from "@/components/Footer/index";

export default function Home() {
    return (
        <div className="h-auto mx-0 py-8">
            <Navbar />

            {/* Hero Section */}
            <div className="flex justify-between items-center mt-20 relative">

                {/* Left Side Image */}
                <div className="relative mb-[25px]">
                    <img src="5569310.webp" alt="" width={150} className="absolute left-[30px]" />
                    <img src="bag-image.webp" width={310} alt="" className="relative top-4 left-[80px] z-10" />
                </div>

                {/* Centered Text */}
                <div className="flex flex-col items-center text-center w-[600px] mt-10">
                    <h1 className="text-[62px] text-[#0c005b] font-black leading-normal mb-6">
                        Pay like a local wherever you go!
                    </h1>
                    <p className="text-[#0c005b] mt-4 text-lg">
                        Making travel local, we aim to give travelers financial certainty and assurance in their financial transactions.
                    </p>
                    <button className="mt-6 bg-[#5a00a1] text-white px-8 py-3 text-lg rounded-full font-bold">
                        Get a Card for Free!
                    </button>
                </div>

                {/* Right Side Image */}
                <div className="relative">
                    <img src="Map.png" alt="" width={210} className="absolute bottom-[55px] left-[25px]" />
                    <img src="Plane.webp" alt="" width={250} className="relative right-20 bottom-[40px] z-10" />
                </div>
            </div>

            <div className="flex justify-center items-center mt-20">
                <img src="center-image-final.webp" alt="World Travel Landmarks" className="w-[72%]" />
            </div>

            <div className="text-center mt-20">
                <h2 className="text-[40px] font-black text-[#0c005b]">Try our App</h2>
                <p className="text-[#333333] mt-4 text-lg w-[70%] mx-auto">
                    With no limitation to your credit balance score, you get to buy, shop, pay, and enjoy.
                </p>

                <div className="flex justify-center gap-6 mt-6">
                    <img src="icon_App-Store_2.png" alt="Download on the App Store" className="w-[180px]" />
                    <img src="icon_Google-Play_2.png" alt="Get it on Google Play" className="w-[180px]" />
                </div>
            </div>

            <About />
            <Features />
            <FAQ />
            <Footer />

        </div>
    );
}
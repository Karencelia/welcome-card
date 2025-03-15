import Navbar from "@/components/Navbar/index";
import About from "@/components/About/index";
import Features from "@/components/Features/index";
import FAQ from "@/components/FAQ/index";
import Footer from "@/components/Footer/index";

export default function Home() {
    return (
        <div className="h-auto mx-0 py-8">
            <header>
            <Navbar />
            </header>

            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center mt-10 lg:mt-20 relative px-4">
                
                {/* Left Side Image - Hidden on Small Screens */}
                <div className="relative mb-[25px] hidden lg:block">
                    <img src="5569310.webp" alt="" width={150} className="absolute left-[30px]" />
                    <img src="bag-image.webp" width={310} alt="" className="relative top-4 left-[80px] z-10" />
                </div>

                {/* Centered Text */}
                <div className="flex flex-col items-center text-center w-full lg:w-[600px] mt-6 lg:mt-10">
                    <h1 className="text-[36px] lg:text-[62px] text-[#0c005b] font-black leading-snug lg:leading-normal mb-4 lg:mb-6 pay">
                        Pay like a local wherever you go!
                    </h1>
                    <p className="text-[#0c005b] mt-2 lg:mt-4 text-base lg:text-lg w-[90%] lg:w-full">
                        Making travel local, we aim to give travelers financial certainty and assurance in their financial transactions.
                    </p>
                    <button className="mt-4 lg:mt-6 bg-[#5a00a1] text-white px-6 lg:px-8 py-2 lg:py-3 text-sm lg:text-lg rounded-full font-bold">
                        Get a Card for Free!
                    </button>
                </div>

                {/* Right Side Image - Hidden on Small Screens */}
                <div className="relative hidden lg:block">
                    <img src="Map.png" alt="" width={210} className="absolute bottom-[55px] left-[25px]" />
                    <img src="Plane.webp" alt="" width={250} className="relative right-20 bottom-[40px] z-10" />
                </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center items-center mt-10 lg:mt-10">
                <img src="center-image-final.webp" alt="World Travel Landmarks" className="w-[90%] lg:w-[72%]" />
            </div>

            {/* App Section */}
            <div className="text-center mt-10 lg:mt-20 px-4">
                <h2 className="text-[28px] lg:text-[40px] font-black text-[#0c005b]">Try our App</h2>
                <p className="text-[#333333] mt-2 lg:mt-4 text-sm lg:text-lg w-[90%] lg:w-[70%] mx-auto">
                    With no limitation to your credit balance score, you get to buy, shop, pay, and enjoy.
                </p>

                {/* App Store & Play Store Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-4 lg:mt-6">
                    <img src="icon_App-Store_2.png" alt="Download on the App Store" className="w-[150px] lg:w-[180px]" />
                    <img src="icon_Google-Play_2.png" alt="Get it on Google Play" className="w-[150px] lg:w-[180px]" />
                </div>
            </div>

            {/* Additional Sections */}
            <About />
            <Features />
            <FAQ />
            <Footer />
        </div>
    );
}

import Navbar from "@/components/Navbar/index";
import Footer from "@/components/Footer/index";

export default function Home() {
    return (
        <div className="h-auto py-8">
            {/* Navbar */}
            <Navbar />

            {/* Cookies Policy Content */}
            <div className="w-full max-w-[75%] mx-auto mt-50 px-4">
                <h1 className="text-[70px] font-bold text-[#0c005b] mb-6">Cookies Policy</h1>

                <p className="text-[16px] text-gray-700 mb-10">
                    At Welcome Card, we are committed to protecting and respecting your privacy.
                    We are also committed to being transparent about how we collect, process, share,
                    and manage your personal data when you visit our website or use any of our channels
                    or applications.
                </p>

                <p className="text-[#5a00a1] font-light mb-8">Last updated: 2nd December 2022</p>

                <div className="flex justify-center">
                    <img
                        src="two-business.jpg"
                        alt="Cookies Policy"
                        className="w-full mt-10 rounded-lg"
                    />
                </div>

                {/* Cookies: What are they? Section */}
                <div className="mt-50">
                    <h2 className="text-[20px] font-semibold text-[#0c005b] mb-4">Cookies: What are they?</h2>
                    <p className="text-[16px] text-gray-700 leading-[2em] mb-10">
                        A "cookie" is a small text file that is stored on your computer, tablet or phone when you visit a website.
                        Some cookies are deleted when you close your browser. These are known as session cookies.
                        Others remain on your device until they expire, or you delete them from your cache. These are known as
                        persistent cookies and enable us to remember things about you as a returning visitor.
                        To find out more about cookies, including how to see what cookies have been set and how to manage and delete them,
                        visit <a href="https://www.allaboutcookies.org" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://www.allaboutcookies.org</a>.
                        By clicking and opening this link you are migrating from the Welcome Card's secure site to a third-party website.
                        We make no representation as to the security features on the site or the level of security available on the site.
                        It is your responsibility to protect your device or system through which you access the third party's website.
                        Alternatively, you can search the internet for other independent information on cookies.
                    </p>
                </div>

                {/* Cookies - how we use them Section */}
                <div>
                    <h2 className="text-[20px] font-semibold text-[#0c005b] mb-4">Cookies - how we use them</h2>
                    <p className="text-base text-gray-700 mb-4">
                        If you delete cookies relating to this website we will not remember things about you, including your cookie preferences,
                        and you will be treated as a first-time visitor the next time you visit the site.
                        We use cookies (and other similar technologies) to:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Provide products and services that you request and to provide a secure online environment</li>
                        <li>Manage our marketing relationships.</li>
                        <li>Improve the performance of our services</li>
                        <li>Help us decide which of our products, services and offers may be relevant for your need.</li>
                        <li>Give you a better online experience and track website performance</li>
                        <li>Help us make our website more relevant to you.</li>
                    </ul>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}
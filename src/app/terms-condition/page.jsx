import Navbar from "@/components/Navbar/index";
import Footer from "@/components/Footer/index";

export default function Home() {
    return (
        <div className="h-auto py-8">
            {/* Navbar */}
            <Navbar />

            {/* Cookies Policy Content */}
            <div className="w-full max-w-[75%] mx-auto mt-50 px-4">
                <h1 className="text-[70px] font-bold text-[#0c005b] mb-6">Terms & Conditions</h1>

                <p className="text-[16px] text-gray-700 mb-10">
                Please read these terms and conditions ("terms and conditions", "terms") carefully before using Mobile App or website (“website”, "service") 
                operated by Welcome Finance Group/Welcome Card ("Company,us", 'we", "our").
                </p>

                <p className="text-[#5a00a1] font-light mb-8">Last updated: 2nd December 2022</p>

                <div className="flex justify-center">
                    <img
                        src="smart-phone-security.jpg"
                        alt="Secuity Mobile"
                        className="w-full mt-10 rounded-lg"
                    />
                </div>

                {/* Cookies: What are they? Section */}
                <div className="mt-50">
                    <h2 className="text-[20px] font-semibold text-[#0c005b] mb-4">CONDITIONS OF USE</h2>
                    <p className="text-[16px] text-gray-700 leading-[2em] mb-4">
                    By using this service, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the Mobile App or website accordingly. Welcome Finance Group/Welcome Card only grants use and
                     access of this service, its products, to those who have accepted its terms.
                    </p>
                </div>

                {/* Cookies - how we use them Section */}
                <div>
                    <h2 className="text-[20px] font-semibold text-[#0c005b] mb-4">‍
                    PRIVACY POLICY</h2>
                    <p className="text-base text-gray-700 mb-4">
                    Before you continue using our service, we advise you to read the privacy policy of your destination country regarding user data collection. It will help you better understand our practices.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-[20px] font-semibold text-[#0c005b] mb-4">AGE RESTRICTION</h2>
                    <p className="text-base text-gray-700 mb-4">
                    You must beat least 18 (eighteen) years of age before you can use this service. By using this service, you warrant that you are at least 18 years of age and you may legally adhere to this Agreement. We assume no responsibility for liabilities related to age misrepresentation.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-[20px] font-semibold text-[#0c005b] mb-4">INTELLECTUAL PROPERTY</h2>
                    <p className="text-base text-gray-700 mb-4">
                    You agree that all materials, products, provided on this service are the property of Welcome Finance Group/Welcome Card, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the intellectual property in any way,
                     including electronic, digital, or new trademark registrations.
                    </p>
                    <p className="text-base text-gray-700 mt-4 mb-4">
                    You grant Welcome Finance Group/Welcome Card  a royalty-free and non-exclusive license to display, use, copy, transmit, and broadcast the content you upload and publish. For issues regarding intellectual property claims, you should contact the company in order to come to an agreement.
                    </p>
                </div>

                <div>
                    <h2 className="text-[20px] font-semibold text-[#0c005b] mb-4">USER ACCOUNTS</h2>
                    <p className="text-base text-gray-700 mb-4">
                    As a user of this service, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. 
                    You are also responsible for all activities that occur under your account or password.
                    </p>
                    <p className="text-base text-gray-700 mb-4">
                    If you think there are any possible issues regarding the security of your account on the service, inform us immediately so we may address them accordingly.
                    </p>
                    <p className="text-base text-gray-700 mb-4">
                    We reserve all rights to terminate accounts, edit or remove content and cancel orders at our sole discretion.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-[20px] font-semibold text-[#0c005b] mb-4">APPLICABLE LAW</h2>
                    <p className="text-base text-gray-700 mb-4">
                    By downloading the service or visiting our website, you agree that the laws of the country where the service is engaged (downloaded or visited) shall apply, without regard to principles of conflict laws, will govern these terms and conditions, 
                    or any dispute of any sort that might come between the company and you, or its business partners and associates.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-[20px] font-semibold text-[#0c005b] mb-4">DISPUTES</h2>
                    <p className="text-base text-gray-700 mb-4">
                    Any dispute related in any way to your visit to this website or to products you engaged from us shall be arbitrated by state or federal court [location] and you consent to exclusive jurisdiction and venue of such courts.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-[20px] font-semibold text-[#0c005b] mb-4">INDEMNIFICATION</h2>
                    <p className="text-base text-gray-700 mb-4">You agree to indemnify Welcome Finance Group/Welcome Card and its affiliates and hold the company harmless against legal claims and demands that may arise from your use or misuse of our services. We reserve the right to select our own legal counsel.                        
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-[20px] font-semibold text-[#0c005b] mb-4">LIMITATIONON LIABILITY</h2>
                    <p className="text-base text-gray-700 mb-4">
                        Welcomefinance group/Welcome Card is not liable for any damages that may occur to youas a result of your misuse of our service.                        
                    </p>
                    <p className="text-base text-gray-700">
                    The company reserves the right to edit, modify, and change this Agreement at any time. We shall let our users know of these changes through electronic mail. This Agreement is an understanding between Welcome finance group/Welcome Card andthe user, and this supersedes and replaces all prior agreements regarding theuse of this website.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-[20px] font-semibold text-[#0c005b] mb-4">DISCLAIMER</h2>
                    <p className="text-base text-gray-700">
                    We are not responsible for any content, code or any other impression. We do not provide warranties or guarantees. In no event shall we be liable for any special, direct, indirect, consequential or incidental damages or any damage whatsoever, whether in an action of contract, negligence or other sort, arising out of or in 
                    connection with the use of this service. We reserve the right to make additions, deletions or modifications to the contents on the service at any time without prior notice.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
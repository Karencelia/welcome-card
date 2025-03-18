"use client"
import dynamic from "next/dynamic";
import { ThumbsUp } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar/index";
import Footer from "@/components/Footer/index";


const MotionDiv = dynamic(() => import('framer-motion').then((m) => m.motion.div), {
    ssr: false,
});
const MotionH1 = dynamic(() => import('framer-motion').then((m) => m.motion.h1), {
    ssr: false,
});
const MotionP = dynamic(() => import('framer-motion').then((m) => m.motion.p), {
    ssr: false,
});
const MotionIMG = dynamic(() => import('framer-motion').then((m) => m.motion.img), {
    ssr: false,
});

const LikeButton = () => { 
    const [liked, setLiked] = useState(false);
  
    return (
      <button
        className={`absolute bottom-6 right-6 p-2 rounded-full shadow-lg bg-blue-700 text-white transition-all ${
          liked ? "text-blue-600 scale-110" : "text-gray-500 hover:scale-110"
        }`}
        onClick={() => setLiked(!liked)}
      >
        <ThumbsUp className="w-6 h-6" />
      </button>
    );
  };
  

export default function Home() {
    return (
        <div className="h-auto mx-0 py-0 sm:pt-8">
            <header>
            <Navbar />
            </header>

            {/* Privacy Policy Content */}
            <MotionDiv className="w-full max-w-[90%] md:max-w-[75%] mx-auto mt-10 md:mt-50 px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <MotionH1 className="text-3xl md:text-[70px] font-bold text-[#0c005b] mb-4 md:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}>Privacy Policy</MotionH1>

                <MotionP className="text-sm md:text-[16px] text-gray-700 mb-6 md:mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}>
                    At Welcome Card, we are committed to protecting and respecting your privacy.
                    We are also committed to being transparent about how we collect, process, share,
                    and manage your personal data when you visit our website or use any of our channels
                    or applications.
                </MotionP>

                <MotionP className="text-[#5a00a1] font-light mb-6 md:mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}>Last updated: 2nd December 2022</MotionP>

                <MotionDiv className="relative flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}>
                    <MotionIMG
                        src="security-mobile.jpg"
                        alt="Security Mobile"
                        className="w-full mt-4 md:mt-10 rounded-lg"
                    />
                    <LikeButton />
                </MotionDiv>

                {/* 1. PURPOSE OF THIS PRIVACY POLICY */}
                <div className="mt-10 md:mt-50">
                    <h2 className="text-lg md:text-[20px] font-semibold text-[#0c005b] mb-3 md:mb-4">1. PURPOSE OF THIS PRIVACY POLICY</h2>
                    <p className="text-sm md:text-[16px] text-gray-700 leading-relaxed md:leading-[2em] mb-3 md:mb-4">
                        This Privacy Policy aims to give you information on how Welcome card handles your personal data and your rights with regards to our collection, use,
                        storage and sharing of your personal data when you sign up to our newsletter,
                        take part in any competition or subscribe to any of our products or services (collectively referred to herein as “Welcome Card Services”).
                    </p>
                    <p className="text-sm md:text-[16px] text-gray-700 leading-relaxed md:leading-[2em] mb-6 md:mb-10">
                        It is important that you read this privacy policy together with any other privacy policy or fair processing policy we may provide on specific occasions
                        when we are collecting or processing personal data about you so that you are fully aware of how and why we are using your data.
                        This privacy policy supplements other notices and privacy policies and is not intended to override them.
                    </p>
                </div>

                {/* 2. YOUR PERSONAL INFORMATION */}
                <div>
                    <h2 className="text-lg md:text-[20px] font-semibold text-[#0c005b] mb-3 md:mb-4">2. YOUR PERSONAL INFORMATION</h2>
                    <p className="text-sm md:text-[16px] text-gray-700 mb-3 md:mb-4">
                        In the course of your using/accessing Welcome Card Services, through this website and other channels/applications, we collect, use,
                        store and transfer information you may have provided via forms, phone calls, and correspondence by mail or emails, service point interfaces, and any other channels we may make available to you from time to time.
                        The information we may collect, use, store and transfer may include but not be limited to:
                    </p>
                    <ul className="list-disc list-outside px-6 md:px-8 space-y-2 text-sm md:text-[16px] text-gray-700 leading-relaxed md:leading-[1.5em] mb-6 md:mb-10">
                        <li>Identity Data (may include first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender)</li>
                        <li>Contact Data (may include billing address, delivery address, email address and telephone numbers)</li>
                        <li>Financial Data (may include bank account and payment card details)</li>
                        <li>Transaction Data (may include details about payments to and from you and other details of products and services you have purchased or subscribed to)</li>
                        <li>Technical Data (may include [internet protocol (IP)] address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website or applications)</li>
                        <li>Profile Data (may include your username and password, orders made by you, your interests, preferences, feedback and survey responses)</li>
                        <li>Usage Data (may include information about how you use our website, products and services)</li>
                        <li>Marketing and Communications Data (may include your preferences in receiving marketing from us and our third parties and your communication preferences)</li>
                    </ul>
                    <p className="text-sm md:text-[16px] text-gray-700 mb-3 md:mb-4">
                        We also collect, use and share Aggregated Data such as statistical or demographic data for any purpose. Aggregated Data could be derived from your personal data but is not considered
                        personal data in law as this data willdirectly or indirectly reveal your identity. For example, we may aggregate your Usage Data to calculate the percentage of users accessing a specific
                        website feature. However, if we combine or connect Aggregated Data with your personal data
                        so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this privacy policy.
                    </p>
                    <p className="mt-3 md:mt-4 text-sm md:text-[16px] text-gray-700 leading-relaxed md:leading-[2em] mb-6 md:mb-10">
                        We do not collect any Special Categories of Personal Data about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership,
                        information about your health, and genetic and biometric data). Nor do we collect any information about criminal convictions and offences.
                    </p>
                </div>

                {/* 3. CONSENT */}
                <div className="mb-6 md:mb-8">
                    <h2 className="text-lg md:text-[20px] font-semibold text-[#0c005b] mb-3 md:mb-4">3. CONSENT</h2>
                    <p className="text-sm md:text-[16px] text-gray-700 mb-3 md:mb-4">
                        We will not collect, use and, where necessary, share your personal information unless in the following circumstances:
                    </p>
                    <ul className="list-disc list-outside px-6 md:px-8 space-y-2 text-sm md:text-[16px] text-gray-700">
                        <li>Where we need to provide Services to you.</li>
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal obligation.</li>
                    </ul>
                    <p className="text-sm md:text-[16px] text-gray-700 mt-3 md:mt-4 mb-3 md:mb-4">
                        We want to be sure we have your consent to collect, use and, where necessary, share your information with our partners and suppliers that help us serve you.
                        Whenever we introduce new services and technologies, we'll ensure you understand and agree to any new ways in which your information is handled.
                    </p>
                    <p className="text-sm md:text-[16px] text-gray-700 mb-3 md:mb-4">
                        You will be considered to have given your consent to Welcome Card for the processing of your personal data when:
                    </p>
                    <ol className="list-decimal list-outside px-6 md:px-8 space-y-2 text-sm md:text-[16px] text-gray-700">
                        <li>You complete any form, brochure or material issued by Welcome Card at any of our service points (mobile, online, agent location etc.) requesting for such personal information</li>
                        <li>You register, check or tick the acceptance box on any of our electronic platforms (Online or Mobile) relating to terms and conditions of any Welcome Card Service.</li>
                        <li>You send a request, complaint or other communication to Welcome Card.</li>
                        <li>You apply for any Welcome Card Service.</li>
                        <li>You create an account on our website or application(s).</li>
                    </ol>
                </div>

                {/* 4. USE OF YOUR INFORMATION */}
                <div className="mb-6 md:mb-8">
                    <h2 className="text-lg md:text-[20px] font-semibold text-[#0c005b] mb-3 md:mb-4">4. USE OF YOUR INFORMATION</h2>
                    <p className="text-sm md:text-[16px] text-gray-700 mb-3 md:mb-4">
                        Welcome Card will process your personal information for the following purposes:
                    </p>
                    <ul className="px-6 md:px-8 list-disc list-outside space-y-2 text-sm md:text-[16px] text-gray-700">
                        <li>To register you as a new customer</li>
                        <li>To offer and provide our products and services tailored to meet your unique needs</li>
                        <li>To fulfill the terms of any service contract(s) you might have with us</li>
                        <li>To improve your service experience with us</li>
                        <li>To conduct our business</li>
                        <li>To manage our relationship with you</li>
                        <li>To comply with Laws and Regulations</li>
                        <li>To provide information to credit agencies</li>
                        <li>To provide information to governmental bodies and law enforcement agencies</li>
                        <li>To update your records</li>
                        <li>To develop statistics as may be required</li>
                        <li>To comply with our internal policies</li>
                        <li>To communicate with you when necessary</li>
                        <li>To enable you to partake in a prize draw, competition or complete a survey</li>
                        <li>To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data)</li>
                        <li>To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you</li>
                        <li>To use data analytics to improve our website, products/services, marketing, customer relationships and experiences</li>
                        <li>To make suggestions and recommendations to you about goods or services that may be of interest to you</li>
                    </ul>
                    <p className="text-sm md:text-[16px] text-gray-700 mt-3 md:mt-4 mb-3 md:mb-4">
                        Welcome Card will limit the collection and use of your personal information for the stated purposes.
                    </p>
                    <p className="text-sm md:text-[16px] text-gray-700 mb-3 md:mb-4">
                        Note that we will only use your personal information for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose.
                        If you wish to get an explanation as to how the processing for the new purpose is compatible with the original purpose, please contact us.
                    </p>
                    <p className="text-sm md:text-[16px] text-gray-700 mb-3 md:mb-4">
                        If we need to use your personal information for an unrelated purpose, we will notify you and we will explain the legal basis which allows us to do so.
                    </p>
                    <p className="text-sm md:text-[16px] text-gray-700">
                        Please note that we may process your personal information without your knowledge or consent, in compliance with the above rules, where this is required or permitted by law.
                    </p>
                </div>

                {/* 5. Cookies */}
                <div>
                    <h2 className="text-lg md:text-[20px] font-semibold text-[#0c005b] mb-3 md:mb-4">5. Cookies</h2>
                    <p className="text-sm md:text-[16px] text-gray-700 mb-3 md:mb-4">
                        Please note that for our digital channels, we may collect information about your computer (or mobile device), including where available or necessary, your IP address(es), operating system and browser type for system administration or for our own commercial purposes. This is statistical data about our users'
                        browsing actions and patterns and does not identify any individual.
                    </p>
                </div>

                {/* 6. INFORMATION SHARING AND DISCLOSURE */}
                <div className="mb-6 md:mb-8">
                    <h2 className="text-lg md:text-[20px] font-semibold text-[#0c005b] mb-3 md:mb-4">6. INFORMATION SHARING AND DISCLOSURE</h2>
                    <p className="text-sm md:text-[16px] text-gray-700 mb-3 md:mb-4">
                        Welcome Card will not sell or rent your personally identifiable information to anyone. Welcome Card may share or disclose your personal information to third parties where:
                    </p>
                    <ol className="list-decimal list-outside px-6 md:px-8 space-y-2 text-sm md:text-[16px] text-gray-700">
                        <li>We have your consent to share or disclose such personal information;</li>
                        <li>We are required by law to share or disclose such personal information;</li>
                        <li>We respond to subpoenas, court orders or other legal processes;</li>
                        <li>We find that your actions on our electronic platforms violate any of our Policies for the purpose of investigations, reporting and enforcing any of our rights;</li>
                        <li>Required for audit purposes</li>
                    </ol>
                    <p className="text-sm md:text-[16px] text-gray-700 mt-3 md:mt-4 mb-3 md:mb-4">
                        Welcome Card may use and share your personal information with its affiliates for providing services and service-related activities such as collecting subscription fees for such services, notifying or contacting you regarding any problem with, or the expiration of such services. In this regard, Welcome Card's affiliates shall process the information as provided in this Privacy Policy.
                    </p>
                    <p className="text-sm md:text-[16px] text-gray-700 mb-3 md:mb-4">
                        Welcome Card may also disclose or share your personal information where it is necessary to enforce the terms and conditions of any of its products or services or any of its rights as well as to protect its operations and customers.
                    </p>
                </div>

                {/* 7. INFORMATION PROTECTION AND RETENTION */}
                <div className="mb-6 md:mb-8">
                    <h2 className="text-lg md:text-[20px] font-semibold text-[#0c005b] mb-3 md:mb-4">7. INFORMATION PROTECTION AND RETENTION</h2>
                    <p className="text-sm md:text-[16px] text-gray-700 mb-3 md:mb-4">
                        Welcome Card will always ensure that your personal information is adequately protected. We have put in place processes and technologies to ensure that your personal information is not modified, lost, damaged or destroyed. Our people are trained to ensure that your personal information is not disclosed and safe as stated in this policy.
                    </p>
                    <p className="text-sm md:text-[16px] text-gray-700 mb-3 md:mb-4">
                        Where access and use of our electronic platforms requires authentication of the user, you shall be responsible for the use and safety of your authentication credential(s) including but not limited to User Name, Personal Identification Number (PIN), Password, One Time Passwords (OTP) and Tokens.
                    </p>
                    <p className="text-sm md:text-[16px] text-gray-700">
                        We will retain your personal information for such length of time as may be required by law, regulation, and the internal policies.
                    </p>
                </div>

                {/* 8. YOUR RIGHTS UNDER THIS POLICY */}
                <div className="mb-6 md:mb-8">
                    <h2 className="text-lg md:text-[20px] font-semibold text-[#0c005b] mb-3 md:mb-4">8. YOUR RIGHTS UNDER THIS POLICY</h2>
                    <p className="text-sm md:text-[16px] text-gray-700 mb-3 md:mb-4">The following rights are available to you under this Policy:</p>
                    <ol className="list-decimal list-outside px-6 md:px-8 space-y-2 text-sm md:text-[16px] text-gray-700">
                        <li>You may at any time request for access to your personal information held by Welcome Card or request that your personal information be made available to a third party. Your request may specify the format in which the information should be made available subject to Welcome Card having the capacity to provide the personal information in the requested format.</li>
                        <li>You may request to update your personal information with Welcome Card at any time.</li>
                        <li>You may elect to withdraw your consent at any time. Save where there is a legal or operational reason to continue with the processing of your personal data, Welcome Card shall discontinue the processing of your personal data upon receipt of your notice withdrawing consent. Such withdrawal however may impact Welcome Card's ability to provide some products or services to you if your consent is mandatory for the execution for providing such services.</li>
                        <li>Your right to withdraw consent extends to objecting or restricting the processing of your personal data by Welcome Card.</li>
                        <li>You may request that your personal information be deleted. We may continue to retain such personal information as may be required for compliance with legal, regulatory or policy requirements.</li>
                    </ol>
                </div>

                {/* 9. REMEDIES */}
                <div className="mb-6 md:mb-8">
                    <h2 className="text-lg md:text-[20px] font-semibold text-[#0c005b] mb-3 md:mb-4">9. REMEDIES</h2>
                    <p className="text-sm md:text-[16px] text-gray-700 mb-3 md:mb-4">Where you have concerns relating to the processing of your personal information by Welcome Card, or require any clarification on this policy, please notify us through our contact details on our website.</p>
                    <p className="text-sm md:text-[16px] text-gray-700">We will respond to your concerns within 30 days of receiving your notice.</p>
                </div>

                {/* UPDATES TO THIS PRIVACY POLICY */}
                <div className="mb-6 md:mb-8">
                    <h2 className="text-lg md:text-[20px] font-semibold text-[#0c005b] mb-3 md:mb-4">UPDATES TO THIS PRIVACY POLICY</h2>
                    <p className="text-sm md:text-[16px] text-gray-700">We may update this policy from time to time. Where there are changes to this policy or changes in the way we use your personal information we will notify you by posting a prominent notice on our website.</p>
                </div>

                {/* 10. THIRD-PARTY LINKS */}
                <div className="mb-6 md:mb-8">
                    <h2 className="text-lg md:text-[20px] font-semibold text-[#0c005b] mb-3 md:mb-4">10. THIRD-PARTY LINKS</h2>
                    <p className="text-sm md:text-[16px] text-gray-700">This service may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our service, we encourage you to read the privacy policy of every website you visit.</p>
                </div>
            </MotionDiv>
            <Footer />
        </div>
    );
}

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#0c005b] text-white py-16 px-10 md:px-10 mt-20">
      <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-3 md:gap-10 justify-center md:text-left">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src="Group-3602.svg" alt="Welcome Card Logo" width={150} className="text-white" />
        </div>

        {/* Company Links */}
        <div className="grid grid-cols-3 gap-10 justify-evenly">
          <div>
            <h4 className="text-[14px] font-bold text-[#ff85ff] uppercase">Company</h4>
            <ul className="mt-4 space-y-3">
              <li><Link href="#" legacyBehavior><a className="hover:text-blue-500 text-sm">Welcome Card</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:text-blue-500 text-sm">Welcome Remit</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:text-blue-500 text-sm">FAQs</a></Link></li>
            </ul>
          </div>

          {/* Policies & Contact */}
          <div>
            <h4 className="text-[14px] font-bold text-[#ff85ff] uppercase">Company</h4>
            <ul className="mt-4 space-y-3">
              <li><Link href="#" legacyBehavior><a className="hover:text-blue-500 text-sm">About Us</a></Link></li>              
              <li><Link href="/cookies-policy" legacyBehavior><a className="hover:text-blue-500 text-sm">Cookies Policy</a></Link></li>
              <li><Link href="/terms-condition" legacyBehavior><a className="hover:text-blue-500 text-sm">Terms & Conditions</a></Link></li>
              <li><Link href="/privacy-policy" legacyBehavior><a className="hover:text-blue-500 text-sm">Privacy Policy</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-bold text-[#ff85ff] uppercase">Contact</h4>
            <p className="mt-4 text-sm">+234 800 000 0000</p>
            <p className="text-sm">hello@welcomecard.co</p>

            {/* Social Icons */}
            <div className="flex justify-start gap-3 mt-4">
              <a className="text-white bg-[#ff85ff] rounded-sm p-1 hover:bg-[#e06be0]">
                <img src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124ac15112aad5_twitter%20small.svg" alt="Twitter Icon" />
              </a>
              
              <a href="#" className="text-white bg-[#ff85ff] rounded-sm p-1 hover:bg-[#e06be0]">
                <img src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a389912aad8_linkedin%20small.svg" alt="LinkedIn Icon" />
              </a>
              <a href="#" className="text-white bg-[#ff85ff] rounded-sm p-1 hover:bg-[#e06be0]">
                <img src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a51bf12aae9_facebook%20small.svg" alt="Facebook Icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[80%] text-center text-[14px] mt-10">Copyright © 2022 Welcome Finance Group</div>
    </footer>
  );
}
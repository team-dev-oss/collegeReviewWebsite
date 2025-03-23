

import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-50 pt-6 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Logo and Mission Statement */}
          <div className="text-center mb-4">
            <div className="mb-6 flex justify-center">
              <Image src="/admonk.png" alt="Logo" width="130" height="80" />
            </div>
            <p className="text-gray-800 max-w-3xl mx-auto leading-relaxed">
            Fueling Growth Through Innovative Marketing
            </p>
          </div>

          {/* Contact Information Grid */}
          <div className="flex justify-center mb-8">
            <ul className="mt-4 flex gap-6 justify-center md:justify-normal mb-4 md:mb-0">
              <li>
                <Link href="https://www.facebook.com/advertmonks.in">
                  <FaFacebook size={23} />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/advertmonks.in/">
                  <FaInstagram size={23} />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/advertmonks/">
                  <FaLinkedin size={23} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-4 flex justify-center mt-3 bg-gray-100">
          <p className="text-sm">
          © Copyright <span className="font-normal text-purple-600"> &quot;ADVERTMONKS&quot; </span> all rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

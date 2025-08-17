import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo/mindora_logo.svg";
import Subscribe from "./Subscribe/Subscribe";

type SocialIcon = {
  name: string;
  href: string;
  Icon: React.FC<{ className?: string }>;
};

interface FooterLists {
  id: number;
  list: string;
}

const providerLists: FooterLists[] = [
  { id: 1, list: "MedPoint" },
  { id: 2, list: "Resources" },
  { id: 3, list: "For Provider" },
  { id: 4, list: "Updates" },
];
const quickLists: FooterLists[] = [
  { id: 1, list: "About" },
  { id: 2, list: "Contact us" },
  { id: 3, list: "Patients" },
  { id: 4, list: "Blogs" },
];
const socialIcons: SocialIcon[] = [
  { name: "Facebook", href: "https://facebook.com", Icon: CiFacebook },
  { name: "Twitter", href: "https://twitter.com", Icon: FaTwitter },
  { name: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
  { name: "LinkedIn", href: "https://linkedin.com", Icon: FaLinkedin },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#013e50] pt-38 lg:pt-48 pb-10 relative">
      <div className="absolute w-full -top-24 right-0">
        <Subscribe />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Left Side - Logo & Social */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Mindora Logo" className="w-[70px]" />
              <span className="pop text-white font-semibold text-[28px] lg:text-4xl">
                MinDora
              </span>
            </div>
            <p className="text-sm text-gray-300 lg:max-w-[400px] ub">
              You can find a doctor according to your complain and please
              arrange your schedule to meet.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-white font-semibold text-sm lg:text-base">
                Follow us
              </span>
              <div className="flex space-x-4">
                {socialIcons.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5 text-gray-200 hover:text-gray-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Links */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:justify-around gap-6">
            {/* Providers */}
            <div className="text-white/80">
              <h3 className="font-bold text-lg mb-3">Providers</h3>
              <ul className="space-y-1">
                {providerLists.map((p) => (
                  <li
                    key={p.id}
                    className="list-none hover:underline transition-all duration-300"
                  >
                    <a href="#">{p.list}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Quick Links */}
            <div className="text-white/80">
              <h3 className="font-bold text-lg mb-3">Quick Link</h3>
              <ul className="space-y-1">
                {quickLists.map((q) => (
                  <li
                    key={q.id}
                    className="list-none hover:underline transition-all duration-300"
                  >
                    <a href="#">{q.list}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Border */}
        <span className="w-full h-[1px] bg-gray-400 block mt-8"></span>
        <p className="text-center text-gray-300 mt-4 text-sm">
          &copy; {new Date().getFullYear()} MinDora | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

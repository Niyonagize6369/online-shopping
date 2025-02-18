import React from "react";
import FooterLogo from "../../assets/logo2.jpg";
import Banner from "../../assets/website/footer-pattern.jpg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const BannerImg = {
  backgroundImage: `url(${Banner})`, // Fixed template literal
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat", // Fixed typo
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <footer>
      <div style={BannerImg} className="mb-20 text-white">
        <div className="container">
          <div className="grid pt-5 md:grid-cols-3 pv-44">
            {/* Company details */}
            <div className="px-4 py-8">
              <h1 className="flex items-center gap-3 mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left">
                <img src={FooterLogo} alt="Logo" className="max-w-[50px]" />
                Shopping
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
                beatae ea recusandae blanditiis veritatis.
              </p>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
              <div>
                <div className="px-4 py-8">
                  <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li
                        className="text-gray-200 duration-300 cursor-pointer hover:text-primary hover:translate-x-1"
                        key={link.title}
                      >
                        <a href={link.link}>{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <div className="flex gap-4">
                  <a href="https://instagram.com">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="https://facebook.com">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="https://linkedin.com">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

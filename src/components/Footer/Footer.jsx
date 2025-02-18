import React from "react";
import FooterLogo from "../../assets/logo2.jpg";
import Banner from "../../assets/website/footer-pattern.jpg";
import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa6";

const BannerImg = {
  backgroundImage: "url(${Banner})",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeate",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },

  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return;
  <Footer>
  <div style={BannerImg} className="mb-20 text-white">
    <div className="container">
      <div className="grid pt-5 md:grid-cols-3 pv-44">
        {/* campany details  */}
        <div className="px-4 py-8">
          <h1
            className="flex items-center gap-3 mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left"
          >
            <img src={FooterLogo} alt="" className="max-w-[50px]" />
            Shopping
          </h1>
          <p>
            lorem ipsum dolor sit amet consectetur adipicicing elit. cum in
            beatae ea recusandea blanditicis veritatis
          </p>
        </div>
              {/* FooterLinks */}
              <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
                  <div>
                      <div className="px-4 py-8">
                          <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
                              Important Links
                          </h1>
                          <ul className="flex flex-col gap-3">
                              {FooterLinks.map((link) => (
                                  <li className="cursor-pointer hover:text-primary hover:*:translate-x-1
                                  duration-300 text-gray-200"
                                  key={link.title}
                                  >
                                      <span>{link.title}</span>     
                               </li>   
                              ))}
                          </ul>
                      </div>
                  </div>
                  {/* social links  */}

                  <div>
                      <div className="flex">
                          <a href="#">
                          <FaInstagram className="text-3xl" />
              </a>
                <a href="#">
                          <FaFacebook className="text-3xl" /></a>
                <a href="#">
                          <FaLinkedin className="text-3xl" /></a>
                      </div>
                  </div>
              </div>
      </div>
    </div>
  </div >;
  </Footer>
};

export default Footer;

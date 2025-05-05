import {
  FaAmazon,
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import { FaSquareXTwitter, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="shadow text-gray-700 pt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Info Column */}
          <div>
            <div className="mb-4"></div>
            <p>549 Oak St. Crystal Lake, IL 60014</p>
            <div className=" mt-2 font-semibold flex items-center gap-1">
              GET DIRECTION
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaEnvelope /> ten@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> 315-666-6688
              </li>
            </ul>
            <ul className="flex gap-3 mt-4 text-xl">
              <li>
                <span>
                  <FaFacebook />
                </span>
              </li>
              <li>
                <span>
                  <FaSquareXTwitter />
                </span>
              </li>
              <li>
                <span>
                  <FaInstagram />
                </span>
              </li>
              <li>
                <span>
                  <FaTiktok />
                </span>
              </li>
              <li>
                <span>
                  <FaAmazon />
                </span>
              </li>
              <li>
                <span>
                  <FaPinterestP />
                </span>
              </li>
            </ul>
          </div>

          {/* Links Column */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Information</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <span>About Us</span>
                </li>
                <li>
                  <span>Our Stories</span>
                </li>
                <li>
                  <span>Size Guide</span>
                </li>
                <li>
                  <span>Contact us</span>
                </li>
                <li>
                  <span>Career</span>
                </li>
                <li>
                  <span>My Account</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Customer Services</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <span>Shipping</span>
                </li>
                <li>
                  <span>Return & Refund</span>
                </li>
                <li>
                  <span>Privacy Policy</span>
                </li>
                <li>
                  <span>Terms & Conditions</span>
                </li>
                <li>
                  <span>Orders FAQs</span>
                </li>
                <li>
                  <span>My Wishlist</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-semibold mb-2">Newsletter</h4>
            <p className="text-sm mb-2">
              Sign up for our newsletter and get 10% off your first purchase
            </p>
            <form className="flex items-center border rounded overflow-hidden">
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="p-2 flex-1 outline-none"
              />
            </form>
            <label className="mt-2 text-xs flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>By clicking subscribe, you agree to our</span>
            </label>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-4 text-sm  ">
          <p className="text-center">© 2025 Modave. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

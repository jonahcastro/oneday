import Link from "next/link";
import { motion  } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-purple pt-12 text-white md:pt-16 lg:pt-20">
      <div className="container">
        <div className="mb-20 flex flex-col items-start gap-8 lg:flex lg:flex-row lg:justify-between">
          <div className="lg:max-w-sm">
            <img
              className="w-40"
              src="/images/oneday-logotype-alt.svg"
              alt="Oneday"
            />
            <p className="mt-8 text-sm">
              Estate planning for the new age. Setup trusts quickly, affordably
              and securely from the comfort of your own home.
            </p>
            <div className="mt-8 flex flex-row gap-4" role="grid">
              <motion.a
                initial={{ scale: 0, rotate: 0, opacity: 0.5, x: -100 }}
                animate={{ scale: 1, rotate: 0, opacity: 1, x: 0 }}
                whileHover={{ scale: 2, rotate: 45 }}
                className="w-10 h-10 bg-purple rounded-xl"
                href="https://linkedin.com"
              >
                <img src="/socials/linkedin.svg" alt="LinkedIn" />
              </motion.a>
              <motion.a
                initial={{ scale: 0, rotate: 0, opacity: 0.5, x: -100 }}
                animate={{ scale: 1, rotate: 0, opacity: 1, x: 0 }}
                whileHover={{ scale: 2, rotate: 45 }}
                className="w-10 h-10 bg-purple rounded-xl"
                href="https://instagram.com"
              >
                  <img src="/socials/instagram.svg" alt="Instagram" />
              </motion.a>
              <motion.a
                initial={{ scale: 0, rotate: 0, opacity: 0.5, x: -100 }}
                animate={{ scale: 1, rotate: 0, opacity: 1, x: 0 }}
                whileHover={{ scale: 2, rotate: 45 }}
                className="w-10 h-10 bg-purple rounded-xl"
                href="https://twitter.com"
              >
                  <img src="/socials/twitter.svg" alt="Twitter" />
              </motion.a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-8 md:flex-row lg:gap-24">
            <nav aria-label="Our Products">
              <div className="text-primary-300 font-display text-xl capitalize tracking-wide">
                Our Products
              </div>
              <div className="mt-5 flex flex-col items-start gap-3">
                <a
                  className="text-base capitalize tracking-wide text-white/70 underline-offset-4 hover:underline"
                  href="#"
                >
                  Big Security
                </a>
                <a
                  className="text-base capitalize tracking-wide text-white/70 underline-offset-4 hover:underline"
                  href="#"
                >
                  Another product
                </a>
                <a
                  className="text-base capitalize tracking-wide text-white/70 underline-offset-4 hover:underline"
                  href="#"
                >
                  Anything
                </a>
                <a
                  className="text-base capitalize tracking-wide text-white/70 underline-offset-4 hover:underline"
                  href="#"
                >
                  Your Best Product
                </a>
              </div>
            </nav>
            <nav aria-label="Blog and Resources">
              <div className="text-primary-300 font-display text-xl capitalize tracking-wide">
                Blog and Resources
              </div>
              <div className="mt-5 flex flex-col items-start gap-3">
                <a
                  className="text-base capitalize tracking-wide text-white/70 underline-offset-4 hover:underline"
                  href="#"
                >
                  Blogs and News
                </a>
                <a
                  className="text-base capitalize tracking-wide text-white/70 underline-offset-4 hover:underline"
                  href="#"
                >
                  Resources Center
                </a>
                <a
                  className="text-base capitalize tracking-wide text-white/70 underline-offset-4 hover:underline"
                  href="#"
                >
                  Events
                </a>
                <a
                  className="text-base capitalize tracking-wide text-white/70 underline-offset-4 hover:underline"
                  href="#"
                >
                  Anything
                </a>
              </div>
            </nav>
            <nav aria-label="Our Company">
              <div className="text-primary-300 font-display text-xl capitalize tracking-wide">
                Our Company
              </div>
              <div className="mt-5 flex flex-col items-start gap-3">
                <a
                  className="text-base capitalize tracking-wide text-white/70 underline-offset-4 hover:underline"
                  href="#"
                >
                  About Us
                </a>
                <a
                  className="text-base capitalize tracking-wide text-white/70 underline-offset-4 hover:underline"
                  href="#"
                >
                  News and Media
                </a>
                <a
                  className="text-base capitalize tracking-wide text-white/70 underline-offset-4 hover:underline"
                  href="#"
                >
                  Careers
                </a>
                <a
                  className="text-base capitalize tracking-wide text-white/70 underline-offset-4 hover:underline"
                  href="#"
                >
                  Contact Us
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="mx-16 border-t border-t-white/50 py-8 text-center lg:mx-24">
        <p>All Right Reserved 2022, One Day.</p>
      </div>
    </footer>
  );
}

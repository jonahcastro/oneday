import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

export default function About() {
  const SURVEY_URL = process.env.NEXT_PUBLIC_SURVEY_LINK;
  const easing = [0.455, 0.03, 0.515, 0.955];
  const sectionVariant = {
    visible: { opacity: 1, transition: { duration: 1, ease: easing } },
    hidden: { opacity: 0 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.section
      id="about"
      ref={ref}
      className="container"
      variants={sectionVariant}
      initial="hidden"
      animate={control}
    >
      <div className="rounded-md bg-cream py-10 drop-shadow-lg lg:py-20">
        <div className="mx-4 text-center lg:mx-auto">
          <h1 className="font-display text-2xl font-bold capitalize leading-8 text-purple md:text-4xl lg:text-5xl lg:leading-12">
            what can a trust do for you
          </h1>
          <p className="mt-3 font-sans text-md leading-7 text-secondary md:text-2xl">
            With so much happening in the world, it’s essential to
            <br className="hidden lg:block" />
            secure your assets for your loved ones and yourself.
          </p>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-1 grid-rows-3 items-center justify-center gap-5 md:grid-cols-2 md:grid-rows-3 lg:mx-10 lg:mt-10 lg:gap-x-44">
          <motion.div
            className="flex items-center gap-5 p-0 lg:p-5 drop-shadow-sm md:drop-shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div>
              <img
                src="/svg/Liquidity.svg"
                alt="Liquidity"
                className="h-28 w-28"
              />
            </div>
            <div className="grid-rows grid">
              <h3 className="mt-5 font-display text-md tracking-tight text-purple md:text-lg">
                Near Instant Liquidity
              </h3>
              <p className="mt-3 font-sans text-md lg:text-lg leading-7 text-secondary">
                Readily available liquidity for your beneficiaries.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-5 p-0 lg:p-5 drop-shadow-sm md:drop-shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div>
              <img
                src="/svg/Avoidance of Probate.svg"
                alt="Avoidance of Probate"
                className="h-28 w-28"
              />
            </div>
            <div className="grid-rows grid">
              <h3 className="mt-5 font-display text-md tracking-tight text-purple md:text-lg">
                Avoidance of Probate
              </h3>
              <p className="mt-3 font-sans text-md lg:text-lg leading-7 text-secondary">
                Avoid the lengthy process of probate associated with traditional
                wills.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-5 p-0 lg:p-5 drop-shadow-sm md:drop-shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div>
              <img
                src="/svg/Asset Protection.svg"
                alt="Asset Protection"
                className="h-28 w-28"
              />
            </div>
            <div className="grid-rows grid">
              <h3 className="mt-5 font-display text-md tracking-tight text-purple md:text-lg">
                Asset Protection
              </h3>
              <p className="mt-3 font-sans text-md lg:text-lg leading-7 text-secondary">
                Only your designated beneficiaries will have access to your
                assets.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-5 p-0 lg:p-5 drop-shadow-sm md:drop-shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div>
              <img
                src="/svg/Succession Planning.svg"
                alt="Succession Planning"
                className="h-28 w-28"
              />
            </div>
            <div className="grid-rows grid">
              <h3 className="mt-5 font-display text-md tracking-tight text-purple md:text-lg">
                Succession Planning
              </h3>
              <p className="mt-3 font-sans text-md lg:text-lg leading-7 text-secondary">
                Plan ahead for your loved ones, on your terms, and be
                stress-free.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-5 p-0 lg:p-5 drop-shadow-sm md:drop-shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div>
              <img
                src="/svg/Preservation of Assets.svg"
                alt="Preservation of assets"
                className="h-40 w-40"
              />
            </div>
            <div className="grid-rows grid">
              <h3 className="mt-5 font-display text-md tracking-tight text-purple md:text-lg">
                Preservation of Assets
              </h3>
              <p className="mt-3 font-sans text-md lg:text-lg leading-7 text-secondary">
                OneDay as your licensed trustee, along with regulated custodians
                will take care of your assets.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-5 p-0 lg:p-5 drop-shadow-sm md:drop-shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div>
              <img
                src="/svg/Tax Planning.svg"
                alt="Tax Planning"
                className="h-28 w-24"
              />
            </div>
            <div className="grid-rows grid">
              <h3 className="mt-5 font-display text-md tracking-tight text-purple md:text-lg">
                Tax Planning
              </h3>
              <p className="mt-3 font-sans text-md lg:text-lg leading-7 text-secondary">
                Lighten the tax burden of your beneficiaries.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

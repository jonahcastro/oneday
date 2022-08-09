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
      className="bg-cream"
      ref={ref}
      variants={sectionVariant}
      initial="hidden"
      animate={control}
    >
      <img
        className="absolute mt-[28rem] block select-none md:w-1/3 lg:my-20 lg:w-96 3xl:mt-20"
        src="/svg/about-bg.svg"
        alt="Circular lines"
      />
      <div className="container py-10 lg:py-40">
        <div className="grid grid-cols-1 items-center justify-center gap-24 lg:grid-cols-3">
          <div className="lg:col-span-2" role="gridcell">
            <div className="grid grid-cols-2 grid-rows-3 gap-6 md:grid-cols-3 md:grid-rows-2 lg:gap-12">
              <motion.div
                className="rounded bg-white p-5 shadow-xl ring-1 ring-secondary/5 drop-shadow-sm md:drop-shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div>
                  <img
                    src="/svg/Liquidity.svg"
                    alt="Liquidity"
                    className="h-12 w-12"
                  />
                </div>
                <h3 className="mt-5 font-display text-sm font-medium tracking-tight md:text-lg">
                  Near instant liquidity for your loved ones
                </h3>
              </motion.div>
              <motion.div
                className="rounded bg-white p-5 shadow-xl ring-1 ring-secondary/5 drop-shadow-sm md:drop-shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div>
                  <img
                    src="/svg/Avoidance of Probate.svg"
                    alt="Avoidance of Probate"
                    className="h-12 w-12"
                  />
                </div>
                <h3 className="mt-5 font-display text-sm font-medium tracking-tight md:text-lg">
                  Avoidance of probate
                </h3>
              </motion.div>
              <motion.div
                className="rounded bg-white p-5 shadow-xl ring-1 ring-secondary/5 drop-shadow-sm md:drop-shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div>
                  <img
                    src="/svg/Succession Planning.svg"
                    alt="Succession Planning"
                    className="h-12 w-12"
                  />
                </div>
                <h3 className="mt-5 font-display text-sm font-medium tracking-tight md:text-lg">
                  Hassle-free succession planning
                </h3>
              </motion.div>
              <motion.div
                className="rounded bg-white p-5 shadow-xl ring-1 ring-secondary/5 drop-shadow-sm md:drop-shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div>
                  <img
                    src="/svg/Asset Protection.svg"
                    alt="Asset Protection"
                    className="h-12 w-12"
                  />
                </div>
                <h3 className="mt-5 font-display text-sm font-medium tracking-tight md:text-lg">
                  Asset Protection
                </h3>
              </motion.div>
              <motion.div
                className="rounded bg-white p-5 shadow-xl ring-1 ring-secondary/5 drop-shadow-sm md:drop-shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div>
                  <img
                    src="/svg/Preservation of Assets.svg"
                    alt="Preservation of assets"
                    className="h-12 w-12"
                  />
                </div>
                <h3 className="mt-5 font-display text-sm font-medium tracking-tight md:text-lg">
                  Preservation of assets
                </h3>
              </motion.div>
              <motion.div
                className="rounded bg-white p-5 shadow-xl ring-1 ring-secondary/5 drop-shadow-sm md:drop-shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div>
                  <img
                    src="/svg/Tax Planning.svg"
                    alt="Tax Planning"
                    className="h-12 w-12"
                  />
                </div>
                <h3 className="mt-5 font-display text-sm font-medium tracking-tight md:text-lg">
                  Tax Planning
                </h3>
              </motion.div>
            </div>
          </div>
          <div className="order-first lg:order-none" role="gridcell">
            <h1 className="font-display text-3xl font-bold capitalize leading-8 md:text-4xl lg:leading-12">
              what can a trust do for you
            </h1>
            <p className="mt-5 font-sans text-sm leading-7 text-secondary/60 md:text-lg">
              With so much happening in the world, it’s important to plan ahead
              for the future of you and your loved ones.
            </p>

            <p className="mt-10 font-sans text-sm leading-7 text-secondary/60 md:text-lg">
              If you have ~5 minutes to spare, we would really appreciate it if
              you took our short survey to help us make the best digital asset
              trust product possible.
            </p>
            <Link href={SURVEY_URL}>
              <a
                className="mt-5 inline-block w-full rounded-md border bg-purple px-8 py-4 text-sm uppercase tracking-wide text-white hover:bg-purple/90 hover:shadow-md md:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                take survey
              </a>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

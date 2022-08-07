import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function Services() {
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
      id="services"
      ref={ref}
      variants={sectionVariant}
      initial="hidden"
      animate={control}
    >
      <img
        className="absolute -z-10 block w-full"
        src="/svg/triangle.svg"
        alt="Traingle Background"
      />
      <div className="container pt-20 pb-10 md:pt-40">
        <h1 className="font-display text-3xl font-bold capitalize leading-8 md:text-4xl lg:leading-12">
          How It Works
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-md border border-purple bg-cream transition delay-150 duration-300 ease-in-out hover:-translate-y-6 hover:bg-purple">
            <div className="inset-x-0 bottom-0 flex h-full flex-col justify-between p-8  text-secondary hover:text-white">
              <h3 className="-mt-6 text-right font-display text-6xl text-secondary/40">
                01
              </h3>
              <img
                src="/services/Illustration-01.svg"
                alt="Sign up to OneDay"
                className="mx-auto w-52"
              />
              <p className="text-center text-base">Sign up to OneDay</p>
            </div>
          </div>
          <div className="rounded-md border border-purple bg-cream transition delay-150 duration-300 ease-in-out hover:-translate-y-6 hover:bg-purple">
            <div className="inset-x-0 bottom-0 flex h-full flex-col justify-between p-8 text-secondary hover:text-white">
              <h3 className="-mt-6 text-right font-display text-6xl text-secondary/40">
                02
              </h3>
              <img
                src="/services/Illustration-02.svg"
                alt="Fill in personal information for your trust deed"
                className="mx-auto w-52"
              />
              <p className="text-center text-base">
                Fill in personal information for your trust deed
              </p>
            </div>
          </div>
          <div className="rounded-md border border-purple bg-cream transition delay-150 duration-300 ease-in-out hover:-translate-y-6 hover:bg-purple">
            <div className="inset-x-0 bottom-0 flex h-full flex-col justify-between p-8 text-secondary hover:text-white">
              <h3 className="-mt-6 text-right font-display text-6xl text-secondary/40">
                03
              </h3>
              <img
                src="/services/Illustration-03.svg"
                alt="Trust deed is generated, signed and put on the blockchain"
                className="mx-auto w-52"
              />
              <p className="text-center text-base">
                Trust deed is generated, signed and put on the blockchain
              </p>
            </div>
          </div>
          <div className="rounded-md border border-purple bg-cream  transition delay-150 duration-300 ease-in-out hover:-translate-y-6 hover:bg-purple">
            <div className="inset-x-0 bottom-0 flex h-full flex-col justify-between p-8 text-secondary hover:text-white">
              <h3 className="-mt-6 text-right font-display text-6xl text-secondary/40">
                04
              </h3>
              <img
                src="/services/Illustration-04.svg"
                alt="Your vaults are created to store your fiat/digital assets"
                className="mx-auto w-52"
              />
              <p className="text-center text-base">
                Your vaults are created to store your fiat/digital assets
              </p>
            </div>
          </div>
          <div className="rounded-md border border-purple bg-cream transition delay-150 duration-300 ease-in-out hover:-translate-y-6 hover:bg-purple">
            <div className="inset-x-0 bottom-0 flex h-full flex-col justify-between p-8 text-secondary hover:text-white">
              <h3 className="-mt-6 text-right font-display text-6xl text-secondary/40">
                05
              </h3>
              <img
                src="/services/Illustration-05.svg"
                alt="Send assets to your dedicated vault"
                className="mx-auto w-52"
              />
              <p className="text-center text-base">
                Send assets to your dedicated vault
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid items-center justify-center rounded-md bg-cream p-10 shadow-md md:grid-cols-2 md:p-12 lg:px-20">
          <img src="/svg/dream.svg" alt="Dream" />
          <div>
            <h1 className="font-display text-3xl font-bold capitalize leading-8 md:text-4xl lg:leading-12">
              We’ll Take Care of the Rest
            </h1>
            <p className="mt-5 text-center font-sans text-sm leading-7 text-secondary md:text-sm">
              With unprecendented world issues it is more important now than
              ever to be prepared and make sure your loved ones are protected
              and secured no matter what happens.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

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
      className="mt-20 bg-cream lg:mt-40"
      ref={ref}
      variants={sectionVariant}
      initial="hidden"
      animate={control}
    >
      <div className="px-10 lg:px-40 pt-20 pb-10 md:pt-40">
        <h1 className="text-center font-display text-3xl font-bold capitalize leading-8 text-purple md:text-4xl lg:text-5xl lg:leading-12">
          How It Works
        </h1>
        {/*<div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-5">
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
        </div>*/}
        <div className="mt-3 grid items-start justify-center gap-y-10 md:gap-y-20 gap-5 p-10 md:p-12 lg:mt-10 md:items-center lg:gap-10">
          <div
            className="grid justify-between grid-cols-1 gap-12 md:grid-cols-2"
            role="gridcell"
          >
            <img
              src="/services/Illustration-02.svg"
              alt="VETTED &amp; APPROVED"
              className="justify-self-center md:justify-self-end w-64 drop-shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-6"
            />
            <div className="order-first">
              <h1 className="font-display text-xl font-bold uppercase leading-8 text-purple md:text-2xl">
                VETTED &amp; APPROVED
              </h1>
              <p className="font-display text-xl font-bold text-purple md:text-2xl">
                Trust Deeds
              </p>
              <p className="mt-5 text-left font-sans text-sm leading-7 text-secondary md:text-lg">
                Fill in personal and beneficiary detail and your wishes for your
                trust deed, our trust deeds have been vetted by our law firm
                partners for the jurisdictions we currently serve.
              </p>
            </div>
          </div>
          <div
            className="grid justify-between grid-cols-1 gap-12 md:grid-cols-2"
            role="gridcell"
          >
            <img
              src="/services/Illustration-03.svg"
              alt="PRIVATE YET ACCESSIBLE"
              className="justify-self-center md:justify-self-end w-64 drop-shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-6"
            />
            <div className="order-first">
              <h1 className="font-display text-xl font-bold uppercase leading-8 text-purple md:text-2xl">
                PRIVATE YET ACCESSIBLE
              </h1>
              <p className="font-display text-xl font-bold text-purple md:text-2xl">
                On the blockchain
              </p>
              <p className="mt-5 text-left font-sans text-sm leading-7 text-secondary md:text-lg">
                A hard copy of your trust deed can be downloaded from our
                platform for wet signing. OneDay will arrange for the collection
                and execution of your trust deed.
              </p>
              <p className="mt-5 text-left font-sans text-sm leading-7 text-secondary md:text-lg">
                An encrypted NFT of your trust deed is then generated and put on
                the blockchain. - an immutable master copy can now be
                referenced.
              </p>
            </div>
          </div>
          <div
            className="grid justify-between grid-cols-1 gap-12 md:grid-cols-2"
            role="gridcell"
          >
            <img
              src="/services/Illustration-06.svg"
              alt="PEACE OF MIND"
              className="justify-self-center md:justify-self-end w-64 drop-shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-6"
            />
            <div className="order-first">
              <h1 className="font-display text-xl font-bold uppercase leading-8 text-purple md:text-2xl">
                PEACE OF MIND
              </h1>
              <p className="font-display text-xl font-bold text-purple md:text-2xl">
                Licensed and Insured Financial Institutions & Custodians
              </p>
              <p className="mt-5 text-left font-sans text-sm leading-7 text-secondary md:text-lg">
                Upon OneDay's receipt of your assets (
                <span className="font-bold">
                  currencies, stablecoins, and other digital assets
                </span>{" "}
                ), your trust will be established.
              </p>
              <p className="mt-5 text-left font-sans text-sm leading-7 text-secondary md:text-lg">
                OneDay works with the world's leading financial institutions and
                custodians to secure your assets, accessible directly from our
                platform.
              </p>
            </div>
          </div>
          <div
            className="grid justify-between grid-cols-1 gap-12 md:grid-cols-2"
            role="gridcell"
          >
            <img src="/svg/dream.svg" alt="Dream" className="justify-self-center md:justify-self-end w-3/4" />
            <div className="order-first mt-10 md:mt-0">
              <h1 className="font-display text-3xl font-bold capitalize leading-8 text-purple md:text-4xl lg:leading-12">
                We’ll Take Care of The Rest.
              </h1>
              <p className="mt-5 text-left font-sans text-sm leading-7 text-secondary md:text-lg">
                In case anything happens to you, OneDay will work with your
                beneficiaries and distribute your assets to them in the most
                efficient manner possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

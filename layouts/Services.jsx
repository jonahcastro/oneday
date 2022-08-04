import { useEffect } from "react";

export default function Services() {
  return (
    <section id="services">
      <div className="absolute block h-screen w-full">
        <svg
          className="h-screen w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1739 1H-2L1700 524V1Z" fill="#304E86" stroke="#304E86" />
        </svg>
      </div>
      <div className="container pt-20 pb-10 md:pt-40">
        <h1 className="font-display text-3xl font-bold capitalize leading-8 md:text-4xl lg:leading-12">
          How It Works
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="relative overflow-hidden rounded-md">
            <img
              src="/services/01.png"
              alt="Sign up to OneDay"
              className="w-full"
            />
            <div className="absolute inset-x-0 bottom-0 flex h-full flex-col justify-between bg-black/60 bg-cover bg-center bg-no-repeat p-8">
              <h3 className="-mt-6 text-right font-display text-6xl text-white/40">
                01
              </h3>
              <p className="text-base text-white">Sign up to OneDay</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-md">
            <img
              src="/services/02.png"
              alt="Fill in personal information for your trust deed"
              className="w-full"
            />
            <div className="absolute inset-x-0 bottom-0 flex h-full flex-col justify-between bg-black/60 bg-cover bg-center bg-no-repeat p-8">
              <h3 className="-mt-6 text-right font-display text-6xl text-white/40">
                02
              </h3>
              <p className="text-base text-white">
                Fill in personal information for your trust deed
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-md">
            <img
              src="/services/03.png"
              alt="Trust deed is generated, signed and put on the blockchain"
              className="w-full"
            />
            <div className="absolute inset-x-0 bottom-0 flex h-full flex-col justify-between bg-black/60 bg-cover bg-center bg-no-repeat p-8">
              <h3 className="-mt-6 text-right font-display text-6xl text-white/40">
                03
              </h3>
              <p className="text-base text-white">
                Trust deed is generated, signed and put on the blockchain
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-md">
            <img
              src="/services/04.png"
              alt="Your vaults are created to store your fiat/digital assets"
              className="w-full"
            />
            <div className="absolute inset-x-0 bottom-0 flex h-full flex-col justify-between bg-black/60 bg-cover bg-center bg-no-repeat p-8">
              <h3 className="-mt-6 text-right font-display text-6xl text-white/40">
                04
              </h3>
              <p className="text-base text-white">
                Your vaults are created to store your fiat/digital assets
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-md">
            <img
              src="/services/05.png"
              alt="Send assets to your dedicated vault"
              className="w-full"
            />
            <div className="absolute inset-x-0 bottom-0 flex h-full flex-col justify-between bg-black/60 bg-cover bg-center bg-no-repeat p-8">
              <h3 className="-mt-6 text-right font-display text-6xl text-white/40">
                05
              </h3>
              <p className="text-lg text-white">
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
            <p className="mt-5 font-sans text-sm leading-7 text-secondary md:text-sm">
              With unprecendented world issues it is more important now than
              ever to be prepared and make sure your loved ones are protected
              and secured no matter what happens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

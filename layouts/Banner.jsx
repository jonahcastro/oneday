import { useEffect } from "react";
import { MailIcon } from "@heroicons/react/outline";

export default function Banner() {
  return (
    <section className="container">
      <div className="my-10 md:my-20">
        <div className="grid grid-cols-1 items-center justify-center gap-8 lg:grid-cols-2">
          <div role="gridcell">
            <h1 className="font-display text-3xl font-bold capitalize leading-8 md:text-5xl lg:leading-12">
              Know your loved ones are taken care of. Whatever happens.
            </h1>
            <p className="mt-5 mr-24 font-sans text-sm leading-7 text-secondary/60 lg:pr-20">
              Estate planning for the new age. Setup trusts quickly, affordably
              and securely from the comfort of your own home.
            </p>
            <div className="mt-8 flex-none gap-4 md:flex">
              <label className="relative block">
                <span className="sr-only">Stay up to date</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-8">
                  <MailIcon className="h-5 w-5 text-secondary/60" />
                </span>
                <input
                  className="block w-full rounded-full border border-slate-200 bg-white py-3 pl-14 pr-10 shadow-sm placeholder:text-sm placeholder:text-secondary/60 focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple sm:text-sm md:w-80"
                  placeholder="Stay up to date"
                  type="text"
                  name="email"
                />
              </label>
              <button className="mt-3 w-full rounded-full border bg-purple px-6 py-3 text-sm uppercase tracking-wide text-white hover:bg-purple/90 hover:shadow-md md:mt-0 md:w-auto">
                subscribe
              </button>
            </div>
          </div>
          <div className="order-first lg:order-none" role="gridcell">
            <img
              src="/images/home.png"
              alt="ONEDAY home"
              className="w-60 md:w-5/6 lg:mx-auto lg:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

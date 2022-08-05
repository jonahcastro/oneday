import { useEffect } from "react";
import { MailIcon } from "@heroicons/react/outline";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <img
          className="absolute right-10 mt-60 w-40 select-none md:right-6 md:mt-10 md:w-1/4 lg:right-[8.4rem] lg:mt-5 lg:w-52 3xl:hidden"
          src="/svg/circular-bg-alt.svg"
          alt="Circular lines"
        />
        <div className="grid items-center justify-center gap-10 rounded-md bg-purple px-10 py-20 shadow-md md:grid-cols-2">
          <div className="max-w-sm">
            <h1 className="font-display text-3xl font-bold capitalize leading-8 text-white md:text-4xl lg:leading-12">
              Stay Updated
            </h1>
            <p className="mt-5 font-sans text-sm leading-7 text-white md:text-sm">
              Be the first to know when we launch and receive monthly
              newsletters about how trusts work and why estate planning and
              digital is the future.
            </p>
          </div>
          <div className="mt-8 flex-none gap-4 lg:flex">
            <label className="relative block">
              <span className="sr-only">Stay up to date</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-8">
                <MailIcon className="h-5 w-5 text-secondary/60" />
              </span>
              <input
                className="block w-full rounded-full border border-slate-200 bg-white py-3 pl-14 pr-0 shadow-sm placeholder:text-sm placeholder:text-secondary/60 focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple sm:text-sm lg:w-80 lg:pr-10"
                placeholder="Stay up to date"
                type="text"
                name="email"
              />
            </label>
            <button className="mt-3 w-full rounded-full border bg-purple px-6 py-3 text-sm uppercase tracking-wide text-white hover:bg-white hover:text-purple hover:shadow-md md:w-auto lg:mt-0">
              subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="container my-20">
        <img
          className="absolute right-10 mt-60 w-40 select-none md:right-6 md:mt-10 md:w-1/4 lg:right-[8.4rem] lg:mt-5 lg:w-52 3xl:hidden"
          src="/svg/circular-bg.svg"
          alt="Circular lines"
        />
        <div className="grid items-center justify-center gap-10 rounded-md bg-cream px-10 py-20 shadow-md md:grid-cols-2">
          <div className="max-w-sm">
            <h1 className="font-display text-3xl font-bold capitalize leading-8 text-secondary md:text-4xl lg:leading-12">
              Help Us Help You
            </h1>
            <p className="mt-5 font-sans text-sm leading-7 text-secondary md:text-sm">
              We would really appreciate your input to help us make the best
              product possible. If you have ~5 minutes we would love to get to
              know you and your goals better.{" "}
            </p>
          </div>
          <div className="mt-8 flex-none gap-4 lg:flex">
            <button className="mt-5 w-full rounded-md border bg-purple px-8 py-4 text-sm uppercase tracking-wide text-white hover:bg-purple/80 hover:shadow-md md:w-auto">
              take survey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

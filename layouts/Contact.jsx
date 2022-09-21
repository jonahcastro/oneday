import React, { useState, useEffect } from "react";
import { MailIcon } from "@heroicons/react/outline";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function Contact() {
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

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur", defaultValues: { Email: "" } });
  const [formSuccess, setFormSuccess] = useState([]);
  async function onSubmit(data, e) {
    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((result) => {
        setFormSuccess([true, result.message]);
        setTimeout(() => {
          // After 3 seconds set the show value to false
          setFormSuccess(false);
        }, 5000);
      });
    e.target.reset();
  }

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="bg-cream pb-20"
      variants={sectionVariant}
      initial="hidden"
      animate={control}
    >
      <div className="px-10 lg:px-40">
        <div className="items-top grid justify-center gap-3 rounded-md bg-purple bg-circular bg-cover bg-center bg-no-repeat px-10 py-20 shadow-md md:grid-cols-2">
          <div className="max-w-md">
            <h1 className="font-display text-3xl font-bold capitalize leading-8 text-white md:text-4xl lg:leading-12">
              Stay Updated
            </h1>
            <p className="mt-5 font-sans text-sm leading-7 text-white md:text-lg">
              Be the first to know when we launch and receive monthly
              newsletters about how trusts work and why estate planning and
              digital is the future.
            </p>
            <form
              method="post"
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 flex-none gap-4 lg:flex"
            >
              <label className="relative block">
                <span className="sr-only">Stay up to date</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-8">
                  <MailIcon className="h-5 w-5 text-secondary/60" />
                </span>
                <input
                  className={`block w-full rounded-full border bg-white py-3 pl-14 pr-0 shadow-sm placeholder:text-sm placeholder:text-secondary/60 sm:text-sm lg:w-80 lg:pr-10 ${
                    errors.Email
                      ? "border-red-300 text-red-500"
                      : "text-purple-200 border-purple-400"
                  }`}
                  placeholder="Stay up to date"
                  type="text"
                  {...register("Email", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </label>
              <button className="mt-3 w-full rounded-full border bg-white px-6 py-3 text-base uppercase tracking-wide text-purple hover:bg-purple hover:text-white hover:shadow-md md:w-auto lg:mt-0">
                subscribe
              </button>
            </form>
            <span className="mt-2 text-xs font-medium tracking-wide text-lime-500">
              {!formSuccess ? "" : formSuccess}
            </span>
            <span className="mt-2 ml-10 text-xs font-medium tracking-wide text-red-300">
              {errors.Email?.message}
            </span>
          </div>
          <div className="max-w-md">
            <h1 className="font-display text-3xl font-bold capitalize leading-8 text-white md:text-4xl lg:leading-12">
              Help Us Help You
            </h1>
            <p className="mt-5 font-sans text-sm leading-7 text-white md:text-lg">
              We would really appreciate your input to help us make the best
              digital asset trust product possible. If you have ~5 minutes we
              would love to get to know you and your goals better.
            </p>
            <div className="mt-10">
              <Link href={SURVEY_URL}>
                <a
                  className="w-full rounded-md border bg-white px-8 py-4 text-sm uppercase tracking-wide text-secondary drop-shadow-md hover:bg-purple hover:text-white hover:shadow-md md:w-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  take survey
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

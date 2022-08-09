import { MailIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Banner() {
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
    <section className="container">
      <div className="my-10 md:my-20">
        <div className="grid grid-cols-1 items-center justify-center gap-8 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { x: "-100%" },
              visible: {
                x: "0%",
                transition: { duration: 1, delay: 0.2 },
              },
            }}
          >
            <div role="gridcell">
              <h1 className="font-display text-3xl font-bold capitalize leading-8 md:text-5xl lg:leading-12">
                Know your loved ones are taken care of. Whatever happens.
              </h1>

              <p className="mt-5 mr-24 font-sans text-sm leading-7 text-secondary/60 md:text-lg lg:pr-20">
                Estate planning for the new age. Setup digital asset trusts quickly,
                affordably and securely from the comfort of your own home.
              </p>

              <form
                method="post"
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 flex-none gap-4 md:flex"
              >
                <label className="relative block">
                  <span className="sr-only">Stay up to date</span>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-8">
                    <MailIcon className="h-5 w-5 text-secondary/60" />
                  </span>
                  <input
                    className={`block w-full rounded-full border bg-white py-3 pl-14 pr-10 shadow-sm placeholder:text-sm placeholder:text-secondary/60  sm:text-sm md:w-80 
                    ${
                      errors.Email
                        ? "border-red-400 text-red-300"
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

                <button
                  className={`mt-3 w-full rounded-full border bg-purple px-6 py-3 text-sm uppercase tracking-wide text-white hover:bg-purple/90 hover:shadow-md md:mt-0 md:w-auto`}
                >
                  subscribe
                </button>
              </form>
              <span className="mt-2 text-xs font-medium tracking-wide text-lime-500">
                {!formSuccess ? "" : formSuccess}
              </span>
              <span className="mt-2 ml-10 text-xs font-medium tracking-wide text-red-500">
                {errors.Email?.message}
              </span>
            </div>
          </motion.div>
          <motion.div
            className="order-first lg:order-none"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <img
              src="/images/home.png"
              alt="ONEDAY home"
              className="w-60 md:w-5/6 lg:mx-auto lg:w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

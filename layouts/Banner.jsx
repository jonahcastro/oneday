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
    <section className="container mt-28 lg:mt-52">
      <div className="my-10 h-96 md:my-24">
        <div className="mx-auto flex max-w-3xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { y: "-200%" },
              visible: {
                y: "0%",
                transition: { duration: 1, delay: 0.2 },
              },
            }}
          >
            <div role="gridcell">
              <h1 className="font-display text-3xl font-bold leading-8 text-purple md:text-5xl lg:text-7xl lg:leading-12">
                Protect the Future of Your Loved Ones.
              </h1>

              <p className="mx-5 mt-5 font-sans text-sm leading-5  text-secondary md:text-lg lg:mx-10 lg:mt-10 lg:leading-7 ">
                Estate planning for the new age. Setup trusts quickly, <br />{" "}
                affordably and securely from the comfort of your own home.
              </p>

              <form
                method="post"
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 flex-none gap-2 md:flex md:justify-center"
              >
                <div className="text-left">
                  <label className="relative block">
                    <span className="sr-only">Stay up to date</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                      <MailIcon className="h-5 w-5 text-secondary/60" />
                    </span>
                    <input
                      className={`block w-full rounded-md border bg-white py-3 pl-14 pr-10 shadow-sm placeholder:text-sm placeholder:text-secondary/60  sm:text-sm md:w-80 
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
                  <span className="mt-2 text-xs font-medium tracking-wide text-lime-500">
                    {!formSuccess ? "" : formSuccess}
                  </span>
                  <span className="mt-2 pl-5 text-left text-xs font-medium tracking-wide text-red-500">
                    {errors.Email?.message}
                  </span>
                </div>

                <button
                  className={`h-fit w-full rounded-md border bg-purple px-6 py-3 text-sm uppercase tracking-wide text-white drop-shadow-lg hover:bg-purple/90 hover:shadow-md md:mt-0 md:w-auto`}
                >
                  subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

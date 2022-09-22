import React, { useState, useEffect } from "react";
import { MailIcon } from "@heroicons/react/outline";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function Blog() {
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
      id="blog"
      ref={ref}
      className="bg-cream pb-20"
      variants={sectionVariant}
      initial="hidden"
      animate={control}
    >
      <div className="px-4 lg:px-40">
        <div className="rounded-md bg-purple px-10 py-10 shadow-md">
          <h1 className="mb-5 font-display text-3xl font-bold capitalize leading-8 text-white md:text-4xl">
            Blog
          </h1>
          <div className="grid grid-cols-1 gap-8 sm:mx-auto sm:max-w-sm md:mt-10 md:max-w-none md:grid-cols-3 lg:mt-16 lg:max-w-3xl xl:max-w-none">
            <Link href="/blog">
              <a className="rounded-md bg-cream px-5 pt-8">
                <h1 className="my-5 font-display text-lg font-bold leading-8 text-purple md:text-2xl">
                  What is a trust?
                </h1>
                <img
                  src="/blog/blog-1.svg"
                  alt="What is a trust"
                  className="w-full"
                />
              </a>
            </Link>
            <Link href="/blog">
              <a className="rounded-md bg-cream px-5 pt-8">
                <h1 className="my-5 font-display text-lg font-bold leading-8 text-purple md:text-2xl">
                  Trust or Will
                </h1>
                <img
                  src="/blog/blog-2.svg"
                  alt="Trust or Will"
                  className="w-full"
                />
              </a>
            </Link>
            <Link href="/blog">
              <div className="flex h-64 rounded-md bg-cream lg:h-full">
                <h1 className="m-auto text-center font-display text-lg font-bold leading-8 text-purple md:text-2xl">
                  Why OneDay?
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

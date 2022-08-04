import { useEffect } from 'react'
import { MailIcon } from '@heroicons/react/outline'

export default function Contact() {
 
  return (
    <section id="contact">
        <div className="container">
            <img className="absolute mt-60 md:mt-10 lg:mt-5 right-10 md:right-6 lg:right-[8.4rem] select-none w-40 md:w-1/4 lg:w-52" src="/svg/circular-bg-alt.svg" alt="Circular lines" />
            <div className="px-10 py-20 bg-purple grid md:grid-cols-2 gap-10 justify-center items-center rounded-md shadow-md">
                <div className="max-w-sm">
                    <h1 className="font-display text-3xl md:text-4xl text-white font-bold leading-8 lg:leading-12 capitalize">
                    Stay Updated
                    </h1>
                    <p className="mt-5 font-sans text-sm md:text-sm leading-7 text-white">Be the first to know when we launch and receive monthly newsletters about how trusts work and why estate planning and digital is the future.</p>
                </div>
                <div className="mt-8 flex-none lg:flex gap-4">
                    <label className="relative block">
                        <span className="sr-only">Stay up to date</span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-8">
                            <MailIcon className="h-5 w-5 text-secondary/60" />
                        </span>
                        <input className="placeholder:text-sm placeholder:text-secondary/60 block bg-white w-full border border-slate-200 rounded-full py-3 pl-14 pr-0 lg:pr-20 shadow-sm focus:outline-none focus:border-purple focus:ring-purple focus:ring-1 sm:text-sm" placeholder="Stay up to date" type="text" name="email"/>
                    </label>
                    <button className="mt-3 w-full lg:mt-0 md:w-auto rounded-full border bg-purple px-6 py-3 text-sm text-white uppercase tracking-wide hover:bg-white hover:text-purple hover:shadow-md">subscribe</button>
                </div>
            </div>
        </div>
        <div className="container my-20">
            <img className="absolute mt-60 md:mt-10 lg:mt-5 right-10 md:right-6 lg:right-[8.4rem] select-none w-40 md:w-1/4 lg:w-52" src="/svg/circular-bg.svg" alt="Circular lines" />
            <div className="px-10 py-20 bg-cream grid md:grid-cols-2 gap-10 justify-center items-center rounded-md shadow-md">
                <div className="max-w-sm">
                    <h1 className="font-display text-3xl md:text-4xl text-secondary font-bold leading-8 lg:leading-12 capitalize">
                    Help Us Help You
                    </h1>
                    <p className="mt-5 font-sans text-sm md:text-sm leading-7 text-secondary">We would really appreciate your input to help us make the best product possible. If you have ~5 minutes we would love to get to know you and your goals better. </p>
                </div>
                <div className="mt-8 flex-none lg:flex gap-4">
                    <button className="mt-5 w-full md:w-auto rounded-md border bg-purple px-8 py-4 text-sm text-white uppercase tracking-wide hover:bg-purple/80 hover:shadow-md">take survey</button>
                </div>
            </div>
        </div>
       
    </section>
  )
}

import { useEffect } from 'react'
import { MailIcon } from '@heroicons/react/outline'


export default function Banner() {
 
  return (
    <section className="container">
        <div className="my-10 md:my-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
                <div role="gridcell">
                    <h1 className="font-display text-3xl md:text-5xl font-bold leading-8 lg:leading-12 capitalize">
                    Know your loved ones 
                    are taken care of. 
                    Whatever happens.
                    </h1>
                    <p className="mt-5 mr-24 lg:pr-20 font-sans text-sm leading-7 text-secondary/60">Estate planning for the new age. Setup trusts quickly, affordably and securely from the comfort of your own home.</p>
                    <div className="mt-8 flex-none md:flex gap-4">
                        <label className="relative block">
                            <span className="sr-only">Stay up to date</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-8">
                                <MailIcon className="h-5 w-5 text-secondary/60" />
                            </span>
                            <input className="placeholder:text-sm placeholder:text-secondary/60 block bg-white w-full border border-slate-200 rounded-full py-3 pl-14 pr-20 shadow-sm focus:outline-none focus:border-purple focus:ring-purple focus:ring-1 sm:text-sm" placeholder="Stay up to date" type="text" name="email"/>
                        </label>
                        <button className="mt-3 w-full md:mt-0 md:w-auto rounded-full border bg-purple px-6 py-3 text-sm text-white uppercase tracking-wide hover:bg-purple/90 hover:shadow-md">subscribe</button>
                    </div>
                </div>
                <div className='order-first lg:order-none' role="gridcell">
                    <img src="/images/home.png" alt="ONEDAY home" className="lg:mx-auto w-60 md:w-5/6 lg:w-full" />
                </div>
            </div>


        </div>
        
    </section>
  )
}

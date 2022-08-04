import { useEffect } from 'react'
import { MailIcon } from '@heroicons/react/outline'

export default function About() {
 
  return (
    <section id="about" className="bg-cream">
        <img className="mt-96 lg:my-20 absolute block select-none md:w-1/3 lg:w-96" src="/svg/about-bg.svg" alt="Circular lines" />
        <div className="container py-10 lg:py-40">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 justify-center items-center">
                <div className="lg:col-span-2" role="gridcell">
                    <div className="grid gap-6 lg:gap-12 grid-cols-2 grid-rows-3 md:grid-rows-2 md:grid-cols-3">
                        <div className="bg-white rounded drop-shadow-sm md:drop-shadow-md ring-1 ring-secondary/5 shadow-xl p-5">
                            <div>
                                <img src="/svg/Liquidity.svg" alt="Liquidity" className='h-12 w-12'/>
                            </div>
                            <h3 className="font-display mt-5 text-sm md:text-lg font-medium tracking-tight">Near instant liquidityfor your loved ones</h3>
                        </div>
                        <div className="bg-white rounded drop-shadow-sm md:drop-shadow-md ring-1 ring-secondary/5 shadow-xl p-5">
                            <div>
                                <img src="/svg/Avoidance of Probate.svg" alt="Avoidance of Probate" className='h-12 w-12'/>
                            </div>
                            <h3 className="font-display mt-5 text-sm md:text-lg font-medium tracking-tight">Avoidance of probate</h3>
                        </div>
                        <div className="bg-white rounded drop-shadow-sm md:drop-shadow-md ring-1 ring-secondary/5 shadow-xl p-5">
                            <div>
                                <img src="/svg/Succession Planning.svg" alt="Succession Planning" className='h-12 w-12'/>
                            </div>
                            <h3 className="font-display mt-5 text-sm md:text-lg font-medium tracking-tight">Hassle-free succession planning</h3>
                        </div>
                        <div className="bg-white rounded drop-shadow-sm md:drop-shadow-md ring-1 ring-secondary/5 shadow-xl p-5">
                            <div>
                                <img src="/svg/Asset Protection.svg" alt="Asset Protection" className='h-12 w-12'/>
                            </div>
                            <h3 className="font-display mt-5 text-sm md:text-lg font-medium tracking-tight">Asset Protection</h3>
                        </div>
                        <div className="bg-white rounded drop-shadow-sm md:drop-shadow-md ring-1 ring-secondary/5 shadow-xl p-5">
                            <div>
                                <img src="/svg/Preservation of assets.svg" alt="Preservation of assets" className='h-12 w-12'/>
                            </div>
                            <h3 className="font-display mt-5 text-sm md:text-lg font-medium tracking-tight">Preservation of assets</h3>
                        </div>
                        <div className="bg-white rounded drop-shadow-sm md:drop-shadow-md ring-1 ring-secondary/5 shadow-xl p-5">
                            <div>
                                <img src="/svg/Tax Planning.svg" alt="Tax Planning" className='h-12 w-12'/>
                            </div>
                            <h3 className="font-display mt-5 text-sm md:text-lg font-medium tracking-tight">Tax Planning</h3>
                        </div>
                    </div>
                    
                    
                </div>
                <div className='order-first lg:order-none' role="gridcell">
                    <h1 className="font-display text-3xl md:text-4xl font-bold leading-8 lg:leading-12 capitalize">
                    what can a trust do for you
                    </h1>
                    <p className="mt-5 font-sans text-sm md:text-lg leading-7 text-secondary/60">With so much happening in the world, it’s important to plan ahead for the future of you and your loved ones.</p>
                    
                    <p className="mt-10 font-sans text-sm md:text-lg leading-7 text-secondary/60">If you have ~5 minutes to spare, we would really appreciate it if you took our short survey to help us make the best trust product possible.</p>
                    <button className="mt-5 w-full md:w-auto rounded-md border bg-purple px-8 py-4 text-sm text-white uppercase tracking-wide hover:bg-purple/90 hover:shadow-md">take survey</button>
                </div>
            </div>
        </div>
    </section>
  )
}

import { useEffect } from 'react'

export default function Services() {
 
  return (
    <section id="services">
        <div className="absolute block w-full h-screen">
            <svg className="w-full h-screen" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1739 1H-2L1700 524V1Z" fill="#304E86" stroke="#304E86"/>
            </svg>
        </div>
        <div className="container pt-20 pb-10 md:pt-40">
            <h1 className="font-display text-3xl md:text-4xl font-bold leading-8 lg:leading-12 capitalize">
                How It Works
            </h1>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
                <div className="relative overflow-hidden rounded-md">
                    <img src="/services/01.png" alt="Sign up to OneDay" className="w-full"/>
                    <div className="absolute h-full flex flex-col justify-between inset-x-0 bottom-0 bg-black/60 bg-cover bg-center bg-no-repeat p-8">
                        <h3 className="-mt-6 text-right font-display text-white/40 text-6xl">01</h3>
                        <p className="text-white text-base">Sign up to OneDay</p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-md">
                    <img src="/services/02.png" alt="Fill in personal information for your trust deed" className="w-full"/>
                    <div className="absolute h-full flex flex-col justify-between inset-x-0 bottom-0 bg-black/60 bg-cover bg-center bg-no-repeat p-8">
                        <h3 className="-mt-6 text-right font-display text-white/40 text-6xl">02</h3>
                        <p className="text-white text-base">Fill in personal information for your trust deed</p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-md">
                    <img src="/services/03.png" alt="Trust deed is generated, signed and put on the blockchain" className="w-full"/>
                    <div className="absolute h-full flex flex-col justify-between inset-x-0 bottom-0 bg-black/60 bg-cover bg-center bg-no-repeat p-8">
                        <h3 className="-mt-6 text-right font-display text-white/40 text-6xl">03</h3>
                        <p className="text-white text-base">Trust deed is generated, signed and put on the blockchain</p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-md">
                    <img src="/services/04.png" alt="Your vaults are created to store your fiat/digital assets" className="w-full"/>
                    <div className="absolute h-full flex flex-col justify-between inset-x-0 bottom-0 bg-black/60 bg-cover bg-center bg-no-repeat p-8">
                        <h3 className="-mt-6 text-right font-display text-white/40 text-6xl">04</h3>
                        <p className="text-white text-base">Your vaults are created to store your fiat/digital assets</p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-md">
                    <img src="/services/05.png" alt="Send assets to your dedicated vault" className="w-full"/>
                    <div className="absolute h-full flex flex-col justify-between inset-x-0 bottom-0 bg-black/60 bg-cover bg-center bg-no-repeat p-8">
                        <h3 className="-mt-6 text-right font-display text-white/40 text-6xl">05</h3>
                        <p className="text-white text-lg">Send assets to your dedicated vault</p>
                    </div>
                </div>
            </div>

            <div className="mt-20 p-10 md:p-12 lg:px-20 bg-cream grid md:grid-cols-2 justify-center items-center rounded-md shadow-md">
                <img src="/svg/dream.svg" alt="Dream" />
                <div>
                    <h1 className="font-display text-3xl md:text-4xl font-bold leading-8 lg:leading-12 capitalize">
                    We’ll Take Care of the Rest
                    </h1>
                    <p className="mt-5 font-sans text-sm md:text-sm leading-7 text-secondary">With unprecendented world issues it is more important now than ever to be prepared and make sure your loved ones are protected and secured no matter what happens.</p>
                </div>
            </div>
        </div>
        
    </section>
  )
}

import { useEffect } from 'react'
import Link from 'next/link'


export default function Header() {
  useEffect(() => {
    const mobileNavButton = document.getElementById('mobile-nav-button')
    const mobileNavMenu = document.getElementById('mobile-navigation')
    const mobileCloseButton = document.getElementById('mobile-close-button')
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay')
    mobileNavButton.addEventListener('click', () => {
      mobileNavMenu.classList.remove('hidden')
      mobileNavOverlay.classList.remove('hidden')
    })
    mobileCloseButton.addEventListener('click', () => {
      mobileNavMenu.classList.add('hidden')
      mobileNavOverlay.classList.add('hidden')
    })
  }, [])
 
  return (
    <header className="relative w-full border-b-2 border-gray-100">
        <div className="flex justify-between items-center px-10 py-3">
          <span className="sr-only">oneday</span>
          <Link className="ml-4 py-4 md:py-2 lg:py-0" href="/">
            <a role="button">
              <img src="/images/oneday-logotype.svg" alt="Logo"/>
            </a>
          </Link>
          <nav className="" role="menu" aria-label="Main Menu">
            <div className="hidden lg:flex lg:items-center lg:gap-x-16 lg:py-10 font-sans font-bold text-secondary/80 uppercase tracking-wide">
              <Link href="/">
                <a className="lg:block hover:text-purple" role="menuitem">Home</a>
              </Link>
              <Link href="#about">
                <a className="lg:block hover:text-purple" role="menuitem">About us</a>
              </Link>
              <Link href="#services">
                <a className="lg:block hover:text-purple" role="menuitem">Services</a>
              </Link>
              <Link href="#contact">
                <a className="lg:block hover:text-purple" role="menuitem">Contact Us</a>
              </Link>
            </div>
          </nav>
          <div className="hidden lg:flex items-center space-x-2 font-semibold lg:space-x-4">
              <button className="rounded-full border border-purple px-6 py-3 text-purple uppercase tracking-wide hover:bg-purple hover:text-white">Login</button>
          </div>
          <button className="lg:hidden" id="mobile-nav-button">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path stroke="#121212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h16M4 6h16H4Zm0 6h16H4Z" />
            </svg>
          </button>
        </div>


        <div className="fixed inset-x-2 top-2 z-20 hidden rounded-xl bg-white p-6 shadow-lg lg:hidden" id="mobile-navigation">
          <div className="flex items-center justify-between">
            <span className="sr-only">oneday</span>
            <Link className="ml-4 py-4 md:py-2 lg:py-0" href="#">
              <a role="button">
                <img src="/images/oneday-logotype.svg" alt="Logo"/>
              </a>
            </Link>

            <button id="mobile-close-button">
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path stroke="#9ca3af" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 6 12 12M6 18 18 6 6 18Z" />
              </svg>
            </button>
          </div>

          <nav className="mt-6 space-y-1text-secondary/80 uppercase tracking-wide text-center" aria-label="Mobile navigation">
            <Link href="/">
                <a className="-mx-3 block rounded-lg bg-purple/5 px-3 py-2" role="menuitem">Home</a>
            </Link>
            <Link href="#about">
                <a className="-mx-3 block rounded-lg px-3 py-2 hover:bg-purple/5" role="menuitem">About Us</a>
            </Link>
            <Link href="#services">
                <a className="-mx-3 block rounded-lg px-3 py-2 hover:bg-purple/5" role="menuitem">Services</a>
            </Link>
            <Link href="#contact">
                <a className="-mx-3 block rounded-lg px-3 py-2 hover:bg-purple/5" role="menuitem">Contact Us</a>
            </Link>
            <button className="mt-5 w-full rounded-full border border-purple px-6 py-2 text-purple uppercase tracking-wide">Login</button>
          </nav>
        </div>
        <div className="fixed inset-0 z-10 hidden h-screen w-screen bg-black/50 lg:hidden" id="mobile-nav-overlay" aria-label="Mobile navigation overlay"></div>
    </header>
  )
}

import { ArrowUp } from "lucide-react"
// import Image from "next/image"
import { Link } from "react-router-dom"
import React from 'react'

// import Link from "next/link"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-[#272727] text-white py-12 px-6 h-auto  overflow-hidden">
      {/* Top Logo */}
      <img src="src\assets\starmedium 2.png" alt="" className="absolute"/>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl flex font-bold">TRIPGO <img src="src\assets\logo_singlestore_white_horizontal 2.png" alt="" /> </span>
            <div className="w-6 h-6">
            
            </div>
          </Link>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="rounded-full border border-white/20 p-3 hover:bg-white/10 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Content Grid */}
        <div className=" flex flex-col md:flex-row gap-12">
          {/* Company Links */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Company</h2>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-orange-500 transition-colors">
                About Us
              </Link>
              <Link href="/tours" className="hover:text-orange-500 transition-colors">
                Tours
              </Link>
              <Link href="/careers" className="hover:text-orange-500 transition-colors">
                Careers
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Contact</h2>
            <div className="flex flex-col gap-4">
              <p>+91 987654321</p>
              <p>info@tripgo.com</p>
              <p>support@tripgo.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Logo */}
        <div className="absolute bottom-0 right-0 opacity-90">
          <div className="relative w-full ml-[970px]">
            {/* <span className="text-[120px] md:text-[180px] font-bold leading-none flex text-white">TRIPGO <img src="src\assets\dotmark.c4f3a28f 1.png" alt="" /> </span> */}
            <img src="src\assets\Screenshot 2025-02-20 204431.png"  className='w-[35%] ' alt="" />
            <div className="absolute -right-4 bottom-0 w-16 h-16 md:w-24 md:h-24">
          
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


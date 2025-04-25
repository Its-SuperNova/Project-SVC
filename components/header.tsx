"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-semibold tracking-tight text-primary">SVC</span>
          <span className="hidden md:inline-block text-lg font-medium">Shree Venkateshwara Creations</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-primary">
            Gallery
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-white",
          isMenuOpen ? "slide-in-from-top-2" : "hidden",
        )}
      >
        <div className="relative z-20 grid gap-6 rounded-md p-4">
          <Link href="/" className="flex items-center space-x-2" onClick={toggleMenu}>
            <span className="text-lg font-medium">Home</span>
          </Link>
          <Link href="/about" className="flex items-center space-x-2" onClick={toggleMenu}>
            <span className="text-lg font-medium">About</span>
          </Link>
          <Link href="/services" className="flex items-center space-x-2" onClick={toggleMenu}>
            <span className="text-lg font-medium">Services</span>
          </Link>
          <Link href="/gallery" className="flex items-center space-x-2" onClick={toggleMenu}>
            <span className="text-lg font-medium">Gallery</span>
          </Link>
          <Link href="/contact" className="flex items-center space-x-2" onClick={toggleMenu}>
            <span className="text-lg font-medium">Contact</span>
          </Link>
          <button className="absolute right-4 top-4" onClick={toggleMenu}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </button>
        </div>
      </div>
    </header>
  )
}

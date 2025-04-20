"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                RunAsh AI 
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
              About 
            </Link>
            <Link href="#buy" className="text-gray-300 hover:text-white transition-colors">
              Buy
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="#doc" className="text-gray-300 hover:text-white transition-colors">
              Doc
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Log In
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-purple-900/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#about"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-900/20 rounded-md"
            >
              About 
            </Link>
            <Link
              href="#buy"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-900/20 rounded-md"
            >
              Buy
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-900/20 rounded-md"
            >
              Contact 
            </Link>
            <Link
              href="#doc"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-900/20 rounded-md"
            >
              Doc
            </Link>
          </div>
          <div className="px-5 py-4 border-t border-gray-800 flex flex-col space-y-3">
            <Button variant="ghost" className="justify-center text-gray-300 hover:text-white">
              Log In
            </Button>
            <Button className="justify-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
                }
              

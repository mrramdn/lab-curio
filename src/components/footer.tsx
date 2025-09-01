"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="relative bg-background border-t" style={{ height: '90px' }}>
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image 
              src={theme === 'dark' ? "/logo-white.svg" : "/logo.svg"}
              alt="Lab Curio Logo" 
              width={100} 
              height={0}
              style={{ height: 'auto' }}
              className="transition-transform group-hover:scale-110" 
            />
          </Link>

          {/* Footer info */}
          <div className="hidden md:flex items-center space-x-8 text-sm text-muted-foreground">
            <span>© 2025 Lab Curio</span>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile copyright */}
          <div className="md:hidden text-sm text-muted-foreground">
            © 2025 Lab Curio
          </div>
        </div>
      </div>
    </footer>
  )
}

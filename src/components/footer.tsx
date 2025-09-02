"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="relative glass-card border-t">
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src={theme === "dark" ? "/logo-white.svg" : "/logo.svg"}
              alt="Lab Curio Logo"
              width={90}
              height={0}
              style={{ height: "auto" }}
              className="transition-transform group-hover:scale-110"
            />
          </Link>

          {/* Footer info */}
          <div className="flex items-center space-x-8 text-sm text-muted-foreground">
            <span>© 2025 Lab Curio</span>
            <Link
              href="https://rifkidev.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Credit
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          {/* Logo */}
          <div className="flex justify-center" style={{ marginBottom: "0" }}>
            <Link href="/" className="flex items-center group">
              <Image
                src={theme === "dark" ? "/logo-white.svg" : "/logo.svg"}
                alt="Lab Curio Logo"
                width={80}
                height={0}
                style={{ height: "auto" }}
                className="transition-transform group-hover:scale-110"
              />
            </Link>
          </div>

          {/* Links */}
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <Link
              href="https://rifkidev.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Credit
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground" style={{ paddingBottom: "20px" }}>
            © 2025 Lab Curio
          </div>
        </div>
      </div>
    </footer>
  );
}

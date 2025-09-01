"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className="relative glass-card border-t"
      style={{ height: "90px" }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
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
          <div className="hidden md:flex items-center space-x-8 text-sm text-muted-foreground">
            <span>© 2025 Lab Curio</span>
            <Link
              href="https://drive.google.com/file/d/1kpYWD0TyCKxh5ToNVhHsXb-GVLY1p-rx/view"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Guide Book
            </Link>
            <Link
              href="https://forms.office.com/r/ek1RbYXYtv?origin=lprLink"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Registration
            </Link>
            {/* <Link
              href="https://wa.me/6287822510722?text=Halo%20saya%20ingin%20bertanya%20mengenai%20lab%20curiosity!"
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </Link> */}
            {/* <link
              href="https://rifkidev.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Credit
            </link> */}
          </div>

          {/* Mobile copyright */}
          <div className="md:hidden text-sm text-muted-foreground">
            © 2025 Lab Curio
          </div>
        </div>
      </div>
    </footer>
  );
}

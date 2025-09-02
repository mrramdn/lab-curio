import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "@/components/error-boundary";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { CursorBackground } from "@/components/cursor-background";
import { AppWrapper } from "@/components/app-wrapper";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta-sans",
});

// export const metadata: Metadata = {
//   title: {
//     default: "Lab Curio - Future of Learning and Innovation",
//     template: "%s | Lab Curio",
//   },
//   description:
//     "Welcome to the future of learning and innovation. Explore, discover, and create amazing things with Lab Curio.",
//   keywords: [
//     "learning",
//     "innovation",
//     "education",
//     "technology",
//     "lab",
//     "curio",
//   ],
//   authors: [{ name: "Lab Curio Team" }],
//   creator: "Lab Curio",
//   publisher: "Lab Curio",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   metadataBase: new URL("https://labcurio.com"),
//   alternates: {
//     canonical: "/",
//   },
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://labcurio.com",
//     title: "Lab Curio - Future of Learning and Innovation",
//     description:
//       "Welcome to the future of learning and innovation. Explore, discover, and create amazing things with Lab Curio.",
//     siteName: "Lab Curio",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Lab Curio - Future of Learning and Innovation",
//     description:
//       "Welcome to the future of learning and innovation. Explore, discover, and create amazing things with Lab Curio.",
//     creator: "@labcurio",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo-square.svg" type="image/svg+xml" />
        </head>
      <body className={jakartaSans.variable}>
        <CursorBackground />
        <SmoothCursor />
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <AppWrapper>
              {children}
            </AppWrapper>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}

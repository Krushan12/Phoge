import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Phoge",
  description: "AI-powered image generator",
  icons: {
    icon: "/assets/images/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5' }
    }}>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)} suppressHydrationWarning>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

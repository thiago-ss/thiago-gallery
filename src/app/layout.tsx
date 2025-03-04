import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { NavBar } from "./_components/NavBar";

export const metadata: Metadata = {
  title: "Thiago's Gallery",
  description: "A gallery of my life in images",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="flex flex-col gap-10">
          <NavBar />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}

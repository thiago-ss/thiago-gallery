import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Thiago's Gallery",
  description: "A gallery of my life in images",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const NavBar = () => (
  <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
    <h1 className="text-2xl font-bold">Thiago&apos;s Gallery</h1>
    <p>Sign In</p>
  </nav>
);

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col gap-10">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}

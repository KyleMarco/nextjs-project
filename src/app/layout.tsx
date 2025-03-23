import type { Metadata } from "next";
// import { Roboto } from "next/font/google";
import "@/app/globals.css";
import ReduxProvider from "./provider";
// import Button from "@/app/components/Button";

// const roboto = Roboto({
//   variable: "--font-geist-sans",
//   subsets: [],
// });

export const metadata: Metadata = {
  title: "Welcome To My Little App",
  description: "Kyle Marco Cabiling - Software Developer (ReactJS Developer)",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="bg-blue-100">
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gregorio Suapero II",
  description:
    "Highly passionate and motivated in web development and fond of building interactive web applications.",
  openGraph: {
    type: "website",
    url: "https://gregdsii.vercel.app",
    title: "Gregorio Suapero II",
    description:
      "Highly passionate and motivated in web development and fond of building interactive web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gregorio Suapero II",
    description:
      "Highly passionate and motivated in web development and fond of building interactive web applications.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"bg-slate-950 text-slate-100 " + inter.className}>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(15, 23, 42)",
              color: "rgb(226, 232, 240)",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}

import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import CategoryNav from "./_components/CategoryNav";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Jersey Shorr",
    default: "Welcome | Jersey Shorr",
  },
  description: "Description about the app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} relative grid min-h-screen grid-rows-[100px_50px_auto_100px]`}
      >
        <Header />
        <CategoryNav />
        <div>
          <main>{children}</main>
        </div>
        <footer className="bg-primary-800">Copyright text</footer>
      </body>
    </html>
  );
}

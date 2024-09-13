import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import CategoryNav from "./_components/CategoryNav";
import NotfiicationBanner from "./_components/NotfiicationBanner";
import Sidebar from "./_components/Sidebar";
import { MenuProvider } from "@/context/menuContext";

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
      <body className={`${josefin.className} flex min-h-screen flex-col`}>
        <NotfiicationBanner />
        <MenuProvider>
          <Sidebar />
          <Header />
        </MenuProvider>
        <CategoryNav />
        <div className="content-wrapper">
          <main>{children}</main>
        </div>
        <footer className="bg-primary-800">Copyright text</footer>
      </body>
    </html>
  );
}

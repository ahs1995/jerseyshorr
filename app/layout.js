import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import NotfiicationBanner from "./_components/NotfiicationBanner";
import { MenuProvider } from "@/context/menuContext";
import Providers from "./_components/Providers";
import { Toaster } from "react-hot-toast";
import CategoryExplorer from "./_components/CategoryExplorer";

const josefin = Josefin_Sans({
  weight: "400",
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
        <Providers>
          <MenuProvider>
            <NotfiicationBanner />
            <Header />
            <CategoryExplorer />
          </MenuProvider>
          <div className="content-wrapper">
            <main>{children}</main>
          </div>
          <footer className="mt-auto bg-primary-800">Copyright text</footer>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}

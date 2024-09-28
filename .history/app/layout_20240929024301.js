import { Provider } from "react-redux";
import store from "./_lib/store/store";
import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import "@/app/_styles/globals.css";
import { getProducts } from "./_lib/services/productService";
import { Josefin_Sans } from "next/font/google";
import CategoryNav from "./_components/CategoryNav";
import NotfiicationBanner from "./_components/NotfiicationBanner";
import Sidebar from "./_components/Sidebar";
import { MenuProvider } from "@/context/menuContext";
import Overlay from "./_components/Overlay";
import CategorySidebar from "./_components/CategorySidebar";

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

export default async function RootLayout({ children }) {
  // Fetch product data's
  const { byStyle, teams, newArrival } = await getProducts();

  return (
    <html lang="en">
      <MenuProvider>
        <body className={`${josefin.className} flex min-h-screen flex-col`}>
          <Provider store={store}>
            <NotfiicationBanner />
            <Overlay />
            <Sidebar />
            <CategorySidebar byStyle={byStyle} teams={teams} />
            <Header />
            <CategoryNav byStyle={byStyle} teams={teams} />
            <div className="content-wrapper">
              <main>{children}</main>
            </div>
            <footer className="mt-auto bg-primary-800">Copyright text</footer>
          </Provider>
        </body>
      </MenuProvider>
    </html>
  );
}

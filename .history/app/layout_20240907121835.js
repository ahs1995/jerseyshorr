import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import "@/app/_styles/globals.css";

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
      <body className="relative grid min-h-screen grid-rows-3 bg-primary-50">
        <Header />
        <div className="bg-primary-500">
          <main>{children}</main>
        </div>
        <footer className="bg-primary-800">Copyright text</footer>
      </body>
    </html>
  );
}

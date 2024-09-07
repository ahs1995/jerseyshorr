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
      <body className="min-h-screen flex flex-col bg-primary-500">
        <Header />
        <div>
          <main>{children}</main>
        </div>
        <footer>Copyright text</footer>
      </body>
    </html>
  );
}

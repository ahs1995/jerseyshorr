import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import "@/app/_styles/globals.css";

export const metadata = {
  title: "%s | jersey shorr",
  default: "Welcome | e-jersey shorr",
  description: "description about the application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>
          <main>{children}</main>
        </div>
        <footer>Copyright text</footer>
      </body>
    </html>
  );
}

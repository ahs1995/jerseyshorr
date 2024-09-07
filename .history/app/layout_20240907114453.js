import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s | jersey shorr",
    default: "Welcome | jersey shorr",
  },
  description: "Description about the app",
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

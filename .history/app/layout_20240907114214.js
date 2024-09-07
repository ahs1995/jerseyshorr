import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import "@/app/_styles/globals.css";

export const metadata = {
  title: "%s | e-commerce-app",
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

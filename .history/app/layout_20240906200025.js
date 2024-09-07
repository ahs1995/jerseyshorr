import "@/app/_styles/globals.css";
import Header from "@/app/_components/header";

export const metadata = {
  title: "e-commerce-app",
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

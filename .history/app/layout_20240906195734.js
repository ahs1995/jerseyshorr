import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <footer>Copyright text</footer>
      </body>
    </html>
  );
}

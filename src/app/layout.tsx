import Footer from "../components/layout/footer";
import "./globals.css";
import Navbar from "../components/layout/navBar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html  lang="en" className="h-full bg-gray-900">
      <body className="dark:bg-blue">
        <Navbar />
        <main className="min-h-screen bg-blue">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

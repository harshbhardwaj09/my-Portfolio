import Footer from "../components/layout/footer";
import "./globals.css";
import Navbar from "../components/layout/navBar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html  lang="en" className="bg-[#18181b]">
      <body className="dark:bg-blue">
        <div className="px-4 sm:px-6 lg:px-80">
        <Navbar />
        <main className="min-h-screen bg-blue">{children}</main>
        <Footer />
        </div>
      </body>
    </html>
  );
}

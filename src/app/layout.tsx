import Footer from "../components/layout/footer";
import "./globals.css";
import Navbar from "../components/layout/navBar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en" className="bg-[#18181b]">
    <html lang="en" className="bg-black">
      <body>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

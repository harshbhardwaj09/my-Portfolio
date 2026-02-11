import Footer from "../components/layout/footer";
import "../../global.css";
import Navbar from "../components/layout/navBar";
import SideSocials from "./SideSocials";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //     <html lang="en" className="relative">
    //   <body className="min-h-screen bg-black">

    //     {/* soft radial glow */}
    //     <div className="
    //       pointer-events-none
    //       fixed inset-0
    //       bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.12),transparent_40%)]
    //     " />

    //     {/* base gradient */}
    //     <div className="
    //       pointer-events-none
    //       fixed inset-0
    //       bg-gradient-to-br
    //       from-black
    //       via-zinc-900
    //       to-black
    //     " />

    //     {/* content */}
    //     <div className="relative z-10">
    //         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
    //           <Navbar />
    //           <main>{children}</main>
    //           <Footer />
    //         </div>
    //     </div>

    //   </body>
    // </html>
    //     // <html lang="en" className="bg-[#18181b]">
    //     //for light
    // //    <html lang="en" className="bg-black/30">
    // //  bg-[url('/download.png')]
    // //         bg-cover
    // //         bg-center
    // //         bg-no-repeat">
    //   <html
    //     lang="en"
    //     className="
    //   bg-gradient-to-br
    //    from-black
    //   via-zinc-900
    //    to-neutral-950
    //    bg-fixed
    // "
    //   >

    <html lang="en" className="bg-fixed bg-black/95">
      <body className={poppins.className}>
        <SideSocials />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import SectionTest from "@/components/sections/sectionTest";
import Image from "next/image";


const SECTIONS = ["Home", "About", "Products", "Services", "Contact"];
export default function Home() {
  return (
    <div className="h-screen flex justify-between">
<div className="h-72 w-72 rounded-full  border-[4px] border-white overflow-hidden flex items-center justify-center">
  <img
    src="/harsh2.png"
    alt="profile"
    className="h-full w-full object-cover"
  />
</div>
<div className="text-white">
  Harsh Bhardwaj
  <br />
  Full Stack Developer
</div>


          </div>
  );
}

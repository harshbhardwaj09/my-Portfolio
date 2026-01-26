import SectionTest from "@/components/sections/sectionTest";

const SECTIONS = ["Home", "About", "Products", "Services", "Contact"];
export default function Home() {
  return (
<>
      {SECTIONS.map((section) => (
        <div key={section} className="text-2xl text-blue-500">
          <SectionTest/>
        </div>
      ))}
</>
  );
}



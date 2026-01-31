import React from "react";
import Image from "next/image";

export default function SectionTest() {
  return (
    <div className="h-64 my-4 mx-4 flex items-center justify-center">
      <Image
        src="/harrsh2.png"
        alt="profile"
        width={300}
        height={200}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
}

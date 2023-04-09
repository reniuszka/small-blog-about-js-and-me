import React from "react";
import Image from "next/image";
type Props = {};

const MyProfilePic = (props: Props) => {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-slate-300 drop-shadow-xl shadow-black rounded-full mx-auto my-16"
        src="/images/renata-diurczak.jpeg"
        width={200}
        height={200}
        alt="Renata Diurczak"
        priority={true}
      />
    </section>
  );
};

export default MyProfilePic;

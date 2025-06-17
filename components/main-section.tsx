import Image from "next/image";
import React from "react";

const MainSection = () => {
  return (
    <div className="h-[90dvh] relative">
      <Image
        src={
          "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="Background image"
        fill
        className="object-cover"
        priority
      />
      <div className="overlay  inset-0  bg-primary opacity-70 z-10"></div>
      <div className="overlay inset-0 z-20 flex flex-col items-center justify-center text-white">
        <p className="font-sans">The Latest Product from ecoshop</p>
        <div className="mt-16 flex flex-col items-center justify-center">
          <h2 className="heading">Look Beautiful</h2>
          <h1 className="heading ">This Season</h1>
        </div>
      </div>
    </div>
  );
};

export default MainSection;

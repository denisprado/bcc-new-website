import React from "react";
import LogoLoading from "/public/structuralImages/logo-loading.svg";
import Image from "next/image";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full p-10 ">
      <Image
        unoptimized
        src={LogoLoading}
        width={80}
        height={80}
        alt="loading"
        priority
      />
    </div>
  );
};

export default Loading;

import Image from "next/image";
import React from "react";

const SplashScreen = () => {
  return (
    <section
      className="splash-screen"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dbqwmndns/image/upload/w_800,q_auto/v1700375582/GHA/icons/bgwhiteyello2_fczk4h.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-[150px] sm:h-[60px]">
        <Image
          priority={true}
          placeholder="empty"
          blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
          width={0}
          height={0}
          sizes="100vw"
          src="https://res.cloudinary.com/dbqwmndns/image/upload/w_800,q_auto/v1700301542/GHA/logo_pjrxda.png"
          alt="Logo Top"
          className="object-cover sm:object-contain animate-spin-slow h-full w-full"
        />
      </div>
    </section>
  );
};

export default SplashScreen;

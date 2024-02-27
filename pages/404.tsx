// pages/404.js
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdArrowBack } from "react-icons/md";

const NotFoundPage = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  return (
    <>
      <section
        className="grid place-items-center h-screen"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dbqwmndns/image/upload/w_800,q_auto/v1700375582/GHA/icons/bgwhiteyello2_fczk4h.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-12">
          <h1 className="text-primary font-bold mb-4">404 - Page Not Found</h1>
          <p className="mb-8">
            The page you are looking for might be in another castle. Please Go
            back .
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleBackClick}
              className="border rounded-lg gap-2 bg-primary hover:border-[yellow] text-white sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center"
            >
              <MdArrowBack />
              Go back
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;

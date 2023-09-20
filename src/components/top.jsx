import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const Top = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 bg-[#5bc8c1] text-white p-2 rounded-full cursor-pointer ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <ChevronDoubleUpIcon className="w-8 h-8" />
    </div>
  );
};
export default Top;

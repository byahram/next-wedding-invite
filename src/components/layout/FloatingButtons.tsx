"use client";

import { useEffect, useState } from "react";
import { IoShareSocialOutline, IoArrowUp } from "react-icons/io5";
import { Button } from "../common/Buttons";

export default function FloatingButtons() {
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "우리 결혼합니다 💍",
          url: window.location.href,
        })
        .catch((err) => console.error(err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("링크가 복사되었습니다!");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed max-w-md mx-auto bottom-4 left-0 right-0 z-40 px-4">
      <div className="flex flex-col gap-3 items-end">
        {showButtons && (
          <>
            <Button
              className="hover:bg-gray-900/70"
              variant="floating"
              size="floating"
              onClick={scrollToTop}
            >
              <IoArrowUp />
            </Button>
            <Button
              className="hover:bg-gray-900/70"
              variant="floating"
              size="floating"
              onClick={handleShare}
            >
              <IoShareSocialOutline />
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

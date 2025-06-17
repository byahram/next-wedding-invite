import { Transportation, WeddingInfo } from "@/utils/types";
import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import Script from "next/script";
import { Button } from "../common/Buttons";
import { MdContentCopy } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function LocationSection({
  info,
  trans,
}: {
  info: WeddingInfo;
  trans: Transportation[];
}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCall = () => {
    window.location.href = `tel:${info.wedding.call}`;
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <section
      id="location"
      className="relative w-full mx-auto overflow-hidden pt-20 pb-10 px-8"
    >
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`}
        strategy="afterInteractive"
        onLoad={() => {
          if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => {
              const container = document.getElementById("map");
              if (!container) {
                return;
              }

              const lat = 37.53385;
              const lng = 126.97756;

              const map = new window.kakao.maps.Map(container, {
                center: new window.kakao.maps.LatLng(lat, lng),
                level: 5,
              });

              new window.kakao.maps.Marker({
                position: new window.kakao.maps.LatLng(lat, lng),
                map,
              });
            });
          }
        }}
      />
      <div className="flex flex-col items-center text-center">
        <SectionTitle title="Location" />
        <div className="space-y-0.5">
          <p className="font-medium flex gap-2">
            {info.wedding.location}
            <Button className="p-1" variant="only_icon" onClick={handleCall}>
              <IoCallOutline size={14} />
            </Button>
          </p>
          <p className="mb-4 font-medium flex gap-2">
            {info.wedding.address}
            <Button
              className="p-1"
              variant="only_icon"
              onClick={() => handleCopy(info.wedding.address)}
            >
              <MdContentCopy size={14} />
            </Button>
          </p>
        </div>

        <div className="w-full mt-4">
          <div id="map" className="w-full h-[300px] shadow-md"></div>

          <ul className="text-left w-full text-sm leading-relaxed space-y-6 mt-8">
            {trans.map((item, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <p className="font-bold text-lg text-gray-800 mr-3">
                    {item.title}
                  </p>
                </div>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 mb-2">
                    {detail}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>

        {isCopied && (
          <div className="fixed top-20 w-3/4 bg-neutral-800/50 text-white text-xs p-2 text-center transition-all rounded-xl">
            계좌번호가 복사되었습니다!
          </div>
        )}
      </div>
    </section>
  );
}

import { IWeddingInfo } from "@/utils/types";
import { formatDate } from "@/utils/utils";
import Image from "next/image";
import React from "react";

export default function MainCoverSection({ info }: IWeddingInfo) {
  return (
    <section id="main" className="relative w-full mx-auto overflow-hidden">
      <div className="relative">
        {/* <div className="relative aspect-[3/4] w-full"> */}
        <div className="relative h-[77vh] w-full">
          <Image
            src={info.images.main}
            alt="Wedding Cover"
            fill
            className="object-cover"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[1px] left-0 right-0 h-24 bg-gradient-to-t from-white via-white/70 to-transparent"
        />

        <div className="absolute top-0 w-full h-full overflow-hidden pointer-events-none">
          <img
            draggable={false}
            className="absolute top-0 left-0 w-full select-none pointer-events-none call-out"
            style={{
              zIndex: 3,
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%, rgba(0,0,0,0))",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%, rgba(0,0,0,0))",
            }}
            src="/effect/1.jfif"
            alt=""
          />
        </div>
      </div>

      <div className="text-center font-normal mx-auto bg-background leading-7 pt-8 pb-12">
        <div className="text-lg mb-3">
          <span className="font-semibold">{info.groom.nameKo.slice(1)}</span>{" "}
          <span className="text-[var(--title1)]">♥</span>{" "}
          <span className="font-semibold mr-0.5">
            {info.bride.nameKo.slice(1)}
          </span>
        </div>
        <p>{formatDate(info.wedding.dateAndTime)}</p>
        <p>{info.wedding.location}</p>
      </div>
    </section>
  );
}

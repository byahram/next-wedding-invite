import React from "react";
import { IMainInfo } from "@/utils/types";
// import dayjs from "dayjs";

export default function ClosingSection({ info }: IMainInfo) {
  //   const weddingDate = dayjs(info.wedding.date);
  //   const today = dayjs();
  //   const diff = weddingDate.diff(today, "day");

  //   const dDayText =
  //     diff === 0 ? "D-day" : diff > 0 ? `D - ${diff}` : `D + ${Math.abs(diff)}`;

  return (
    <section
      id="closing"
      className="relative w-full max-w-xl mx-auto overflow-hidden"
    >
      <div className="flex flex-col items-center text-center">
        <img src={info.images.sub2} alt="" className="w-full object-cover" />
        {/* <div className="absolute bottom-20 text-white text-xl font-semibold drop-shadow-md">
          {dDayText}
        </div>
        <div cl`assName="absolute bottom-12 text-white text-base drop-shadow-sm">
          많은 축하 부탁드립니다!
        </div>` */}
      </div>
    </section>
  );
}

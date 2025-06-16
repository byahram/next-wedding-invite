"use client";

import { IWeddingInfo } from "@/utils/types";
import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import { Button } from "../common/Buttons";
import AttendPopup from "../popup/AttendPopup";

export default function RsvpSection({ info }: IWeddingInfo) {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true);
  };

  return (
    <section
      id="account"
      className="relative w-full mx-auto overflow-hidden pt-10 pb-20 bg-[var(--background2)]"
    >
      <div className="flex flex-col items-center text-center">
        <SectionTitle title="Rsvp" subtitle="참석 정보" />

        <p className="leading-7">
          참석의 부담은 가지지 말아주시고 <br />
          정성껏 준비하기 위해 여쭙는 것이니 <br />
          참석 정보를 알려주시면 감사하겠습니다.
        </p>

        <Button
          className="mt-10"
          variant="solid"
          size="default"
          onClick={handlePopup}
        >
          참석 정보 전달하기
        </Button>
      </div>

      {showPopup && (
        <AttendPopup setShowPopup={setShowPopup} step={2} info={info} />
      )}
    </section>
  );
}

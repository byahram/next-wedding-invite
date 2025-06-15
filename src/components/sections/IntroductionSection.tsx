"use client";

import { Contact, MainInfo } from "@/utils/types";
import React, { useState } from "react";
import CurvedBackground from "../layout/CurvedBackground";
import SectionTitle from "../common/SectionTitle";
import { Button } from "../common/Buttons";
import ContactPopup from "../popup/ContactPopup";

interface IIntroduction {
  info: MainInfo;
  contacts: Contact[];
}

export default function IntroductionSection({ info, contacts }: IIntroduction) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section
      id="invitation"
      className="relative w-full max-w-xl mx-auto overflow-hidden pt-20 pb-10 bg-[var(--background2)]"
    >
      <CurvedBackground color={"var(--background)"} />

      <div className="relative flex-col justify-center items-center text-center">
        <SectionTitle title="Invite you" />
        <div className="leading-8">
          저희 두 사람이 <br />
          평생을 함께하기 위해 <br />
          서로의 반려자가 되려 합니다.
          <br /> <br />그 진실한 서약을 하는 자리에 <br />
          소중한 분들을 모십니다.
          <br /> <br />
          자리하시어 축복해 주시면 <br />
          대단히 감사하겠습니다.
        </div>

        <div className="flex justify-center w-full mt-10">
          <img
            src={info.images.sub1}
            alt="Wedding Cover"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative pt-8 flex flex-col items-center text-center space-y-2">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">{info.groom.groomFather}</span>
            <span>·</span>
            <span className="font-semibold">{info.groom.groomMother}</span>
            <span>의 아들</span>
            <span className="font-bold">{info.groom.nameKo}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">{info.bride.brideFather}</span>
            <span>·</span>
            <span className="font-semibold">{info.bride.brideMother}</span>
            <span>의 딸</span>
            <span className="font-bold">{info.bride.nameKo}</span>
          </div>
        </div>

        <div className="w-fll flex justify-center items-center">
          <Button
            className="mt-10"
            variant="solid"
            size="default"
            onClick={() => setShowPopup(true)}
          >
            혼주에게 연락하기
          </Button>
        </div>

        {/* <div className="px-8">
          <div className="mt-14 flex justify-between items-center">
            <img
              src="/image/CSC_7955.jpg"
              alt="Groom"
              className="w-auto h-60 object-cover rounded-xl"
            />
            <img
              src="/image/CSC_7955.jpg"
              alt="Bride"
              className="w-auto h-60 object-cover rounded-xl"
            />
          </div>

          <div className="mt-8 flex justify-center items-center gap-6">
            <div className="text-center w-full space-y-2">
              <p className="text-sm">
                <span className="text-sky-600 font-semibold">신랑</span> 김도연
                📞
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                1990년생, 서울사람 <br />
                다정한 사랑꾼{" "}
                <span className="text-indigo-500 font-semibold">ESFJ</span>{" "}
                <br />
                #운동러버 #IT개발자 <br />
                <span className="mt-2 block">
                  🌲 나무같은 남편이 되겠습니다
                </span>
              </p>
              <p className="text-xs text-gray-500">김종혁 · 최은혜 의 장남</p>
            </div>
            <div className="text-center w-full space-y-2">
              <p className="text-sm">
                <span className="text-pink-600 font-semibold">신부</span> 이지유
                📞
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                1993년생, 제주사람 <br />
                세상의 소금형{" "}
                <span className="text-pink-500 font-semibold">ISTJ</span> <br />
                #꿈꼬미 #은행원 <br />
                <span className="mt-2 block">
                  🌞 햇살같은 아내가 되겠습니다
                </span>
              </p>
              <p className="text-xs text-gray-500">이주영 · 강지은 의 장녀</p>
            </div>
          </div>
        </div> */}
      </div>

      {showPopup && (
        <ContactPopup contacts={contacts} onClose={() => setShowPopup(false)} />
      )}
    </section>
  );
}

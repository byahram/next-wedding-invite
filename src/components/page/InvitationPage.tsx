"use client";

import React from "react";
import Footer from "../layout/Footer";
import { accounts, contacts, gallery, mainInfo } from "@/utils/data";
import FloatingButtons from "../layout/FloatingButtons";
import ClosingSection from "../sections/ClosingSection";
import AccountSection from "../sections/AccountSection";
import GallerySection from "../sections/GallerySection";
import CalendarSection from "../sections/CalendarSection";
import IntroductionSection from "../sections/IntroductionSection";

export default function InvitationPage() {
  return (
    <>
      <main className="relative flex flex-col max-w-md w-full min-h-[100vh] mx-auto bg-background items-center">
        <IntroductionSection contacts={contacts} info={mainInfo} />
        <CalendarSection info={mainInfo} />
        <GallerySection img={gallery} />
        <AccountSection acc={accounts} />
        <ClosingSection info={mainInfo} />
      </main>
      <Footer msg={mainInfo.message.footer} />
      <FloatingButtons />
    </>
  );
}

// Optional
// 신랑 신부 소개 - Groom and bride
// 부모님 소개 - Our parents
// 타임라인 – 두 사람의 이야기 (만남연애프러포즈 등) - Timeline
// 우리의 이야기 - Our story
// 인터뷰 - Interview
// 방명록 – 축하 메시지 남기는 공간 - Guest book

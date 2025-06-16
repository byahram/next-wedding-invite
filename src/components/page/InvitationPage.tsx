"use client";

import React, { useState } from "react";
import { accounts, contacts, gallery, mainInfo } from "@/utils/data";
import MainCoverSection from "../sections/MainCoverSection";
import IntroductionSection from "../sections/IntroductionSection";
import CalendarSection from "../sections/CalendarSection";
import GallerySection from "../sections/GallerySection";
// import LocationSection from "../sections/LocationSection";
import AccountSection from "../sections/AccountSection";
// import RsvpSection from "../sections/RsvpSection";
import ClosingSection from "../sections/ClosingSection";
import Footer from "../layout/Footer";
import FloatingButtons from "../layout/FloatingButtons";

export default function InvitationPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <>
      {/* {!isLoaded && <LoadingScreen onFinish={() => setIsLoaded(true)} />} */}
      {!isLoaded && <div>Loading</div>}
      {isLoaded && (
        <>
          <main className="relative flex flex-col max-w-md w-full min-h-[100vh] mx-auto bg-background items-center">
            <MainCoverSection info={mainInfo} />
            <IntroductionSection contacts={contacts} info={mainInfo} />
            <CalendarSection info={mainInfo} />
            <GallerySection img={gallery} />
            {/* <LocationSection info={mainInfo} /> */}
            <AccountSection acc={accounts} />
            {/* <RsvpSection info={mainInfo} /> */}
            <ClosingSection info={mainInfo} />
          </main>
          <Footer msg={mainInfo.message.footer} />
          <FloatingButtons />
        </>
      )}
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

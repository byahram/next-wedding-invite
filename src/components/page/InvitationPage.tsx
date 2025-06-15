"use client";

import React from "react";
import Footer from "../layout/Footer";
import { accounts, gallery, mainInfo } from "@/utils/data";
import FloatingButtons from "../layout/FloatingButtons";
import ClosingSection from "../sections/ClosingSection";
import AccountSection from "../sections/AccountSection";
import GallerySection from "../sections/GallerySection";

export default function InvitationPage() {
  return (
    <main className="relative flex flex-col max-w-md w-full min-h-[100vh] mx-auto bg-background items-center">
      <GallerySection img={gallery} />
      <AccountSection acc={accounts} />
      <ClosingSection info={mainInfo} />
      <Footer msg={mainInfo.message.footer} />

      <FloatingButtons />
    </main>
  );
}

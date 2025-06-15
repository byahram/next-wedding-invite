"use client";

import React from "react";
import Footer from "../layout/Footer";
import { info } from "@/utils/data";
import FloatingButtons from "../layout/FloatingButtons";

export default function InvitationPage() {
  return (
    <main className="relative flex flex-col max-w-md w-full max-h-[100vh] mx-auto bg-background items-center">
      <Footer msg={info.message.footer} />

      <FloatingButtons />
    </main>
  );
}

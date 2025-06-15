"use client";

import React from "react";

interface PopupContainerProps {
  children: React.ReactNode;
}

export const PopupContainer = ({ children }: PopupContainerProps) => (
  <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 overflow-y-auto">
    <div className="bg-white rounded-lg w-[380px] max-w-[90vw] max-h-[70vh] shadow-2xl border border-gray-100 flex flex-col">
      {children}
    </div>
  </div>
);

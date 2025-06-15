"use client";

import React from "react";
import { Button } from "../common/Buttons";
import { PopupContainer } from "./PopupContainer";
import { Contact } from "@/utils/types";

type ContactPopupProps = {
  contacts: Contact[];
  onClose: () => void;
};

export default function ContactPopup({ contacts, onClose }: ContactPopupProps) {
  return (
    <PopupContainer>
      <div className="p-6 pt-8 max-w-sm w-full">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-center">
          {contacts.map((person, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-semibold">{person.role}</div>
              <div className="font-bold">{person.name}</div>
              <div className="flex justify-center gap-2 mt-1">
                <a href={`tel:${person.phone}`} className="text-blue-500">
                  📞
                </a>
                <a href={`sms:${person.phone}`} className="text-blue-500">
                  ✉️
                </a>
              </div>
            </div>
          ))}
        </div>
        <Button
          className="mt-8"
          variant="default"
          size="default"
          onClick={onClose}
        >
          닫기
        </Button>
      </div>
    </PopupContainer>
  );
}

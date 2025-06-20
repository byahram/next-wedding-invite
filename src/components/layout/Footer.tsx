import React from "react";

interface FooterProps {
  msg: string;
}

export default function Footer({ msg }: FooterProps) {
  return (
    <footer className="w-full max-w-md mx-auto px-4 py-8 text-center text-gray-500 text-sm leading-relaxed whitespace-pre-line bg-background">
      {msg}
    </footer>
  );
}

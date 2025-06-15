import type { Metadata } from "next";
import { Noto_Serif_KR, Parisienne, Nanum_Pen_Script } from "next/font/google";

import "./globals.css";

const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-parisienne",
});

const notoSerif = Noto_Serif_KR({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif-kr",
});

const nanumPen = Nanum_Pen_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nanum-pen",
});

export const metadata: Metadata = {
  title: "지훈❤️아람 결혼합니다!",
  description:
    "2025년 9월 6일 토요일 오전 11시 30분, 국방컨벤션 1층 에메랄드홀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon_dance.png" type="image/png" />
      </head>
      <body
        className={`${notoSerif.variable} ${nanumPen.variable} ${parisienne.variable} text-base leading-relaxed tracking-tight antialiased`}
      >
        <div className="w-full h-full">{children}</div>
      </body>
    </html>
  );
}

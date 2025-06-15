import React from "react";

type CurvedBackgroundProps = {
  color: string;
};

export default function CurvedBackground({ color }: CurvedBackgroundProps) {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className="w-full h-16"
      >
        <path d="M0,100 C150,0 350,0 500,100 L500,00 L0,0 Z" fill={color} />
      </svg>
    </div>
  );
}

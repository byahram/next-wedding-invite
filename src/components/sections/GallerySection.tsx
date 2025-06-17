"use client";

import React from "react";
import SectionTitle from "../common/SectionTitle";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";

type GalleryProps = {
  img: string[];
};

export default function GallerySection({ img }: GalleryProps) {
  return (
    <section
      id="gallery"
      className="relative w-full mx-auto overflow-hidden pt-20 pb-10"
    >
      <div className="relative flex-col justify-center items-center text-center">
        <SectionTitle title="Gallery" />

        <LightGallery
          plugins={[lgZoom]}
          elementClassNames={"gallery grid grid-cols-3 gap-3 mt-12"}
          speed={500}
        >
          {img.map((src, index) => (
            <a
              className={"gallery__item"}
              key={index}
              href={src}
              data-lightbox="gallery"
              data-src={src}
            >
              <img
                src={src}
                alt={`Jihoon-and-Ahram-${index}`}
                className="img-fluid w-full aspect-square object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </section>
  );
}

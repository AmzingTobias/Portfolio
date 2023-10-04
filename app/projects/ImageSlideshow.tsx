"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface IImageSlideshowProps {
  srcs: string[];
  width: number;
  height: number;
  slideshowSpeedMs: number;
}

const ImageSlideshow: React.FC<IImageSlideshowProps> = ({
  srcs,
  width,
  height,
  slideshowSpeedMs,
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [slideshowAnimationDuration, setSlideshowAnimationDuration] =
    useState(slideshowSpeedMs);

  const arrowStyles = `cursor-pointer select-none absolute top-1/2 w-auto -mt-11 p-3 font-bold transition-colors duration-100 ease-in text-2xl
  bg-black bg-opacity-10
  hover:bg-black hover:bg-opacity-40
  active:bg-opacity-70`;

  // Effect to increment the counter every 4 seconds
  useEffect(() => {
    if (slideshowAnimationDuration !== 0 || srcs.length <= 1) {
      const interval = setInterval(() => {
        setImageIndex((prevIndex) =>
          prevIndex + 1 < srcs.length ? prevIndex + 1 : 0
        );
      }, slideshowAnimationDuration);
      return () => clearInterval(interval);
    }
  }, [slideshowAnimationDuration, srcs.length]);

  return (
    <div className="relative m-auto">
      <Image
        src={srcs[imageIndex]}
        alt="slideshow"
        width={width}
        height={height}
      />
      <a
        className={`${arrowStyles} rounded-r-sm ${
          srcs.length <= 1 ? "hidden" : ""
        }`}
        onClick={() => {
          setImageIndex((prevIndex) =>
            prevIndex - 1 > 0 ? prevIndex - 1 : srcs.length - 1
          );
          setSlideshowAnimationDuration(0);
        }}
      >
        &#10094;
      </a>
      <a
        className={`${arrowStyles} right-0 rounded-l-sm ${
          srcs.length <= 1 ? "hidden" : ""
        }`}
        onClick={() => {
          setImageIndex((prevIndex) =>
            prevIndex + 1 < srcs.length ? prevIndex + 1 : 0
          );
          setSlideshowAnimationDuration(0);
        }}
      >
        &#10095;
      </a>

      {srcs.length > 1 ? (
        <div className="text-center mt-2">
          {Array.from({ length: srcs.length }).map((_, index) => (
            <span
              key={index}
              onClick={() => {
                setImageIndex(index);
                setSlideshowAnimationDuration(0);
              }}
              className={`cursor-pointer h-3 w-3 ${
                index === imageIndex ? "bg-zinc-200" : "bg-zinc-400"
              } mx-1 rounded-full inline-block`}
            ></span>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageSlideshow;

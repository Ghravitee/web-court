import { useState } from "react";

type BlurImageProps = {
  src: string;
  blurSrc: string;
  alt: string;
  className?: string;
};

export default function BlurImage({
  src,
  blurSrc,
  alt,
  className = "",
}: BlurImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blur placeholder */}
      <img
        src={blurSrc}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover scale-105 blur-md"
      />

      {/* Full image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
        }`}
      />
    </div>
  );
}

import { ImgHTMLAttributes, useEffect, useRef, useState } from "react";

import "./styles.scss";

export function LazyImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  const { alt, src } = props;
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      {...props}
      className="lazy-image"
      ref={imgRef}
      src={isVisible ? src : ""}
      alt={alt}
      loading="lazy"
    />
  );
}

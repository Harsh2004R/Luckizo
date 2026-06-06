import { useEffect } from "react";
import { Image } from "@chakra-ui/react";

function PreloadImage({ src, alt = "preload.png", ...props }) {
  useEffect(() => {
    if (!src) return;

    const img = new window.Image();
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return <Image src={src} alt={alt} {...props} />;
}

export default PreloadImage;

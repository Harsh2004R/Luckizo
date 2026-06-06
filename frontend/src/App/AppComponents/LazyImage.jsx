import { useEffect, useRef, useState } from "react";
import { Box, Image, Skeleton } from "@chakra-ui/react";

function LazyImage({
  src,
  alt = "",
  skeletonHeight = "200px",
  rootMargin = "200px",
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <Box ref={containerRef}>
      <Skeleton loading={!isLoaded} minH={skeletonHeight} borderRadius="md">
        {isVisible && (
          <Image
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsLoaded(true)}
            {...props}
          />
        )}
      </Skeleton>
    </Box>
  );
}

export default LazyImage;

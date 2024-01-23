import { useCallback } from "react";

export const useMotion = () => {
  const zoomIn = useCallback(
    (scale: number, duration: number) => ({
      hidden: {
        opacity: 0,
        scale,
        transition: {
          duration,
          ease: "easeInOut"
        }
      },
      show: {
        opacity: 1,
        scale: 1,
        transition: {
          duration,
          ease: "easeInOut"
        }
      }
    }),
    []
  );

  const slideIn = useCallback(
    (direction: string, type: string, delay: number, duration: number) => ({
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
        transition: {
          duration,
          ease: "easeInOut"
        }
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type,
          delay,
          duration,
          ease: "easeInOut"
        }
      }
    }),
    []
  );

  return {
    zoomIn,
    slideIn
  };
};

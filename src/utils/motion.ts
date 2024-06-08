/* eslint-disable @typescript-eslint/no-explicit-any */
import { MotionProps } from "framer-motion";
interface CustomMotionProps extends MotionProps {
  hidden?: Record<string, any>;
  show?: Record<string, any>;
  [key: string]: any;
}
export const textVariant = (delay: number): CustomMotionProps => {
  return {
    hidden: {
      y: -50,
      opacity: window.matchMedia("(max-width:1247px)").matches ? 1 : 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction: string, type: string, delay: number, duration: number): CustomMotionProps => {
  return {
    hidden: {
      x: !window.matchMedia("(max-width:1247px)").matches
        ? direction === "left"
          ? 100
          : direction === "right"
          ? -100
          : 0
        : 0,
      y: !window.matchMedia("(max-width:1247px)").matches
        ? direction === "up"
          ? 100
          : direction === "down"
          ? -100
          : 0
        : 0,
      opacity: window.matchMedia("(max-width:1247px)").matches ? 1 : 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number): CustomMotionProps => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction: string, type: string, delay: number, duration: number): CustomMotionProps => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    visible: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren?: number, delayChildren?: number): CustomMotionProps => {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
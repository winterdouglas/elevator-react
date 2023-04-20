import { Globals, useReducedMotion } from "@react-spring/web";
import { useEffect } from "react";

export const useAnimationAccessibility = () => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    Globals.assign({
      skipAnimation: !!reduceMotion,
    });

    return () => {
      Globals.assign({
        skipAnimation: false,
      });
    };
  });
};

import { useCallback, useState } from "react";
import { LayoutChangeEvent } from "react-native";

export const useComponentDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const onLayout = useCallback((ev: LayoutChangeEvent) => {
    const { width, height } = ev.nativeEvent.layout;
    setDimensions({ width, height });
  }, []);

  return { onLayout, dimensions };
};

import { Animated, ViewProps } from "react-native";
import { useTheme } from "../hooks/useTheme";

type ElevatorProps = Animated.AnimatedProps<ViewProps>;

export const Elevator = (props: ElevatorProps) => {
  const { secondary } = useTheme();

  return (
    <Animated.View
      {...props}
      style={[{ backgroundColor: secondary }, props.style]}
    />
  );
};

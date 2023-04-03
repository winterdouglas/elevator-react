import { Animated, StyleSheet, ViewProps } from "react-native";

type ElevatorProps = Animated.AnimatedProps<ViewProps> & {};

export const Elevator = (props: ElevatorProps) => {
  return <Animated.View {...props} style={[styles.elevator, props.style]} />;
};

const styles = StyleSheet.create({
  elevator: {
    backgroundColor: "#FFDEB4",
  },
});

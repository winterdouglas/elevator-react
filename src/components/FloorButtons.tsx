import { GestureResponderEvent, View, ViewProps } from "react-native";
import { IndicatorButton } from "./IndicatorButton";

type FloorButtonsProps = ViewProps & {
  onUpPress?: (e: GestureResponderEvent) => void;
  onDownPress?: (e: GestureResponderEvent) => void;
  direction?: "Up" | "Down";
};

export const FloorButtons = ({
  direction,
  onUpPress,
  onDownPress,
  ...props
}: FloorButtonsProps) => {
  return (
    <View {...props}>
      <IndicatorButton
        indicator={direction === "Up"}
        title="Up"
        onPress={onUpPress}
      />
      <IndicatorButton
        indicator={direction === "Down"}
        title="Down"
        onPress={onDownPress}
      />
    </View>
  );
};

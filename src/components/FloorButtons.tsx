import { GestureResponderEvent, View, ViewProps } from "react-native";
import { IndicatorButton } from "./IndicatorButton";

type FloorButtonsProps = ViewProps & {
  up?: boolean;
  down?: boolean;
  onPressUp?: (e: GestureResponderEvent) => void;
  onPressDown?: (e: GestureResponderEvent) => void;
  intention?: "Up" | "Down";
};

export const FloorButtons = ({
  up,
  down,
  intention,
  onPressUp,
  onPressDown,
  ...props
}: FloorButtonsProps) => {
  return (
    <View {...props}>
      {up && (
        <IndicatorButton
          indicator={intention === "Up"}
          title="Up"
          onPress={onPressUp}
        />
      )}
      {down && (
        <IndicatorButton
          indicator={intention === "Down"}
          title="Down"
          onPress={onPressDown}
        />
      )}
    </View>
  );
};

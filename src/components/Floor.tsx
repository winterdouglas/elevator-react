import {
  GestureResponderEvent,
  StyleSheet,
  TouchableHighlight,
  View,
  ViewProps,
} from "react-native";
import { FloorButtons } from "./FloorButtons";
import { Separator } from "./Separator";
import { IndicatorText } from "./IndicatorText";
import { useTheme } from "../hooks/useTheme";

type FloorProps = ViewProps & {
  floorCount: number;
  floor: number;
  isQueued?: boolean;
  intention?: "Up" | "Down";
  onPress?: (ev: GestureResponderEvent) => void;
  onPressUp?: (ev: GestureResponderEvent) => void;
  onPressDown?: (ev: GestureResponderEvent) => void;
};

export const Floor = ({
  floorCount,
  floor,
  isQueued,
  intention,
  onPress,
  onPressUp,
  onPressDown,
  ...props
}: FloorProps) => {
  const { highlight } = useTheme();

  return (
    <TouchableHighlight
      underlayColor={highlight}
      onPress={onPress}
      {...props}
      style={[styles.pressable, props.style]}
    >
      <View style={styles.container}>
        <FloorButtons
          up={floor !== floorCount - 1}
          down={floor !== 0}
          style={styles.buttons}
          intention={intention}
          onPressUp={onPressUp}
          onPressDown={onPressDown}
        />
        <IndicatorText indicator={isQueued}>{floor}</IndicatorText>
        <Separator style={styles.separator} />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  buttons: {
    position: "absolute",
    left: 0,
  },
  separator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

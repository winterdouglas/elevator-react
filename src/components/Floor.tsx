import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ViewProps,
} from "react-native";
import { FloorButtons } from "./FloorButtons";
import { Separator } from "./Separator";
import { IndicatorText } from "./IndicatorText";

type FloorProps = ViewProps & {
  floor: number;
  isQueued?: boolean;
  intention?: "Up" | "Down";
  onPress?: (ev: GestureResponderEvent) => void;
  onUpPress?: (ev: GestureResponderEvent) => void;
  onDownPress?: (ev: GestureResponderEvent) => void;
};

export const Floor = ({
  floor,
  isQueued,
  intention,
  onPress,
  onUpPress,
  onDownPress,
  ...props
}: FloorProps) => {
  return (
    <TouchableHighlight
      underlayColor="#EEEEEE"
      onPress={onPress}
      {...props}
      style={[styles.pressable, props.style]}
    >
      <View style={styles.container}>
        <FloorButtons
          style={styles.buttons}
          direction={intention}
          onUpPress={onUpPress}
          onDownPress={onDownPress}
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

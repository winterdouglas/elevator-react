import {
  Button,
  ButtonProps,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import { Indicator } from "./Indicator";

type IndicatorButtonProps = TouchableOpacityProps & {
  title?: string;
  indicator?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

export const IndicatorButton = ({
  title,
  indicator,
  containerStyle: $containerStyleOverride,
  ...props
}: IndicatorButtonProps) => {
  return (
    <View style={[styles.container, $containerStyleOverride]}>
      <View style={styles.indicatorContainer}>
        {indicator && <Indicator />}
      </View>
      <TouchableOpacity {...props}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  indicatorContainer: {
    minWidth: 8,
    minHeight: 8,
  },
  text: {
    color: "rgb(0, 122, 255)",
  },
});

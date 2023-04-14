import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  View,
  ViewStyle,
} from "react-native";
import { Indicator } from "./Indicator";
import { useTheme } from "../hooks/useTheme";

type IndicatorTextProps = TextProps & {
  indicator?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

export const IndicatorText = ({
  indicator,
  children,
  containerStyle: $containerStyleOverride,
  style: $styleOverride,
  ...props
}: IndicatorTextProps) => {
  const { text } = useTheme();

  return (
    <View style={[styles.container, $containerStyleOverride]}>
      {indicator && <Indicator style={styles.indicator} />}
      <Text {...props} style={[styles.text, { color: text }, $styleOverride]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 80,
  },
  indicator: {
    position: "absolute",
    left: 0,
  },
  text: {
    fontSize: 48,
  },
});

import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  View,
  ViewStyle,
} from "react-native";
import { Indicator } from "./Indicator";

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
  return (
    <View style={[styles.container, $containerStyleOverride]}>
      {indicator && <Indicator style={styles.indicator} />}
      <Text {...props} style={[styles.text, $styleOverride]}>
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

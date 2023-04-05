import { StyleSheet, View, ViewProps } from "react-native";
import { useTheme } from "../hooks/useTheme";

type IndicatorProps = ViewProps;

export const Indicator = (props: IndicatorProps) => {
  const { tertiary } = useTheme();

  return (
    <View
      {...props}
      style={[styles.indicator, { backgroundColor: tertiary }, props.style]}
    />
  );
};

const styles = StyleSheet.create({
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

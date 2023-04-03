import { StyleSheet, View, ViewProps } from "react-native";

type IndicatorProps = ViewProps & {};

export const Indicator = (props: IndicatorProps) => {
  return <View {...props} style={[props.style, styles.indicator]} />;
};

const styles = StyleSheet.create({
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 6,
    backgroundColor: "#9ED2C6",
    borderWidth: 1,
    borderColor: "#54BAB9",
  },
});

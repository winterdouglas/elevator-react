import { StyleSheet, View, ViewProps } from "react-native";

type SeparatorProps = ViewProps & {};

export const Separator = (props: SeparatorProps) => {
  return <View {...props} style={[styles.separator, props.style]} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 2,
    backgroundColor: "#000",
  },
});

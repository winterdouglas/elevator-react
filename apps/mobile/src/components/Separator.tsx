import { StyleSheet, View, ViewProps } from "react-native";
import { useTheme } from "../hooks/useTheme";

type SeparatorProps = ViewProps;

export const Separator = (props: SeparatorProps) => {
  const { separator } = useTheme();

  return (
    <View
      {...props}
      style={[styles.separator, { backgroundColor: separator }, props.style]}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 2,
  },
});

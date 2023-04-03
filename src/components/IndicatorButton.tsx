import {
  Button,
  ButtonProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { Indicator } from "./Indicator";

type IndicatorButtonProps = ButtonProps & {
  indicator?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

export const IndicatorButton = ({
  indicator,
  containerStyle: $containerStyleOverride,
  ...props
}: IndicatorButtonProps) => {
  return (
    <View style={[styles.container, $containerStyleOverride]}>
      <View style={styles.indicatorContainer}>
        {indicator && <Indicator />}
      </View>
      <Button {...props} />
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
});

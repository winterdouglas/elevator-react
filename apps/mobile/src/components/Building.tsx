import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { Floor } from "./Floor";
import { range } from "utils";
import { Elevator } from "./Elevator";
import { useComponentDimensions } from "../hooks/useComponentDimensions";
import { useElevator } from "elevator-core";

type BuildingProps = {
  floorCount: number;
};

export const Building = ({ floorCount }: BuildingProps) => {
  const floors = range(0, floorCount - 1);
  const translateY = useRef(new Animated.Value(0)).current;
  const { onLayout, dimensions } = useComponentDimensions();
  const itemSize = dimensions.height / (floorCount || 1);

  const { calls, callUp, callDown, setTarget, floor } = useElevator();

  useEffect(() => {
    (function moveTo() {
      const offsetY = -(itemSize * floor);

      Animated.timing(translateY, {
        toValue: offsetY,
        duration: 500,
        useNativeDriver: true,
      }).start();
    })();
  }, [floor, itemSize, translateY]);

  return (
    <View style={styles.building} onLayout={onLayout}>
      <Elevator
        style={{
          position: "absolute",
          bottom: 0,
          height: itemSize,
          width: "100%",
          transform: [
            {
              translateY: translateY,
            },
          ],
        }}
      />
      {floors.map((floor) => {
        return (
          <Floor
            key={floor}
            floorCount={floorCount}
            floor={floor}
            onPressUp={() => {
              callUp(floor);
            }}
            onPressDown={() => {
              callDown(floor);
            }}
            onPress={() => {
              setTarget(floor);
            }}
            isQueued={calls.some((c) => c.floor === floor && !c.intention)}
            intention={calls.find((c) => c.floor === floor)?.intention}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  building: {
    flex: 1,
    margin: 48,
    flexDirection: "column-reverse",
  },
});

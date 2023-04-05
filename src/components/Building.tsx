import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { Floor } from "./Floor";
import { range } from "../lib/utils";
import { Elevator } from "./Elevator";
import { useComponentDimensions } from "../hooks/useComponentDimensions";
import { useElevator } from "../hooks/useElevator";

type BuildingProps = {
  floorCount: number;
};

export const Building = ({ floorCount }: BuildingProps) => {
  const floors = range(0, floorCount - 1);
  const translateY = useRef(new Animated.Value(0)).current;
  const { onLayout, dimensions } = useComponentDimensions();
  const itemSize = dimensions.height / (floorCount || 1);

  const { calls, callUp, callDown, setTarget, floor } = useElevator();

  const moveTo = (targetFloor: number) => {
    const offsetY = -(itemSize * targetFloor);

    Animated.timing(translateY, {
      toValue: offsetY,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    moveTo(floor);
  }, [floor]);

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

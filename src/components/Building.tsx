import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { Floor } from "./Floor";
import { range } from "../lib/utils";
import { Elevator } from "./Elevator";
import { useComponentDimensions } from "../hooks/useComponentDimensions";
import { elevator } from "../lib/elevator";
import { useElevator } from "../hooks/useElevator";

type BuildingProps = {
  floorCount: number;
};

// const { callUp, callDown, setTarget, positions, stops } = elevator({
//   floorCount: 6,
// });

export const Building = ({ floorCount }: BuildingProps) => {
  const floors = range(0, floorCount - 1);
  const { onLayout, dimensions } = useComponentDimensions();
  const translateY = useRef(new Animated.Value(0)).current;
  const itemSize = dimensions.height / (floorCount || 1);
  // const [floor, setFloor] = useState(0);

  const { callUp, callDown, setTarget, currentFloor: floor } = useElevator();

  const moveTo = (targetFloor: number) => {
    const offsetY = -(itemSize * targetFloor);

    Animated.timing(translateY, {
      toValue: offsetY,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  // useEffect(() => {
  //   const subscription1 = positions.subscribe(setFloor);
  //   const subscription2 = stops.subscribe((s) => console.log("STOP:", s));

  //   return () => {
  //     subscription1.unsubscribe();
  //     subscription2.unsubscribe();
  //   };
  // }, []);

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
            floor={floor}
            onUpPress={() => {
              callUp(floor);
              // setCalls([...calls, { floor: floor, direction: "up" }]);
            }}
            onDownPress={() => {
              callDown(floor);
              // setCalls([...calls, { floor: floor, direction: "down" }]);
            }}
            onPress={() => {
              setTarget(floor);
              // setCalls([...calls, { floor: floor }]);
            }}
            // isQueued={calls.some((c) => c.floor === floor)}
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

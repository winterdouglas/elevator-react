import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { Building } from "./components/Building";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { background } = useTheme();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: background }]}>
      <StatusBar style="auto" />
      <Building floorCount={6} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

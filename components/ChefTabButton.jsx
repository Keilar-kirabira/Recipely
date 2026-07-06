import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ChefTabButton() {
  return (
    <View style={styles.button}>
      <MaterialCommunityIcons name="chef-hat" size={26} color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    top: -20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#042628",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },
});
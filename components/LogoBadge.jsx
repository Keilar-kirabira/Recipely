import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function LogoBadge({ size = 120 }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="chef-hat"
        size={size * 0.4}
        color="#042628"
      />
      <Text style={[styles.badgeText, { fontSize: size * 0.15 }]}>
        <Text style={[styles.bigR, { fontSize: size * 0.2 }]}>R</Text>
        ecipely
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#042628",
    fontWeight: "700",
    marginTop: 6,
  },
  bigR: {
    fontWeight: "800",
    color: "#042628",
  },
});
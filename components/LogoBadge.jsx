import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function LogoBadge({ size = 120, color = "#042628" }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="chef-hat" size={size * 0.4} color={color} />
      <Text style={[styles.badgeText, { fontSize: size * 0.15, color }]}>
        <Text style={[styles.bigR, { fontSize: size * 0.2, color }]}>R</Text>
        ecipely
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
  badgeText: { fontWeight: "700", marginTop: 6 },
  bigR: { fontWeight: "800" },
});
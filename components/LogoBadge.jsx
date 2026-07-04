import { Text, View, StyleSheet } from "react-native";

export default function LogoBadge({ size = 120 }) {

  return (
    <View
      style={[
        styles.badge,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <Text style={[styles.badgeText, { fontSize: size * 0.13 }]}>
        <Text style={[styles.bigR, { fontSize: size * 0.18 }]}>R</Text>
        ecipely
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  badgeText: {
    color: "#042628",
    fontWeight: "700",
  },
  bigR: {
    fontWeight: "800",
    color: "#042628",
  },
});
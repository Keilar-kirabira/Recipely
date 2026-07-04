import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import LogoBadge from "../components/LogoBadge";

export default function Welcome() {
  return (
    <ImageBackground
      source={require("../assets/images/Recipe-food.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.topBadgeRow}>
          <LogoBadge size={110} color="#fff" />
        </View>

        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.push("/sign-in")}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/sign-up")}>
            <Text style={styles.createAccountText}>Create Account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.homeIndicatorWrapper}>
          <View style={styles.homeIndicator} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,0.15)",
  },
  topBadgeRow: {
    alignItems: "center",
    paddingTop: 80,
  },
  bottomSection: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    paddingTop: 300,
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#042628",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 16,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  createAccountText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  homeIndicatorWrapper: {
    alignItems: "center",
    paddingBottom: 8,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: "#fff",
    borderRadius: 3,
  },
});
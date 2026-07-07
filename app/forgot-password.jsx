import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import LogoBadge from "../components/LogoBadge";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    console.log({ email });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.badgeRow}>
          <LogoBadge size={100} />
        </View>

        <Text style={styles.heading}>Reset Password</Text>
        <Text style={styles.subText}>
          Enter your email address and we'll send you a link to reset your password.
        </Text>

        <AppInput
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <View style={{ marginTop: 8 }}>
          <AppButton title="Send Reset Link" onPress={handleReset} />
        </View>

        <TouchableOpacity
          style={styles.footerRow}
          onPress={() => router.push("/sign-in")}
        >
          <Text style={styles.footerText}>
            Remember your password? <Text style={styles.footerLink}>Login</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 90,
    paddingBottom: 40,
  },
  badgeRow: {
    alignItems: "center",
    marginBottom: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "800",
    color: "#042628",
    textAlign: "center",
    marginBottom: 8,
  },
  subText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20,
  },
  footerRow: {
    marginTop: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#042628",
  },
  footerLink: {
    fontWeight: "800",
    textDecorationLine: "underline",
  },
});
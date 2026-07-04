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

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // this is where you'll later call Supabase/Firebase signIn()
    console.log({ email, password });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.badgeRow}>
          <LogoBadge size={120} />
        </View>

        <Text style={styles.continueText}>Continue with</Text>

        <AppButton title="Continue with Google" onPress={() => {}} variant="outline" />

        <View style={styles.dividerRow}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <Text style={styles.heading}>Welcome Back</Text>

        <AppInput
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <AppInput
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={{ marginTop: 8 }}>
          <AppButton title="Login" onPress={handleLogin} />
        </View>

        <TouchableOpacity
          style={styles.footerRow}
          onPress={() => router.push("/sign-up")}
        >
          <Text style={styles.footerText}>
            Don't have an account? <Text style={styles.footerLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#70B9BE",
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
  },
  badgeRow: {
    alignItems: "center",
    marginBottom: 20,
  },
  continueText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
    color: "#042628",
    marginBottom: 12,
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#042628",
    opacity: 0.3,
  },
  orText: {
    marginHorizontal: 10,
    fontWeight: "700",
    color: "#042628",
  },
  heading: {
    fontSize: 20,
    fontWeight: "800",
    color: "#042628",
    marginBottom: 20,
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
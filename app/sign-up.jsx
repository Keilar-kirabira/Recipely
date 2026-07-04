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

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    // this is where you'll later call Supabase/Firebase signUp()
    console.log({ firstName, lastName, email, country, password });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.badgeRow}>
          <LogoBadge size={100} />
        </View>

        <Text style={styles.heading}>Create Account</Text>

        {/* First + Last name on one row */}
        <View style={styles.row}>
          <View style={styles.halfInput}>
            <AppInput
              label="First Name"
              placeholder="John"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={styles.halfInput}>
            <AppInput
              label="Last Name"
              placeholder="Doe"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
        </View>

        <AppInput
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <AppInput
          label="Country"
          placeholder="Enter your country"
          value={country}
          onChangeText={setCountry}
        />

        <AppInput
          label="Password"
          placeholder="Enter a password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <AppInput
          label="Confirm Password"
          placeholder="Re-enter password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <View style={{ marginTop: 8 }}>
          <AppButton title="Create Account" onPress={handleSignup} />
        </View>

        <View style={styles.dividerRow}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <AppButton 
          title="Continue with Google" 
          onPress={() => {}} 
          variant="outline" 
          icon={require("../assets/images/google.png")} 
        />

        <TouchableOpacity
          style={styles.footerRow}
          onPress={() => router.push("/sign-in")}
        >
          <Text style={styles.footerText}>
            Already have an account? <Text style={styles.footerLink}>Login</Text>
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
    paddingTop: 20,
    paddingBottom: 40,
  },
  badgeRow: {
    alignItems: "center",
    marginBottom: 16,
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
    textAlign: "center",  // This centers the heading
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  halfInput: {
    flex: 1,
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
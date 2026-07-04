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
import { Checkbox } from 'expo-checkbox';
import LogoBadge from "../components/LogoBadge";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);

  const handleLogin = () => {
    // this is where you'll later call Supabase/Firebase signIn()
    console.log({ email, password, rememberMe: isChecked });
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

        {/* Remember Me & Forgot Password Row */}
        <View style={styles.row}>
          <View style={styles.rememberMeContainer}>
            <Checkbox 
              color={'#042628'} 
              style={styles.checkbox} 
              value={isChecked} 
              onValueChange={setChecked} 
            />
            <Text style={styles.rememberMeText}>Remember Me</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("/forgot-password")}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 8 }}>
          <AppButton title="Login" onPress={handleLogin} />
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
    backgroundColor: "#fff", // Changed to white to match SignUp
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 20, // Reduced to match SignUp
    paddingBottom: 40,
  },
  badgeRow: {
    alignItems: "center",
    marginBottom: 16, // Reduced to match SignUp
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
    textAlign: "center", // Centered to match SignUp
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 8,
    borderRadius: 5,
    width: 20,
    height: 20,
  },
  rememberMeText: {
    color: "#042628",
    fontSize: 14,
  },
  forgotPassword: {
    color: "#042628",
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: "underline",
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
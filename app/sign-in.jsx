import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Checkbox } from 'expo-checkbox';
import LogoBadge from "../components/LogoBadge";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);

 const handleLogin = () =>{
  router.replace("/(tabs)/home")
 }

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
        <View style={styles.homeIndicatorWrapper}>
              <View style={styles.homeIndicator} />
            </View>
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
    paddingTop: 80, 
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
     fontFamily: "Poppins_700Bold",
    color: "#042628",
  },
  heading: {
    fontSize: 20,
     fontFamily: "Poppins_800ExtraBold",
    color: "#042628",
    textAlign: "center",
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
    fontFamily: "Poppins_400Regular", 
  },
  forgotPassword: {
    color: "#042628",
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    textDecorationLine: "underline",
  },
  footerRow: {
    marginTop: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#042628",
    fontFamily: "Poppins_400Regular",
  },
  footerLink: {
    fontFamily: "Poppins_800ExtraBold", 
    textDecorationLine: "underline",
  },
      homeIndicatorWrapper: {
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: "#042628",
    borderRadius: 3,
    opacity: 0.3,
  },
});
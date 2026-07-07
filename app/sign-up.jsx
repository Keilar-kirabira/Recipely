import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import CountryPicker from "react-native-country-picker-modal";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import LogoBadge from "../components/LogoBadge";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import { Ionicons } from "@expo/vector-icons";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!firstName || !lastName || !email || !password) {
      Alert.alert("Missing Info", "Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const fullName = `${firstName} ${lastName}`;

      await updateProfile(userCredential.user, { displayName: fullName });

      await setDoc(doc(db, "users", userCredential.user.uid), {
        fullName,
        email,
        country: country || "Uganda",
      });

      router.replace("/(tabs)/home");
    } catch (error) {
      Alert.alert("Sign Up Failed", error.message);
    } finally {
      setLoading(false);
    }
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

        <View style={styles.countryWrapper}>
          <Text style={styles.label}>Country</Text>

          <TouchableOpacity
            style={styles.countryRow}
            onPress={() => setShowPicker(true)}
            activeOpacity={0.7}
          >
            <View style={{ flex: 1 }}>
              <CountryPicker
                countryCode={countryCode || "UG"}
                withFilter
                withFlag
                withCountryNameButton
                withAlphaFilter
                visible={showPicker}
                onSelect={(selectedCountry) => {
                  setCountryCode(selectedCountry.cca2);
                  setCountry(selectedCountry.name);
                  setShowPicker(false);
                }}
                onClose={() => setShowPicker(false)}
              />
            </View>

            <Ionicons name="chevron-down" size={18} color="#666" />
          </TouchableOpacity>
        </View>

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
          <AppButton
            title={loading ? "Creating Account..." : "Create Account"}
            onPress={handleSignup}
          />
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
            Already have an account?{" "}
            <Text style={styles.footerLink}>Login</Text>
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
    gap: 12,
  },
  halfInput: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    color: "#042628",
    marginBottom: 6,
  },
  countryWrapper: {
    width: "100%",
    marginBottom: 16,
  },
  countryRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
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
    position: "absolute",
    bottom: 8,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
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

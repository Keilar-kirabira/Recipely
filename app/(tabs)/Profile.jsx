import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import AppInput from "../../components/AppInput";

export default function Profile() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("Uganda"); // not stored in Firebase Auth by default

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setFullName(user.displayName || "Chef");
        setEmail(user.email || "");
      }
    });
    return unsubscribe;
  }, []);

  const handleLogout = () => {
    Alert.alert("Log Out", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Log Out",
        style: "destructive",
        onPress: async () => {
          try {
            await signOut(auth);
            router.replace("/welcome");
          } catch (error) {
            Alert.alert("Error", error.message);
          }
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>Account Settings</Text>

        <View style={styles.avatarSection}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require("../../assets/images/Profile.png")}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editBadge}>
              <Ionicons name="camera" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>

        <View style={styles.form}>
          <AppInput label="Full Name" value={fullName} onChangeText={setFullName} />

          <AppInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={false} // email changes need re-authentication in Firebase, so keep this read-only for now
          />

          <AppInput label="Country" value={country} onChangeText={setCountry} />
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="#D9534F" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.homeIndicatorWrapper}>
        <View style={styles.homeIndicator} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContent: { paddingHorizontal: 24, paddingTop: 10, paddingBottom: 60 },
  heading: {
    fontFamily: "Poppins_800ExtraBold",
    fontSize: 20,
    color: "#042628",
    textAlign: "center",
    marginBottom: 24,
  },
  avatarSection: { alignItems: "center", marginBottom: 32 },
  avatarWrapper: { position: "relative", marginBottom: 12 },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: "#F2F2F2" },
  editBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#042628",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  name: { fontFamily: "Poppins_700Bold", fontSize: 17, color: "#042628" },
  email: { fontFamily: "Poppins_400Regular", fontSize: 13, color: "#888", marginTop: 2 },
  form: { marginBottom: 20 },
  logoutButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "#D9534F",
    borderRadius: 30,
    paddingVertical: 16,
    marginTop: 20,
  },
  logoutText: { fontFamily: "Poppins_700Bold", fontSize: 15, color: "#D9534F" },
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
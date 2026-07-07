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
import { onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import AppInput from "../../components/AppInput";

export default function Profile() {
  const [uid, setUid] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUid(user.uid);
        setEmail(user.email || "");

        const snapshot = await getDoc(doc(db, "users", user.uid));
        if (snapshot.exists()) {
          const data = snapshot.data();
          setFullName(data.fullName || user.displayName || "Chef");
          setCountry(data.country || "");
        } else {
          setFullName(user.displayName || "Chef");
        }
      }
    });
    return unsubscribe;
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateProfile(auth.currentUser, { displayName: fullName });
      await setDoc(
        doc(db, "users", uid),
        { fullName, country },
        { merge: true },
      );
      Alert.alert("Saved", "Your profile has been updated.");
    } catch (error) {
      Alert.alert("Save Failed", error.message);
    } finally {
      setSaving(false);
    }
  };

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
              source={require("../../assets/images/Profile.jpeg")}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>

        <View style={styles.form}>
          <AppInput
            label="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />

          <AppInput
            label="Email"
            value={email}
            editable={false}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <AppInput label="Country" value={country} onChangeText={setCountry} />
        </View>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSave}
          disabled={saving}
        >
          <Text style={styles.saveText}>
            {saving ? "Saving..." : "Save Changes"}
          </Text>
        </TouchableOpacity>

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
  avatarSection: {
    alignItems: "center",
    marginBottom: 32,
  },
  avatarWrapper: {
    marginBottom: 12,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#F2F2F2",
  },
  name: { fontFamily: "Poppins_700Bold", fontSize: 17, color: "#042628" },
  email: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#888",
    marginTop: 2,
  },
  form: { marginBottom: 20 },
  saveButton: {
    backgroundColor: "#042628",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
  },
  saveText: { fontFamily: "Poppins_700Bold", fontSize: 15, color: "#fff" },
  logoutButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "#D9534F",
    borderRadius: 30,
    paddingVertical: 16,
    marginTop: 16,
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

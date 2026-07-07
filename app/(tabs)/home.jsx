import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { RECIPES } from "../../data/recipes";
import CategoryCard from "../../components/CategoryCard";

const CATEGORIES = ["Breakfast", "Lunch", "Dinner", "Snack"];

export default function Home() {
  const [userName, setUserName] = useState("Chef");
  const [selectedCategory, setSelectedCategory] = useState("Breakfast");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || "Chef");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fixedSection}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.greeting}>Hello,</Text>
            <Text style={styles.userName}>{userName}</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="cart-outline" size={26} color="#042628" />
          </TouchableOpacity>
        </View>

        <ImageBackground
          source={require("../../assets/images/banner.png")}
          style={styles.banner}
          imageStyle={{ borderRadius: 20 }}
        >
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerTitle} numberOfLines={2}>
              Asian white noodle with extra seafood
            </Text>
            <View style={styles.bannerMetaRow}>
              <View style={styles.bannerAuthorRow}>
                <Image
                  source={require("../../assets/images/Profile.jpeg")}
                  style={styles.bannerAvatar}
                />
                <Text style={styles.bannerAuthorName}>Kelesy Lean</Text>
              </View>
              <View style={styles.bannerTimeRow}>
                <Ionicons name="time-outline" size={14} color="#fff" />
                <Text style={styles.bannerTimeText}>20 Min</Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Category</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.pillRow}
        >
          {CATEGORIES.map((category) => {
            const isActive = category === selectedCategory;
            return (
              <TouchableOpacity
                key={category}
                onPress={() => setSelectedCategory(category)}
                style={[styles.pill, isActive && styles.pillActive]}
                activeOpacity={0.8}
              >
                <Text style={[styles.pillText, isActive && styles.pillTextActive]}>
                  {category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Popular Recipes</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollableSection}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.categoryGrid}>
          {RECIPES.map((recipe) => (
            <CategoryCard key={recipe.id} recipe={recipe} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.homeIndicatorWrapper}>
        <View style={styles.homeIndicator} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  fixedSection: { paddingHorizontal: 15, paddingTop: 10 },
  scrollableSection: { flex: 1 },
  scrollContent: { paddingHorizontal: 15, paddingBottom: 100 },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  greeting: { fontFamily: "Poppins_400Regular", fontSize: 13, color: "#666" },
  userName: { fontFamily: "Poppins_800ExtraBold", fontSize: 22, color: "#042628" },
  banner: {
    width: "100%",
    height: 160,
    marginBottom: 15,
    backgroundColor: "#042628",
    borderRadius: 20,
    justifyContent: "flex-end",
  },
  bannerOverlay: { padding: 16 },
  bannerTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
    lineHeight: 20,
  },
  bannerMetaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bannerAuthorRow: { flexDirection: "row", alignItems: "center" },
  bannerAvatar: { width: 22, height: 22, borderRadius: 11, marginRight: 6 },
  bannerAuthorName: { fontFamily: "Poppins_600SemiBold", fontSize: 12, color: "#fff" },
  bannerTimeRow: { flexDirection: "row", alignItems: "center", gap: 4 },
  bannerTimeText: { fontFamily: "Poppins_400Regular", fontSize: 12, color: "#fff" },
  sectionTitle: { fontFamily: "Poppins_700Bold", fontSize: 17, color: "#042628" },
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 12,
  },
  seeAll: { fontFamily: "Poppins_600SemiBold", fontSize: 13, color: "#042628" },
  pillRow: { gap: 10, paddingBottom: 4 },
  pill: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: "#F0F0F0",
  },
  pillActive: { backgroundColor: "#042628" },
  pillText: { fontFamily: "Poppins_600SemiBold", fontSize: 13, color: "#666" },
  pillTextActive: { color: "#fff" },
  categoryGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
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
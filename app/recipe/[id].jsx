import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { RECIPES } from "../../data/recipes";

export default function RecipeDetails() {
  const { id } = useLocalSearchParams();
  const recipe = RECIPES.find((r) => r.id === id);
  const [activeTab, setActiveTab] = useState("ingredients");

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>Recipe not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={recipe.image} style={styles.heroImage} />

      <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
        <Ionicons name="close" size={20} color="#042628" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.heartButton}>
        <Ionicons name="heart-outline" size={20} color="#042628" />
      </TouchableOpacity>

      <ScrollView style={styles.sheet} contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{recipe.title}</Text>
          <View style={styles.timeRow}>
            <Ionicons name="time-outline" size={14} color="#666" />
            <Text style={styles.timeText}>{recipe.duration}</Text>
          </View>
        </View>

        <Text style={styles.description}>{recipe.description}</Text>

        {/* Macros row — icons instead of emojis */}
        <View style={styles.macrosRow}>
          <View style={styles.macroItem}>
            <MaterialCommunityIcons name="barley" size={18} color="#042628" />
            <Text style={styles.macroText}>{recipe.carbs} carbs</Text>
          </View>
          <View style={styles.macroItem}>
            <MaterialCommunityIcons name="fire" size={18} color="#042628" />
            <Text style={styles.macroText}>{recipe.kcal}</Text>
          </View>
          <View style={styles.macroItem}>
            <MaterialCommunityIcons name="arm-flex-outline" size={18} color="#042628" />
            <Text style={styles.macroText}>{recipe.protein} protein</Text>
          </View>
          <View style={styles.macroItem}>
            <MaterialCommunityIcons name="water-outline" size={18} color="#042628" />
            <Text style={styles.macroText}>{recipe.fats} fats</Text>
          </View>
        </View>

        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "ingredients" && styles.tabActive]}
            onPress={() => setActiveTab("ingredients")}
          >
            <Text style={[styles.tabText, activeTab === "ingredients" && styles.tabTextActive]}>
              Ingredients
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === "instructions" && styles.tabActive]}
            onPress={() => setActiveTab("instructions")}
          >
            <Text style={[styles.tabText, activeTab === "instructions" && styles.tabTextActive]}>
              Instructions
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === "ingredients" ? (
          <View>
            {recipe.ingredients.map((ing) => (
              <View key={ing.id} style={styles.ingredientRow}>
                <Text style={styles.ingredientName}>{ing.name}</Text>
                <Text style={styles.ingredientQty}>{ing.qty}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.description}>Step-by-step instructions go here.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  heroImage: { width: "100%", height: 320 },
  closeButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 8,
  },
  heartButton: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 8,
  },
  sheet: {
    marginTop: -30,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontFamily: "Poppins_800ExtraBold", fontSize: 20, color: "#042628" },
  timeRow: { flexDirection: "row", alignItems: "center", gap: 4 },
  timeText: { fontFamily: "Poppins_400Regular", fontSize: 12, color: "#666" },
  description: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#666",
    marginTop: 8,
  },
  macrosRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    flexWrap: "wrap",
    gap: 10,
  },
  macroItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  macroText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 11,
    color: "#042628",
  },
  tabRow: {
    flexDirection: "row",
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    marginTop: 20,
    padding: 4,
  },
  tab: { flex: 1, paddingVertical: 10, borderRadius: 16, alignItems: "center" },
  tabActive: { backgroundColor: "#042628" },
  tabText: { fontFamily: "Poppins_600SemiBold", fontSize: 13, color: "#666" },
  tabTextActive: { color: "#fff" },
  ingredientRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  ingredientName: { fontFamily: "Poppins_500Medium", fontSize: 14, color: "#042628" },
  ingredientQty: { fontFamily: "Poppins_600SemiBold", fontSize: 14, color: "#042628" },
  addToCartButton: {
    backgroundColor: "#042628",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 20,
  },
  addToCartText: { fontFamily: "Poppins_700Bold", fontSize: 15, color: "#fff" },
});
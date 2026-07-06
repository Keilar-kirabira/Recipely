import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { RECIPES } from "../../data/recipes";
import CategoryCard from "../../components/CategoryCard";
import { router } from "expo-router";

export default function Home() {
  const loggedInUser = { name: "Alena Sabyan" }; 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.greeting}>Hello,</Text>
            <Text style={styles.userName}>{loggedInUser.name}</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="cart-outline" size={26} color="#042628" />
          </TouchableOpacity>
        </View>
        

        {/* Banner */}
        <ImageBackground
          source={require("../../assets/images/banner.png")}
          style={styles.banner}
          imageStyle={{ borderRadius: 20 }}
        />

        {/* Category */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Category</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

     

        {/* Popular Recipes */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Popular Recipes</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
           <View style={styles.categoryGrid}>
          {RECIPES.map((recipe) => (
            <CategoryCard key={recipe.id} recipe={recipe} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContent: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 100 },
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
    marginBottom: 24,
    backgroundColor: "#042628",
  },
  sectionTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 17,
    color: "#042628",
    marginBottom: 12,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
  },
  seeAll: { fontFamily: "Poppins_600SemiBold", fontSize: 13, color: "#042628" },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function CategoryCard({ recipe }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/recipe/${recipe.id}`)}
      activeOpacity={0.8}
    >
      <Image source={recipe.image} style={styles.image} />
      <Text style={styles.title} numberOfLines={1}>
        {recipe.title}
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {recipe.description}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#F7F7F7",
    borderRadius: 16,
    padding: 10,
    marginBottom: 14,
  },
  image: {
    width: "100%",
    height: 90,
    borderRadius: 12,
    marginBottom: 8,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    color: "#042628",
  },
  description: {
    fontFamily: "Poppins_400Regular",
    fontSize: 11,
    color: "#888",
    marginTop: 2,
  },
});
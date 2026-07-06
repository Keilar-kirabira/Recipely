import {useState} from "react";
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList, } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";


export default function Home() {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator = {false}
            >
                <View style={styles.headerRow}>
                  <View style={styles.greetingRow}>
                 <Text style={styles.greeting}>Hello,</Text>
                </View>

                  <View>
                 <Text style={styles.userName}>Alena Sabyan</Text>
                </View>
                   <TouchableOpacity>
                    <Ionicons name="cart-outline" size={26} color="#042628" />
                </TouchableOpacity>
                </View>
               
             

                <Text style={styles.sectionTitle}>
                    Featured
                </Text>

                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionTitle}>
                        Category
                    </Text>

                    <TouchableOpacity>
                        <Text style={styles.seeAll}>
                            See All
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionTitle}>
                        Popular Recipes
                    </Text>

                      <TouchableOpacity>
                        <Text style={styles.seeAll}>
                            See All
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
              <TouchableOpacity style={styles.fab}>
                       <MaterialCommunityIcons name="chef-hat" size={24} color= "#fff"/>
                    </TouchableOpacity>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
container: {flex:1, backgroundColor: "#fff"},
scrollContent: {paddingHorizontal: 20, paddingTop: 10, paddingBottom: 100},
headerRow:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom:20,
},
  greetingRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  greeting: { fontFamily: "Poppins_400Regular", fontSize: 13, color: "#666" },
  userName: { fontFamily: "Poppins_800ExtraBold", fontSize: 22, color: "#042628" },
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
  
    fab: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#042628",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
})
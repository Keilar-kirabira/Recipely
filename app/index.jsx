import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect } from "react";

export default function SplashScreen(){
    useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/welcome"); // navigates after 2.5s
    }, 2500);

    return () => clearTimeout(timer); // cleanup if component unmounts early
  }, []);
  
    return(
        <LinearGradient
        colors={["#70B9BE", "#4A8E93"]}
        style={styles.container}
        >
            <View style={styles.badge}>
             <Text style={styles.badgeText}>
                <Text style={styles.bigR}>R</Text>ecipely</Text>
        </View>
        <Text style={styles.tagline}>Discover. Cook. Savor.</Text>
        </LinearGradient>
        
        
      
    )
}
const styles = StyleSheet.create({
container:{
flex: 1,
justifyContent: "center",
alignItems: "center",
},
    

badge: {
  backgroundColor: "#fff",
  width: 180,
  height: 180,
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 20,
  borderRadius: 90, 
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.15,
  shadowRadius: 8,
  elevation: 5,
},

bigR:{
 fontSize: 34,
 fontWeight: "800",
 color: "#042628",
},

  badgeText: {
    color: "#042628",
    fontSize: 24,
    fontWeight: "700",
  },
     tagline: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginTop: 4,
  },
})
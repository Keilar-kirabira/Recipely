import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
export default function Welcome(){
    return(
        <ImageBackground
        source={require("../assets/images/Recipe-food.jpeg")}
      style={styles.background}
      resizeMode="cover">
        <View style={styles.overlay}>
          <View  style={styles.bottomSection}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.push("/sign-in")}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/sign-up")}>
            <Text style={styles.createAccountText}>Create Account</Text>
          </TouchableOpacity>
            <View style={styles.miniBadgeRow}>
            <View style={styles.miniBadge}>
              <Text style={styles.miniBadgeText}>
                <Text style={styles.miniBigR}>R</Text>ecipely
              </Text>
            </View>
          </View>
          </View>
        </View>
            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
 background:{
  flex: 1,
  width: "100%",
  height: "100%",
 },
 overlay :{
 flex: 1,
 justifyContent: "flex-end",
 backgroundColor: "rgba(0,0,0,0.2)",
 },
   bottomSection: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: "center",
  },

    loginButton: {
    backgroundColor: "#042628",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 16,
  },

    loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
    createAccountText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 24,
  },

   miniBadgeRow: {
    alignItems: "center",
  },
  miniBadge: {
    backgroundColor: "#70B9BE",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  miniBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  miniBigR: {
    color: "#042628",
    fontWeight: "800",
  },
})
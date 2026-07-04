import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function AppButton({ title, onPress, variant = "primary", icon }) {
  const isPrimary = variant === "primary";

  return (
    <TouchableOpacity
      style={[styles.button, isPrimary ? styles.primary : styles.outline]}
      onPress={onPress}
    >
      {icon && <Image source={icon} style={styles.icon} />}
      <Text style={[styles.text, isPrimary ? styles.primaryText : styles.outlineText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
    paddingVertical: 16,
    borderRadius: 30,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  primary: {
    backgroundColor: "#042628",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#042628",
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins_700Bold",  
  },
  primaryText: {
    color: "#fff",
  },
  outlineText: {
    color: "#042628",
  },
});
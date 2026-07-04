import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function AppButton ({title, onPress, variant = "primary"}){
    const isPrimary = variant === "primary";
    return(
            <TouchableOpacity
      style={[styles.button, isPrimary ? styles.primary : styles.outline]}
      onPress={onPress}
    >
      <Text style={[styles.text, isPrimary ? styles.primaryText : styles.outlineText]}>
        {title}
      </Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
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
    fontWeight: "700",
  },
  primaryText: {
    color: "#fff",
  },
  outlineText: {
    color: "#042628",
  },
});
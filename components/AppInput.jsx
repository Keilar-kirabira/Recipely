import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AppInput({ label, secureTextEntry, ...rest}){
    const [isHidden, setIsHidden] = useState(secureTextEntry);
    return(
            <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#999"
          secureTextEntry={secureTextEntry ? isHidden : false}
          {...rest}
        />

        {secureTextEntry && (
          <TouchableOpacity onPress={() => setIsHidden(!isHidden)}>
            <Ionicons
              name={isHidden ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#042628",
    marginBottom: 6,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 14,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 15,
    color: "#042628",
  },
});
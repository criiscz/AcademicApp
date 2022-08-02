import {View, Text, TextInput, StyleSheet} from "react-native";
import {useState} from "react";

export function CustomTextInput(props: {
  label: string;
  value: string;
  secureTextEntry?: boolean;
  onTextChange: (text: string) => void;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCorrect?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  returnKeyType?: "done" | "go" | "next" | "search" | "send";
  multiline?: boolean;
  maxLength?: number;
  placeholder?: string;
  style?: any;
}) {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={[styles.input, props.style]}
        value={props.value}
        onChangeText={props.onTextChange}
        secureTextEntry={props.secureTextEntry}
        autoCapitalize={props.autoCapitalize}
        autoCorrect={props.autoCorrect}
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
        multiline={props.multiline}
        maxLength={props.maxLength || 20}
        placeholder={props.placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: "80%",
    padding: 10,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "normal",
    color: "#000",
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    color: "#000",
    width: "100%",
    padding: 10,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#fff73a",
  }
});
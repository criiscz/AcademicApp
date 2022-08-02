import {TouchableOpacity, StyleSheet, Text} from "react-native";

export function Button(props: {
  onPress: () => void;
  text: string;
  disabled?: boolean;
  bgColor?: string;
  textColor?: string;
  style?: any;
}) {
  let {onPress, text, disabled, bgColor, textColor} = props;
  bgColor = bgColor || "#fff";
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      style={[styles.button, {backgroundColor: bgColor}, props.style]}
    >
      <Text style={{color: props.textColor}}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f3cc06",
    padding: 10,
    margin: 10,
    width: 150,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  }
});
import {View, Text, StyleSheet} from "react-native";
import {useState} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Image {
  uri: string;
}

export function CameraComponent() {
  const [image, setImage] = useState<Image | null >(null);
  return (
    <View style={styles.container}>
      {
        image != null ? (
          <View style={styles.imageContainer}>
            <Text> {image.uri} </Text>
          </View>
        ) : (
          <Ionicons name={"ios-camera-outline"} size={100} />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    width: 150,
    height: 150,
    borderRadius: 200,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 200,
    backgroundColor: "#FFF",
    justifyContent: "center",
  }
});
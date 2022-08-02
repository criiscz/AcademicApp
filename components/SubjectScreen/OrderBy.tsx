import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";
import {useState} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export function OrderBy() {
  const [orderBy, setOrderBy] = useState("asc");
  const handleOrderBy = () => {
    if (orderBy === "asc") {
      setOrderBy("desc");
    } else {
      setOrderBy("asc");
    }
  }

  return (
    <TouchableOpacity
      onPress={handleOrderBy}
      style={styles.container}>
      <Text style={styles.text}>Sort By</Text>
      <Ionicons style={styles.icon} name={orderBy === "asc" ? "ios-arrow-down-outline" : "ios-arrow-up-outline"}
                size={20} color={'#000'}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF73A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    width: '30%',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  icon: {
    marginHorizontal: 5,
  }
});
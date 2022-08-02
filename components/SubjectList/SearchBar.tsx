import {View, Text, StyleSheet, TextInput} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useEffect, useState} from "react";

export function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
    console.log(text);
  }

  return (
    <View style={{width: '100%', alignItems: 'center', marginTop: 20}}>
      <TextInput
        style={styles.container}
        placeholder="Search"
        placeholderTextColor="#999"
        onChangeText={handleSearchTextChange}
        value={searchText}
      >
      </TextInput>
      <Ionicons style={styles.icon} name={'ios-search-outline'} size={30} color={'#999'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: 50,
    width: '80%',
    margin: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    textAlign: 'center',
    fontSize: 20,
  },
  icon: {
    position: 'absolute',
    right: 60,
    top: 20,
    color: '#999',
  }
});
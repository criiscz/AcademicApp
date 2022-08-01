import {Text, View, StyleSheet} from 'react-native';
import {ReactChild, ReactChildren} from "react";

export function StudentRow({children}: {children: ReactChild}) {
  return (
    <>
      <View style={styles.container}>
        <Text>{children}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 60,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
});
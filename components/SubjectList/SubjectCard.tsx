import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ReactPropTypes} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export function SubjectCard(props: any) {

const {title, slots, id} = props;
const handleAddSubject = () => {
  console.log("Add Subject");
}

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.text}>#{props.id}</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.slotsContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.textSlots}>{props.slots.reserved}</Text>
            <Text style={styles.textSlots}>/</Text>
            <Text style={styles.textSlots}>{props.slots.total}</Text>
          </View>
          <Text style={{}}>Slots</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleAddSubject}
        >
          <Ionicons name={'person-add-outline'} size={20} color={'#000'}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 180,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,

  },
  text: {
    fontSize: 28,
    color: '#000',
  },
  slotsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFF73A',
    borderRadius: 10,
  },
  textSlots: {
    fontSize: 38,
    color: '#FFF73A',

  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  }
});
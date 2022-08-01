import {ScrollView, Text, View} from "react-native";
import {StudentRow} from "./StudentRow";

export function List() {

  const students = [
    {name: "Julian Assange", age: "21"},
    {name: "John Doe", age: "22"},
    {name: "Jane Doe", age: "23"},
    {name: "John Smith", age: "24"},
    {name: "Jane Smith", age: "25"},
    {name: "Andrew Smith", age: "26"},
    {name: "Gabriel Adams", age: "27"},
    {name: "Gabriel Smith", age: "28"},
    {name: "Gabriel Doe", age: "29"},
    {name: "Daniel Gutierrez", age: "30"}];

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
        {
          students.map((student, index) => {
            return <StudentRow key={index}>
              {student.name}
            </StudentRow>
          })
        }
      </ScrollView>
    </View>
  );
}
import {ScrollView, Text, View} from "react-native";
import {SubjectCard} from "./SubjectCard";
import {SearchBar} from "./SearchBar";
import {OrderBy} from "./OrderBy";

export function List() {

  const subjects = [
    {
      id: 123,
      title: "Sistemas Distribuidos",
      slots: {
        "total": 10,
        "reserved": 5,
      },
    },
    {
      id: 124,
      title: "Sistemas Operativos",
      slots: {
        "total": 10,
        "reserved": 10,
      }
    },
    {
      id: 125,
      title: "Ingenieria de Software",
      slots: {
        "total": 22,
        "reserved": 0,
      }
    },
    {
      id: 126,
      title: "Electronica General",
      slots: {
        "total": 20,
        "reserved": 17,
      }
    },
    {
      id: 127,
      title: "Lenguajes Formales",
      slots: {
        "total": 25,
        "reserved": 13,
      }
    }
  ];

  return (
    <View style={{flex: 1}}>
      <SearchBar/>
      <OrderBy/>
      <ScrollView
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center', width: '100%'}}>
        {
          subjects.map((subject) => {
            return <SubjectCard
              key={subject.id}
              id={subject.id}
              title={subject.title}
              slots={subject.slots}
            />
          })
        }
      </ScrollView>
    </View>
  );
}
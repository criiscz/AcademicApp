import {Text, View, StyleSheet, ScrollView} from "react-native";
import {CameraComponent} from "./CameraComponent";
import {Button} from "./Button";
import {CustomTextInput} from "./CustomTextInput";
import {useState} from "react";

export function Register() {

  const handleButtonCamera = () => {
    console.log("Camera");
  }

  const handleButtonRegister = () => {
    console.log(data);
  }

  const [data, setData] = useState({
    name: "",
    email: "",
    lastName: "",
    document: "",
    documentType: "",
    studentCode: "",
  });


  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ScrollView endFillColor={'#000'} contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        marginVertical: 20
      }}>
        <CameraComponent/>
        <Button onPress={handleButtonCamera} text={'Tomar foto'}
        />
        <CustomTextInput label={"Nombre"} value={data.name} onTextChange={(text: string) => {
          setData({...data, name: text})
        }}/>
        <CustomTextInput label={"Apellido"} value={data.lastName} onTextChange={(text: string) => {
          setData({...data, lastName: text})
        }}/>
        <CustomTextInput label={"Email"} value={data.email} onTextChange={(text: string) => {
          setData({...data, email: text})
        }}/>
        <CustomTextInput label={"Documento"} value={data.document} onTextChange={(text: string) => {
          setData({...data, document: text})
        }}/>
        <CustomTextInput label={"Tipo de documento"} value={data.documentType}
                         onTextChange={(text: string) => {
                           setData({...data, documentType: text})
                         }
                         }/>
        <CustomTextInput label={"Código de estudiante"} value={data.studentCode}
                         onTextChange={(text: string) => {
                           setData({...data, studentCode: text})
                         }
                         }/>
        <Button onPress={handleButtonRegister}
                text={'Registrar'}
                style={styles.button}/>
      </ScrollView>

    </View>
  );

}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f3cc06",
    width: '75%',
    padding: 20,
    margin: 40,
    borderRadius: 100,
    alignItems: "center",
  }
});
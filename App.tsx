import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {List} from './components/SubjectScreen/List';
import {Register} from './components/RegisterScreen/Register';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = '';

            if (route.name === 'Student Register') {
              iconName = focused
                ? 'document'
                : 'document-outline';
            } else if (route.name === 'Student List') {
              iconName = focused ? 'list' : 'list-outline';
            }

            return <Ionicons name={String(iconName)} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#f3cc06',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Student List" component={List}/>
        <Tab.Screen name="Student Register" component={Register} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();


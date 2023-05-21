import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "react-native/Libraries/NewAppScreen";
import Detail from  "./assets/componet/screens/Detail";
import TodoApp from "./assets/componet/screens/Todo";
import { Button, Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Modal } from "react-native";


const Tab = createMaterialBottomTabNavigator();

const Drawer = createDrawerNavigator();


// function LogoTitle() {  
//   return ( 
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={require('./assets/icon.png')}
//     />
//   );
// }

const Stack = createNativeStackNavigator();


export  default function App() {
  return (

<NavigationContainer>
<Drawer.Navigator initialRouteName="Home" defaultStatus="open">
<Drawer.Screen name="TodoApp" component={TodoApp }/>

<Drawer.Screen name="Detail" component={Detail}/>
</Drawer.Navigator>
</NavigationContainer>





  );
}


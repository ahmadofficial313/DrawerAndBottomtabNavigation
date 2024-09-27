
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from './screen/WelcomeScreen';
import { UserScreen } from './screen/UserScreen';
import { StatusBar } from 'expo-status-bar';
import {Ionicons} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{
          
          headerStyle:{
         
            backgroundColor:'#3c0a6b',
          },
          tabBarActiveTintColor:'#3c0a6b',
      }} >
      <BottomTab.Screen name="welcome" 
      options={{
      
        title:'Welcome Screen',
        tabBarIcon:({color,size})=>(
           <Ionicons name="home" color={color} size={size}/>
          )
        
      }}
      component={WelcomeScreen}/>
      <BottomTab.Screen name="user"
       options={{
      
        title:'User Screen',
        tabBarIcon:({color,size})=>(
          <Ionicons name="person" color={color} size={size}/>
         )
       
      }}
      component={UserScreen}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

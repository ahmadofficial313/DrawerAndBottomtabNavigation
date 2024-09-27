
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screen/WelcomeScreen';
import { UserScreen } from './screen/UserScreen';
import { StatusBar } from 'expo-status-bar';
import {Ionicons} from '@expo/vector-icons'
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
          drawerActiveBackgroundColor:'#f0e1ff',
          drawerActiveTintColor:'#3c0a6b',
          drawerStyle:{
            backgroundColor:'#ccc'
          },
          headerStyle:{
         
            backgroundColor:'#3c0a6b',
          },
          headerTintColor:'white',
      }} >
      <Drawer.Screen name="welcome" 
      options={{
      
        title:'Welcome Screen',
        drawerLabel:'Welcome Screen',
        drawerIcon:({color,size})=>(
           <Ionicons name="home" color={color} size={size}/>
          )
        
      }}
      component={WelcomeScreen}/>
      <Drawer.Screen name="user"
       options={{
      
        title:'User Screen',
        drawerLabel:'User Screen',
        drawerIcon:({color,size})=>(
          <Ionicons name="person" color={color} size={size}/>
         )
       
      }}
      component={UserScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

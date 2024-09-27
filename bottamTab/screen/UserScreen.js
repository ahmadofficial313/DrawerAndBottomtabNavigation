
import { View ,Text,StyleSheet, Button} from 'react-native'

export const UserScreen = () => {

  
  return (
    <View style={styles.container}>
        <Text>This is <Text style={styles.highlight}>User </Text>Screem</Text>
        
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
   flex:1
  },
  highlight:{
    fontWeight:'bold',
    color:'#eb1064',
  }
})
import { View, Text, StyleSheet } from 'react-native'

function WelcomeScreen() {
  return (
    <View style={styles.container}>
        <Text>
        This is the <Text style={styles.highlight}>welcome </Text> screen
        </Text>
    </View>
  )
}

export default WelcomeScreen
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
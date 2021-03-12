import React from "react";
import {View,Text,StyleSheet} from "react-native";

export default class App extends React.Component{
 render(){
return(<View style={styles.container}>
  <Text>hello wrold
    </Text>
    <Text>
      hello mojo
    </Text>

</View> 

);

 }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white"
  }

})
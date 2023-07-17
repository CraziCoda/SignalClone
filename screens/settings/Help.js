import { View, Text, StyleSheet, TouchableHighlight } from "react-native"
import {EvilIcons} from "@expo/vector-icons"
import {AntDesign} from "@expo/vector-icons"
import { Button } from "react-native"

export default function Help(){
    return(<View style={styles.container}>
    
        <View style={styles.header}>
        <TouchableHighlight activeOpacity={0.6} underlayColor="lightgrey" onPress={()=>{}} >
         <AntDesign name="arrowleft" size={28}/>
        </TouchableHighlight>
        
            <Text>Help</Text>
        </View>
        <View>
            <TouchableHighlight activeOpacity={0.6} underlayColor="lightgrey" onPress={()=>{}}>
            <View style={styles.label}>
                <Text>Support Center</Text>
                <EvilIcons name="external-link" size={28} />
            </View>
            </TouchableHighlight>
        <TouchableHighlight activeOpacity={0.6} underlayColor="lightgrey" onPress={()=>{}}>
        <View style={styles.label2}>
                <Text>Contact Us</Text>
            </View>
        </TouchableHighlight>
        <View style={styles.label3}>
                <Text>Version</Text>
                <Text>6.21.3</Text>
            </View>
        <TouchableHighlight activeOpacity={0.6} underlayColor="lightgrey" onPress={()=>{}}>
        <View style={styles.label2}>
                <Text>Debug log</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight activeOpacity={0.6} underlayColor="lightgrey" onPress={()=>{}}>
        <View style={styles.label5}>
                <Text>Terms & Privacy Policy</Text>
                <EvilIcons name="external-link" size={28}/>
            </View>
        </TouchableHighlight>
        <View style={styles.label6}>
                <Text>Copyright Signal Messenger</Text>
                <Text>Licensed under the GNU AGPLv3</Text>
            </View>
        </View>
       
    </View>)

}

const styles=StyleSheet.create({

   container:{

   } ,

   header:{
    height: '25%',
    width: '100%',
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 1,
    paddingRight: '70%',
    paddingBottom: 10,
    paddingTop: 1,
    justifyContent: "space-around"
    
   } ,

   label: {
    width: '100%',
    height: 70,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'space-between',
    marginTop:-40
    
   } ,
   label2: {
    marginTop: 1,
    width: '100%',
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 30,
    marginTop:1
   } ,
   label3: {
    marginTop: 50,
    width: '100%',
    height: 50,
    alignContent: "center",
    marginRight: '90%',
    flexDirection: "column",
    paddingLeft: 30

   } ,
   label4: {
    marginTop: 1,
    width: '100%',
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 30

   } ,
   label5: {
    marginTop: 10,
    width: '100%',
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "space-between"

   } ,
   label6: {
    marginTop: 20,
    width: '100%',
    height: 50,
    alignContent: "center",
    marginRight: '90%',
    flexDirection: "column",
    paddingLeft: 30

   } 
   
   


   
})
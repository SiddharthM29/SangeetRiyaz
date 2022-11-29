import { StatusBar } from 'expo-status-bar';
import { FlatList,StyleSheet, Text, View,TouchableOpacity  } from 'react-native';
import { Button, Linking } from 'react-native-web';
import {Dimensions} from 'react-native';
import {useState} from 'react';
//import Permissions from 'react-native-permissions'
import Record from './Record.js'
 const Navbar=({navigation})=>{
     const handler=()=>{
        const {check,setCheck} =useState(true);
 
         if(check)
            return  <View> <Text>Recorder</Text>  </View> 
        
 
     
     }
    return (
      <View style={styles.container}>  
       <View style={styles.stat}>
     
            
         <Button title="Menu" color='blac
         k' style={styles.menu} onPress={()=> navigation.navigate('Temp')}> </Button> 
         <Button title="Record" color='black' style={styles.menu} onPress={  handler  } > </Button>
         <Button title="Piano" color='black' style={styles.menu} onPress={()=> navigation.navigate('Piano')}></Button>
         <Button title="Play" color='black' style={styles.menu} onPress={()=> navigation.navigate('Play')}> </Button>

  </View>
     
         <View style={styles.footer} >
          <Record/>
          </View> 
   
       </View>  
   
    );
}
const styles = StyleSheet.create({
    stat : {
        backgroundColor : 'black',
        //width : '100%'
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    cont : {
        color : 'red',
        textAlign : 'right',
        //fontSize :35 
    },
    menu : {
        width : '100%',
        position :'relative',
        alignItems : 'right',
        color : 'black'
    },
    butt : {
            flexDirection: 'row', 
            backgroundColor: 'yellow'

    },
    footer : {
        height : 100 
    },
    container : {
        flex : 1
    }
});

export default Navbar
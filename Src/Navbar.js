import { StatusBar } from 'expo-status-bar';
import { FlatList,StyleSheet, Text, View,TouchableOpacity  } from 'react-native';
import { Button, Linking } from 'react-native-web';
import {Dimensions} from 'react-native';
import {useState} from 'react';
//import Permissions from 'react-native-permissions'

 const Navbar=({navigation})=>{
    return (
       <View style={styles.stat}>
     
            
         <Button title="Menu" color='blac
         k' style={styles.menu} onPress={()=> navigation.navigate('Temp')}> </Button> 
         <Button title="Record" color='black' style={styles.menu} onPress={()=>navigation.navigate('Record') } > </Button>
         <Button title="Piano" color='black' style={styles.menu} onPress={()=> navigation.navigate('Piano')}></Button>
         <Button title="Play" color='black' style={styles.menu} onPress={()=> navigation.navigate('Play')}> </Button>
          
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

    }
});

export default Navbar
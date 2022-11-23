import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Linking } from 'react-native-web';
import {Dimensions} from 'react-native';
import {useState} from 'react';
//import Navbar from './Src/Navbar.js'

export default function Temp(navigation) {
  const [name, setname] =useState("hello")
  const [session,setSession] =useState({number: 1,title: "style"})
  const [num,setnum]= useState(0)
  const onclickhandler=()=>{
     setname('World')
     setSession({number: 2,title: 'state'})
      setnum(num+1)
  }
  
  
  return (
    <View style={styles.container}>
    <View style={styles.StatusBar} >
       <Text>Hello</Text>
    </View>
    <Text style={styles.head}>And here we go! project initiated ,App crreated successfully {name} </Text>
    <Text style={styles.Text} >IND</Text> 
    <Text style={styles.Text}>This session number {session.number} and about {session.title} </Text>   
    <Text style={styles.num}>Number :{num} </Text>
    <Button title="press" color='blue'  onPress={ onclickhandler } ></Button>
  </View>
  
  
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:'5'
  },
  Text:{
    color:'orange',
    style:'italic' ,
    fontSize:50,
    fontWeight:4,
    margin: 10

  } ,
  StatusBar:{
    backgroundColor:'blue',
    width:  Dimensions.get('window').width,
    marginUp : 0 ,
    margin : 0,
          
  },
  head : {
    color : 'white',
    width : Dimensions.get('window').width
  },
  num :{
    color:'red'
  },
  nav : {
    backgroundColor : 'red',
    width : Dimensions.get('window').width
  }
 // heading : {
   // position : 'relative',
    //width : '100%',
    //alignContent : 'rigth',
    //alignItems:'right',
  //}


});


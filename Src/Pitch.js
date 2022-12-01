import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PitchTracker from "react-native-pitch-tracker";

const Pitch = ({navigation}) => {
      // Must do before start()  
PitchTracker.prepare()
 
// Event Subscription (Add function to parameter)
PitchTracker.noteOn((res) => {
    console.log('Note On: ' + res['midiNum']);
}); // Note On: 60
PitchTracker.noteOff((res) => {
    console.log('Note Off: ' + res['midiNum']);
}); // Note Off: 60
 
const onpresshandle=()=>{
    // Start PitchTracker Engine
PitchTracker.start()
}
 
// Stop PitchTracker Engine
PitchTracker.stop()

  return (
    <View>
      <Text>pitch</Text>
      <Button title="start" onPress={onpresshandle} > </Button>
    </View>
  )
}
const styles = StyleSheet.create({})

export default Pitch

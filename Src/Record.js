import { Button,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Audio } from 'expo-av';
const Record = ({navigation}) => {
  const [recording, setRecording] = React.useState();
  async function startRecording() {
      try {
        console.log('Requesting permissions..');
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        }); 
        console.log('Starting recording..');
        const recording = new Audio.Recording();
        await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        await recording.startAsync(); 
        setRecording(recording);
        console.log('Recording started');
      } catch (err) {
        console.error('Failed to start recording', err);
      }
    }
    async function stopRecording() {
      console.log('Stopping recording..');
      setRecording(undefined);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI(); 
      console.log('Recording stopped and stored at', uri);
    }

  return (
    <View style={styles.container}>
      <Text>Record</Text>
      <Button style={styles.rec}
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      ></Button> 
    </View>
  )
}

const styles = StyleSheet.create({
    comtainer : {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 10, 
    },
    rec : {
      width :'30%'
    }

})
export default Record

import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../theme'
import { Audio } from 'expo-av';


const Meditate = ({navigation, route}) => {
  const { data } = route.params;

  const [count, setCount] = useState(data.time * 60);


  // const [sound, setSound] = React.useState();


  // Enable playback in silence mode
  const [sound, setSound] = useState();



  useEffect(() => {
    // Load the sound file from a remote URL
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        { uri: 'https://firebasestorage.googleapis.com/v0/b/shop-159d3.appspot.com/o/Sound.mp3?alt=media&token=fcd58284-9028-4c01-bc7d-26d7e032e087' } // Replace with the actual URL
      );
      setSound(sound);

      // Play the sound when the component mounts
      await sound.playAsync();
    };

    loadSound();

    // Unload the sound when the component unmounts
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

 



  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [count]);

  return (
    <ImageBackground source={require("../assets/bg.jpg")} style={{backgroundColor: 'black', flex: 1, }}>
      <View
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.7,
          zIndex:1
        }}
      ></View>
      <Text style={{textAlign: "center", marginVertical: 10, fontWeight: "bold", fontSize: 25, color:Colors.green, zIndex: 300}}>MEDITATE</Text>
      <Text style={{textAlign: "center", marginVertical: 10,  fontSize: 20, color:"white", zIndex: 300, letterSpacing: 2}}>{data.title}</Text>

      <View style={{alignItems: 'center', justifyContent: 'center', zIndex: 1000, marginTop: 40}}>
        {count >= 0 && <View style={{
          width: 200, height: 200, borderRadius: 100, borderWidth: 8, borderColor: Colors.green, alignItems: 'center', justifyContent: 'center'
        }}> 
        <Text style={{fontSize: 65, fontWeight: "bold",  color: "white"}}>{count}</Text>

        </View>}
        
          {count <= 0 && <Text style={{fontSize: 65, fontWeight: "bold",  color: "white"}}>Done!</Text>}
        <Text style={{color: "orange", fontSize: 17, marginTop: 20}}>{data.time* 60} Seconds make {data.time} Minutes</Text>
      </View>
    
    </ImageBackground>
  )
}

export default Meditate

const styles = StyleSheet.create({})

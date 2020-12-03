import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Button, Text, View, Image } from 'react-native';

//retrieve image for background
const background = { uri: "https://raw.githubusercontent.com/nathanblan/schedule_app/master/assets/home.png" };

export default function App() {

  /*This does not yet work, and I have no idea why
  <View style={styles.container}>
    <ImageBackground source={background} style={styles.image}></ImageBackground>
  </View>
  */

  //define the default and changed text as objects in an array, call the next index onPress
  const [outputText, setOutputText] = useState("This is Nathan and Sam's scheduling app");

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>

        <View style={styles.null}>
          <View>

          </View>
        </View>

        <View style={styles.text}>
          <Text>{outputText}</Text>
          <Button title="Change Text" onPress={() => setOutputText("The text changed")}/>
        </View>
         
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center"
  }
});

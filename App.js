import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {
  StyleSheet,
  ImageBackground,
  Button,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';

//retrieve image for background
const backgroundimg = { uri: "https://raw.githubusercontent.com/nathanblan/schedule_app/master/assets/home.png" };

export default function App() {

  //define the default and changed text as objects in an array, call the next index onPress
  const [outputText, setOutputText] = useState("This is Nathan and Sam's scheduling app");

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundimg} style={styles.imageBackground}>
        <CalendarList
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}
        />

        <View style={styles.text}>
          <Text>{outputText}</Text>
          <Button title="Change Text" onPress={() => setOutputText("The text changed")} />
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
  imageBackground: {
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
  },

});

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
        <View>
          <CalendarList
            style={styles.calendar}
            theme={{
              backgroundColor: '#f00bde',
              calendarBackground: 'rgba(255,255,255,0)',
              textSectionTitleColor: '#b6c1cd',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              arrowColor: 'orange',
              disabledArrowColor: '#d9e1e8',
              //monthTextColor: 'black',
              indicatorColor: 'blue',
              //textDayFontFamily: 'monospace',
              //textMonthFontFamily: 'monospace',
              //textDayHeaderFontFamily: 'monospace',
              //textDayFontWeight: '300',
              //textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '500',
              textDayFontSize: 16,
              textMonthFontSize: 32,
              textDayHeaderFontSize: 16
            }}
            // Max amount of months allowed to scroll to the past
            pastScrollRange={50}
            // Max amount of months allowed to scroll to the future
            futureScrollRange={50}
            // Enable or disable scrolling of calendar list
            scrollEnabled={true}
            // Enable or disable vertical scroll indicator. Default = false
            showScrollIndicator={true}

            onDayPress={(day) => { console.log('selected day', day) }}
          />
        </View>

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
  calendar: {
    height: '70%'
  },
});

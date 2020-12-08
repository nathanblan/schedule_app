import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { CalendarList, Agenda } from 'react-native-calendars';
import {
  StyleSheet,
  ImageBackground,
  Button,
  Text,
  View,
  Modal,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import jumpToDate from './components/jumpToDate'
import openAgenda from './components/openAgenda'

//retrieve image for background
const backgroundimg = { uri: "https://raw.githubusercontent.com/nathanblan/schedule_app/master/assets/home.png" };

export default function App() {

  //define the default and changed text as objects in an array, call the next index onPress
  const [outputText, setOutputText] = useState("This is Nathan and Sam's scheduling app");

  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundimg} style={styles.imageBackground}>
        <Modal
          style={styles.agendaContainer}
          animationType={'slide'}
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>

          <View style={styles.agenda}>
            <Agenda
              // The list of items that have to be displayed in agenda. If you want to render item as empty date
              // the value of date key has to be an empty array []. If there exists no value for date key it is
              // considered that the date in question is not yet loaded
              items={{
                '2020-05-22': [{ name: 'item 1 - any js object' }],
                '2020-05-23': [{ name: 'item 2 - any js object', height: 80 }],
                '2020-05-24': [],
                '2020-05-25': [{ name: 'item 3 - any js object' }, { name: 'any js object' }]
              }}
              // Callback that gets called when items for a certain month should be loaded (month became visible)
              loadItemsForMonth={(month) => { console.log('trigger items loading') }}
              // Callback that fires when the calendar is opened or closed
              onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
              // Callback that gets called on day press
              onDayPress={(day) => { console.log('day pressed') }}
              // Callback that gets called when day changes while scrolling agenda list
              onDayChange={(day) => { console.log('day changed') }}
              // Initially selected day
              selected={'2020-05-16'}
              // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
              minDate={'2020-05-10'}
              // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
              maxDate={'2020-05-30'}
              // Max amount of months allowed to scroll to the past. Default = 50
              pastScrollRange={50}
              // Max amount of months allowed to scroll to the future. Default = 50
              futureScrollRange={50}
              // Specify how each item should be rendered in agenda
              renderItem={(item, firstItemInDay) => { return (<View />); }}
              // Specify how each date should be rendered. day can be undefined if the item is not first in that day.
              renderDay={(day, item) => { return (<View />); }}
              // Specify how empty date content with no items should be rendered
              renderEmptyDate={() => { return (<View />); }}
              // Specify how agenda knob should look like
              renderKnob={() => { return (<View />); }}
              // Specify what should be rendered instead of ActivityIndicator
              renderEmptyData={() => { return (<View />); }}
              // Specify your item comparison function for increased performance
              rowHasChanged={(r1, r2) => { return r1.text !== r2.text }}
              // Hide knob button. Default = false
              hideKnob={true}
              // By default, agenda dates are marked if they have at least one item, but you can override this if needed
              markedDates={{
                '2020-05-16': { selected: true, marked: true },
                '2020-05-17': { marked: true },
                '2020-05-18': { disabled: true }
              }}
              // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
              disabledByDefault={true}
              // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
              onRefresh={() => console.log('refreshing...')}
              // Set this true while waiting for new data from a refresh
              refreshing={false}
              // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
              refreshControl={null}
              // Agenda theme
              theme={{
                agendaDayTextColor: 'yellow',
                agendaDayNumColor: 'green',
                agendaTodayColor: 'red',
                agendaKnobColor: 'blue'
              }}
              // Agenda container style
              style={{}}
            />

            <Button
              title="Click To Close Modal"
              onPress={() => {
                setShowModal(!showModal);
              }}
            />
          </View>
        </Modal>

        <View>
          <CalendarList
            style={styles.calendar}

            // Handler which gets executed on day press. Default = undefined
            onDayPress={(day) => { console.log('selected day', day), setShowModal(!showModal); }}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={(day) => { console.log('selected day - long', day) }}

            // Collection of dates that have to be colored in a special way. Default = {}
            markedDates={{
              '2020-05-22': { startingDay: true, color: 'green' },
              '2020-05-23': { endingDay: true, color: 'green' },
              '2020-05-04': { disabled: true, startingDay: true, color: 'green', endingDay: true }
            }}
            // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
            markingType={'period'}

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
          />
        </View>

        <Modal visible={false} style={styles.agenda}>

        </Modal>

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
  agendaContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  agenda: {
    flex: 1,
    height: '70%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#12b6e3',
    padding: '20%',
  },
});

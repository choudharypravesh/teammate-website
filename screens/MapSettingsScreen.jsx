import {Modal, Platform, SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {Text} from "../components/Themed";
import Chip from "../components/Chip";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {AntDesign, Feather} from '@expo/vector-icons';
import IconButton from "../components/IconButton";
import ListItem from "../components/ListItem";
import Divider from "../components/Divider";
import DateTimePicker from '@react-native-community/datetimepicker';
import ActionButton from "../components/ActionButton";

const MapSettingsScreen = () => {
  const availableSports = [
    {id: 0, icon: '🎾', name: "Tennis"},
    {id: 1, icon: '⚽️', name: "Football"},
    {id: 2, icon: '🏀', name: "Basketball"},
    {id: 3, icon: '🏃', name: "Running"},
    {id: 4, icon: '⛳️', name: "Golf"},
    {id: 5, icon: '🏐', name: "Volleyball"},
    {id: 6, icon: '🧘', name: "Yoga"},
    {id: 7, icon: '🎽️', name: "Gym"},
    {id: 8, icon: '🚲', name: "Biking"},
  ]
  const weekdays = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const displayType = Platform.OS === 'ios' ? 'inline' : 'default';

  const navigation = useNavigation()

  //  Weekday States
  const [activeDay, setActiveDay] = useState(0)

  //  DateTimePicker States
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [timePicker, setTimePicker] = useState('');

  //  TimeSlot States
  const [timeslots, setTimeslots] = useState([])
  const [timeSlotId, setTimeSlotId] = useState(0)
  const [isAddNewTimeSlotsVisible, setIsAddNewTimeSlotsVisible] = useState(false)

  //  Search States
  const [searchQuery, setSearchQuery] = useState('')

  //  Sports States
  const [sports, setSports] = useState([])
  const [sportSlotId, setSportSlotId] = useState(0)
  const [selectedSports, setSelectedSports] = useState([])
  const [isAddNewSportsVisible, setIsAddNewSportsVisible] = useState(false)

  //  Navigation Handlers
  const openFindMateScreen = () => navigation.navigate('FindMateScreen')

  //  TimeSlot Handlers
  const onTimeSlotSelectionChange = (event, selectedDate) => {
    if (!selectedDate) {
      setTimePicker(undefined)
      return

    }
    switch (timePicker) {
      case 'start':
        setTimePicker(undefined)
        setStartTime(selectedDate)
        break

      case 'end':
        setTimePicker(undefined)
        setEndTime(selectedDate)
        break
    }

  };
  const removeTimeSlot = (id) => setTimeslots(timeslots.filter(elem => elem.id !== id))
  const addTimeSlots = () => {
    setTimeslots([
      ...timeslots,
      {
        id: timeSlotId,
        start: `${startTime.getHours()}:${startTime.getMinutes()}`,
        end: `${endTime.getHours()}:${endTime.getMinutes()}`
      }
    ])
    setTimeSlotId(timeSlotId + 1)
    closeAddNewTimeSlots()

  }

  //  Modal Toggles
  const showAddNewTimeSlots = () => setIsAddNewTimeSlotsVisible(true)
  const closeAddNewTimeSlots = () => setIsAddNewTimeSlotsVisible(false)

  const showAddNewSports = () => {
    setSelectedSports(sports)
    setIsAddNewSportsVisible(true)
  }
  const closeAddNewSports = () => setIsAddNewSportsVisible(false)

  //  Sports Handlers
  const removeSportItem = (id) => setSports(sports.filter(elem => elem.id !== id))
  const toggleSelectionItem = (id) => {
    const isElementExists = !!selectedSports.find(elem => elem.id === id)
    if (isElementExists) {
      setSelectedSports(selectedSports.filter(elem => elem.id !== id))
    } else {
      setSelectedSports([
        ...selectedSports,
        ...availableSports.filter(elem => elem.id === id)
      ])
    }
  }
  const addSports = () => {
    setSports([
      ...selectedSports
    ])
    setSportSlotId(sportSlotId + 1)
    closeAddNewSports()

  }

  //  Encapsulated Rendering Logic
  const renderAddNewTimeSlot = () => (
    <Modal transparent={true} visible={isAddNewTimeSlotsVisible} onRequestClose={closeAddNewTimeSlots}
           animated animationType={'slide'}
    >
      <View style={styles.modalContainer}>
        <View style={styles.addNewTimeSlotModal}>
          <View style={styles.justifiedRow}>
            <ActionButton
              title={"Start"}
              buttonStyles={{width: 162}}
              onPress={() => setTimePicker('start')}
            />
            <ActionButton
              title={"End"}
              buttonStyles={{width: 162}}
              onPress={() => setTimePicker('end')}
            />
          </View>

          {Platform.OS === "ios" ? (
            <View style={styles.justifiedRow}>
              <DateTimePicker mode="time" is24Hour={true} display={displayType} value={endTime}
                              onChange={onTimeSlotSelectionChange} style={{width: 162}}/>

              <DateTimePicker mode="time" is24Hour={true} display={displayType} value={endTime}
                              onChange={onTimeSlotSelectionChange} style={{width: 162, marginRight: 30}}/>
            </View>
          ) : (
            <View style={styles.justifiedRow}>
              {timePicker === 'start' && (
                <DateTimePicker mode="time" is24Hour={true} display={displayType} value={endTime}
                                onChange={onTimeSlotSelectionChange} style={{width: 162}}/>
              )}

              {timePicker === 'end' && (
                <DateTimePicker mode="time" is24Hour={true} display={displayType} value={endTime}
                                onChange={onTimeSlotSelectionChange}
                                style={{width: 162, marginRight: 30}}/>
              )}
            </View>
          )}

          <ActionButton onPress={addTimeSlots} title='Add slot'/>
        </View>
      </View>
    </Modal>
  )
  const handleCloseButtonOnPressInAddNewSports = () => {
    if (!searchQuery.trim().length) {
      closeAddNewSports()
      return
    }
    setSearchQuery('')
  };
  const renderAddNewSports = () => (
    <Modal visible={isAddNewSportsVisible} onRequestClose={closeAddNewSports} animated animationType={'slide'}>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBarContainer}>
          <View style={styles.searchbar}>
            <TextInput
              value={searchQuery}
              style={styles.inputStyles}
              placeholder="Search"
              underlineColorAndroid="transparent"
              onChangeText={(searchString) => setSearchQuery(searchString)}
            />

            <IconButton iconName="close" borderRadius={50} size={48} iconSize={18}
                        onPress={handleCloseButtonOnPressInAddNewSports}/>
          </View>
        </View>

        {renderAvailableSports()}

        <ActionButton style={styles.addNewSports} onPress={addSports} title={'Apply '}
                      suffix={<View style={styles.circleText}><Text>{selectedSports.length}</Text></View>}
        />
      </SafeAreaView>
    </Modal>
  )

  const renderAvailableSports = () => (
    <ScrollView style={styles.addNewSportsView}>
      {availableSports
        .filter(item => searchQuery.trim().length > 0 ? item.name.includes(searchQuery) : item)
        .map((sport) => {
          const isItemSelected = selectedSports.find(elem => elem.id === sport.id);

          return (
            <TouchableOpacity onPress={() => toggleSelectionItem(sport.id)}
                              key={`available-sports-${sport.id}`}>
              <ListItem prefix={<Text>{sport.icon}</Text>} text={sport.name} suffix={
                isItemSelected && <Feather name={'check'} size={20}/>
              }/>
              <Divider mt={6} mb={6}/>
            </TouchableOpacity>
          );
        })
      }
    </ScrollView>
  );
  const renderWeekdays = () => (
    <ScrollView horizontal contentContainerStyle={styles.availability_weekday}>
      {weekdays.map((day, idx) => (
        <TouchableOpacity onPress={() => setActiveDay(idx)} key={`weekday-${idx}`}>
          <Chip text={day} active={idx === activeDay} style={idx > 0 && styles.extra_margin}/>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Availabilities</Text>

        {renderWeekdays()}

        <View style={{paddingHorizontal: 16}}>
          {timeslots.map((slot) => (
            <View key={`time-slot-${slot.id}`}>
              <ListItem
                prefix={<AntDesign name="clockcircleo" size={20} color="black"/>}
                text={`${slot.start}・${slot.end}`}
                suffix={<IconButton iconName="minus" onPress={() => removeTimeSlot(slot.id)}/>}
              />
              <Divider mt={6} mb={6}/>
            </View>
          ))}
        </View>
        <ActionButton onPress={showAddNewTimeSlots} title={'Add'}/>

        {isAddNewTimeSlotsVisible && renderAddNewTimeSlot()}
        {isAddNewSportsVisible && renderAddNewSports()}

        <Text style={styles.title}>Sports</Text>
        <View style={{paddingHorizontal: 16, marginTop: 12,}}>
          {sports.map((sport) => (
            <View key={`sports-${sport.id}`}>
              <ListItem
                prefix={<Text>{sport.icon}</Text>}
                text={sport.name}
                suffix={<IconButton iconName="minus" onPress={() => removeSportItem(sport.id)}/>}
              />
              <Divider mt={6} mb={6}/>
            </View>
          ))}
        </View>
        <ActionButton onPress={showAddNewSports} title={'Add'}/>
      </ScrollView>

      <ActionButton onPress={openFindMateScreen} title={'Find Teamates'}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  title: {
    fontSize: 22,
    marginTop: 20,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  availability_weekday: {
    marginTop: 12,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  extra_margin: {
    marginLeft: 12
  },

  addNewSportsView: {
    marginTop: 25
  },
  addNewSports: {
    bottom: 0,
    position: 'absolute',
  },

  justifiedRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },

  addNewTimeSlotModal: {
    height: 462,
    borderWidth: 1,
    borderColor: '#ccc',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  circleText: {
    backgroundColor: 'white',
    borderRadius: 500,
    height: 24,
    width: 24,
    alignItems: "center",
    display: 'flex',
    justifyContent: 'center',
    flexDirection: "row",
    marginLeft: 8,
  },
  searchBarContainer: {
    marginTop: 20,
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  searchbar: {
    flex: 1, flexDirection: 'row', backgroundColor: '#fff',
    justifyContent: 'center', alignItems: 'center',
  },
  inputStyles: {
    flex: 1, backgroundColor: '#F3F5F7',
    borderRadius: 50, paddingVertical: 12,
    height: 48, paddingHorizontal: 22,
    marginRight: 12,
  }
});

export default MapSettingsScreen

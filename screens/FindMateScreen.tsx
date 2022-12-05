import {SafeAreaView, ScrollView, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from "../components/Themed";
import IconButton from "../components/IconButton";
import {Entypo, FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import Chip from "../components/Chip";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {EventCard} from "./BottomNavigation/ExploreScreen";

export interface CoordinateType {
  accuracy: number | null,
  altitude: number | null,
  altitudeAccuracy: number | null,
  heading: number | null,
  latitude: number | null,
  longitude: number | null,
  speed: number | null,
}

export interface LocationType {
  coords?: CoordinateType
  mocked?: boolean,
  timestamp?: number,
}

const FindMateScreen = () => {
  const tags = ["Teamates", "Events", "Clubs", "Tournaments"]
  const markers = [
    {
      coordinate: {
        latitude: 40.7263,
        longitude: -73.9818,
      },
      title: 'Marker Title',
      description: 'Marker Description'
    },
    {
      coordinate: {
        latitude: 40.7263,
        longitude: -73.9518,
      },
      title: 'Marker Title',
      description: 'Marker Description'
    },
    {
      coordinate: {
        latitude: 40.7530,
        longitude: -74.0098,
      },
      title: 'Marker Title',
      description: 'Marker Description'
    },
    {
      coordinate: {
        latitude: 40.6963,
        longitude: -73.9508,
      },
      title: 'Marker Title',
      description: 'Marker Description'
    },
    {
      coordinate: {
        latitude: 40.6963,
        longitude: -73.9798,
      },
      title: 'Marker Title',
      description: 'Marker Description'
    },
    {
      coordinate: {
        latitude: 40.7203,
        longitude: -74.0190,
      },
      title: 'Marker Title',
      description: 'Marker Description'
    },
  ]

  const navigation = useNavigation()

  const [cardsVisibility, setCardsVisibility] = useState(false)

  //  Tags States
  const [activeTag, setActiveTag] = useState(0)
  const [countryName, setCountryName] = useState('Abu Dhabi')

  const goBack = () => navigation.goBack()

  // @ts-ignore
  const openMapSettings = () => navigation.navigate('MapSettingsScreen')
  // @ts-ignore
  const openCountryChooser = () => navigation.navigate('SelectCountryScreen')

  const fetchLocation = () => {
  }

  const renderTags = () => (
    <ScrollView horizontal contentContainerStyle={styles.tags_container}>
      {tags.map((day, idx) => (
        <TouchableOpacity onPress={() => setActiveTag(idx)} key={`weekday-${idx}`}>
          <Chip
            inactiveBg={'white'} inactiveText={'black'} text={day}
            active={idx === activeTag} style={styles.extra_margin}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderTopBar = () => (
    <View style={styles.search_bar}>
      <View style={{flexDirection: "row", alignItems: "center", width: '85%', backgroundColor: 'transparent'}}>
        <IconButton iconName={'arrowleft'} borderRadius={500} onPress={goBack} backgroundColor={'transparent'}/>

        <TouchableOpacity style={styles.top_bar_middle_section} onPress={openCountryChooser}>
          <Text style={styles.top_bar_country_text}>{countryName}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={openMapSettings}>
        <FontAwesome name="sliders" size={24}/>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {renderTopBar()}
        {renderTags()}
      </View>

      <MapView
        style={{...styles.map_view, position: 'absolute', zIndex: cardsVisibility ? 0 : 1}}
        initialRegion={{
          latitude: 40.7263,
          longitude: -73.9818,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}
      >
        {markers.map((item, idx) => (
          <Marker key={idx} coordinate={item.coordinate} title={item.title} description={item.description}
                  icon={require('../assets/images/Pin.png')}/>
        ))}
      </MapView>

      <ScrollView horizontal contentContainerStyle={{
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        zIndex: 2,
        left: 0,
        right: 0,
        bottom: cardsVisibility ? -380 : -280,
        position: cardsVisibility ? 'relative' : 'absolute'
      }}>
        <EventCard/>
        <EventCard/>
        <EventCard/>
      </ScrollView>

      <TouchableOpacity style={{
        position: 'absolute',
        backgroundColor: '#000',
        padding: 10,
        width: 64,
        height: 44,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: cardsVisibility ? 466 : 76,
        right: 20,
        zIndex: 2
      }} onPress={fetchLocation}>
        <Entypo name="location-pin" size={24} color="white"/>
      </TouchableOpacity>

      <TouchableOpacity style={{
        position: 'absolute',
        backgroundColor: '#000',
        padding: 10,
        width: 64,
        height: 44,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: cardsVisibility ? 410 : 20,
        right: 20,
        zIndex: 2
      }} onPress={() => setCardsVisibility(!cardsVisibility)}>
        <MaterialCommunityIcons name="format-list-text" size={20} color={'#FFF'}/>
      </TouchableOpacity>


    </SafeAreaView>
  );
};

export default FindMateScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  header: {
    zIndex: 1000,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  search_bar: {
    backgroundColor: 'white',
    marginTop: (StatusBar.currentHeight || 0) + 20,
    marginHorizontal: 20,
    marginBottom: 12,
    height: 48,
    paddingLeft: 12,
    paddingRight: 22,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  top_bar_middle_section: {
    width: '80%',
    height: 48,
    justifyContent: 'center'
  },
  top_bar_flag: {
    fontSize: 24
  },
  top_bar_country_text: {
    fontSize: 16,
    marginLeft: 10
  },

  tags_container: {
    marginBottom: 20,
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  extra_margin: {
    marginRight: 12,
  },

  map_view: {
    marginBottom: 60,
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
});

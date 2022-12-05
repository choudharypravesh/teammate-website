import React from 'react'
import {Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {FontAwesome} from "@expo/vector-icons"
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import {useNavigation} from "@react-navigation/native";
import Chip from "../../components/Chip";
// import {useUiState} from '../../hooks/useUiState';


export const EventCard = ({image, imageUrl, style}: any) => {
  const hasImage = image || imageUrl
  return (
    <View style={[styles.events_card, {
      marginRight: 16
    }, styles.justify_space_between, style]}>
      <View>
        {imageUrl && (
          // @ts-ignore
          <Image source={{height: 193, width: '100%', uri: imageUrl}} borderRadius={10}
                 style={{marginBottom: 20}}/>
        )}
        {image &&
        <Image source={image} borderRadius={10} style={{marginBottom: 20, height: 193, width: '100%'}} height={193}
               width={298}/>}

        <View style={{
          borderRadius: 50,
          marginBottom: 20,
          paddingVertical: 6,
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 16,
          alignSelf: 'flex-start',
          backgroundColor: '#F4F5FE',
          justifyContent: 'flex-start',
          position: hasImage && 'absolute',
          top: hasImage && 12,
          left: hasImage && 12,
        }}>
          <Image source={require('../../assets/images/shoe.png')} width={20} height={20}/>
          <Text style={{marginLeft: 4, fontWeight: "bold", fontSize: 12}}>RUNNING</Text>
        </View>
        <Text style={styles.events_card_time}>Mon 12, Feb at 14:00 - 16:00</Text>

        <Text style={styles.events_card_title}>Basketball cup + Party on the boat after</Text>

        <View style={[styles.flex_row, {justifyContent: 'flex-start'}]}>
          <Image source={require('../../assets/images/Pin.png')} style={{width: 14, height: 14}} height={14}
                 width={14}/>
          <Text style={styles.events_card_location_text}>Al Fay Park, Abu Dhabi</Text>
        </View>
      </View>

      <View style={[styles.flex_row, styles.justify_space_between, styles.events_card_footer]}>
        <View style={styles.flex_row}>
          <View style={{
            height: 32,
            width: 32,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: 'white',
            backgroundColor: '#D8DDE3',
          }}/>
          <View style={{
            height: 32,
            width: 32,
            borderWidth: 1,
            marginLeft: -14,
            borderRadius: 100,
            borderColor: 'white',
            backgroundColor: '#D8DDE3',
          }}/>
          <View style={{
            height: 32,
            width: 32,
            borderWidth: 1,
            marginLeft: -14,
            borderRadius: 100,
            borderColor: 'white',
            backgroundColor: '#D8DDE3',
          }}/>
          <View style={{
            height: 32,
            width: 32,
            borderWidth: 1,
            marginLeft: -14,
            borderRadius: 100,
            borderColor: 'white',
            backgroundColor: '#000',
            ...styles.flex_row
          }}>
            <Text style={{color: '#F4F5FE'}}>2+</Text>
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.flex_row, {
              paddingVertical: 10, paddingHorizontal: 16, backgroundColor: '#FFECEC', borderRadius: 10
            }]}
        >
          <FontAwesome name={'plus'} color={'#F44C4C'}/>
          <Text style={{marginLeft: 6, color: '#F44C4C', fontSize: 14, fontWeight: "bold"}}>JOIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CarouselEventCard = () => (
  <View style={[styles.events_card, {
    width: '100%',
    marginTop: -20,
    backgroundColor: "#212121"
  }, styles.justify_space_between]}>
    <View>
      <Image
        borderRadius={10} style={{marginBottom: 20, height: 193, width: '100%'}}
        source={require('../../assets/images/discover-football.png')}
      />

      <View style={{
        borderRadius: 50,
        marginBottom: 20,
        paddingVertical: 6,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignSelf: 'flex-start',
        backgroundColor: '#F4F5FE',
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 12,
        left: 12,
      }}>
        <Image source={require('../../assets/images/shoe.png')} width={20} height={20}/>
        <Text style={{marginLeft: 4, fontWeight: "bold", fontSize: 12}}>RUNNING</Text>
      </View>

      <Text style={{
        fontWeight: "900",
        fontSize: 24,
        color: '#FFF',
        marginBottom: 16,
      }}>PLAY WITH FOOTBALL LEGENDS</Text>
      <Text style={{
        fontSize: 14,
        color: '#FFF',
        lineHeight: 20,
        marginBottom: 20,
      }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum massa ultricies orci nunc arcu.</Text>

      <TouchableOpacity
        style={{
          paddingVertical: 10,
          paddingHorizontal: 16,
          backgroundColor: '#F44C4C',
          borderRadius: 10,
          alignSelf: 'flex-start',
        }}
      >
        <Text style={{
          fontWeight: "900",
          fontSize: 16,
          color: '#FFECEC',
        }}>DISCOVER</Text>
      </TouchableOpacity>
    </View>

    <View style={[styles.flex_row, styles.justify_space_between, styles.events_card_footer]}>
      <View style={styles.flex_row}>
        <View style={{
          height: 4,
          width: 32,
          borderRadius: 7,
          marginRight: 6,
          backgroundColor: '#FFF',
        }}/>
        <View style={{
          height: 4,
          width: 32,
          borderRadius: 7,
          marginRight: 6,
          backgroundColor: 'rgba(255, 255, 255, 0.26)',
        }}/>
        <View style={{
          height: 4,
          width: 32,
          borderRadius: 7,
          marginRight: 6,
          backgroundColor: 'rgba(255, 255, 255, 0.26)',
        }}/>
      </View>
    </View>
  </View>
);

const ExploreScreen = () => {
  // Basic context usage.
  // You can add more functions like ToggleTheme according to usage and change/use it from any component.
  // const {theme, toggleTheme} = useUiState()
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
        longitude: -73.9898,
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

  // @ts-ignore
  const openMapSettingsScreen = () => navigation.navigate('MapSettingsScreen')

  // @ts-ignore
  const openFindMateScreen = () => navigation.navigate('FindMateScreen')

  const renderSearchBar = () => (
    <View style={[styles.search_bar, styles.flex_row, styles.justify_space_between]}>
      <TouchableOpacity style={[styles.flex_row, styles.find_mates_text]} onPress={openFindMateScreen}>
        <FontAwesome name={'search'} size={20} style={{marginRight: 12}}/>
        <Text style={styles.search_text}>Find mates</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.flex_row, {justifyContent: "flex-start", height: 48}]}
                        onPress={openMapSettingsScreen}>
        <View style={styles.vertical_divider}/>

        <FontAwesome name={'sliders'} size={20} style={{marginRight: 12}}/>
      </TouchableOpacity>
    </View>
  );

  const renderTags = () => (
    <ScrollView horizontal contentContainerStyle={styles.chips_container}>
      <Chip text="Teamates" active style={styles.extra_margin}/>
      <Chip text="Events" style={styles.extra_margin}/>
      <Chip text="Clubs" style={styles.extra_margin}/>
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.header_welcome_text}>EXPLORE</Text>
        </View>

        {renderSearchBar()}

        {renderTags()}

        <View>

          <MapView
            style={styles.map_view}
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
                      icon={require('../../assets/images/Pin.png')}/>
            ))}
          </MapView>
        </View>

        <View style={styles.section}>
          <View style={styles.event_section_header}>
            <Text style={styles.events_section_title}>Events around you</Text>
            <TouchableOpacity>
              <Text style={styles.events_section_view_more}>View more</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal contentContainerStyle={styles.events_cards_container}>
            {[1, 2, 3, 4].map((item) => (
              <EventCard key={item}/>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.events_cards_container}>
            <CarouselEventCard/>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.event_section_header}>
            <Text style={styles.events_section_title}>Discover events</Text>
            <TouchableOpacity>
              <Text style={styles.events_section_view_more}>View all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.events_cards_container}>
            <EventCard style={{width: '100%'}}/>
            <EventCard image={require('../../assets/images/discover-card-city.png')}
                       style={{width: '100%', marginTop: 20}}/>
          </View>
        </View>

        <View style={[styles.section, {
          backgroundColor: '#FFFAEF',
          padding: 30
        }]}>
          <View style={{width: 252}}>
            <Text style={{
              fontWeight: "900",
              fontSize: 28,
              color: '#1B3750',
            }}>CAN’T FIND THE PERFECT FIT ?</Text>

            <Text style={{
              fontSize: 14,
              color: '#1B3750',
              marginVertical: 10,
              lineHeight: 20
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa ultricies orci nunc
              arcu.</Text>
          </View>
          <TouchableOpacity style={[
            styles.flex_row, {
              paddingVertical: 10,
              paddingHorizontal: 16,
              backgroundColor: '#F3F5F7',
              borderRadius: 10,
              alignSelf: 'flex-start'
            }]}
          >
            <FontAwesome name={'plus'} color={'#1B3750'} size={20}/>
            <Text style={{marginLeft: 6, color: '#1B3750', fontSize: 16, fontWeight: "bold"}}>CREATE
              EVENT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 16
  },

  header: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#FFFAEF',
    paddingHorizontal: 26
  },
  header_welcome_text: {
    fontWeight: "900",
    fontSize: 26,
    color: "#212121",
    marginTop: 4,
    marginBottom: 20,
  },

  search_text: {
    fontWeight: "500",
    fontSize: 16,
    color: '#212121',
  },
  search_bar: {
    height: 48,
    elevation: 2,
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 26,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },

  chips_container: {
    marginBottom: 22,
    flexDirection: "row",
    paddingHorizontal: 26,
  },
  extra_margin: {
    marginRight: 4
  },

  map_view: {
    height: 325,
    borderRadius: 10,
    marginBottom: 40,
    marginHorizontal: 26,
  },

  section: {
    marginBottom: 30,
  },
  event_section_header: {
    alignItems: "center",
    flexDirection: 'row',
    paddingHorizontal: 26,
    justifyContent: "space-between",
  },
  events_section_title: {
    fontSize: 24,
    color: '#212121',
    fontWeight: "700",
  },
  events_section_view_more: {
    fontSize: 16,
    color: '#5D6773',

  },

  events_cards_container: {
    paddingVertical: 20,
    paddingHorizontal: 26,
  },
  events_card: {
    width: 298,
    elevation: 5,
    minHeight: 332,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
  events_card_time: {

    fontSize: 14,
    color: "#F44C4C",
    marginBottom: 10,
  },
  events_card_title: {
    fontSize: 18,
    color: '#212121',
    fontWeight: "700",
    marginVertical: 10,

  },
  events_card_footer: {
    marginTop: 35,
    marginBottom: 10,
  },


  vertical_divider: {
    height: 28,
    borderWidth: 1,
    borderColor: '#D8DDE3',
    marginHorizontal: 14
  },
  flex_row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  justify_space_between: {
    justifyContent: "space-between"
  },
  find_mates_text: {
    justifyContent: "flex-start",
    height: 48,
    width: "80%"
  },
  events_card_location_text: {
    fontSize: 14,
    marginLeft: 4,
    color: '#5D6773',

  }
});

export default ExploreScreen

import {SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {Text} from "../components/Themed";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import IconButton from "../components/IconButton";
import ListItem from "../components/ListItem";
import Divider from "../components/Divider";

const SelectCountryScreen = () => {
  const navigation = useNavigation()

  const availablePlaces = [
    {id: 0, icon: '🇦🇪', name: "Abu Dhabi", subtitle: 'United Arab Emirats'},
    {id: 1, icon: '🇦🇪', name: "Dubai", subtitle: 'United Arab Emirats'},
    {id: 2, icon: '🇫🇷', name: "Marseille", subtitle: 'France'},
    {id: 3, icon: '🇪🇸', name: "Barcelona", subtitle: 'Spain'},
    {id: 4, icon: '🇬🇧', name: "London", subtitle: 'United Kingdom'},
  ]

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCountry, setSelectedCountry] = useState([])

  const goBack = () => navigation.goBack()
  const updateSelectedCountry = (country: any) => {
    setSelectedCountry(country)
    goBack()
  }

  const renderAvailablePlaces = () => (
    <ScrollView>
      {availablePlaces
        .filter(item => searchQuery.trim().length > 0 ? item.name.includes(searchQuery) : item)
        .map((country) => (
          <TouchableOpacity onPress={() => updateSelectedCountry(country)} key={`country-${country.id}`}>
            <ListItem prefix={<Text style={styles.country_flag}>{country.icon}</Text>}>
              <View style={styles.country_text}>
                <Text style={styles.country_title}>{country.name}</Text>
                <Text style={styles.country_subtitle}>{country.subtitle}</Text>
              </View>
            </ListItem>
            <Divider mt={6} mb={6}/>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );

  const handleOnPress = () => {
    if (!searchQuery.trim().length) {
      goBack()
      return
    }
    setSearchQuery('')
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.searchBarContainer}>
          <View style={styles.searchbar}>
            <TextInput
              value={searchQuery}
              style={styles.inputStyles}
              placeholder="Search Address"
              underlineColorAndroid="transparent"
              onChangeText={(searchString) => setSearchQuery(searchString)}
            />

            <IconButton iconName="close" borderRadius={50} size={48} iconSize={18}
                        onPress={handleOnPress}/>
          </View>
        </View>

        {renderAvailablePlaces()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
  },

  searchBarContainer: {
    marginVertical: 20,
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
  },
  country_subtitle: {
    marginTop: 6,
    fontFamily: 'Circular Std',
    fontSize: 16,
    color: '#7E8792'
  },
  country_title: {
    fontFamily: 'Circular Std',
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,
    color: '#000'
  },
  country_text: {marginLeft: 16},
  country_flag: {fontSize: 24}
});

export default SelectCountryScreen

import {FontAwesome} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';
import useColorScheme from '../hooks/useColorScheme';
import Colors from "../constants/Colors";
import NotFoundScreen from '../screens/NotFoundScreen';
import ExploreScreen from "../screens/BottomNavigation/ExploreScreen";
import SocialScreen from "../screens/BottomNavigation/SocialScreen";
import EventsScreen from "../screens/BottomNavigation/EventsScreen";
import NewsScreen from "../screens/BottomNavigation/NewsScreen";
import ProfileScreen from "../screens/BottomNavigation/ProfileScreen";
import MapSettingsScreen from "../screens/MapSettingsScreen";
import FindMateScreen from "../screens/FindMateScreen";
import SelectCountryScreen from "../screens/SelectCountryScreen";

const Stack = createNativeStackNavigator<any>();
const BottomTab = createBottomTabNavigator<any>();

const TabBarIcon = (props: {
  color: string;
  inactiveIcon: React.ComponentProps<typeof FontAwesome>['name'];
  activeIcon: React.ComponentProps<typeof FontAwesome>['name'];
  focused: boolean;
}) => {
  const icon = props.focused ? props.activeIcon : props.inactiveIcon
  return <FontAwesome size={18} style={{marginBottom: -4}} {...props} name={icon}/>;
};

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();
  const labelStyles = {
    fontSize: 12,
    marginBottom: 4
  }
  return (
    <BottomTab.Navigator
      initialRouteName="ExploreScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tabIconSelected,
      }}>
      <BottomTab.Screen name="SocialScreen" component={SocialScreen} options={{
        title: 'Social',
        tabBarLabelStyle: labelStyles,
        headerShown: false,
        tabBarIcon({color, focused}) {
          return <TabBarIcon inactiveIcon="comment-o" activeIcon="comment" color={color} focused={focused}/>;
        },
      }}/>
      <BottomTab.Screen name="EventsScreen" component={EventsScreen} options={{
        title: 'Events',
        tabBarLabelStyle: labelStyles,
        headerShown: false,
        tabBarIcon({color, focused}) {
          return <TabBarIcon inactiveIcon="calendar-o" activeIcon="calendar" color={color}
                             focused={focused}/>;
        },
      }}/>
      <BottomTab.Screen name="ExploreScreen" component={ExploreScreen} options={{
        title: 'Explore',
        tabBarLabelStyle: labelStyles,
        headerShown: false,
        tabBarIcon({color, focused}) {
          return <TabBarIcon inactiveIcon="heart-o" activeIcon="heart" color={color} focused={focused}/>;
        },
      }}/>
      <BottomTab.Screen name="NewsScreen" component={NewsScreen} options={{
        title: 'News',
        tabBarLabelStyle: labelStyles,
        headerShown: false,
        tabBarIcon({color, focused}) {
          return <TabBarIcon inactiveIcon="bell-o" activeIcon="bell" color={color} focused={focused}/>;
        },
      }}/>
      <BottomTab.Screen name="ProfileScreen" component={ProfileScreen} options={{
        title: 'Profile',
        tabBarLabelStyle: labelStyles,
        headerShown: false,
        tabBarIcon({color, focused}) {
          return <TabBarIcon inactiveIcon="user-circle-o" activeIcon="user-circle" color={color}
                             focused={focused}/>;
        },
      }}/>
    </BottomTab.Navigator>
  );
};

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
    <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
    <Stack.Screen name="MapSettingsScreen" component={MapSettingsScreen} options={{
      title: 'Map Settings',
      headerTitleAlign: 'center'
    }}/>
    <Stack.Screen name="FindMateScreen" component={FindMateScreen} options={{
      headerShown: false
    }}/>

    <Stack.Screen name="SelectCountryScreen" component={SelectCountryScreen}
                  options={{headerShown: false, presentation: 'modal'}}/>
  </Stack.Navigator>
);

const Navigation = ({colorScheme}: { colorScheme: ColorSchemeName }) => (
  <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <RootNavigator/>
  </NavigationContainer>
);

export default Navigation

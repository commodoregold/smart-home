import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import DetailsScreen from './Details'
import HomeScreen from './home'
// import SettingsScreen from './Setting'




const Tab = createBottomTabNavigator();

function App() {
  return (

    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            }

            else if (route.name === 'Settings') {
              iconName = focused
                ? 'ios-cog'
                : 'ios-cog';
            }

            else if (route.name === 'Details') {
              iconName = focused
                ? 'ios-list'
                : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
          headerTintColor: 'black',
          headerStyle: { backgroundColor: 'green' },
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: 'white' },




        })}

      >
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        <Tab.Screen name="Details" component={DetailsScreen} />


      </Tab.Navigator>

    </NavigationContainer>

  )
}


export default App;
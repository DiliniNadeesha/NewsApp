import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from "./screens/SearchScreen";
import { Entypo,FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function App() {
  return (

        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: "red",
                fontWeight: "bold"
            }}>
                <Tab.Screen name="HOME" component={HomeScreen} options={{
                    tabBarIcon: () =><Entypo name="home" size={25} color="black" fontWeight="bold" />
                }}/>
                <Tab.Screen name="SEARCH" component={SearchScreen} options={{
                    tabBarIcon: () =><FontAwesome name="search" size={25} color="black" fontWeight="bold" />
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';




import { IMAGE } from './src/constans/image';
import LoginScreen from './src/auth/LoginScreen';
import RegisterScreen from './src/auth/RegisterScreen';
import NotificationsScreen from './src/drawer/NotificationsScreen';
import HomeScreen from './src/tab/HomeScreen';
import HomeScreenDetail from './src/tab/HomeScreenDetail'
import SettingsScreen from './src/tab/SettingsScreen';
import SettingsScreenDetail from './src/tab/SettingsScreenDetail';
import CustomDrawerContent from './src/CustomDrawerContent';
import CustomHeader from './src/CustomHeader';


const Tab = createBottomTabNavigator();
const StackHome = createStackNavigator();
const StackSettings = createStackNavigator();
const StackApp = createStackNavigator();

const Drawer = createDrawerNavigator();

const navOptionHadler = () => ({
  headerShown: false
})


function HomeStack(){
  return(
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name='Home' component={HomeScreen} options={navOptionHadler}></StackHome.Screen>
      <StackHome.Screen name='HomeDetail' component={HomeScreenDetail} options={navOptionHadler}></StackHome.Screen>
    </StackHome.Navigator>
  )
}
function SettingsStack(){
  return(
    <StackSettings.Navigator initialRouteName="Settings">
      <StackSettings.Screen name='Settings' component={SettingsScreen}  options={navOptionHadler}></StackSettings.Screen>
      <StackSettings.Screen name='SettingsDetail' component={SettingsScreenDetail}  options={navOptionHadler}></StackSettings.Screen>
    </StackSettings.Navigator>
  )
}

function TabNavigator(){
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? IMAGE.ICON_HOME1
              : IMAGE.ICON_HOME2
          } else if (route.name === 'Settings') {
            iconName = focused 
            ? IMAGE.ICON_SETTINGS1
            : IMAGE.ICON_SETTINGS2;
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{ width:20, height:20 }} resizeMode='contain' />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'black',
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  )
}


function DrawerNavigator(){
  return (
    <Drawer.Navigator drawerPosition='left' initialRouteName="MenuTab" drawerContent={(props) => CustomDrawerContent(props)}>
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen name='HomeApp' component={DrawerNavigator}  options={navOptionHadler}></StackApp.Screen>
        <StackApp.Screen name='Login' component={LoginScreen}  options={navOptionHadler}></StackApp.Screen>
        <StackApp.Screen name='Register' component={RegisterScreen}  options={navOptionHadler}></StackApp.Screen>
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from "react";
import HomeScreen from "./screens/HomeScreen";
import Portfolio from "./screens/Portfolio";
import Stocks from "./screens/Stocks";
import Settings from "./screens/Settings";
import Login from "./screens/Login"
import Register from "./screens/Register";
import "./styles/styles.js";
import styles from "./styles/styles";
import TabBarIcon from '@react-navigation/bottom-tabs/src/views/TabBarIcon';
import { Image } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from "./screens/Account";
import { useState } from "react";

/* ICONS used fairly as part of the Flaticon License: "Free for personal and commercial purpose with attribution". Credits go to users Freepik, Miroliubov, and Gregor Cresnar Premium. */

/* Styling notes
  Purple color: #5E43AB
  Blue Color: #1c8cfc
  Gray Color: #a4a4a5
  */

const Tab = createBottomTabNavigator();
const HomeStackNav = createNativeStackNavigator();
const LoginStackNav = createNativeStackNavigator();
const PortfolioStackNav = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStackNav.Navigator screenOptions={{headerTitleAlign: 'center'}}>
            <HomeStackNav.Screen name="Home" component={HomeScreen}  />
            <HomeStackNav.Screen name="Account" component={Account}/>

        </HomeStackNav.Navigator>
    );
}

function PortfolioStackScreen() {

  /* ABEL: Updated following code through the return render on 09/03/2022 */

  /* This now allows selling stock functionality to make changes globally within this function (the PortfolioStackScreen),
      which means that stock changes will take effect on both the Portfolio and Stock screens, from within the Sell Stock
      button on the Stock screens. The variables for the stock balances and share amounts are declared and initialized 
      here with the useState() hook, are passed to the Portfolio screen in the return render (which routes them to the 
      corresponding Stock screens as shown in Portfolio.js), and the methods to update these variables are passed to 
      the Stock screen in the return render, allowing the Sell Stock button to update values globally (as shown in Stocks.js).  */

  const [portfolioTotalBalance, setPortfolioTotalBalance] = useState(859.48);
  const setPortfolioBalance=(amountToSet)=>{
    setPortfolioTotalBalance(amountToSet)
  }

  const [stock1Balance, setStock1Balance] = useState(156.57);
  const setS1Balance=(amountToSet)=>{
    setStock1Balance(amountToSet)
  }

  const [stock2Balance, setStock2Balance] = useState(470.11);
  const setS2Balance=(amountToSet)=>{
    setStock2Balance(amountToSet)
  }

  const [stock3Balance, setStock3Balance] = useState(123.53);
  const setS3Balance=(amountToSet)=>{
    setStock3Balance(amountToSet)
  }

  const [stock4Balance, setStock4Balance] = useState(109.27);
  const setS4Balance=(amountToSet)=>{
    setStock4Balance(amountToSet)
  }

  const [stock1Shares, setStock1Shares] = useState(1);
  const setS1Shares=(amountToSet)=>{
    setStock1Shares(amountToSet)
  }

  const [stock2Shares, setStock2Shares] = useState(44.35);
  const setS2Shares=(amountToSet)=>{
    setStock2Shares(amountToSet)
  }

  const [stock3Shares, setStock3Shares] = useState(11);
  const setS3Shares=(amountToSet)=>{
    setStock3Shares(amountToSet)
  }

  const [stock4Shares, setStock4Shares] = useState(3.5);
  const setS4Shares=(amountToSet)=>{
    setStock4Shares(amountToSet)
  }

  return (
      <PortfolioStackNav.Navigator screenOptions={{headerTitleAlign: 'center'}}>

          <PortfolioStackNav.Screen name="Portfolio">
            {(props) => <Portfolio {...props} 
            portfolioTotalBalance={portfolioTotalBalance} 
            stock1Balance={stock1Balance} 
            stock2Balance={stock2Balance} 
            stock3Balance={stock3Balance} 
            stock4Balance={stock4Balance}
            stock1Shares={stock1Shares} 
            stock2Shares={stock2Shares} 
            stock3Shares={stock3Shares} 
            stock4Shares={stock4Shares} />}
          </PortfolioStackNav.Screen>
        
          <PortfolioStackNav.Screen name="Stocks">
            {(props) => <Stocks {...props}
            setPortfolioBalance={setPortfolioBalance}
            setS1Balance={setS1Balance}
            setS2Balance={setS2Balance}
            setS3Balance={setS3Balance}
            setS4Balance={setS4Balance}
            setS1Shares={setS1Shares}
            setS2Shares={setS2Shares}
            setS3Shares={setS3Shares}
            setS4Shares={setS4Shares} />}  
          </PortfolioStackNav.Screen> 

      </PortfolioStackNav.Navigator>
  );
}

//function LoginStackScreen({status}) {
//return (
//    <LoginStackNav.Navigator>
//        <LoginStackNav.Screen name="Login" component={Login} initialParams={{status:status}} />
//        <LoginStackNav.Screen name="Register" component={Register} />
//    </LoginStackNav.Navigator>
//    );
//}

function App(){
  const [loginStatus,setStatus]=useState(false)
  const status=()=>{
    setStatus(!loginStatus)
  }
  if(!loginStatus)
  {
    return(
        <NavigationContainer>
            <LoginStackNav.Navigator>
                <LoginStackNav.Screen name="Login" options={{headerShown: false}}>
                    {(props) => <Login {...props} status={status}/>}
                </LoginStackNav.Screen>
                <LoginStackNav.Screen name="Register" options={{headerShown: false}}>
                    {(props) => <Register {...props} status={status}/>}
                </LoginStackNav.Screen>
            </LoginStackNav.Navigator>
       </NavigationContainer>
    )
  }
  return (
    <NavigationContainer>
      <Tab.Navigator backBehavior='history'>
        <Tab.Screen name="HomeScreen" component={HomeStackScreen}
          options={{
          headerShown: false,
            // title: 'Home',
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{fontSize: 10, color: focused ? '#5e43ab' : '#a4a4a5'}}>Home</Text>
            ),
            tabBarLabelPosition: 'below-icon',
            tabBarIcon: ({focused}) => (
            <Image source={require("./assets/icons/home.png")} style={{ width: 25, height: 25, tintColor: focused ? '#5e43ab' : '#a4a4a5' }} />)
          }} />
        <Tab.Screen name="PortfolioScreen" component={PortfolioStackScreen}
          options={{
            headerShown: false,
            // title: 'Portfolio',
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{fontSize: 10, color: focused ? '#5e43ab' : '#a4a4a5'}}>Portfolio</Text>
            ),
            tabBarLabelPosition: 'below-icon',
            tabBarIcon: ({focused}) => (
            <Image source={require("./assets/icons/portfolio.png")} style={{width: 25, height: 25, tintColor: focused ? '#5e43ab' : '#a4a4a5'}} />)
          }} />
        <Tab.Screen name="Settings"
          options={{
            headerTitleAlign: 'center',
            title: 'Settings',
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{fontSize: 10, color: focused ? '#5e43ab' : '#a4a4a5'}}>Settings</Text>
            ),
            tabBarLabelPosition: 'below-icon',
            tabBarIcon: ({focused}) => (
            <Image source={require("./assets/icons/settings.png")} style={{width: 25, height: 25, tintColor: focused ? '#5e43ab' : '#a4a4a5'}} />)
          }}>
            {props => <Settings {...props} status={status} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;

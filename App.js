import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';



const bgimage = { uri: "https://i.imgur.com/oPVHbZA.png" };
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.backdrop}>
      <ImageBackground source={bgimage} style={styles.image}>
        <View style={styles.container}>
          <Text>home!</Text>
        </View>
      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

function Portfolio() {
  return (
    <View style={styles.backdrop}>
      <ImageBackground source={bgimage} style={styles.image}>
        <View style={styles.container}>
          <Text>portfolio!</Text>
        </View>
      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

function Settings() {
  return (
    <View style={styles.backdrop}>
      <ImageBackground source={bgimage} style={styles.image}>
        <View style={styles.container}>
          <Text>settings!</Text>
        </View>
      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

function Tabs() {
  return (
    <Tab.Navigator backBehavior='history'>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: '100%',
    width: '100%'
  },
  container: {
    backgroundColor: "white", 
    flex: 0.9,
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }

});

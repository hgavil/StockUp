import {ImageBackground, Pressable, Text, View, Button} from "react-native";
import {StatusBar} from "expo-status-bar";
import React, {Component} from "react";
import styles from "../styles/styles";
import {ScrollView} from "react-native";
import { TextInput } from "react-native-web";
import { SafeAreaView } from "react-native-safe-area-context";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.backdrop}>
                <ImageBackground source={require('../assets/bgimage.png')} style={styles.image}>
                    <Text style={styles.logo}>StockUp</Text>
                    <View>
                        <TextInput
                            style={styles.inputSimpleBorder} 
                            placeholder="Username"
                        />
                        <TextInput
                            style={styles.inputSimpleBorder} 
                            placeholder="Password"
                        />
                    </View>
                    <View style={styles.buttoncont}>
                        <Pressable style={({pressed}) => [{
                                    backgroundColor: pressed ? "#755FB1" : "#5E43AB",},
                                    styles.loginBut
                                ]}
                                onPress={() => this.props.navigation.navigate('HomeScreen')}>
                            <View>
                                <Text style={{color:"#FFFFFF",fontWeight: 'bold',}}>Login</Text>
                            </View>
                        </Pressable>
                        <Pressable style={({pressed}) => [{
                                    backgroundColor: pressed ? "#755FB1" : "#5E43AB",},
                                    styles.loginBut
                                ]}
                                onPress={() => this.props.navigation.navigate('HomeScreen')}>
                            <View>
                                <Text style={{color:"#FFFFFF",fontWeight: 'bold',}}>Register</Text>
                            </View>
                        </Pressable>
                    </View>
                </ImageBackground>
                

                <StatusBar style="auto" />
            </View>
        );
    }
}

export default Login;


import {ImageBackground, Pressable, Text, View, Button} from "react-native";
import {StatusBar} from "expo-status-bar";
import React, {Component} from "react";
import styles from "../styles/styles";
import {ScrollView} from "react-native";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Register ({status}) {
    return (
        <View style={styles.backdrop}>
            <ImageBackground source={require('../assets/bgimage.png')} style={styles.image}>
                <Text style={{fontSize:50, color:'white', alignSelf:'center', paddingBottom:20}}>Register</Text>
                <View style={{width: '75%', alignSelf: "center"}}>
                    <TextInput
                        style={styles.inputSimpleBorder} 
                        placeholder="Username"
                    />
                    <TextInput
                        style={styles.inputSimpleBorder} 
                        placeholder="Password"
                    />
                    <TextInput
                        style={styles.inputSimpleBorder}
                        placeholder="Password (again)"
                    />
                </View>
                <View style={styles.buttoncont}>
                    <Pressable style={({pressed}) => [{
                                backgroundColor: pressed ? "#755FB1" : "#5E43AB",},
                                styles.loginBut
                            ]}
                            onPress={() => status()}>
                        <View>
                            <Text style={{color:"#FFFFFF"}}>Register</Text>
                        </View>
                    </Pressable>
                </View>
            </ImageBackground>
            

            <StatusBar style="auto" />
        </View>
    );
}

export default Register;


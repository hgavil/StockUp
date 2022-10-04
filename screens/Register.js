import {ImageBackground, Pressable, Text, View, Button} from "react-native";
import {StatusBar} from "expo-status-bar";
import React, {Component} from "react";
import styles from "../styles/styles";
import {ScrollView} from "react-native";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/* ABEL: Updated password fields for secure text entry. 09/03/2022 */

function Register ({status}) {
    return (
        <View style={styles.backdrop}>
            <ImageBackground source={require('../assets/bgimage.png')} style={styles.image}>
            <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: "center"}}>
                <Text style={{fontSize:50, color:'white', alignSelf:'center', paddingBottom:20}}>Register</Text>
                <View style={{width: '75%', alignSelf: "center"}}>
                    <TextInput
                        style={styles.inputSimpleBorder} 
                        placeholder="Username"
                        placeholderTextColor="#C7C7CD"
                    />
                    <TextInput
                        style={styles.inputSimpleBorder} 
                        placeholder="Password"
                        placeholderTextColor="#C7C7CD"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.inputSimpleBorder}
                        placeholder="Password (again)"
                        placeholderTextColor="#C7C7CD"
                        secureTextEntry={true}
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
                </ScrollView>
            </ImageBackground>
            

            <StatusBar style="auto" />
        </View>
    );
}

export default Register;


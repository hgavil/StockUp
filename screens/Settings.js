import {ImageBackground, Text, View, Image} from "react-native";
import styles from "../styles/styles";
import {StatusBar} from "expo-status-bar";
import React, {Component} from "react";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import {Pressable} from "react-native";
import { Switch } from "react-native";

function Settings(){
    const [upClicked,setUPClicked]=useState(false)
    const [notifications,setNotifications]=useState(false)
    const [security,setSecurity]=useState(false)
    const [switch1,setSwitch1]=useState(false)
    const [switch2,setSwitch2]=useState(false)
    const [switch3,setSwitch3]=useState(false)
    return (
        <View style={styles.backdrop}>
            <ImageBackground source={require('../assets/bgimage.png')} style={styles.image}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>JustinThyme1</Text>
                    <Button title="Log out"></Button>
                    <View style={[styles.container2,{flexDirection: "column"}]}>
                        <View style={[styles.container2, { flexDirection: "row"}]}>
                            <Text style={styles.subjectText}>User Preferences</Text>
                            <TouchableOpacity onPress={()=>setUPClicked(!upClicked)}>
                                <Image source={require('../assets/downcaret.png')} style={styles.icon}></Image>
                            </TouchableOpacity>
                        </View>
                        {upClicked &&
                            <View style={styles.container}>
                                <Pressable style={styles.button}>
                                    <Text>Change Email</Text>
                                </Pressable>
                                <Pressable style={styles.button}>
                                    <Text>Change Password</Text>
                                </Pressable>
                            </View>
                        }
                    </View>
                    <View style={[styles.container2,{flexDirection:"column"}]}>
                        <View style={[styles.container2, { flexDirection: "row"}]}>
                            <Text style={styles.subjectText}>Notifications</Text>
                            <TouchableOpacity onPress={()=>setNotifications(!notifications)}>
                                <Image source={require('../assets/downcaret.png')} style={styles.icon}></Image>
                            </TouchableOpacity>
                        </View>
                        {notifications &&
                            <View style={styles.container}>
                                <View style={[styles.container2,{flexDirection:"row"}]}>
                                    <Text>Notifications for earnings</Text>
                                    <Switch
                                    value={switch1}
                                    onValueChange={(value)=>setSwitch1(value)}
                                    />
                                </View>
                                <View style={[styles.container2,{flexDirection:"row"}]}>
                                    <Text>Notifications for rewards</Text>
                                    <Switch
                                    value={switch2}
                                    onValueChange={(value)=>setSwitch2(value)}
                                    />
                                </View>
                                <View style={[styles.container2,{flexDirection:"row"}]}>
                                    <Text>Notifications for transactions</Text>
                                    <Switch
                                    value={switch3}
                                    onValueChange={(value)=>setSwitch3(value)}
                                    />
                                </View>
                            </View>
                        }
                    </View>
                    <View style={[styles.container2,{flexDirection:"column"}]}>
                        <View style={[styles.container2, { flexDirection: "row"}]}>
                            <Text style={styles.subjectText}>Security</Text>
                            <TouchableOpacity onPress={()=>setSecurity(!security)}>
                                <Image source={require('../assets/downcaret.png')} style={styles.icon}></Image>
                            </TouchableOpacity>
                        </View>
                        {security &&
                            <View style={styles.container}>
                                <Pressable style={styles.button}>
                                    <Text>Enable Biometric Sign-in</Text>
                                </Pressable>
                                <Pressable style={styles.button}>
                                    <Text>Enable 2-Factor Authentication</Text>
                                </Pressable>
                            </View>
                        }
                    </View>
                </View>
            </ImageBackground>

            <StatusBar style="auto" />
        </View>
    );
}

export default Settings;
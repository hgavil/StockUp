import {ImageBackground, Text, View, Image} from "react-native";
import styles from "../styles/styles";
import {StatusBar} from "expo-status-bar";
import React, {Component} from "react";
import { Button } from "react-native";
import { TouchableOpacity, Modal, TextInput } from "react-native";
import { useState } from "react";
import {Pressable} from "react-native";
import { Switch } from "react-native";

function Settings({status}){
    const [upClicked,setUPClicked]=useState(false)
    const [notifications,setNotifications]=useState(false)
    const [security,setSecurity]=useState(false)
    const [switch1,setSwitch1]=useState(false)
    const [switch2,setSwitch2]=useState(false)
    const [switch3,setSwitch3]=useState(false)
    const [modal1,setModal1]=useState(false)
    const [modal2,setModal2]=useState(false)
    const [modal3,setModal3]=useState(false)
    const [modal4,setModal4]=useState(false)
    return (
        <View style={styles.backdrop}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal1}
                onRequestClose={() => {
                    setModal1(!modal1);
                }}
            >
                <View style={styles.modalView}>
                    <TextInput
                        style={styles.input}
                        placeholder="enter your email"
                        keyboardType="default"
                    />
                    <Pressable style={styles.button} onPress={()=>setModal1(!modal1)}>
                        <Text>Confirm</Text>
                    </Pressable>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal2}
                onRequestClose={() => {
                    setModal2(!modal2);
                }}
            >
                <View style={styles.modalView}>
                    <TextInput
                        style={styles.input}
                        placeholder="enter your password"
                        keyboardType="default"
                    />
                    <Pressable style={styles.button} onPress={()=>setModal2(!modal2)}>
                        <Text>Confirm</Text>
                    </Pressable>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal3}
                onRequestClose={() => {
                    setModal3(!modal3);
                }}
            >
                <View style={styles.modalView}>
                    <Text>Are you sure you want to enable biometric sign-in</Text>
                    <Pressable style={styles.button} onPress={()=>setModal3(!modal3)}>
                        <Text>Yes</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={()=>setModal3(!modal3)}>
                        <Text>No</Text>
                    </Pressable>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal4}
                onRequestClose={() => {
                    setModal4(!modal4);
                }}
            >
                <View style={styles.modalView}>
                    <Text>Are you sure you want to enable 2-factor Authentication</Text>
                    <Pressable style={styles.button} onPress={()=>setModal4(!modal4)}>
                        <Text>Yes</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={()=>setModal4(!modal4)}>
                        <Text>No</Text>
                    </Pressable>
                </View>
            </Modal>
            <ImageBackground source={require('../assets/bgimage.png')} style={styles.image}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>JustinThyme1</Text>
                    <Button onPress={()=>status()} title="Log out"></Button>
                    <View style={[styles.container2,{flexDirection: "column"}]}>
                        <View style={[styles.container2, { flexDirection: "row"}]}>
                            <Text style={styles.subjectText}>User Preferences</Text>
                            <TouchableOpacity onPress={()=>setUPClicked(!upClicked)}>
                                <Image source={require('../assets/downcaret.png')} style={styles.icon}></Image>
                            </TouchableOpacity>
                        </View>
                        {upClicked &&
                            <View style={styles.container}>
                                <Pressable style={styles.button} onPress={()=>setModal1(!modal1)}>
                                    <Text>Change Email</Text>
                                </Pressable>
                                <Pressable style={styles.button} onPress={()=>setModal2(!modal2)}>
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
                                <Pressable style={styles.button} onPress={()=>setModal3(!modal3)}>
                                    <Text>Enable Biometric Sign-in</Text>
                                </Pressable>
                                <Pressable style={styles.button} onPress={()=>setModal4(!modal4)}>
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
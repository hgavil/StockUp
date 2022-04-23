import {ImageBackground, Text, View, Image} from "react-native";
import styles from "../styles/styles";
import {StatusBar} from "expo-status-bar";
import React, {Component} from "react";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";

class Settings extends Component {
    render() {
        return (
            <View style={styles.backdrop}>
                <ImageBackground source={require('../assets/bgimage.png')} style={styles.image}>
                    <View style={styles.container}>
                        <Text style={styles.titleText}>JustinThyme1</Text>
                        <Button title="Log out"></Button>
                        <View style={[styles.container2, { flexDirection: "row"}]}>
                            <Text style={styles.subjectText}>User Preferences</Text>
                            <TouchableOpacity>
                                <Image source={require('../assets/downcaret.png')} style={styles.icon}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.container2, { flexDirection: "row"}]}>
                            <Text style={styles.subjectText}>Notifications</Text>
                            <TouchableOpacity>
                                <Image source={require('../assets/downcaret.png')} style={styles.icon}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.container2, { flexDirection: "row"}]}>
                            <Text style={styles.subjectText}>Security</Text>
                            <TouchableOpacity>
                                <Image source={require('../assets/downcaret.png')} style={styles.icon}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>

                <StatusBar style="auto" />
            </View>
        );
    }
}

export default Settings;
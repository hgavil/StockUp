import {ImageBackground, Pressable, Text, View, Button} from "react-native";
import {StatusBar} from "expo-status-bar";
import React, {Component} from "react";
import styles from "../styles/styles";
import {ScrollView} from "react-native";

class Login extends Component {
    render() {
        return (
            <View style={styles.backdrop}>
                <ImageBackground source={require('../assets/bgimage.png')} style={styles.image}>
                    <Text style={styles.logo}>StockUp</Text>
                    <View style={styles.buttoncont}>
                        <Button style={styles.loginBut}
                            title="Login"
                            color="#5E43AB"
                            onPress={() => Alert.alert('Simple Button pressed')}
                        />
                        <Button style={styles.loginBut}
                            title="Register"
                            color="#5E43AB"
                            onPress={() => Alert.alert('Simple Button pressed')}
                        />
                    </View>
                </ImageBackground>

                <StatusBar style="auto" />
            </View>
        );
    }
}

export default Login;


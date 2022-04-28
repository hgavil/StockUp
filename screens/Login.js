import {ImageBackground, Pressable, Text, View, Button} from "react-native";
import {StatusBar} from "expo-status-bar";
import React, {Component} from "react";
import styles from "../styles/styles";
import {ScrollView} from "react-native";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.backdrop}>
                <ImageBackground source={require('../assets/bgimage.png')} style={styles.image}>
                    <Text style={styles.logo}>StockUp</Text>
                    <View style={styles.buttoncont}>
                        <Pressable style={({pressed}) => [{
                                    backgroundColor: pressed ? 'lightgray' : 'white',},
                                    styles.accButton
                                ]}
                                onPress={() => Alert.alert('Button Pressed!')}>>
                            <View style={{color:"#5E43AB"}}>
                                <Text style={{color:"#FFFFFF"}}>Login</Text>
                            </View>
                        </Pressable>
                        <Button style={styles.stockButton}
                            title="Login"
                            color="#5E43AB"
                            onPress={() => Alert.alert('Simple Button pressed')}
                        />
                        <Text> </Text>
                        <Button style={styles.stockButton}
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


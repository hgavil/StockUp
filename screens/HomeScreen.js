import {ImageBackground, Pressable, Text, View, Alert} from "react-native";
import {StatusBar} from "expo-status-bar";
import React, {Component} from "react";
import styles from "../styles/styles";
import {ScrollView} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            acc1Num: '...0193',
            acc1Bal: 2538.32,
            acc2Num: '...0428',
            acc2Bal: 1422.01,

        }
    }

    render() {
        return (
            <View style={styles.backdrop}>
                <ImageBackground source={require('../assets/bgimage.png')} style={styles.image}>
                    <ScrollView contentContainerStyle={styles.container}>
                        <Text style={styles.titleText}>Welcome back, Justin!</Text>
                        <View style={styles.horizontalLine}/>
                        <View style={{flexDirection: 'row', width: '75%', paddingTop: 25}}>
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text style={{fontSize: 16, textAlign: 'left'}} >Account</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text style={{fontSize: 16, textAlign: 'right'}} >Balance</Text>
                            </View>
                        </View>

                        {/* View container for stock buttons, arranged in a column. (code by abel) */}
                        <View style={{flexDirection: 'column', width: '90%', margin: 10}}>

                            {/* Account 2 */}
                            <Pressable
                                style={({pressed}) => [{
                                    backgroundColor: pressed ? 'lightgray' : 'white',},
                                    styles.accButton
                                ]}
                                onPress={() => this.props.navigation.navigate('Account', { accNum: this.acc1Num, accBal: this.acc1Bal })}>

                                <View style={{flexDirection: 'row', width: '85%'}}>
                                    <View style={{flex: 1.1, flexDirection: 'column', alignself: 'baseline'}}>
                                        <Text style={styles.accButtonTextLeft} > {this.state.acc1Num}</Text>
                                    </View>
                                    <View style={{flex: 2, flexDirection: 'column'}}>
                                        <Text style={styles.accButtonTextRight} >${this.state.acc1Bal}</Text>
                                    </View>
                                </View>
                            </Pressable>

                            {/* Account 2 */}
                            <Pressable
                                style={({pressed}) => [{
                                    backgroundColor: pressed ? 'lightgray' : 'white',},
                                    styles.accButton
                                ]}
                                onPress={() => Alert.alert('Button Pressed!')}>

                                <View style={{flexDirection: 'row', width: '85%'}}>
                                    <View style={{flex: 1.1, flexDirection: 'column', alignself: 'baseline'}}>
                                        <Text style={styles.accButtonTextLeft} >{this.state.acc2Num}</Text>
                                    </View>
                                    <View style={{flex: 2, flexDirection: 'column'}}>
                                        <Text style={styles.accButtonTextRight} >${this.state.acc2Bal}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                        <View style={styles.horizontalLine}/>
                    </ScrollView>
                </ImageBackground>
                <StatusBar style="auto" />
            </View>
        );
    }
}

export default HomeScreen;
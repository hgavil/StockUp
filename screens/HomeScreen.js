import {ImageBackground, Pressable, Text, View, Alert} from "react-native";
import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";
import styles from "../styles/styles";
import {ScrollView} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen(props) {

    const [acc1Num, setAcc1Num] = useState('...0193');
    const [acc1Bal, setAcc1Bal] = useState(2538.32);
    const [acc2Num, setAcc2Num] = useState('...0428');
    const [acc2Bal, setAcc2Bal] = useState(1422.01);

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
                            onPress={() => props.navigation.navigate('Account', { accNum: acc1Num, accBal: acc1Bal })}>

                            <View style={{flexDirection: 'row', width: '85%'}}>
                                <View style={{flex: 1.1, flexDirection: 'column', alignself: 'baseline'}}>
                                    <Text style={styles.accButtonTextLeft} > {acc1Num}</Text>
                                </View>
                                <View style={{flex: 2, flexDirection: 'column'}}>
                                    <Text style={styles.accButtonTextRight} >${acc1Bal}</Text>
                                </View>
                            </View>
                        </Pressable>

                        {/* Account 2 */}
                        <Pressable
                            style={({pressed}) => [{
                                backgroundColor: pressed ? 'lightgray' : 'white',},
                                styles.accButton
                            ]}
                            onPress={() => props.navigation.navigate('Account', { accNum: acc2Num, accBal: acc2Bal })}>

                            <View style={{flexDirection: 'row', width: '85%'}}>
                                <View style={{flex: 1.1, flexDirection: 'column', alignself: 'baseline'}}>
                                    <Text style={styles.accButtonTextLeft} >{acc2Num}</Text>
                                </View>
                                <View style={{flex: 2, flexDirection: 'column'}}>
                                    <Text style={styles.accButtonTextRight} >${acc2Bal}</Text>
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

export default HomeScreen;
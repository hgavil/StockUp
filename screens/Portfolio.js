import {ImageBackground, Text, View, ScrollView, Image, Alert, Button, Pressable} from "react-native";
import styles from "../styles/styles";
import {StatusBar} from "expo-status-bar";
import React, {Component} from "react";
//import { Button } from "react-native-web";

class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolioTotalBalance: 877.07,
            stock1Name: 'AAPL',
            stock1Price: 175.06,
            stock1Ticker: 'down',
            stock2Name: 'BBAI',
            stock2Price: 470.47,
            stock2Ticker: 'up',
            stock3Name: 'JBLU',
            stock3Price: 122.33,
            stock3Ticker: 'down',
            stock4Name: 'RIVN',
            stock4Price: 109.21,
            stock4Ticker: 'down',
        }
    }

    render() {
        return (
            <View style={styles.backdrop}>
                <ImageBackground source={require('../assets/bgimage.png')} style={styles.image}>
                    <ScrollView contentContainerStyle={styles.container3}>
                        <Text style={styles.titleText}>Overview</Text>
                        <View style={styles.horizontalLine}/>
                        <Image source={require("../assets/chart.png")} style={{width: '100%', height: undefined, aspectRatio: 1.936507936507937}}/>
                        <Text style={{fontSize: 14, textAlign: 'center', marginTop: 10}} >Total Balance</Text>
                        <Text style={{fontSize: 26, textAlign: 'center', fontWeight: '500'}} >${this.state.portfolioTotalBalance}</Text>
                        <View style={{flexDirection: 'row', width: '75%'}}>
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text style={{fontSize: 16, textAlign: 'left'}} >Stocks</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text style={{fontSize: 16, textAlign: 'right'}} >Balance</Text>
                            </View>
                        </View>

                        {/* View container for stock buttons, arranged in a column. */}
                        <View style={{flexDirection: 'column', width: '90%', margin: 10}}>

                            {/* Stock button 1 */}
                            <Pressable
                                style={({pressed}) => [{
                                    backgroundColor: pressed ? 'blue' : 'white',},
                                    styles.stockButton
                                ]}
                                onPress={() => Alert.alert('Button Pressed!')}>

                                <View style={{flexDirection: 'row', width: '85%'}}>
                                    <View style={{flex: 1.1, flexDirection: 'column', alignself: 'baseline'}}>
                                        <Text style={styles.stockButtonTextLeft} >{this.state.stock1Name}</Text>
                                    </View>
                                    <View style={{flex: 3, flexDirection: 'column', alignself: 'baseline'}}>
                                        <Image source={require("../assets/downchevron.png")} style={{width: '10%', height: undefined, aspectRatio: 1, marginTop: 4}}/>
                                    </View>
                                    <View style={{flex: 2, flexDirection: 'column'}}>
                                        <Text style={styles.stockButtonTextRight} >${this.state.stock1Price}</Text>
                                    </View>
                                </View>
                            </Pressable>

                            {/* Stock button 2 */}
                            <Pressable
                                style={({pressed}) => [{
                                    backgroundColor: pressed ? 'blue' : 'white',},
                                    styles.stockButton
                                ]}
                                onPress={() => Alert.alert('Button Pressed!')}>

                                <View style={{flexDirection: 'row', width: '85%'}}>
                                    <View style={{flex: 1.1, flexDirection: 'column', alignself: 'baseline'}}>
                                        <Text style={styles.stockButtonTextLeft} >{this.state.stock2Name}</Text>
                                    </View>
                                    <View style={{flex: 3, flexDirection: 'column', alignself: 'baseline'}}>
                                        <Image source={require("../assets/upchevron.png")} style={{width: '10%', height: undefined, aspectRatio: 1, marginTop: 4}}/>
                                    </View>
                                    <View style={{flex: 2, flexDirection: 'column'}}>
                                        <Text style={styles.stockButtonTextRight} >${this.state.stock2Price}</Text>
                                    </View>
                                </View>
                            </Pressable>

                            {/* Stock button 3 */}
                            <Pressable
                                style={({pressed}) => [{
                                    backgroundColor: pressed ? 'blue' : 'white',},
                                    styles.stockButton
                                ]}
                                onPress={() => Alert.alert('Button Pressed!')}>

                                <View style={{flexDirection: 'row', width: '85%'}}>
                                    <View style={{flex: 1.1, flexDirection: 'column', alignself: 'baseline'}}>
                                        <Text style={styles.stockButtonTextLeft} >{this.state.stock3Name}</Text>
                                    </View>
                                    <View style={{flex: 3, flexDirection: 'column', alignself: 'baseline'}}>
                                        <Image source={require("../assets/downchevron.png")} style={{width: '10%', height: undefined, aspectRatio: 1, marginTop: 4}}/>
                                    </View>
                                    <View style={{flex: 2, flexDirection: 'column'}}>
                                        <Text style={styles.stockButtonTextRight} >${this.state.stock3Price}</Text>
                                    </View>
                                </View>
                            </Pressable>

                            {/* Stock button 4 */}
                            <Pressable
                                style={({pressed}) => [{
                                    backgroundColor: pressed ? 'blue' : 'white',},
                                    styles.stockButton
                                ]}
                                onPress={() => Alert.alert('Button Pressed!')}>

                                <View style={{flexDirection: 'row', width: '85%'}}>
                                    <View style={{flex: 1.1, flexDirection: 'column', alignself: 'baseline'}}>
                                        <Text style={styles.stockButtonTextLeft} >{this.state.stock4Name}</Text>
                                    </View>
                                    <View style={{flex: 3, flexDirection: 'column', alignself: 'baseline'}}>
                                        <Image source={require("../assets/downchevron.png")} style={{width: '10%', height: undefined, aspectRatio: 1, marginTop: 4}}/>
                                    </View>
                                    <View style={{flex: 2, flexDirection: 'column'}}>
                                        <Text style={styles.stockButtonTextRight} >${this.state.stock4Price}</Text>
                                    </View>
                                </View>
                            </Pressable>

                            
                        </View>
                    </ScrollView>
                </ImageBackground>

                <StatusBar style="auto" />
            </View>
        );
    }
}

export default Portfolio;
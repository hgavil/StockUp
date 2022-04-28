import {ImageBackground, Text, View, ScrollView, Image, Pressable} from "react-native";
import React, {useState, useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import styles from "../styles/styles";

function Portfolio(props) {

    const [portfolioTotalBalance, setPortfolioTotalBalance] = useState(877.07);
    const [stock1Name, setStock1Name] = useState('AAPL');
    const [stock1Balance, setStock1Balance] = useState(156.57);
    const [stock1Ticker, setStock1Ticker] = useState("DOWN");
    const [stock2Name, setStock2Name] = useState('BBAI');
    const [stock2Balance, setStock2Balance] = useState(470.47);
    const [stock2Ticker, setStock2Ticker] = useState("UP");
    const [stock3Name, setStock3Name] = useState('JBLU');
    const [stock3Balance, setStock3Balance] = useState(122.33);
    const [stock3Ticker, setStock3Ticker] = useState("DOWN");
    const [stock4Name, setStock4Name] = useState('RIVN');
    const [stock4Balance, setStock4Balance] = useState(109.21);
    const [stock4Ticker, setStock4Ticker] = useState("UP");

    return (
        <View style={styles.backdrop}>
            <ImageBackground source={require('../assets/bgimage.png')} style={styles.image}>
                <ScrollView contentContainerStyle={styles.container3}>
                    <Text style={styles.titleText}>Overview</Text>
                    <View style={styles.horizontalLine}/>
                    <Image source={require("../assets/chart.png")} style={{width: '100%', height: undefined, aspectRatio: 1.936507936507937}}/>
                    <Text style={{fontSize: 14, textAlign: 'center', marginTop: 10}} >Total Balance</Text>
                    <Text style={{fontSize: 26, textAlign: 'center', fontWeight: '500'}} >${portfolioTotalBalance}</Text>
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
                                backgroundColor: pressed ? 'lightgray' : 'white',},
                                styles.stockButton
                            ]}
                            onPress={() => props.navigation.navigate('Stocks', {stockName: stock1Name, stockBalance: stock1Balance, stockDirection: stock1Ticker, value: 156.57, shares: 1, marketCap: 2.555, marketCapScale: 'T', change: 0.15, volume: 87.51, volumeScale: 'M', avgVolume: 87.69, avgVolumeScale: 'M'})}>

                            <View style={{flexDirection: 'row', width: '85%'}}>
                                <View style={{flex: 1.1, flexDirection: 'column', alignself: 'baseline'}}>
                                    <Text style={styles.stockButtonTextLeft} >{stock1Name}</Text>
                                </View>
                                <View style={{flex: 3, flexDirection: 'column', alignself: 'baseline'}}>
                                    <Image source={require("../assets/downchevron.png")} style={{width: '10%', height: undefined, aspectRatio: 1, marginTop: 4}}/>
                                </View>
                                <View style={{flex: 2, flexDirection: 'column'}}>
                                    <Text style={styles.stockButtonTextRight} >${stock1Balance}</Text>
                                </View>
                            </View>
                        </Pressable>

                        {/* Stock button 2 */}
                        <Pressable
                            style={({pressed}) => [{
                                backgroundColor: pressed ? 'lightgray' : 'white',},
                                styles.stockButton
                            ]}
                            onPress={() => props.navigation.navigate('Stocks', {stockName: stock2Name, stockBalance: stock2Balance, stockDirection: stock2Ticker, value: 10.60, shares: 44.38, marketCap: 1.437, marketCapScale: 'B', change: 6.43, volume: 205.15, volumeScale: 'K', avgVolume: 860.91, avgVolumeScale: 'K'})}>

                            <View style={{flexDirection: 'row', width: '85%'}}>
                                <View style={{flex: 1.1, flexDirection: 'column', alignself: 'baseline'}}>
                                    <Text style={styles.stockButtonTextLeft} >{stock2Name}</Text>
                                </View>
                                <View style={{flex: 3, flexDirection: 'column', alignself: 'baseline'}}>
                                    <Image source={require("../assets/upchevron.png")} style={{width: '10%', height: undefined, aspectRatio: 1, marginTop: 4}}/>
                                </View>
                                <View style={{flex: 2, flexDirection: 'column'}}>
                                    <Text style={styles.stockButtonTextRight} >${stock2Balance}</Text>
                                </View>
                            </View>
                        </Pressable>

                        {/* Stock button 3 */}
                        <Pressable
                            style={({pressed}) => [{
                                backgroundColor: pressed ? 'lightgray' : 'white',},
                                styles.stockButton
                            ]}
                            onPress={() => props.navigation.navigate('Stocks', {stockName: stock3Name, stockBalance: stock3Balance, stockDirection: stock3Ticker, value: 11.23, shares: 10.89, marketCap: 3.602, marketCapScale: 'B', change: 2.94, volume: 15.99, volumeScale: 'M', avgVolume: 10.50, avgVolumeScale: 'M'})}>
                            <View style={{flexDirection: 'row', width: '85%'}}>
                                <View style={{flex: 1.1, flexDirection: 'column', alignself: 'baseline'}}>
                                    <Text style={styles.stockButtonTextLeft} >{stock3Name}</Text>
                                </View>
                                <View style={{flex: 3, flexDirection: 'column', alignself: 'baseline'}}>
                                    <Image source={require("../assets/downchevron.png")} style={{width: '10%', height: undefined, aspectRatio: 1, marginTop: 4}}/>
                                </View>
                                <View style={{flex: 2, flexDirection: 'column'}}>
                                    <Text style={styles.stockButtonTextRight} >${stock3Balance}</Text>
                                </View>
                            </View>
                        </Pressable>

                        {/* Stock button 4 */}
                        <Pressable
                            style={({pressed}) => [{
                                backgroundColor: pressed ? 'lightgray' : 'white',},
                                styles.stockButton
                            ]}
                            onPress={() => props.navigation.navigate('Stocks', {stockName: stock4Name, stockBalance: stock4Balance, stockDirection: stock4Ticker, value: 31.22, shares: 3.49, marketCap: 27.58, marketCapScale: 'B', change: 1.76, volume: 15.09, volumeScale: 'M', avgVolume: 18.22, avgVolumeScale: 'M'})}>

                            <View style={{flexDirection: 'row', width: '85%'}}>
                                <View style={{flex: 1.1, flexDirection: 'column', alignself: 'baseline'}}>
                                    <Text style={styles.stockButtonTextLeft} >{stock4Name}</Text>
                                </View>
                                <View style={{flex: 3, flexDirection: 'column', alignself: 'baseline'}}>
                                    <Image source={require("../assets/upchevron.png")} style={{width: '10%', height: undefined, aspectRatio: 1, marginTop: 4}}/>
                                </View>
                                <View style={{flex: 2, flexDirection: 'column'}}>
                                    <Text style={styles.stockButtonTextRight} >${stock4Balance}</Text>
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

export default Portfolio;
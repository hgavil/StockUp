import {ImageBackground, Text, View, ScrollView, Image, Pressable} from "react-native";
import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import styles from "../styles/styles";

function Stocks(props) {

    // const [stockName, setStockName] = useState("AAPL");
    // const [stockBalance, setStockBalance] = useState(175.06);
    // const [stockDirection, setStockDirection] = useState("DOWN");
    // const [value, setValue] = useState(175.06);
    // const [shares, setShares] = useState(1);
    // const [marketCap, setMarketCap] = useState(2.857);
    // const [marketCapScale, setMarketCapScale] = useState("T");
    // const [change, setChange] = useState(1.89);
    // const [volume, setVolume] = useState(73.40);
    // const [volumeScale, setVolumeScale] = useState("M");
    // const [avgVolume, setAvgVolume] = useState(88.16);
    // const [avgVolumeScale, setAvgVolumeScale] = useState("M");

    //const {thisStockName} = props.route.params;


    /* Setting variables to their corresponding routed props sent from button clicks in Portfolio. */
    const {stockName} = props.route.params;
    const {stockBalance} = props.route.params;
    const {stockDirection} = props.route.params;
    const {value} = props.route.params;
    const {shares} = props.route.params;
    const {marketCap} = props.route.params;
    const {marketCapScale} = props.route.params;
    const {change} = props.route.params;
    const {volume} = props.route.params;
    const {volumeScale} = props.route.params;
    const {avgVolume} = props.route.params;
    const {avgVolumeScale} = props.route.params;

    return (
        
        <View style={styles.backdrop}>
            <ImageBackground source={require('../assets/bgimage.png')} style={styles.image}>
                <ScrollView contentContainerStyle={styles.container3}>
                    <Text style={styles.titleText}>{stockName}</Text>
                    <View style={styles.horizontalLine}/>
                    <Image source={require("../assets/chart.png")} style={{width: '90%', height: undefined, aspectRatio: 1.936507936507937}}/>
                    <Text style={{fontSize: 14, textAlign: 'center', marginTop: 10}} >Stock Balance</Text>
                    <Text style={{fontSize: 36, textAlign: 'center', fontWeight: '500'}} >${stockBalance}</Text>

                    {/* View container for stock information.  */}
                    <View style={{flexDirection: 'row', width: '90%', marginTop: 10}}>

                        {/* Left column - labels */}
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={{fontSize: 14, textAlign: 'left', marginBottom: 5, fontWeight: '300'}} >Information</Text>
                            <Text style={{fontSize: 20, textAlign: 'left', marginBottom: 20, fontWeight: '500'}} >Value</Text>
                            <Text style={{fontSize: 20, textAlign: 'left', marginBottom: 20, fontWeight: '500'}} >Shares</Text>
                            <Text style={{fontSize: 20, textAlign: 'left', marginBottom: 20, fontWeight: '500'}} >Market Cap</Text>
                            <Text style={{fontSize: 20, textAlign: 'left', marginBottom: 20, fontWeight: '500'}} >Change</Text>
                            <Text style={{fontSize: 20, textAlign: 'left', marginBottom: 20, fontWeight: '500'}} >Volume</Text>
                            <Text style={{fontSize: 20, textAlign: 'left', marginBottom: 20, fontWeight: '500'}} >Avg Volume</Text>
                        </View>

                        {/* Right column - data */}
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={{fontSize: 14, textAlign: 'right', marginBottom: 5, fontWeight: '300'}} ></Text>
                            <Text style={{fontSize: 20, textAlign: 'right', marginBottom: 20, fontWeight: '500'}} >${value}</Text>
                            <Text style={{fontSize: 20, textAlign: 'right', marginBottom: 20, fontWeight: '500'}} >{shares}</Text>
                            <Text style={{fontSize: 20, textAlign: 'right', marginBottom: 20, fontWeight: '500'}} >{marketCap}{marketCapScale}</Text>
                            <Text style={{fontSize: 20, textAlign: 'right', marginBottom: 20, fontWeight: '500', color: stockDirection === 'UP' ? 'green' : 'red'}} >{stockDirection === 'UP' ? '+' : '-'}{change}%</Text>
                            <Text style={{fontSize: 20, textAlign: 'right', marginBottom: 20, fontWeight: '500'}} >{volume}{volumeScale}</Text>
                            <Text style={{fontSize: 20, textAlign: 'right', marginBottom: 20, fontWeight: '500'}} >{avgVolume}{avgVolumeScale}</Text>
                        </View>
                    </View>
                    
                </ScrollView>
            </ImageBackground>

            <StatusBar style="auto" />
        </View>
    );
}

export default Stocks;
import {ImageBackground, Text, View, ScrollView, Image, Pressable} from "react-native";
import React, {useState, useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import styles from "../styles/styles";
import {useNavigation} from '@react-navigation/native'
import Dialog from "react-native-dialog";

/* Credits to mmazzarolo for the react-native-dialog functionality: https://github.com/mmazzarolo/react-native-dialog */

function Stocks({setPortfolioBalance, setS1Balance, setS2Balance, setS3Balance, setS4Balance, setS1Shares, setS2Shares, setS3Shares, setS4Shares, route}) {

    /* Setting variables to their corresponding routed props sent from the stock button clicks in Portfolio. */
    const {stockName} = route.params;
    const {stockBalance} = route.params;
    const {stockDirection} = route.params;
    const {value} = route.params;
    const {shares} = route.params;
    const {marketCap} = route.params;
    const {marketCapScale} = route.params;
    const {change} = route.params;
    const {volume} = route.params;
    const {volumeScale} = route.params;
    const {avgVolume} = route.params;
    const {avgVolumeScale} = route.params;
    const {portfolioTotalBalance} = route.params;

    /* Variables used to update the stockBalance and shares variables within the local Stock screen's information. */
    const [newStockBalance, setNewStockBalance] = useState(stockBalance);
    const [newShares, setNewShares] = useState(shares);

    /* Setting up the sell button in the header. */
    const nav = useNavigation();
    useEffect(() => {
      nav.setOptions({
        headerRight: () =>  
            <View>
                <Pressable style={({pressed}) => [{backgroundColor: pressed ? "#755FB1" : "#5E43AB",}, styles.sellStockButton]} onPress={showDialog}>
                    <View>
                        <Text style={{color:"#FFFFFF"}}>Sell</Text>
                    </View>
                </Pressable>
            </View>
        })
    });

    /* Setting up "sell" dialog box functionality. */
    const [visible, setVisible] = useState(false);
    const [sellShareAmount, setSellShareAmount] = useState(0);
    const [sellUSDAmount, setSellUSDAmount] = useState(0.00);

    const showDialog = () => {
      setVisible(true);
    };

    /* This method handles what happens when a user cancels a stock sell. */
    const handleCancel = () => {
      setVisible(false);
      setSellShareAmount(0);
      setSellUSDAmount(0.00);
    };
  
    /* This method handles what happens when a user sells stock. */
    /* ABEL: Updated handleSell method 09/03/2022. */
    const handleSell = () => {
        
        /* If the user has entered a valid number of shares to sell. */
        if(sellShareAmount > 0 && sellUSDAmount <= newStockBalance) {

            setVisible(false);

            /* This updates the local Stock screen's stockBalance and shares variables instantly. */
            setNewShares((newShares-sellShareAmount).toFixed(2));
            setNewStockBalance((newStockBalance - sellUSDAmount).toFixed(2));

            /* The following lines update values globally within the Portfolio and Stock screens. */
            if(stockName == 'AAPL') { 
                setS1Shares((shares-sellShareAmount).toFixed(2));
                setS1Balance((stockBalance - sellUSDAmount).toFixed(2));
            }
            
            if(stockName == 'BBAI') { 
                setS2Shares((shares-sellShareAmount).toFixed(2));
                setS2Balance((stockBalance - sellUSDAmount).toFixed(2));
            }
            
            if(stockName == 'JBLU') { 
                setS3Shares((shares-sellShareAmount).toFixed(2));
                setS3Balance((stockBalance - sellUSDAmount).toFixed(2));
            }
            
            if(stockName == 'RIVN') { 
                setS4Shares((shares-sellShareAmount).toFixed(2));
                setS4Balance((stockBalance - sellUSDAmount).toFixed(2));
            }

            setPortfolioBalance((portfolioTotalBalance - sellUSDAmount).toFixed(2));
            
            /* Resetting the user input. */
            setSellShareAmount(0);
            setSellUSDAmount(0.00);
        }

        else {
            //Enter error message on dialog box saying to please enter a valid number or an amount higher than 0.
        }

    };

    return (
        
        <View style={styles.backdrop}>
            <StatusBar style="auto" />
            <ImageBackground source={require('../assets/bgimage.png')} style={styles.image}>
                <ScrollView contentContainerStyle={styles.container3}>
                    <Text style={styles.titleText}>{stockName}</Text>
                    <View style={styles.horizontalLine}/>
                    <Image source={require("../assets/chart.png")} style={{width: '90%', height: undefined, aspectRatio: 1.936507936507937}}/>
                    <Text style={{fontSize: 14, textAlign: 'center', marginTop: 10}} >Stock Balance</Text>
                    <Text style={{fontSize: 36, textAlign: 'center', fontWeight: '500'}} >${newStockBalance}</Text>
                    {/* Above: stockBalance changed to newStockBalance to show changes. */}

                    {/* View container for stock information.  */}
                    <View style={{flexDirection: 'row', width: '90%', marginTop: 10}}>

                        {/* Left column - labels */}
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={{fontSize: 14, textAlign: 'left', marginBottom: 5, fontWeight: '300'}}> Information </Text>
                            <Text style={{fontSize: 20, textAlign: 'left', marginBottom: 20, fontWeight: '500'}}> Value </Text>
                            <Text style={{fontSize: 20, textAlign: 'left', marginBottom: 20, fontWeight: '500'}}> Shares </Text>
                            <Text style={{fontSize: 20, textAlign: 'left', marginBottom: 20, fontWeight: '500'}}> Market Cap </Text>
                            <Text style={{fontSize: 20, textAlign: 'left', marginBottom: 20, fontWeight: '500'}}> Change </Text>
                            <Text style={{fontSize: 20, textAlign: 'left', marginBottom: 20, fontWeight: '500'}}> Volume </Text>
                            <Text style={{fontSize: 20, textAlign: 'left', marginBottom: 20, fontWeight: '500'}}> Avg Volume </Text>
                        </View>

                        {/* Right column - data */}
                        {/* Below: shares changed to newShares to show changes. */}
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={{fontSize: 14, textAlign: 'right', marginBottom: 5, fontWeight: '300'}}> </Text>
                            <Text style={{fontSize: 20, textAlign: 'right', marginBottom: 20, fontWeight: '500'}}> ${value} </Text>
                            <Text style={{fontSize: 20, textAlign: 'right', marginBottom: 20, fontWeight: '500'}}> {newShares} </Text>
                            <Text style={{fontSize: 20, textAlign: 'right', marginBottom: 20, fontWeight: '500'}}> {marketCap}{marketCapScale} </Text>
                            <Text style={{fontSize: 20, textAlign: 'right', marginBottom: 20, fontWeight: '500', color: stockDirection === 'UP' ? 'green' : 'red'}}> {stockDirection === 'UP' ? '+' : '-'}{change}% </Text>
                            <Text style={{fontSize: 20, textAlign: 'right', marginBottom: 20, fontWeight: '500'}}> {volume}{volumeScale} </Text>
                            <Text style={{fontSize: 20, textAlign: 'right', marginBottom: 20, fontWeight: '500'}}> {avgVolume}{avgVolumeScale} </Text>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>

            <View style={styles.dialogContainer}>
                <Dialog.Container visible={visible}>
                    <Dialog.Title>Sell Stock?</Dialog.Title>
                    <Dialog.Description>
                        How many shares do you want to sell?
                    </Dialog.Description>
                    <Dialog.Description style={{fontWeight: 'bold'}}>
                        {sellShareAmount} share(s) = ${sellUSDAmount.toFixed(2)}
                    </Dialog.Description>
                    <Dialog.Input placeholder="Enter amount here..." keyboardType="numeric" onChangeText={(val) => (setSellShareAmount(val), setSellUSDAmount((val*value.toFixed(2))))}>
                    </Dialog.Input>
                    <Dialog.Button label="Cancel" onPress={handleCancel} style={{fontWeight: 'bold'}} />
                    <Dialog.Button label="Sell Stock" onPress={handleSell} />
                </Dialog.Container>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

export default Stocks;
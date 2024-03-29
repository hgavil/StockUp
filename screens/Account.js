import {FlatList, Text, View} from "react-native";
import React, {useState} from "react";
import styles from "../styles/styles";

/* ABEL: Updated text styling for direct deposits or transfers to show green. 09/03/2022 */

function Account(props) {

        const {accNum} = props.route.params;
        const {accBal} = props.route.params;

         const transactions = [
            {key: 1, date: "04/05/2022", transaction: 'STARBUCKS', amount: '$12.07', reward: '0.1 BBAI'},
            {key: 2, date: '04/05/2022', transaction: 'CHICK-FIL-A', amount: '$10.47', reward: '0.2 SAVE'},
            {key: 3, date: '04/05/2022', transaction: 'ALLY AUTO', amount: '$122.34', reward: '0.4 JBLU'},
            {key: 4, date: '04/05/2022', transaction: 'XSPORT', amount: '$35.99', reward: '0.1 RIVN'},
            {key: 5, date: '04/04/2022', transaction: '7-ELEVEN', amount: '$2.49', reward: '0.1 CLSN'},
            {key: 6, date: '04/04/2022', transaction: 'SHELL GAS', amount: '$72.63', reward: '0.1 AAPL'},
            {key: 7, date: '04/04/2022', transaction: 'STARBUCKS', amount: '$12.07', reward: '0.1 BBAI'},
            {key: 8, date: '04/03/2022', transaction: 'COMED UTIL', amount: '$37.20', reward: '0.2 CLSN'},
            {key: 9, date: '04/03/2022', transaction: 'STARBUCKS', amount: '$12.07', reward: '0.1 BBAI'},
            {key: 10, date: '04/02/2022', transaction: 'DIRECT DEPOSIT', amount: '+$589.13', reward: '-'},
            {key: 11, date: '04/02/2022', transaction: 'STARBUCKS', amount: '$12.07', reward: '0.1 BBAI'},
            {key: 12, date: '04/02/2022', transaction: 'CHICK-FIL-A', amount: '$10.47', reward: '0.2 SAVE'},
            {key: 13, date: '04/01/2022', transaction: 'ALLY AUTO', amount: '$122.34', reward: '0.4 JBLU'},
            {key: 14, date: '04/01/2022', transaction: 'XSPORT', amount: '$35.99', reward: '0.1 RIVN'},
            {key: 15, date: '03/31/2022', transaction: '7-ELEVEN', amount: '$2.49', reward: '0.1 CLSN'},
            {key: 16, date: '03/31/2022', transaction: 'SHELL GAS', amount: '$72.63', reward: '0.1 AAPL'},
        ]

        if(accNum === '...0193') {
            return (
                <View style={styles.accountContainer}>
                    <Text style={{fontSize: 20, textAlign:'center', paddingVertical: 20}}>Total Balance for {accNum}</Text>
                    <Text style={{fontSize: 50, textAlign:'center'}}>${accBal}</Text>
                    <Text style={{fontSize: 20, textAlign:'center', paddingTop: 20, paddingBottom:10}}>Transaction History</Text>
                    <View style={{backgroundColor: '#5E43AB', flexDirection: 'row', justifyContent: 'space-between', padding: 5}}>
                        <View style={{flex: 1, flexDirection: 'column', alignself: 'baseline', alignItems: 'center'}}>
                            <Text style={styles.transactionTableHeader}> Date </Text>
                        </View>
                        <View style={{flex: 1.6, flexDirection: 'column', alignself: 'baseline', alignItems: 'center'}}>
                            <Text style={styles.transactionTableHeader}> Transaction </Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'column', alignself: 'baseline', alignItems: 'center'}}>
                            <Text style={styles.transactionTableHeader}> Amount </Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'column', alignself: 'baseline', alignItems: 'center'}}>
                            <Text style={styles.transactionTableHeader}> Reward </Text>
                        </View>
                    </View>
                    <FlatList
                        data={transactions}
                        renderItem={({item}) =>
                            <View>
                                <View style={{backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5}}>
                                    <View style={{ flex: 1, flexDirection: 'column', alignself: 'baseline', alignItems: "center", paddingVertical: 5}}>
                                        <Text style={styles.transactionItem}> {item.date} </Text>
                                    </View>
                                    <View style={{ flex: 1.6, flexDirection: 'column', alignself: 'baseline', alignItems: "center",  paddingVertical: 5}}>
                                        <Text style={styles.transactionItem}>{item.transaction} </Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'column', alignself: 'baseline', alignItems: "center", paddingVertical: 5}}>
                                        <Text style={(item.transaction == 'DIRECT DEPOSIT' || item.transaction == 'TRANSFER') ? styles.transactionItemGreen : styles.transactionItem}> {item.amount} </Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'column', alignself: 'baseline', alignItems: "center", paddingVertical: 5}}>
                                        <Text style={styles.transactionItem}> {item.reward} </Text>
                                    </View>
                                </View>
                            </View>
                        }
                    />
                </View>
            );
                    
        }

        return (
            <View style={styles.accountContainer}>
                <Text style={{fontSize: 20, textAlign:'center', paddingVertical: 20}}>Total Balance for {accNum}</Text>
                <Text style={{fontSize: 50, textAlign:'center'}}>${accBal}</Text>
                <Text style={{fontSize: 20, textAlign:'center', paddingTop: 20, paddingBottom:10}}>Transaction History</Text>
                <View style={{backgroundColor: '#5E43AB', flexDirection: 'row', justifyContent: 'space-between', padding: 5}}>
                    <View style={{ flex: 1, flexDirection: 'column', alignself: 'baseline', alignItems: 'center'}}>
                        <Text style={styles.transactionTableHeader}> Date </Text>
                    </View>
                    <View style={{ flex: 1.6, flexDirection: 'column', alignself: 'baseline', alignItems: 'center'}}>
                        <Text style={styles.transactionTableHeader}> Transaction </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', alignself: 'baseline', alignItems: 'center'}}>
                        <Text style={styles.transactionTableHeader}> Amount </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', alignself: 'baseline', alignItems: 'center'}}>
                        <Text style={styles.transactionTableHeader}> Reward </Text>
                    </View>
                </View>

                <View style={{backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5}}>
                    <View style={{ flex: 1, flexDirection: 'column', alignself: 'baseline', alignItems: "center", paddingVertical: 5}}>
                        <Text style={styles.transactionItem}> 04/28/2022 </Text>
                    </View>
                    <View style={{ flex: 1.6, flexDirection: 'column', alignself: 'baseline', alignItems: "center",  paddingVertical: 5}}>
                        <Text style={styles.transactionItem}> TRANSFER </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', alignself: 'baseline', alignItems: "center", paddingVertical: 5}}>
                        <Text style={styles.transactionItemGreen}> +$1422.01 </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', alignself: 'baseline', alignItems: "center", paddingVertical: 5}}>
                        <Text style={styles.transactionItem}> - </Text>
                    </View>
                </View>
                
            </View>
        );


}

export default Account;
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        flex: 1,
        justifyContent: "center",
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    icon: {
        margin: 5
    },
    inputSimpleBorder: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        fontSize: 20,
    },
    container: {
        backgroundColor: "#DFDBED",
        flexGrow: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        //justifyContent: 'center',
        marginTop: 10,
    },
    container2: {
        backgroundColor:"#DFDBED",
        //justifyContent: 'flex-start',
        flex:1,
        width: '100%',
    },
    container3: {
        backgroundColor: "#DFDBED",
        flexGrow: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 10,
        paddingBottom: 10,
        // paddingHorizontal: 10
    },
    accountContainer: {
        flex: 1,
    },

    button: {
        width: '100%',
        backgroundColor: '#FFFAF0',
        borderRadius: 4,
        margin: 10,
        alignItems: 'center'
    },
    titleText: {
        fontSize: 40,
        margin: 10,
        textAlign: "center",
        paddingTop: 10,
        paddingBottom: 10
    },
    subjectText: {
        fontSize:18,
        margin: 10
    },
    item: {
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: 'center',
    },
    horizontalLine: {
        width: '70%',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingTop: 5,
        paddingBottom: 5
    },
    logo: {
        fontSize:50,
        color:'#FFFFFF',
        alignSelf: 'center'
    },
    buttoncont:
    {
        width:100,
        alignSelf:'center',
        marginTop: 10,
    },
    loginBut: {
        borderRadius: 8,
        padding: 6,
        height: 40,
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowOpacity: 0.8,
        shadowColor: 'black',
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 2},
        margin: 5
    },
    inputSimpleBorder: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: '#DDDDDD',
        padding: 10,
        fontSize: 20
    },

    transactionItem: {
        fontSize:16
    },
    transactionItemGreen: {
        fontSize:16,
        color: 'green'
    },
    transactionTableHeader: {
        fontSize:16,
        color:'white'
    },

    stockButton: {
        borderRadius: 8,
        padding: 6,
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowOpacity: 0.4,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: {width: -2, height: 2},
        margin: 5
      },

      stockButtonTextLeft: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'left',
      },

      stockButtonTextRight: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'right',
      },

      sellStockButton: {
        borderRadius: 8,
        padding: 6,
        height: 30,
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        marginRight: 20,
        elevation: 5,
        shadowOpacity: 0.2,
        shadowColor: 'black',
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 2},
    },


      accButton: {
          borderRadius: 8,
          padding: 6,
          height: 80,
          width: '100%',
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
          elevation: 5,
          shadowOpacity: 0.4,
          shadowColor: 'black',
          shadowRadius: 5,
          shadowOffset: {width: -2, height: 2},
          margin: 5
        },

        accButtonTextLeft: {
          fontSize: 16,
          color: 'black',
          fontWeight: 'bold',
          textAlign: 'left'
        },

        accButtonTextRight: {
          fontSize: 16,
          color: 'black',
          fontWeight: 'bold',
          textAlign: 'right'
        },

        dialogContainer: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
          },

});

export default styles;

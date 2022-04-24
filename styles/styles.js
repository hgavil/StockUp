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
    icon: {
        margin: 5
    },
    container: {
        backgroundColor: "#DFDBED",
        flex: 1,
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
    button: {
        width: '100%',
        backgroundColor: '#FFFAF0',
        borderRadius: 4,
        margin: 10,
        alignItems: 'center'
    },
    titleText: {
        fontSize: 30,
        margin: 10,
        textAlign: "center",
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
    }

});

export default styles;

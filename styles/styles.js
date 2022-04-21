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
    container: {
        backgroundColor: "#DFDBED",
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        //justifyContent: 'center',
        marginTop: 30,
    },
    titleText: {
        fontSize: 30,
        margin: 50,
        textAlign: "center",
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

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
        width: '100%'
    },
    container: {
        backgroundColor: "white",
        flex: 0.9,
        borderRadius: 20,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }

});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    middlecontainer: {
        flex: 1,
        marginHorizontal: 10
    },
    title: {
        fontSize: 18
    },
    type: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5
    },
    time: {
        color: '#5d5d5d',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5
    }
});
export default styles;
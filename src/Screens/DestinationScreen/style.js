import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10
    },
    container: {
        width: '100%',
    },
    textInput: {
        backgroundColor: '#eee',
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 0,
        height: 40,
        paddingLeft: 10,
        elevation:5

    },
    listView: {
        position: 'absolute',
        top: 120
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    iconContainer: {
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius: 50,
        marginRight: 15,
    },
    locationText: {
        color: '#000',
    }
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        padding: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#e7e7e7',
    },
    inputText: {
        fontSize: 18,
        fontWeight: '600',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 100,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 50,
    },
    savedPlace: {
        marginVertical:20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    }
});

export default styles;
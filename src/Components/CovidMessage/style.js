import { Dimensions, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1065e9',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 15,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom:10
    },
    text: {
        color: '#fff',
        fontSize: 14,
        marginBottom:10,
        lineHeight:25,
        width:'90%'
    },
    flex:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10
    },
    rideNow: {
        color: '#fff',
        fontSize: 14,
 
    }
});


export default styles;
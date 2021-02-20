import React from 'react';
import { View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const HomeSearch = () => {

    const navigation = useNavigation();

    const goToSearch = ()=>{
        navigation.navigate('DestinationSearch')
    }
    return (
        <View style={styles.mainContainer}>
            {/* Input Box */}
            <Pressable style={styles.inputContainer} onPress={goToSearch}>
                <Text style={styles.inputText}>Enter pick-up point</Text>
                <View style={styles.timeContainer}>
                    <AntDesign name="clockcircle" size={18} color={"#000"} />
                    <Text>Now</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={18} color={"#000"} />
                </View>
            </Pressable>
            {/* saved place */}
            <View style={styles.savedPlace}>
                <View style={{alignItems:'center',flexDirection:'row'}}>
                    <Entypo name="star"
                        size={18}
                        style={{
                            backgroundColor: '#e7e7e7',
                            padding: 8,
                            borderRadius: 50,
                            marginRight: 10,
                            marginLeft: 5
                        }} />
                    <Text style={styles.inputText}>Choose a saved place</Text>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={16} color={"#c1c1c1"} />
            </View>
        </View>
    );
}

export default HomeSearch;

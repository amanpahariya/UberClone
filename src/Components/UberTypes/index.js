import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import UberTypesRow from '../UberTypesRow';
import typeData from "../../assets/data/types";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const UberTypes = () => {
    const confirm = () => {
        console.warn('confirm')
    }
    return (
        <View>
            <View>
                <ScrollView style={{ marginBottom: 50 }}>
                    {typeData.map(type =>
                        <UberTypesRow type={type} key={type.id} />)
                    }
                </ScrollView>
            </View>
            <Pressable onPress={confirm}
                style={{
                    backgroundColor: 'black',
                    padding: 10,
                    position: 'absolute',
                    bottom: 20,
                    alignSelf: 'center',
                    width: '90%',
                    alignItems: 'center',
                    borderRadius: 10
                }}>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold'
                }}>
                    Confirm Uber
                </Text>
            </Pressable>
        </View>
    );
}

export default UberTypes;

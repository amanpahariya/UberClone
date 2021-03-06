import React, { useEffect,useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { getUser } from '../../graphql/queries'

import { API, Auth, graphqlOperation } from 'aws-amplify';


function CustomDrawer(props) {

    const [username, setusername] = useState('');
    useEffect(() => {
        const fetchuser = async () => {
            try {
                const userInfo = await Auth.currentAuthenticatedUser();
                const response = await API.graphql(
                    graphqlOperation(
                        getUser, {
                        id: userInfo.attributes.sub,
                    }
                    )
                )
                setusername(response.data.getUser.username)
            } catch (e) {
                console.log(e);
            }
        }
        fetchuser();
    }, []);


    return (
        <SafeAreaProvider {...props} >
            <View style={{ backgroundColor: 'black', padding: 15 }}>

                {/* user row */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 20
                }}>
                    <View style={{
                        backgroundColor: "#fff",
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        marginRight: 10
                    }} />
                    <View>
                        <Text style={{ color: '#fff', fontSize: 24 }}>{username}</Text>
                        <Text style={{ color: '#fff' }}>5.00 *</Text>
                    </View>
                </View>

                {/* Messages row */}
                <View style={{
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    borderColor: "#919191",
                    paddingVertical: 5,
                    marginVertical: 10
                }}>
                    <Pressable onPress={() => { console.warn("Message"); }}>
                        <Text style={{ color: '#dddddd', paddingVertical: 5 }}>
                            Messages
                    </Text>
                    </Pressable>
                </View>
                {/* Do more */}
                <Pressable onPress={() => { console.warn("Do more with your account"); }}>
                    <Text style={{ color: '#dddddd', paddingVertical: 5 }}>
                        Do more with your account
                    </Text>
                </Pressable>

                {/* Make money */}
                <Pressable onPress={() => { console.warn("Make Money Driving"); }}>
                    <Text style={{ color: '#fff', paddingVertical: 5 }}>
                        Make Money driving
                    </Text>
                </Pressable>
            </View>

            <DrawerContentScrollView>
                <DrawerItemList {...props} />
                <DrawerItem label="Logout" onPress={() => { Auth.signOut() }} />
            </DrawerContentScrollView>

        </SafeAreaProvider>
    );
}

export default CustomDrawer;

import { ActivityIndicator, Alert, Image, PermissionsAndroid, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { MyHeader } from '../../components';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { MYAPP, apiURL } from '../../utils/localStorage';
import ModelView from 'react-native-gl-model-view';
import { Animated, Easing } from 'react-native';
import { RNCamera } from 'react-native-camera'
import RenderHtml from 'react-native-render-html';
import axios from 'axios';


export default function MenuAR({ navigation, route }) {



    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Cool Photo App Camera Permission",
                    message:
                        "Cool Photo App needs access to your camera " +
                        "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the camera");
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };
    useEffect(() => {
        requestCameraPermission();
        axios.post(apiURL + 'get_latihan', {
            nama: route.params.latihan
        }).then(res => {
            console.log(res.data);

            if (res.data.length > 0) {
                setData(res.data);
                setTimeout(() => {
                    setOpen(true);
                }, 1000)
            } else {
                Alert.alert(MYAPP, 'Data AR latihan tidak ditemukan !');
                navigation.goBack()
            }

        })
    }, []);

    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);

    return (
        <View style={{
            flex: 1,
        }}>
            <Text style={{
                padding: 10,
                fontFamily: fonts.secondary[600],
                fontSize: 25,
                textAlign: 'center',
                color: colors.white,
                backgroundColor: colors.primary
            }}>{route.params.latihan}</Text>

            {!open && <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>}

            {open && <RNCamera

                style={{
                    flex: 1,
                }}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}

            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image style={{
                        width: windowWidth,
                        height: windowWidth,
                        resizeMode: 'contain'
                    }} source={{
                        uri: data[0].image
                    }} />
                </View>
                <View style={{
                    flex: 0.3,
                    padding: 10,
                    backgroundColor: colors.white,
                    opacity: 0.6
                }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <RenderHtml contentWidth={'100%'} source={{
                            html: data[0].penjelasan
                        }} />
                    </ScrollView>
                </View>
            </RNCamera>}

        </View>
    )
}

const styles = StyleSheet.create({})

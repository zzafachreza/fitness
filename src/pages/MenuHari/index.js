import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { MyHeader } from '../../components';
import { colors, fonts, windowHeight } from '../../utils';
import { MYAPP } from '../../utils/localStorage';

export default function MenuHari({ navigation, route }) {

    const latihan = route.params.latihan;
    const week = route.params.week;
    const [day, setDay] = useState({
        1: {
            label: 'Hari 1',
            sudah: false
        },
        2: {
            label: 'Hari 2',
            sudah: false
        },
        3: {
            label: 'Hari 3',
            sudah: false
        },
        4: {
            label: 'Hari 4',
            sudah: false
        },
        5: {
            label: 'Hari 5',
            sudah: false
        },
        6: {
            label: 'Hari 6',
            sudah: false
        },
        7: {
            label: 'Hari 7',
            sudah: false
        },
    })

    useEffect(() => {

    }, [])

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <MyHeader />
            <View style={{
                backgroundColor: colors.border,
                padding: 10,
            }}>
                <Text style={{
                    fontFamily: fonts.secondary[800],
                    fontSize: 22,
                    textAlign: 'center',
                    color: colors.primary
                }}>Jadwal Latiha kamu</Text>
                <Text style={{
                    fontFamily: fonts.secondary[800],
                    fontSize: 22,
                    textAlign: 'center',
                    color: colors.primary
                }}>Di {week}</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{
                flex: 1
            }}>

                {Object.keys(day).map((i, index) => {
                    return (
                        <TouchableOpacity onPress={() => {

                            navigation.navigate('MenuHariDetail', {
                                latihan: latihan,
                                week: week,
                                day: day[i].label,
                                tipe: index % 2 == 1 ? 'libur' : 'latihan'

                            })


                        }} style={{
                            backgroundColor: index % 2 == 1 ? colors.danger : colors.primary,
                            height: windowHeight / 12,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: 20,
                            borderRadius: 10,
                            marginVertical: 10,
                        }}>
                            <Text style={{
                                fontFamily: fonts.secondary[800],
                                fontSize: 22,
                                textAlign: 'center',
                                color: colors.white
                            }}>{day[i].label}</Text>
                        </TouchableOpacity>
                    )
                })}

            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({})
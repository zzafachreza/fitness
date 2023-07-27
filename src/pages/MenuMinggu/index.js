import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { MyHeader } from '../../components';
import { colors, fonts, windowHeight } from '../../utils';

export default function MenuMinggu({ navigation, route }) {

    const latihan = route.params.latihan;
    const [week, setWeek] = useState({
        1: {
            label: 'Minggu 1',
            sudah: false
        },
        2: {
            label: 'Minggu 2',
            sudah: false
        },
        3: {
            label: 'Minggu 3',
            sudah: false
        },
        4: {
            label: 'Minggu 4',
            sudah: false
        },
        5: {
            label: 'Minggu 5',
            sudah: false
        },
        6: {
            label: 'Minggu 6',
            sudah: false
        },
        7: {
            label: 'Minggu 7',
            sudah: false
        },
        8: {
            label: 'Minggu 8',
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

            <ScrollView showsVerticalScrollIndicator={false} style={{
                flex: 1
            }}>

                {Object.keys(week).map(i => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('MenuHari', {
                            latihan: latihan,
                            week: week[i].label
                        })} style={{
                            backgroundColor: colors.secondary,
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
                            }}>{week[i].label}</Text>
                        </TouchableOpacity>
                    )
                })}

            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
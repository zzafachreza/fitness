import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { MyHeader } from '../../components';
import { colors, fonts, windowHeight } from '../../utils';
import { MYAPP } from '../../utils/localStorage';

export default function MenuHariDetail({ navigation, route }) {

    const latihan = route.params.latihan;
    const week = route.params.week;
    const day = route.params.day;


    useEffect(() => {

    }, [])

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <MyHeader />
            {route.params.tipe == 'latihan' &&

                <>
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
                        }}>Di {week} dan di {day}</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} style={{
                        flex: 1
                    }}>

                        {latihan.map((i, index) => {
                            return (
                                <TouchableOpacity onPress={() => {

                                    navigation.navigate('MenuAR', {
                                        latihan: latihan,
                                        week: week,
                                        day: day,
                                        latihan: i.label

                                    })


                                }} style={{
                                    backgroundColor: colors.primary,
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
                                    }}>{i.label}</Text>
                                </TouchableOpacity>
                            )
                        })}

                    </ScrollView>
                </>
            }

            {route.params.tipe == 'libur' &&
                <View style={{
                    flex: 1,
                    backgroundColor: colors.danger,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        color: colors.white,
                        fontSize: 40,
                        textAlign: 'center'
                    }}>HARI INI KAMU ISTIRAHAT SILAHKAN LANJUT LATIHAN BESOK</Text>
                </View>}

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({})
import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyGap, MyHeader, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import 'moment/locale/id';
import { color } from 'react-native-elements/dist/helpers';
import MyCarouser from '../../components/MyCarouser';

export default function Home({ navigation, route }) {

  const [user, setUser] = useState({});
  const isFocus = useIsFocused();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [riwayat_cedera, setRiwayat_cedera] = useState([]);

  const wanita_GOAL1 = [
    {
      label: 'Squats',
      cedera: 'kaki,panggul,punggung'
    },
    {
      label: 'Deadlifts',
      cedera: 'punggung,paha'
    },
    {
      label: 'Lunges',
      cedera: 'kaki,punggung'
    },
    {
      label: 'Bench press',
      cedera: 'dada,bahu,tangan'
    },
    {
      label: 'Pull up',
      cedera: 'punggnug,bahu'
    },
    {
      label: 'Shoulder press',
      cedera: 'bahu'
    },
    {
      label: 'Dips',
      cedera: 'tangan, dada'
    },
    {
      label: 'Bent over rows',
      cedera: 'punggung'
    },
    {
      label: 'Leg press',
      cedera: 'kaki'
    },
    {
      label: 'Bicep curls',
      cedera: 'tangan'
    }
  ]

  const pria_GOAL1 = [
    {
      label: 'Squats',
      cedera: ''
    },
    {
      label: 'Deadlifts',
      cedera: ''
    },
    {
      label: 'Bench press',
      cedera: ''
    },
    {
      label: 'Pull up',
      cedera: ''
    },
    {
      label: 'Shoulder press',
      cedera: ''
    },
    {
      label: 'Dips',
      cedera: ''
    },
    {
      label: 'Bent over rows',
      cedera: ''
    },
    {
      label: 'Leg press',
      cedera: ''
    },
    {
      label: 'Bicep curls',
      cedera: ''
    },
    {
      label: 'Push up',
      cedera: 'dada,tricep,bahu'
    }
  ]


  const wanita_GOAL2 = [
    {
      label: 'Squats',
      cedera: ''
    },
    {
      label: 'Deadlifts',
      cedera: ''
    },
    {
      label: 'Lunges',
      cedera: 'punggung,kaki'
    },
    {
      label: 'Leg press',
      cedera: 'kaki'
    },
    {
      label: 'Push up',
      cedera: ''
    },
    {
      label: 'Mountain climbers',
      cedera: 'perut,kaki,lengan'
    },
    {
      label: 'Plank',
      cedera: 'perut,punggung'
    },
    {
      label: 'Keetle swings',
      cedera: 'punggung,paha,pinggul'
    },
    {
      label: 'Cycling',
      cedera: 'kaki'
    },

  ]
  const pria_GOAL2 = [
    {
      label: 'Squats',
      cedera: ''
    },
    {
      label: 'Deadlifts',
      cedera: ''
    },
    {
      label: 'Jumping jacks',
      cedera: 'kaki,tangan'
    },
    {
      label: 'Lunges',
      cedera: 'punggung,kaki'
    },
    {
      label: 'Leg press',
      cedera: 'kaki'
    },
    {
      label: 'Push up',
      cedera: ''
    },
    {
      label: 'Mountain climbers',
      cedera: 'perut,kaki,lengan'
    },
    {
      label: 'Bent over rows',
      cedera: 'punggung'
    },
    {
      label: 'Plank',
      cedera: 'perut,punggung'
    },
    {
      label: 'Keetle swings',
      cedera: 'punggung,paha,pinggul'
    },

  ]


  const wanita_GOAL3 = [
    {
      label: 'Squats',
      cedera: ''
    },
    {
      label: 'Deadlifts',
      cedera: ''
    },
    {
      label: 'Lunges',
      cedera: ''
    },
    {
      label: 'Push up',
      cedera: ''
    },
    {
      label: 'Pull up',
      cedera: ''
    },
    {
      label: 'Plank',
      cedera: ''
    },
    {
      label: 'Step up',
      cedera: 'kaki'
    },
    {
      label: 'Russian twist',
      cedera: ''
    },
    {
      label: 'Dumbbell shoulder press',
      cedera: 'bahu'
    },
    {
      label: 'Glute bridges',
      cedera: 'panggul, punggung'
    },

  ]


  const pria_GOAL3 = [
    {
      label: 'Squats',
      cedera: ''
    },
    {
      label: 'Deadlifts',
      cedera: ''
    },
    {
      label: 'Lunges',
      cedera: ''
    },
    {
      label: 'Push up',
      cedera: ''
    },
    {
      label: 'Pull up',
      cedera: ''
    },
    {
      label: 'Plank',
      cedera: ''
    },
    {
      label: 'Bent over row',
      cedera: 'punggung,tangan'
    },
    {
      label: 'Dumbbell shoulder press',
      cedera: 'bahu'
    },
    {
      label: 'Glute bridges',
      cedera: 'panggul, punggung'
    }, {
      label: 'Chrunches',
      cedera: 'perut'
    }
  ]


  useEffect(() => {




    if (isFocus) {
      getData('user').then(u => {
        setUser(u);
        KalkulatorBMI(u.tinggi_badan, u.berat_badan)
        let ARRTMP = JSON.parse(u.riwayat_cedera);

        console.log(ARRTMP);
        setRiwayat_cedera(ARRTMP);




        let FILTERED = [];
        if (u.jenis_kelamin == 'Wanita' && u.goals == 'Menambah Otot') {
          FILTERED = wanita_GOAL1;
        } else if (u.jenis_kelamin == 'Wanita' && u.goals == 'Membugarkan Tubuh') {
          FILTERED = wanita_GOAL2;
        } else if (u.jenis_kelamin == 'Wanita' && u.goals == 'Menurunkan Berat') {
          FILTERED = wanita_GOAL3;
        } else if (u.jenis_kelamin == 'Pria' && u.goals == 'Menambah Otot') {
          FILTERED = pria_GOAL1;
        } else if (u.jenis_kelamin == 'Pria' && u.goals == 'Membugarkan Tubuh') {
          FILTERED = pria_GOAL2;
        } else if (u.jenis_kelamin == 'Pria' && u.goals == 'Menurunkan Berat') {
          FILTERED = pria_GOAL3;
        }








        let TMP = [];

        for (let i = 0; i < ARRTMP.length; i++) {
          let kunci = cedera[ARRTMP[i]].label;
          if (i > 0) {
            TMP = TMP.filter(i => i.cedera.toLowerCase().indexOf((kunci).toLowerCase()) === -1);
          } else {
            TMP = FILTERED.filter(i => i.cedera.toLowerCase().indexOf((kunci).toLowerCase()) === -1);
          }
        }


        setLatihan(TMP);




      })
    }
  }, [isFocus]);

  const [BMI, setBMI] = useState({});
  const KalkulatorBMI = (tinggi, berat) => {

    let hasil = parseFloat(berat / Math.pow(tinggi / 100, 2)).toFixed(2);
    let arr = {};
    if (hasil < 18.5) {
      arr = { 'nilai': hasil, 'index': 'Berat Badan Kurang (Underweight)' }
    } else if (hasil >= 18.5 && hasil < 24.9) {
      arr = { 'nilai': hasil, 'index': 'Berat Badan Normal (Normal Weight)' }
    } else if (hasil >= 25 && hasil < 29.9) {
      arr = { 'nilai': hasil, 'index': 'Berat Badan berlebih (Overweight)' }
    } else if (hasil >= 30) {
      arr = { 'nilai': hasil, 'index': 'Obesitas' }
    }

    setBMI(arr);


  }


  const MYKategori = ({ label, value }) => {
    return (
      <View style={{
        flexDirection: 'row',
        padding: 5,
      }}>
        <Text style={{
          flex: 0.5,
          fontFamily: fonts.secondary[600],
          fontSize: 12,
          color: colors.white
        }}>{label}</Text>
        <Text style={{
          flex: 0.05,
          fontFamily: fonts.secondary[600],
          fontSize: 12,
          color: colors.white
        }}>:</Text>
        <Text style={{
          flex: 1,
          fontFamily: fonts.secondary[600],
          fontSize: 12,
          color: colors.white
        }}>{value}</Text>
      </View>
    )
  }
  const [cedera, setCedera] = useState({
    0: {
      label: 'Punggung',
      pilih: false
    },
    1: {
      label: 'Bahu',
      pilih: false
    },
    2: {
      label: 'Kepala dan Leher',
      pilih: false
    },
    3: {
      label: 'Tangan',
      pilih: false
    },
    4: {
      label: 'Pinggul dan Panggul',
      pilih: false
    },
    5: {
      label: 'Kaki',
      pilih: false
    },
    6: {
      label: 'Dada',
      pilih: false
    },
  })

  const [latihan, setLatihan] = useState(pria_GOAL1)

  const MyLatihan = ({ label, onPress, warna = colors.secondary, text = colors.white, border = colors.secondary }) => {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={{
          flexDirection: 'row',
          padding: 20,
          marginVertical: 10,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: border,
          backgroundColor: warna,
          alignItems: 'center'
        }}>
          <Text style={{
            flex: 1,
            fontFamily: fonts.secondary[800],
            fontSize: 20,
            color: text
          }}>{label}</Text>
          <Icon type='ionicon' name='barbell-outline' color={text} />

        </View>
      </TouchableWithoutFeedback>
    )
  }





  return (

    <ImageBackground source={require('../../assets/banner.png')} style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <MyHeader />

      <ScrollView>
        <View style={{
          marginHorizontal: 5,
          borderRadius: 10,
          padding: 10,
          marginTop: 10,
          backgroundColor: colors.secondary
        }}>
          <MYKategori label="Hasil BMI" value={BMI.nilai} />
          <MYKategori label="Kategori" value={BMI.index} />
          <MYKategori label="Goals" value={user.goals} />

          <View style={{
            padding: 5,
          }}>


            <Text style={{
              fontFamily: fonts.secondary[800],
              fontSize: 13,
              color: colors.white
            }}>Riwayat Cedera</Text>


            <View style={{
              flexDirection: 'row'
            }}>
              {riwayat_cedera.length > 0 && riwayat_cedera.map((i, index) => {
                return (
                  <Text style={{
                    fontFamily: fonts.secondary[400],
                    fontSize: 12,
                    color: colors.white
                  }}>{cedera[i].label} {index < (riwayat_cedera.length - 1) ? ', ' : ''}</Text>
                )
              })}
            </View>


          </View>

        </View>

        <View style={{
          opacity: 0.9,
          marginTop: 10,
          marginHorizontal: 5,
          borderRadius: 10,

          marginTop: 5,
          overflow: 'hidden',
          backgroundColor: colors.white
        }}>
          <Text style={{
            textAlign: 'center',
            padding: 15,
            backgroundColor: colors.primary,
            fontFamily: fonts.secondary[600],
            fontSize: 16,
            color: colors.white
          }}>Jenis Latihan</Text>

          {/* jenis latihan */}

          <View style={{
            padding: 10
          }}>
            {latihan.length > 0 && latihan.map((i, index) => {
              return (
                <MyLatihan warna={index % 2 == 0 ? colors.secondary : colors.white} text={index % 2 == 0 ? colors.white : colors.secondary} border={index % 2 == 0 ? colors.white : colors.secondary} label={i.label} />
              )
            })}
          </View>

        </View>
        <MyGap jarak={20} />
      </ScrollView>
      <MyButton radius={0} title="MULAI LATIHAN" onPress={() => navigation.navigate('MenuMinggu', {
        latihan: latihan
      })} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({})
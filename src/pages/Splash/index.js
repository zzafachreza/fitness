import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { MyButton } from '../../components';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';

export default function Splash({ navigation }) {



  useEffect(() => {
    setTimeout(() => {
      getData('user').then(res => {
        if (!res) {
          navigation.replace('Login')
        } else {
          // navigation.replace('GetStarted')
          navigation.replace('Home')
        }
      })
    }, 1500)
  }, []);


  return (
    <ImageBackground source={require('../../assets/banner.png')} style={{
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    }}>


      <View style={{
        backgroundColor: colors.secondary,
        opacity: 0.8,
        padding: 20,
        borderRadius: 10,

      }}>
        <Text style={{
          fontFamily: fonts.secondary[600],
          color: colors.white,
          fontSize: 40,
          textAlign: 'center'
        }}>Trainer Fitness 8 Minggu</Text>

      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({});

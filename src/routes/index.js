import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  Account,
  AccountEdit,
  Pengaturan,
  MenuMinggu,
  MenuHari,
  MenuHariDetail,
  MenuAR,
  BMI,
  Tentang,





} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MenuMinggu"
        component={MenuMinggu}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MenuHari"
        component={MenuHari}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MenuHariDetail"
        component={MenuHariDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="BMI"
        component={BMI}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Tentang"
        component={Tentang}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="MenuAR"
        component={MenuAR}
        options={{
          headerShown: false,
        }}
      />






      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          headerTitle: 'Daftar Pengguna',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />





      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: true,
          headerTitle: 'Edit Profile',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />










      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />



      <Stack.Screen
        name="Pengaturan"
        component={Pengaturan}
        options={{
          headerShown: false,
        }}
      />





    </Stack.Navigator>
  );
}

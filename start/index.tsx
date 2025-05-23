import SignPageScreen from '@/components/pages_tabs/sign_page';
import Signup from '@/components/pages_tabs/signup';
import Login from '@/components/pages_tabs/login';
import BlockPayStep2 from '@/components/pages_tabs/identity';
import CryptoSetup from '@/components/pages_tabs/cryptosetup';
import Homepage from '@/components/pages_tabs/homepage';
import PaymentPage from '@/components/pages_tabs/qrpage';
import TransactionScreen from '@/components/pages_tabs/confirmation';
import TransferScreen from '@/components/pages_tabs/transfer'; 


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"HOME"} component={SignPageScreen} />
        <Stack.Screen name={"SIGNUP"} component={Signup} />
        <Stack.Screen name={"LOGIN"} component={Login}/>
        <Stack.Screen name={"IDENTITY"} component={BlockPayStep2}/>
        <Stack.Screen name={"CRYPTO"} component={CryptoSetup} />
        <Stack.Screen name={"ENTRY"} component={Homepage}/>
        <Stack.Screen name={"PROFILE"} component={PaymentPage}/>
      </Stack.Navigator>
    </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  }
});


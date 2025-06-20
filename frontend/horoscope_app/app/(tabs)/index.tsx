import React from 'react';
import { useRouter  } from 'expo-router';
import { Text, View, StyleSheet, Button } from 'react-native';


import {COLORS} from '@/constants/theme'


export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <Button title='Create Profile' onPress={() => {
        router.navigate('/profile_form')
      }} />
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.mainBackgroundColor,
    color: COLORS.mainColor,
    paddingTop: 20,
  },

})
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { globalStyles } from '@/global_styles/global_styles'
import {COLORS} from '@/constants/theme'

export default function Index() {
  return (
    <View style={styles.mainContainer}>
      <Text style={ styles.mainTitle }>Home Screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: globalStyles.backgroundColor,
    color: COLORS.mainColor,
    paddingTop: 20,
  },

  mainTitle: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 100,
    fontSize: 25,
    fontWeight: 'bold',
  },

  buddySpeak: {
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center',
    backgroundColor: '#fae0cd',
    borderRadius: 20,
  },

  astroBuddy: {
    resizeMode: 'contain',
    width: 400,
    height: 350,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

})
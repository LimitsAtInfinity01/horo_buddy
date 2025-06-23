import React from 'react'
import { StyleSheet, View } from 'react-native'

// API Components
import { HoroscopeAPI, SignDetails } from '@/components/fetch_horoscope'

// Theme 
import { COLORS } from '@/constants/theme'

export default function Astroloy() {
  return (
    <View style={ styles.container } >
      <HoroscopeAPI TextStyle={ styles.text } />
      <SignDetails TextStyle={ styles.text } ViewStyle={ styles.ViewStyle } />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    gap: 100,
    padding: 25,
    backgroundColor: COLORS.mainBackgroundColor
  },

  text: {
    color: COLORS.mainColor
  },

  ViewStyle: {
    flex: 1,
    gap: 10
  }

})
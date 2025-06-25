import React from 'react'
import { StyleSheet, View } from 'react-native'

// API Components
import { Horoscope, SignDetails, Compatibility, Personality, BirthChart } from '@/components/fetch_horoscope'

// Theme 
import { COLORS } from '@/constants/theme'




export default function Astroloy() {

  const person_one = 
    {
      "name": "Alice",
      "birthdate": "1992-03-22",
      "time_of_birth": "08:15:00",
      "location": ''
    }



  return (
    <View style={ styles.container } >
      <BirthChart TextStyle={styles.text} birthdate_details={person_one} />
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
  },

  image: {
    width: 100,
    height: 100,
  },

})
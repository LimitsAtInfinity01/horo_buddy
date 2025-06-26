// astrology.tsx
import React from 'react'
import { StyleSheet, View, Pressable, Text } from 'react-native'
import { useRouter } from 'expo-router'


// Theme 
import { COLORS } from '@/constants/theme'

export default function Astroloy() {
  const router = useRouter()

  return (
    <View style={ styles.mainContainer }>

      <Pressable id='sign_details' style={ styles.pressable } onPress={()=> router.push('/horoscope_sign_details')}>
        <Text style={ styles.pressableText }>Discover all the details about your sign</Text>
      </Pressable>

      <Pressable id='compability' style={ styles.pressable } onPress={()=> router.push('/horoscope_compatibility')}>
        <Text style={ styles.pressableText }>See if you are compable</Text>    
      </Pressable>

      <Pressable id='personality' style={ styles.pressable } onPress={()=> router.push('/horoscope_personality')}>
        <Text style={ styles.pressableText }>Discover your personality traits</Text>  
      </Pressable>

      <Pressable id='birth_chart' style={ styles.pressable } onPress={()=> router.push('/horoscope_birth_chart')}>
        <Text style={ styles.pressableText }>Get your birth chart</Text>  
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.mainBackgroundColor,
    gap: 25,
    paddingTop: 20,
    paddingBottom: 20,
  },

  pressable: {
    height: 100,
    width: '90%',
    borderRadius: 7,
    backgroundColor: 'white',
    color: 'black',
    padding: 10,
  },

  pressableText: {
    color: 'red'
  },

})
// astrology.tsx
import { useEffect, useState } from 'react'
import { useRouter, } from 'expo-router'
import { StyleSheet, View, Pressable, Text, } from 'react-native'


import fetch_profile_data from '@/components/fetch_profile_data'

import {Horoscope} from '@/components/fetch_horoscope'

// Theme 
import { COLORS } from '@/constants/theme'

type ProfileData = {
  zodiac_sign: string
}

export default function Astroloy() {
  const router = useRouter()
  const [profileData, setProfileData] = useState<ProfileData | null>(null)

  useEffect(() => {

    const fetch_profile = async () => {
      const data = await fetch_profile_data()
      setProfileData(data)
    }

    fetch_profile()
  }, [])
  return (
    <View style={ styles.mainContainer }>

      <View>
          {/* <Horoscope TextStyle={ styles.horoscopeText } sign={profileData ? profileData.zodiac_sign : ''} /> */}
      </View>

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

  horoscopeText: {
    color: 'white'
  }

})
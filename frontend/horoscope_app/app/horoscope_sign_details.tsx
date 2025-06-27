// horoscope_sign_details.tsx

import { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, View, Button } from 'react-native'

import { SignDetails } from '@/components/fetch_horoscope'
import fetch_profile_data from '@/components/fetch_profile_data'

type ProfileData = {
  zodiac_sign: string
}

export default function HoroscopeSignDetails() {
    const router = useRouter()
    const [profileData, setProfileData] = useState<ProfileData | null>(null)

    useEffect(() => {
      const fetch_profile = async ()=> {
        const data = await fetch_profile_data()
        setProfileData(data)
      }
      fetch_profile()
    }, [])

    
    return (
    <View>
      <Text>Goroscope Sign Details</Text>
      <SignDetails sign={profileData ? profileData.zodiac_sign : '' } />
      <Button onPress={() => router.back()} title="Go back!" />
    </View>
  )
}

const styles = StyleSheet.create({})
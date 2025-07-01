import { useEffect, useState} from 'react'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

import fetch_horoscope_data from '@/components/fetch_horoscope_data'

type PersonalityTypes = {
  name: string,
  zodiac_sign: string,
  personality: string,
  symbol: string,
  element: string,
  modality: string,
  image: string
}

export default function HoroscopePersonality() {
    const router = useRouter()
    const [personality, setPersonality] = useState<PersonalityTypes | null>(null)
    useEffect(() => {
      const fetch_personality = async () => {
        const data = await fetch_horoscope_data()
        console.log(data['personality'])
        setPersonality(data['personality'])
      }
      fetch_personality()
    }, [])

    return (
      <View >
            <Text >{ personality ? personality.name : '' }</Text>
            <Text >{ personality ? personality.zodiac_sign : '' }</Text>
            <Text >{ personality ? personality.personality : '' }</Text>
            <Text >{ personality ? personality.symbol : '' }</Text>
            <Text >{ personality ? personality.element : '' }</Text>
            <Text >{ personality ? personality.modality : '' }</Text>
            <Image
                source={{ uri: personality?.image }}
                style={{ width: 200, height: 200 }} // Ensure size
                resizeMode="cover"
            />            
            <Button onPress={() => router.back()} title="Go back!" />      
      </View>
  )
}

const styles = StyleSheet.create({})
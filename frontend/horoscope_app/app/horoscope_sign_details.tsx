// horoscope_sign_details.tsx

import { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

import fetch_horoscope_data from '@/components/fetch_horoscope_data'

type HoroscopeDetails = {
  name: string
  element: string
  symbol: string
  modality: string
  start_date: string
  end_date: string
  personality: string
  image: string
  birth_chart: {
    birthdate: string
  }
}

export default function HoroscopeSignDetails() {
    const router = useRouter()
    const [details, setDetails] = useState<HoroscopeDetails | null>(null)
    useEffect(() => {
      const fetch_sign_details = async () => {
        const data = await fetch_horoscope_data()
        const details = data['sign_details']
        console.log(details['name'])
        setDetails(details)
      }
      fetch_sign_details()
    }, [])
    return (
    <View>
      <Text>Goroscope Sign Details</Text>
     
      {details && (
        <>
          <Text>Name: {details.name}</Text>
          <Text>Symbol: {details.symbol}</Text>
          <Text>{details ? details.element : 'Loading' }</Text>
          <Text>Modality: {details.modality}</Text>
          <Text>Start Date: {details.start_date}</Text>
          <Text>End Date: {details.end_date}</Text>
          <Text>Personality: {details.personality}</Text>
          <Text>Birthdate: {details.birth_chart?.birthdate}</Text>
          <View style={{ alignItems: 'center', marginVertical: 10 }}>
            <Text>Image:</Text>
            <Image
              source={{ uri: details.image }}
              style={{ width: 100, height: 100 }}
              accessibilityLabel={`${details.name} symbol`}
            />
          </View>
        </>
      )}
      <Button onPress={() => router.back()} title="Go back!" />
    </View>
  )
}

const styles = StyleSheet.create({})
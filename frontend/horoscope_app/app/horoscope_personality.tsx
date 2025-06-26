import React from 'react'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, View, Button } from 'react-native'

import { Personality } from '@/components/fetch_horoscope'

const data = {
    name: "Jane Doe",
    birthdate: "1990-01-01",
    time_of_birth: "12:00",
}

export default function HoroscopePersonality() {

    const router = useRouter()

    return (
    <View>
      <Text>Goroscope Sign Details</Text>
      <Personality details={data} />
      <Button onPress={() => router.back()} title="Go back!" />
    </View>
  )
}

const styles = StyleSheet.create({})
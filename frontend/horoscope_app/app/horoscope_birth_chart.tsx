import React from 'react'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, View, Button } from 'react-native'

import { BirthChart } from '@/components/fetch_horoscope'

const details_birthchart = {
    name: "Jane Doe",
    birthdate: "1990-01-01",
    time_of_birth: "12:00",
    location: "New York"
}

export default function HoroscopeBirthChart() {

  const router = useRouter()

  return (
    <View>
      <Text>Birth Chart</Text>
        <BirthChart birthdate_details={details_birthchart} />
        <Button onPress={() => router.back()} title="Go back!" />
    </View>
  )
}

const styles = StyleSheet.create({})
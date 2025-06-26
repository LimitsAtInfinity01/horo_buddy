import React from 'react'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, View, Button } from 'react-native'

import { Compatibility } from '@/components/fetch_horoscope'

const person_one = {
    name: "Jane Doe",
    birthdate: "1990-01-01",
    time_of_birth: "12:00",
}

const person_two = {
    name: "John Smith",
    birthdate: "1992-02-02",
    time_of_birth: "14:00",
}

export default function HoroscopeCompability() {

    const router = useRouter()

    return (
    <View>
      <Text>Goroscope Sign Details</Text>
      <Text>{person_one.name}</Text>
      <Text>{person_one.birthdate}</Text>
      <Text>{person_one.time_of_birth}</Text>
      <Text>{person_two.name}</Text>
      <Text>{person_two.birthdate}</Text>
      <Text>{person_two.time_of_birth}</Text>
      <Compatibility person_one={person_one} person_two={person_two} />
      <Button onPress={() => router.back()} title="Go back!" />
    </View>
  )
}

const styles = StyleSheet.create({})
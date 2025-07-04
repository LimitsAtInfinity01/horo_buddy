import React from 'react'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, View, Button } from 'react-native'

import { Compatibility } from '@/components/calculate_compability'

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

// TODO: write a form to get the data of the persons to
//       calculate their compability

export default function HoroscopeCompability() {

    const router = useRouter()

    // if form filled return the details
    // else fill the form.
    


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
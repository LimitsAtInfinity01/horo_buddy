import {useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, View, Button } from 'react-native'

import { BirthChart } from '@/components/calculate_compability'
import fetch_horoscope_data from '@/components/fetch_horoscope_data'

type Chart = {



}

export default function HoroscopeBirthChart() {
  const router = useRouter()
  const [birth_data, setBirth_data] = useState<any>(null)

  useEffect(()=> {

    const fetch_birth_chart = async () => {

      const data = await fetch_horoscope_data()
      console.log(data['birth_chart'])
      setBirth_data(data['birth_chart'])
    }
    fetch_birth_chart()
  })

  return (
    <View >
      <Text >{ birth_data ? birth_data.name : '' }</Text>
      <Text >{ birth_data ? birth_data.birthdate : '' }</Text>
      <Text >{ birth_data ? birth_data.time_of_birth : '' }</Text>

      {/* Sun, Moon, Mercury, Venus, Mars */}
      {birth_data?.sun && (
        <Text>
          Sun: {birth_data.sun.sign} {birth_data.sun.emoji} ({birth_data.sun.element}, {birth_data.sun.quality}) in {birth_data.sun.house}
        </Text>
      )}
      {birth_data?.moon && (
        <Text>
          Moon: {birth_data.moon.sign} {birth_data.moon.emoji} ({birth_data.moon.element}, {birth_data.moon.quality}) in {birth_data.moon.house}
        </Text>
      )}
      {birth_data?.mercury && (
        <Text>
          Mercury: {birth_data.mercury.sign} {birth_data.mercury.emoji} ({birth_data.mercury.element}, {birth_data.mercury.quality}) in {birth_data.mercury.house}
        </Text>
      )}
      {birth_data?.venus && (
        <Text>
          Venus: {birth_data.venus.sign} {birth_data.venus.emoji} ({birth_data.venus.element}, {birth_data.venus.quality}) in {birth_data.venus.house}
        </Text>
      )}
      {birth_data?.mars && (
        <Text>
          Mars: {birth_data.mars.sign} {birth_data.mars.emoji} ({birth_data.mars.element}, {birth_data.mars.quality}) in {birth_data.mars.house}
        </Text>
      )}

      {/* Houses */}
      <Text>Houses:</Text>
      {birth_data?.houses && Array.isArray(birth_data.houses) && birth_data.houses.map((house: any, idx: number) => (
        <Text key={idx}>
          {house.name.replace('_', ' ')}: {house.sign} {house.emoji} ({house.element}, {house.quality}) at {house.position.toFixed(2)}°
        </Text>
      ))}

      <Button onPress={() => router.back()} title="Go back!" />
    </View>
  )
}

const styles = StyleSheet.create({})
// horoscope_sign_details.tsx

import React from 'react'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, View, Button } from 'react-native'

import { SignDetails } from '@/components/fetch_horoscope'

export default function HoroscopeSignDetails() {

    const router = useRouter()

    return (
    <View>
      <Text>Goroscope Sign Details</Text>
      <SignDetails sign='scorpio' />
      <Button onPress={() => router.back()} title="Go back!" />
    </View>
  )
}

const styles = StyleSheet.create({})
import React, { useState, useEffect } from 'react'
import { Text, View, ViewStyle, TextStyle, StyleProp } from 'react-native'

const HOROSCOPE_URL = 'http://192.168.1.150:8000/api/horoscope/scorpio'
const SIGN_DETAILS = 'http://192.168.1.150:8000/api/sign_details/scorpio'

type SyleProps = {
  TextStyle?: StyleProp<TextStyle>
  ViewStyle?: StyleProp<ViewStyle>
}

// Modify to accept a sign in the url
export function HoroscopeAPI({ TextStyle }: SyleProps) {
  const [horoscopeData, setHoroscopeData ] = useState<{ horoscope: string } | null>(null)

  useEffect(() => {
    async function horoscope() {
      try{
        const response = await fetch(HOROSCOPE_URL)
        if (!response.ok) {
          console.log(response.status)
          return null
        }
        const data = await response.json()
        setHoroscopeData(data)
        console.log(data)
      }
      catch (error) {
        console.error(error)
      }
    }
  horoscope()
  }, [])

  return (
      <Text style={ TextStyle }>{horoscopeData ? horoscopeData.horoscope : ''}</Text>
  )
}

export function ZodiacSignDetails({ TextStyle, ViewStyle }: SyleProps) {

  type ZodiacStructure = {
    name: string
    symbol: string
    start_date: string
    end_date: string
    element: string
    modality: string
    image: string
    personality: string
  }

  const [zodiacData, setZodiacData] = useState<ZodiacStructure | null>(null)
  useEffect(() => {
    async function zodiac() {
    try {
      const response = await fetch(SIGN_DETAILS)
      console.log(response.status)
      if (!response.ok){
        console.log(response.status)
        return null
        } else {
        const data = await response.json()
        console.log(data)
        setZodiacData(data)
        return data
      }
    } catch (error) {
      console.error(error)
    }
  }
  zodiac()
  }, [])
  return (
    <View style={ ViewStyle }>
      <Text style={ TextStyle }>Zodiac Sign Details:</Text>
      <Text style={ TextStyle }>Name: {zodiacData ? zodiacData.name : ''}</Text>
      <Text style={ TextStyle }>Symbol: {zodiacData ? zodiacData.symbol : ''}</Text>
      <Text style={ TextStyle }>Start Date: {zodiacData ? zodiacData.start_date : ''}</Text>
      <Text style={ TextStyle }>End Date: {zodiacData ? zodiacData.end_date : ''}</Text>
      <Text style={ TextStyle }>Element: {zodiacData ? zodiacData.element : ''}</Text>
      <Text style={ TextStyle }>Modality: {zodiacData ? zodiacData.modality : ''}</Text>
      <Text style={ TextStyle }>Image: {zodiacData ? zodiacData.image : ''}</Text>
      <Text style={ TextStyle }>Personality: {zodiacData ? zodiacData.personality : ''}</Text>
    </View>
  )
}
import React, { useState, useEffect } from 'react'
import { Text, View, Image, ViewStyle, TextStyle, StyleProp, ImageStyle } from 'react-native'

const HOROSCOPE_URL = 'http://192.168.1.150:8000/api/horoscope/'
const SIGN_DETAILS_URL = 'http://192.168.1.150:8000/api/sign_details/'
const COMPATIBILITY_URL = 'http://192.168.1.150:8000/api/horoscope_compatibility/'
const PERSONALITY_HOROSCOPE_URL = 'http://192.168.1.150:8000/api/personality/'
const BIRTH_CHART_URL = 'http://192.168.1.150:8000/api/birth_chart/'


type StyleProps = {
  TextStyle?: StyleProp<TextStyle>
  ViewStyle?: StyleProp<ViewStyle>
  ImageStyle?: StyleProp<ImageStyle>
}

type HoroscopeProps = StyleProps & {
  sign: string
}

export function Horoscope({ TextStyle, sign }: HoroscopeProps) {
  const [horoscopeData, setHoroscopeData] = useState<{ horoscope: string } | null>(null)

  useEffect(() => {
    if (!sign) return

    async function fetchHoroscope(): Promise<void> {
      try {
        const response = await fetch(HOROSCOPE_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sign })
        })

        if (!response.ok) {
          console.log(`Response status: ${response.status}`)
          return
        }

        const data = await response.json()
        setHoroscopeData(data)
      } catch (error) {
        console.error('Failed to fetch horoscope:', error)
      }
    }

    fetchHoroscope()
  }, [sign])

  return (
    <Text style={TextStyle}>
      {horoscopeData ? horoscopeData.horoscope : 'Loading...'}
    </Text>
  )
}

type SignDetailsProps = StyleProps & {
  sign: string
}
export function SignDetails({ TextStyle, ViewStyle, sign }: SignDetailsProps) {
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
    const sign_object = {
      'sign': sign
    }
    async function zodiac() {
      try {
        const response = await fetch(SIGN_DETAILS_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sign_object) //TODO Replace 'scorpio' with the desired zodiac sign
        })
        if (!response.ok){
          console.log(`Response status: ${response.status}`)
          return null
        } else {
          const data = await response.json()
          setZodiacData(data)
          return data
        }
      } catch (error) {
        console.error(error)
      }
    }
    zodiac()
  }, [sign])
  return (
    <View style={ ViewStyle }>
      {zodiacData ? (
        <>
          <Text style={TextStyle}>Zodiac Sign Details:</Text>
          <Text style={TextStyle}>Name: {zodiacData.name}</Text>
          <Text style={TextStyle}>Symbol: {zodiacData.symbol}</Text>
          <Text style={TextStyle}>Start Date: {zodiacData.start_date}</Text>
          <Text style={TextStyle}>End Date: {zodiacData.end_date}</Text>
          <Text style={TextStyle}>Element: {zodiacData.element}</Text>
          <Text style={TextStyle}>Modality: {zodiacData.modality}</Text>
          <Text style={TextStyle}>Image: {zodiacData.image}</Text>
          <Text style={TextStyle}>Personality: {zodiacData.personality}</Text>
        </>
      ) : (
        <Text style={TextStyle}>Loading...</Text>
      )}
    </View>
  )
}

type people = {
  name: string,
  birthdate: string,
  time_of_birth: string
}

type CompatibilityProps = StyleProps & {
  person_one: people,
  person_two: people
}

export function Compatibility({ TextStyle, ViewStyle, person_one, person_two }: CompatibilityProps) {
  const people_to_check = [
    person_one,
    person_two
  ]
  console.log(people_to_check)
  const[compatibility, setCompatibilityData] = useState<any>(null)
  useEffect(() => {
    async function get_compability() {
      try {
        const response = await fetch(COMPATIBILITY_URL, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(people_to_check)
        });
        console.log(response.status)
        if (!response.ok){
          console.log(response.status)
          return null
        }
        const data = await response.json()
        console.log(data)
        setCompatibilityData(data)
        return data
      } catch (error) {
        console.error(error);
      }
    }
    get_compability();
  }, [])
return (
  <View style={ViewStyle}>
    {compatibility ? (
      <>
        <Text style={TextStyle}>Compatibility Level: {compatibility.compatibility.level}</Text>
        <Text style={TextStyle}>Comment: {compatibility.compatibility.comment}</Text>
        <Text style={TextStyle}>Points:</Text>
        {Object.entries(compatibility.compatibility.points).map(([key, value]) => (
          <Text style={TextStyle} key={key}>{key}: {value}</Text>
        ))}
      </>
    ) : (
      <Text style={TextStyle}>Loading...</Text>
    )}
  </View>
);
}

type personal_details = {
  name: string,
  birthdate: string,
  time_of_birth: string
}

type PersonalityProps = StyleProps & {
  details: personal_details 
}

export function Personality({ TextStyle, ViewStyle, ImageStyle, details}: PersonalityProps) {
  const [personality, setPersonality] = useState<any>(null)
  useEffect( ()=> {
    async function get_personality() {
      const response = await fetch(PERSONALITY_HOROSCOPE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details)
      })
      if (!response.ok) {
        console.log(response.status)
      }
      const data = await response.json()
      setPersonality(data)
      console.log(JSON.stringify(data, null, 2));
      console.log(data.image)
    }
    get_personality()
  },[])

  return (
    <View style={ ViewStyle }>
      <Text style={ TextStyle }>{ personality ? personality.name : '' }</Text>
      <Text style={ TextStyle }>{ personality ? personality.zodiac_sign : '' }</Text>
      <Text style={ TextStyle }>{ personality ? personality.personality : '' }</Text>
      <Text style={ TextStyle }>{ personality ? personality.symbol : '' }</Text>
      <Text style={ TextStyle }>{ personality ? personality.element : '' }</Text>
      <Text style={ TextStyle }>{ personality ? personality.modality : '' }</Text>
      <Text style={ TextStyle }>{ personality ? personality.image : '' }</Text>
      {personality?.image ? (
        <Image
          source={{ uri: personality.image }}
          style={[ImageStyle, { width: 200, height: 200 }]} // Ensure size
          resizeMode="cover"
        />
      ) : (
        <Text style={TextStyle}>Loading image...</Text>
      )}

    </View>
  )
}

type details_birthchart = {
  name: string,
  birthdate: string,
  time_of_birth: string
  location?: string
}

type BirthChartProp = StyleProps & {
  birthdate_details: details_birthchart
}


export function BirthChart({ TextStyle, ViewStyle, ImageStyle, birthdate_details }: BirthChartProp) {
  const [birth_data, setBirth_data] = useState<any>(null)
  console.log(birthdate_details)
  useEffect(()=> {
    async function get_birthChart() {
      try {
        const response = await fetch(BIRTH_CHART_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(birthdate_details)
        })
        if (!response.ok) {
          console.log(response.status)
        }
        const data = await response.json()
        console.log(JSON.stringify(data, null, 2))
        setBirth_data(data)
      } catch (error) {
        console.error(error)
      }
    }
    get_birthChart()
  }, [])
  return (
    <View style={ ViewStyle }>
      <Text style={ TextStyle}>{ birth_data ? birth_data.name : '' }</Text>
      <Text style={ TextStyle }>{ birth_data ? birth_data.birthdate : '' }</Text>
      <Text style={ TextStyle }>{ birth_data ? birth_data.time_of_birth : '' }</Text>

      {/* Sun, Moon, Mercury, Venus, Mars */}
      {birth_data?.sun && (
        <Text style={TextStyle}>
          Sun: {birth_data.sun.sign} {birth_data.sun.emoji} ({birth_data.sun.element}, {birth_data.sun.quality}) in {birth_data.sun.house}
        </Text>
      )}
      {birth_data?.moon && (
        <Text style={TextStyle}>
          Moon: {birth_data.moon.sign} {birth_data.moon.emoji} ({birth_data.moon.element}, {birth_data.moon.quality}) in {birth_data.moon.house}
        </Text>
      )}
      {birth_data?.mercury && (
        <Text style={TextStyle}>
          Mercury: {birth_data.mercury.sign} {birth_data.mercury.emoji} ({birth_data.mercury.element}, {birth_data.mercury.quality}) in {birth_data.mercury.house}
        </Text>
      )}
      {birth_data?.venus && (
        <Text style={TextStyle}>
          Venus: {birth_data.venus.sign} {birth_data.venus.emoji} ({birth_data.venus.element}, {birth_data.venus.quality}) in {birth_data.venus.house}
        </Text>
      )}
      {birth_data?.mars && (
        <Text style={TextStyle}>
          Mars: {birth_data.mars.sign} {birth_data.mars.emoji} ({birth_data.mars.element}, {birth_data.mars.quality}) in {birth_data.mars.house}
        </Text>
      )}

      {/* Houses */}
      <Text style={TextStyle}>Houses:</Text>
      {birth_data?.houses && Array.isArray(birth_data.houses) && birth_data.houses.map((house: any, idx: number) => (
        <Text style={TextStyle} key={idx}>
          {house.name.replace('_', ' ')}: {house.sign} {house.emoji} ({house.element}, {house.quality}) at {house.position.toFixed(2)}°
        </Text>
      ))}
    </View>
  )
}


import React, { useState, useEffect } from 'react'
import { Text, View, ViewStyle, TextStyle, StyleProp, ImageStyle } from 'react-native'


const COMPATIBILITY_URL = 'http://192.168.1.150:8000/api/horoscope_compatibility/'

type StyleProps = {
  TextStyle?: StyleProp<TextStyle>
  ViewStyle?: StyleProp<ViewStyle>
  ImageStyle?: StyleProp<ImageStyle>
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
  const people_to_check = React.useMemo(() => [
    person_one,
    person_two
  ], [person_one, person_two]);
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
  }, [people_to_check])
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








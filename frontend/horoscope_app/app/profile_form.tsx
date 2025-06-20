import React from 'react'
import { useRouter } from 'expo-router';
import { StyleSheet, View, Alert } from 'react-native'

import UserForm from '@/components/user_data_form';

import * as SecureStore from 'expo-secure-store';

export default function ProfileForm() {
  const router = useRouter(); 

  async function onSubmit(profileData: any): Promise<void> {
    
    console.log(profileData)

    try {
      const token = await SecureStore.getItemAsync('accessToken')
      const response = await fetch('http://192.168.1.150:8000/api/profile/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`

        },
        body: JSON.stringify({
          name: profileData.name,
          last_name: profileData.lastName,
          birthdate: profileData.birthdate,
          email: profileData.email,
          zodiac_sign: profileData.zodiacSign
        })
      })

      console.log(response)
      const data = await response.json()
      console.log(data)
      if (!response.ok) {
        console.error("Data submition error", data)
        Alert.alert('Error', JSON.stringify(data))
      }

    } catch (error) {
        console.error(error)
    }

    router.navigate('/(tabs)')
  }

  return (
    <View style={ styles.container}>
      <UserForm onSubmit={onSubmit} />
    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black',
  }

})
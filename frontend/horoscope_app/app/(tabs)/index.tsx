import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { globalStyles } from '@/global_styles/global_styles'
import UserForm  from '@/components/user_data_form'



export default function Index() {

  interface UserFormData {
    name: string;
    zodiacSign: string;
  }

  const handleFormSubmit = (data: UserFormData): void => {
    console.log(`${data.name}, ${data.zodiacSign}`)
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Welcome to Horo Buddy</Text>
      <View>
        <UserForm onSubmit={handleFormSubmit} />
      </View>
    </View>
  );
}





const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: globalStyles.backgroundColor,
  },

  mainTitle: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 100,
    fontSize: 25,
    fontWeight: 'bold',
  },

  buddySpeak: {
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center',
    backgroundColor: '#fae0cd',
    borderRadius: 20,
  },

  astroBuddy: {
    resizeMode: 'contain',
    width: 400,
    height: 350,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

})
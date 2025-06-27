import React, { useEffect, useState } from 'react';
import { useRouter  } from 'expo-router';
import { Text, View, StyleSheet, Button } from 'react-native';

import {COLORS} from '@/constants/theme'

import fetch_profile_data from '@/components/fetch_profile_data';

export default function Index() {
  const router = useRouter();

  const [profile, setProfile] = useState('')

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await fetch_profile_data();
      setProfile(profile);
    };
    fetchProfile();
  }, []);

  console.log(profile)

  return (
    <View style={styles.mainContainer}>
      <Button title='Create Profile' onPress={() => {
        router.navigate('/profile_form')
      }} />

      

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.mainBackgroundColor,
    color: COLORS.mainColor,
    paddingTop: 20,
  },

})
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';

export default function LogoutScreen() {
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      await SecureStore.deleteItemAsync('accessToken');
      await SecureStore.deleteItemAsync('refreshToken');

      router.replace('/(auth)/logIn'); 
    };

    logout();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Logging out...</Text>
    </View>
  );
}

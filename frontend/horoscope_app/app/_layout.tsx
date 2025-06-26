// /app/_layout.tsx



import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1, backgroundColor: 'black'}}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" options={{ headerShown: true, title: 'Home' }} />
          <Stack.Screen name="horoscope_sign_details" options={{ headerShown: true, title: 'Sign Details' }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

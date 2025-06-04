import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={ {
        tabBarStyle: { backgroundColor: 'black' },
        headerShown: true,
        headerStyle: { backgroundColor: '#00193b' }, 
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 22 }, 
      } }>
      <Tabs.Screen name="about" options={{ title: 'About' }} />
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="natal_chart" options={{ title: 'Natal Chart'}} />
    </Tabs>
  );
}

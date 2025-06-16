import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return (
    <Tabs screenOptions={ {tabBarShowLabel: true, headerShown: false } }>
      <Tabs.Screen options={{ tabBarIcon: () => <Ionicons name='home'  size={24}/> }} name='index' />
      <Tabs.Screen options={{ tabBarIcon: () => <AntDesign name="smile-circle" size={24} color="black" /> }} name='buddy' />
      <Tabs.Screen options={{ tabBarIcon: () => <Ionicons name="planet-sharp" size={24} color="black" />}} name='natal_chart' />
      <Tabs.Screen options={{ tabBarIcon: () => <Ionicons name='person-circle'  size={24} /> }} name='profile' />
    </Tabs>
  )
}
// (tabs)/_layout.tsx
import React from 'react'
import { Tabs } from 'expo-router'
import { Telescope, Home, Hash, Layers, LogOut } from 'lucide-react-native'

export default function TabLayout() {
  return (
    <Tabs screenOptions={ {tabBarShowLabel: true, headerShown: false } }>
      
      <Tabs.Screen name='index' 
      options={{ 
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => <Home color={color} size={size} /> 
        
      }} 
      />

      <Tabs.Screen name='astrology' 
      options={{ 
        tabBarLabel: 'Astrology',
        tabBarIcon: ({ color, size }) => <Telescope color={color} size={size} /> 

      }} 
      />

      <Tabs.Screen name='numerology' 
      options={{ 
        tabBarLabel: 'Numerology',
        tabBarIcon: ({ color, size }) => <Hash /> 

      }} 
      />

      <Tabs.Screen name='tarot' 
      options={{ 

        tabBarLabel: 'Tarot',
        tabBarIcon: ({ color, size }) => <Layers color={color} size={size} /> 

      }} 
      />

      <Tabs.Screen
        name='logout'
        options={{
          tabBarLabel: 'Logout',
          tabBarIcon: ({ color, size }) => <LogOut color={color} size={size} /> 

        }}
      />

    </Tabs>
  )
}
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';


export default function HomeScreen() {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerShown: true,
      title: "Booking.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,

        borderBottomColor: 'transparent',
        shadowColor: 'transparent'
      },
      headerRight: () => (
        <Ionicons name="notifications-outline" size={24} color="white" style={{ marginRight: 12 }} />
      )
    })
  }, [])
  return (
    <View>
      <Header />

      <ScrollView>

      </ScrollView>
    </View>
  )
}


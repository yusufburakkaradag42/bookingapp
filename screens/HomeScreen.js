import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
    const navigation= useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitleAlign:'center',
            headerShown:true,
            title:"Booking.com",
            headerTitleStyle:{
             fonsSize:20,
             FontWeight:"bold",
             color:"white",
            },
            headerStyle:{
                backgroundColor:"#003580",
                height:110,
               
            }
        })
    },[])
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}


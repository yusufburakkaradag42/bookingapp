import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={{
            backgroundColor: "#003580",
            height: 65,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
        }}>

            <Pressable style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: 'white',
                borderWidth: 1,
                borderRadius: 25,
                padding: 8,
            }}>
                <Ionicons name="bed-outline" size={24} color="white" />
                <Text style={{
                    marginLeft: 8,
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 15,
                }}>Stays</Text>
            </Pressable>

            <Pressable style={{
                flexDirection: 'row',
                alignItems: 'center',

            }}>
                <Ionicons name="airplane-outline" size={24} color="white" />
                <Text style={{
                    marginLeft: 8,
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 15,
                }}>Flights</Text>
            </Pressable>


            <Pressable style={{
                flexDirection: 'row',
                alignItems: 'center',

            }}>
                <AntDesign name="car" size={24} color="white" />
                <Text style={{
                    marginLeft: 8,
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 15,
                }}>Car Rental</Text>
            </Pressable>


            <Pressable style={{
                flexDirection: 'row',
                alignItems: 'center',

            }}>
                <FontAwesome5 name="taxi" size={24} color="white" />
                <Text style={{
                    marginLeft: 8,
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 15,
                }}>Taxi</Text>
            </Pressable>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({})
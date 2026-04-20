import { Colors } from '@/constants/Colors';
import { styles } from '@/constants/style';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function login() {

    const router = useRouter();

  return (
    <View>
        <Image source={require('./../assets/images/login.jpg')}
            style={{
                width:'100%',
                height: 500
            }}
        />
        <View style={styles.container}>
            <Text style={styles.title}>NEXTSTOP</Text>
            <Text style={{
                fontSize:20,
                fontFamily: 'outfit',
                textAlign: "center",
                padding: 15, 
                marginTop: 20
            }}>Travel Effortlessly</Text>

            {/* button */}
            <TouchableOpacity style={styles.button}
                onPress={()=>router.push('auth/sign-in')}
            >
                <Text style={{
                    color:Colors.WHITE, 
                    fontSize:16,
                    fontFamily: 'outfit',
                    textAlign: "center",
                    padding: 5
                }}>Get Started</Text>
            </TouchableOpacity >
        </View>
    </View>
  )
}
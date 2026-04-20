import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function map() {
    const router = useRouter();
  return (
    <View>
        <TouchableOpacity style={{
            position: "absolute",
            top: 120, 
            left: "10%",
            zIndex: 40
        }} onPress={()=>router.back()}>
            <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
        </TouchableOpacity>
      <Text style={{
        backgroundColor: "#000",
        padding: 15,
        width: "50%",
        position: "absolute",
        top: 100, 
        left: "25%",
        borderRadius: 30,
        color: "#FFF",
        textAlign: "center", 
        fontFamily: "fontFamily: 'outfit-bold'", 
        zIndex: 40,
        fontSize: 30
      }}>MAP</Text>
      <Image source={require('./../../assets/images/map.png')} style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}/>
    </View>
  )
}
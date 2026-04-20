import { Colors } from '@/constants/Colors';
import { styles } from '@/constants/style';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function StartNewTrip() {
    const router=useRouter();

  return (
    <View
    style={{
        padding:20,
        marginTop:50,
        display: 'flex',
        alignItems: 'center', 
        gap:20
    }}
    >
      <Ionicons name="location-sharp" size={50} color="black" />
      <Text style={styles.header}>No Trip Planned Yet</Text>
      <Text>It's time to plan a new trip! Get Started below</Text>

      <TouchableOpacity style={styles.button}
                        onPress={()=>router.push('/create-trip/search-place')}
              >
                <Text style={{
                    color:Colors.WHITE, 
                    fontSize:16,
                    fontFamily: 'outfit',
                    textAlign: "center",
                    padding: 5
                }}>Add New Trip</Text>
        </TouchableOpacity >
    </View>
  )
}
import { styles } from '@/constants/style';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';


export default function profile() {
  const router= useRouter();
  return (
    <ScrollView style={{
      marginTop: 40,
      padding: 20, 
      backgroundColor: "#fff"
    }}>
      <TouchableOpacity onPress={()=>router.back()}>
                  <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
              </TouchableOpacity>
      <Text style={styles.header}>Profile</Text>
      <View style={{
        backgroundColor: "#FFF",
        marginTop:50,
        padding: 20,
        borderRadius: 30,
        shadowColor: "#cccccc",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 5,
            width: 2
        }
      }}>
        <TouchableOpacity>
          <Text style={styles.header}>Hi John</Text>
          <Text style={styles.p}>Edit Your Details ➡️</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        backgroundColor: "#FFF",
        marginTop:20,
        padding: 20,
        borderRadius: 30,
        shadowColor: "#cccccc",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 5,
            width: 2
        }
      }}>
        <TouchableOpacity>
          <Text style={styles.subHead}>Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        backgroundColor: "#FFF",
        marginTop:20,
        padding: 20,
        borderRadius: 30,
        shadowColor: "#cccccc",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 5,
            width: 2
        }
      }}>
        <TouchableOpacity>
          <Text style={styles.subHead}>Accessibility</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        backgroundColor: "#FFF",
        marginTop:20,
        padding: 20,
        borderRadius: 30,
        shadowColor: "#cccccc",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 5,
            width: 2
        }
      }}>
        <TouchableOpacity>
          <Text style={styles.subHead}>Privacy Control</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
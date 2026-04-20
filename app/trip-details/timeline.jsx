import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import Intinerary from '../../components/TripDetails/TripTimeline';
import { styles } from '../../constants/style';

export default function timeline() {
  const router= useRouter();
  return (
    <View style={{
      paddingTop: 40,
      backgroundColor: "#FFF",
    }}>
      <TouchableOpacity style={{paddingLeft:20, paddingTop: 20}}
      onPress={()=>router.back()}>
            <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Timeline</Text>
      <Intinerary />
    </View>
  )
}
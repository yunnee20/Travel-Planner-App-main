// import { Colors } from '@/constants/Colors';
import { styles } from '@/constants/style';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native';

export default function discover() {
      const router= useRouter();
        return (
          <ScrollView style={{
            marginTop: 40,
            padding: 20
          }}>
            <TouchableOpacity onPress={()=>router.back()}>
                <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
            </TouchableOpacity>
        <Text style={styles.header}>Discover More</Text>
        <Text style={styles.p}>Fancy something different?</Text>

        <TouchableOpacity style={styles.discoverBox}>
          <Image source={require('./../../assets/images/amsterdam.jpeg')}
            style={styles.discoverImg}/>
            <Text style={styles.header}>5 Days in Amsterdam</Text>
            <Text style={styles.p}>This includes a package of adventure with just one price!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.discoverBox}>
          <Image source={require('./../../assets/images/morocco.jpg')}
            style={styles.discoverImg}/>
            <Text style={styles.header}>3 Days in Morocco</Text>
            <Text style={styles.p}>This includes a package of adventure with just one price!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.discoverBox}>
          <Image source={require('./../../assets/images/paris.jpg')}
            style={styles.discoverImg}/>
            <Text style={styles.header}>4 Days in Paris</Text>
            <Text style={styles.p}>Enjoy City Walk and DisneyLand !</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
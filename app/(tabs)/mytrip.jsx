import { Colors } from '@/constants/Colors';
import { styles } from '@/constants/style';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import StartNewTrip from '../../components/MyTrips/StartNewTrip';
import UserTrips from '../../components/MyTrips/UserTrips';
import { db } from '../../configs/firebaseConfig';

export default function mytrip() {
  const router = useRouter();
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = "hello";
  useEffect(()=>{
    GetMyTrips();
  }, [user])

  const GetMyTrips=async()=>{
    setLoading(true);
    setUserTrips([]);
    const q = query(collection(db, 'UserTrips'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setUserTrips(prev=>[...prev, doc.data()]);
      
    });
    console.log("length", userTrips.length)
    setLoading(false);
  }

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: '100%'
      }}
    >
      <View 
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Text style={styles.header}>My Trip</Text>

        {/* Add button */}
        <TouchableOpacity
        onPress={()=>router.push("./../create-trip/search-place")}
        >
          <Ionicons name="add-circle" size={50} color="black" />
        </TouchableOpacity>
        
      </View>

        {userTrips?.length==0?
          <StartNewTrip/>
          
          :<UserTrips userTrips={userTrips}/>
        }

    </View>
  )
}
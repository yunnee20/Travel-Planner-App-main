import { useRouter } from 'expo-router';
import moment from 'moment';
import { ScrollView, Text } from 'react-native';
import UserTripCard from './UserTripCard';
// import { CreateUserTrip } from '../../context/CreateUserTrip';

export default function UserTrips({userTrips}) {

    const router=useRouter();
    const LatestTrip = JSON.parse(userTrips[0].tripData)
    
    console.log(userTrips);

  return (
    <ScrollView style={{marginTop:10}}>
        <Text style={{
            fontSize:24,
            fontFamily: 'outfit-bold',
            textAlign: "left", 
            marginBottom: 20, 
        }}>
            {moment(LatestTrip?.startDate).format('yyyy')}
        </Text>
        
        {userTrips
        .sort((a, b) => Number(b.docID) - Number(a.docID))
        .map((trip, index)=>(
            <UserTripCard trip={trip} key={index}/>
        ))}
    </ScrollView>
  )
}
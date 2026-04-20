import { Colors } from '@/constants/Colors';
import { styles } from '@/constants/style';
import { useRouter } from 'expo-router';
import moment from 'moment';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function UserTripCard({trip}) {
    const router=useRouter();
  return (
    <View style={{
        marginVertical: 20
    }}>
        <View
        style={{
            display: 'flex',
            alignItems: 'center', 
            gap:10, 
            paddingBottom: 40,
            backgroundColor: "#ffffff",
            borderRadius: 30,
            shadowColor: "#cccccc",
            shadowOpacity: 0.5,
            shadowRadius: 2,
            shadowOffset: {
                height: 5,
                width: 2
            }
        }}
    >
            <Image source={require('./../../assets/images/london.jpg')}
            style={{
                width:'100%',
                height: 200, 
                objectFit: "cover", 
                borderRadius: 30, 
                marginBottom: 20
            }}
            />
            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between", 
                paddingHorizontal: 20
            }}>
                <View style={{
                    width: "50%"
                }}>
                    <Text style={styles.header2}>{trip.tripPlan?.tripDetails?.location}</Text>
                    <Text style={{
                        marginTop: 20, 
                        textAlign: "left", 
                        fontFamily: "outfit",
                        fontSize: 20
                    }}>{moment(trip.tripPlan?.tripDetails?.dates.start).format('DD MMM')} - {moment(trip.tripPlan?.tripDetails?.dates.end).format('DD MMM')}</Text>
                </View>
                <View style={{
                    width: "50%"
                }}>
                    <Text style={{
                        marginTop: 10, 
                        textAlign: "right", 
                        fontFamily: "outfit",
                        fontSize: 20
                    }}>💰{trip.tripPlan?.tripDetails?.budget}</Text>
                    <Text style={{
                        marginTop: 10, 
                        textAlign: "right", 
                        fontFamily: "outfit",
                        fontSize: 20,
                    }}>👥{trip.tripPlan?.tripDetails?.numPeople}</Text>
                </View>
                </View>
                <TouchableOpacity style={{
                                padding: 15,
                                backgroundColor: Colors.PRIMARY,
                                borderRadius:99,
                                marginTop: '5%'
                            }}
                                onPress={()=>router.push({pathname:'/trip-details', params:{
                                    trip: JSON.stringify(trip)
                                }})}
                            >
                            <Text style={{
                                color:Colors.WHITE, 
                                fontSize:16,
                                fontFamily: 'outfit',
                                textAlign: "center",
                                width: 200
                            }}>See Your Plan</Text>
                            </TouchableOpacity >
            
        </View>
        
    </View>
  )
}
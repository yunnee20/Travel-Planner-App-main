import { Colors } from '@/constants/Colors';
import { styles } from '@/constants/style';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FlightInfo from '../../components/TripDetails/FlightInfo';
import HotelList from '../../components/TripDetails/HotelList';
import PlannedTrip from '../../components/TripDetails/PlannedTrip';

// import { useRouter } from 'expo-router';
// import { useContext, useState } from "react";

export default function TripDetails() {
    const router = useRouter();
    const navigation = useNavigation();
    const {trip} = useLocalSearchParams();
    const [tripAll, setTripAll] = useState([]);

    const formatData= (data)=>{
        return JSON.parse(data);
    }

    useEffect(()=>{        
        setTripAll(JSON.parse(trip));
    },[])

    console.log("here",tripAll?.tripPlan);

  return (
    <ScrollView>
        <TouchableOpacity style={{
            position:"absolute",
            top: 90, 
            borderWidth: 2,
            backgroundColor: "#FFF", 
            left: 30,
            zIndex: 30, 
            padding: 10,
            borderRadius: 30
        }}
        onPress={()=>router.back()}>
                <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
        </TouchableOpacity>
        <Image source={require('./../../assets/images/london.jpg')}
            style={{
                width:'100%',
                height: 300
            }}
        />
        <View style={{
            backgroundColor:Colors.WHITE,
            marginTop: -20,
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
            padding:25
        }}>
            <View style={{
                display: "flex", 
                flexDirection: "row", 
                justifyContent: "space-evenly", 
                marginBottom: 10
            }}>
                {/* Adding buttons on Top */}
                {/* Map View Button */}
                <TouchableOpacity style={styles.button3}
                onPress={()=>router.push("/trip-details/map")}
                >
                    <Text style={{color:"#FFF", textAlign: "center", fontSize:20}}>📌</Text>
                </TouchableOpacity>

                {/* Timeline Overview */}
                <TouchableOpacity style={styles.button3}
                onPress={()=>router.push("/trip-details/timeline")}
                >
                    <Text style={{color:"#FFF", textAlign: "center", fontSize:20}}>⌛</Text>
                </TouchableOpacity>

                {/* Budget Control */}
                <TouchableOpacity style={styles.button3}
                onPress={()=>router.push("/trip-details/money")}
                >
                    <Text style={{color:"#FFF", textAlign: "center", fontSize:20}}>💰</Text>
                </TouchableOpacity>

                
            </View>
            {/* A spearator */}
            <View style={styles.separator}></View>

            <View style={{marginTop: 20}}>
                {/* Details */}
                <Text style={styles.header}>{tripAll?.tripPlan?.tripDetails?.location}</Text>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between", 
                    paddingHorizontal: 20, 
                    marginBottom: 50
                }}>
                    
                    <View style={{
                        width: "50%"
                    }}>
                        <Text style={{
                            marginTop: 20, 
                            textAlign: "left", 
                            fontFamily: "outfit",
                            fontSize: 20
                        }}>{moment(tripAll?.tripPlan?.tripDetails?.dates?.start).format('DD MMM yyyy')}{"\n"}{moment(tripAll?.tripPlan?.tripDetails?.dates?.end).format('DD MMM yyyy')}</Text>
                    </View>
                    <View style={{
                        width: "50%"
                    }}>
                        <Text style={{
                            marginTop: 10, 
                            textAlign: "right", 
                            fontFamily: "outfit",
                            fontSize: 20
                        }}>💰{tripAll?.tripPlan?.tripDetails?.budget}</Text>
                        <Text style={{
                            marginTop: 5, 
                            textAlign: "right", 
                            fontFamily: "outfit",
                            fontSize: 20,
                        }}>👥{tripAll?.tripPlan?.tripDetails?.numPeople} </Text>
                    </View>
                </View>

                <FlightInfo flightData={tripAll?.tripPlan?.flights} scrollEnabled={false}/>
                <HotelList hotelData={tripAll?.tripPlan?.hotels}scrollEnabled={false}/>
                <Text style={styles.header2}>PlannedTrip</Text>
                {tripAll?.tripPlan?.dailyPlan
                ? Object.entries(tripAll.tripPlan.dailyPlan).map(([dayKey, dayData], index) => (
                    <PlannedTrip key={index} trip={dayData} day={dayKey}/>
                    ))
                : <Text>Loading daily plan...</Text>
}
            </View>
            

            

            
        </View>
    </ScrollView>
  )
}

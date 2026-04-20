import { Colors } from '@/constants/Colors';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../constants/style';

export default function FlightInfo({flightData}) {
  return (
    <View style={{
        padding: 10
    }}>
        <Text style={{
            fontSize:30,
            fontFamily: 'outfit-bold',
            textAlign: "left", 
            paddingBottom: 8
        }}>Flights</Text>
        <Text style={{
            fontSize:16,
            fontFamily: 'outfit',
            textAlign: "left",
        }}>Already booked your flight? Add Here!</Text>
        <View style={{
            width:"100%", 
        }}>
            <View style={{
                padding: 20, 
                borderRadius: 15, 
                margin: 5, 
                gap: 10,
                backgroundColor: "#ffffff",
                borderRadius: 30,
                shadowColor: "#cccccc",
                shadowOpacity: 0.5,
                shadowRadius: 2,
                shadowOffset: {
                    height: 5,
                    width: 2
                }
            }}>
                <Text style={styles.subHead}>RyanAir</Text>
                <Text>RZ308</Text>
                <View style={{
                    display: "flex", 
                    flexDirection: "row",
                    justifyContent: "space-between", 
                }}>
                    <View>
                        <Text>Departure</Text>
                        <Text style={{
                            fontSize: 23,
                            fontFamily: 'outfit-bold',
                            textAlign: "left"
                        }}>CDG</Text>
                    </View>
                    
                    <View>
                        <Text>Arrival</Text>
                        <Text style={{
                            fontSize: 23,
                            fontFamily: 'outfit-bold',
                            textAlign: "left"
                        }}>LHR</Text>
                    </View>
                    
                </View>
                
                <View style={{
                    display: "flex", 
                    flexDirection: "row",
                    justifyContent: "space-between", 
                    alignItems: "center"
                }}>
                    <Text>💰£400</Text>
                    <TouchableOpacity style={{
                        padding: 15,
                        backgroundColor: Colors.PRIMARY,
                        borderRadius:99,
                    }}>
                        <Text style={{color: Colors.WHITE}}>Book Here</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}
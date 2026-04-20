import { Image, Text, View } from 'react-native'
import { styles } from '../../constants/style'

export default function PlannedTrip({trip, day}) {
  return (
    <View style={{
      marginTop: 10
    }}>
      {/* Each Day */}
      <View style={{
        marginTop: 10,
        padding: 20,
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
        <Text style={styles.subHead}>{day}</Text>
        <View style={{
          marginTop:10,
          padding: 4,
          
        }}>
          
            {/* Each Plan */}
              <View style={{
                  display: "flex",
                  flexDirection: "row", 
                  justifyContent: "space-around", 
                  alignItems: "center", 
                  marginBottom: 20
              }}>
                <View style={{
                  width: "35%", 
                  marginRight: 20
                }}>
                    <Image source={require('./../../assets/images/food.jpg')} style={{
                      width: "100%",
                      height: 150,
                      objectFit: "cover", 
                      borderRadius: 20
                    }}/>
                </View>
                    {trip?.places?.map((place, index) => (
                      <View style={{
                        width: "60%"
                      }} key={index}>
                        <Text style={{
                        fontSize: 20,
                        fontFamily: 'outfit-bold',
                        textAlign: "left"
                      }}>{place?.placeName}</Text>
                        <Text style={styles.inBtn}>{place?.details}</Text>
                        <Text style={styles.inBtn}>💰Price: ${place?.ticketPrice}</Text>
                        <Text style={styles.inBtn}>🚶‍➡️Travel Time: {place?.travelTime}</Text>
                        
                      </View>
                    ))}
              </View>

            </View>
      </View>
    </View>
  )
}
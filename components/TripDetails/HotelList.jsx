import { styles } from '@/constants/style';
import { FlatList, Image, Text, View } from 'react-native';

export default function HotelList({hotelData}) {
  return (
    <View style={{marginVertical: 50}}>
        <Text style={styles.header2}>Hotels</Text>
        <FlatList
        style ={{
            marginTop: 8
        }}

        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={hotelData}
        renderItem={({item, index})=>(
            <View style={{
                marginRight: 20, 
                width: 160, 
                padding: 5,
                backgroundColor: "#ffffff",
                borderRadius: 10,
                shadowColor: "#cccccc",
                shadowOpacity: 0.5,
                shadowRadius: 2,
                shadowOffset: {
                    height: 5,
                    width: 2
                }
            }}>
                {/* <Text>{item.hotelName}</Text> */}
                <Image source={require('./../../assets/images/hotel1.jpg')}
                    style={{
                        width:150,
                        height: 120,
                        borderRadius: 20
                    }}
                />

                <View style={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                    <Text style={styles.p}>{item.hotelName}</Text>
                    <View style={{
                        display: "flex",
                        flexDirection: "row", 
                        justifyContent: "space-between", 
                        alignItems: "center"
                    }}>
                        <Text>⭐{item.rating}</Text>
                        <Text>💰£{item.price}</Text>
                    </View>
                    
                </View>
            </View>
        )}
        />
    </View>
  )
}
// import { Colors } from '@/constants/Colors';
import { styles } from '@/constants/style';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function Money() {
    // const [number, onChangeNumber] = useState('');
  const router= useRouter();
    return (
    <View style={{
        marginTop: 40,
        padding: 20, 
        backgroundColor: "#FFF", 
        height: "100%"
    }}>
        <TouchableOpacity onPress={()=>router.back()}>
            <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
        </TouchableOpacity>
      <Text style={styles.header}>Budget & Split</Text>
      <Text style={styles.p}>Spill and Share Your Budget With Your Travel Buddy!</Text>

      <Image source={require('./../../assets/images/Budget.png')} style={{
        width: "100%",
        height: 200,
        objectFit: "contain"
      }}/>
      
      {/* <TextInput
          style={styles.header}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Insert Your Budget"
          keyboardType="numeric"
          onBlur={Keyboard.dismiss}
        /> */}

        <Text style={styles.header}>Budget: $600 </Text>
        <View style={{
            marginTop: 40
        }}>
            <Text style={styles.subHead}>Expenses</Text>
            <View style={{
                backgroundColor: "#FFF",
                marginTop:20,
                borderWidth: 2,
                padding: 20,
                borderRadius: 30
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row", 
                        justifyContent: "space-between", 
                        alignItems: "center"
                    }}>
                        <View>
                            <Text style={styles.inBtn}>Louis</Text>
                            <Text style={styles.inBtn}>Accom</Text>
                        </View>
                        
                        <Text style={styles.inBtn}>$300</Text>
                    </View>
                    
            </View>

            <View style={{
                backgroundColor: "#FFF",
                marginTop:20,
                borderWidth: 2,
                padding: 20,
                borderRadius: 30
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row", 
                        justifyContent: "space-between", 
                        alignItems: "center"
                    }}>
                        <View>
                            <Text style={styles.inBtn}>Jenny</Text>
                            <Text style={styles.inBtn}>Flight Tickets</Text>
                        </View>
                        
                        <Text style={styles.inBtn}>$200</Text>
                    </View>
                    
            </View>
        </View>
    </View>
  )
}
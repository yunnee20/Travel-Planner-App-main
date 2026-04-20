import { Colors } from "@/constants/Colors";
import { styles } from "@/constants/style";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import moment from 'moment';
import { useContext } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { CreateTripContext } from './../../context/CreateTripContext';

export default function ReviewTrip() {
  const router = useRouter();

  const { tripData, setTripData } = useContext(CreateTripContext);

  // Track selected traveler
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
      </TouchableOpacity>

      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          marginTop: 30,
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        Review your trip
      </Text>

      <View
        style={{
          gap: 30
        }}
      >
        <View>
            <Text>Destination</Text>
            <Text style={{ fontSize: 25}}>{tripData?.locationInfo?.name}</Text>
        </View>
        
        <View>
            <Text>Travelers</Text>
            <Text style={{ fontSize: 25}}>{tripData?.traveler} People</Text>
        </View>
        
        <View>
            <Text>Date</Text>
            <Text style={{ fontSize: 25}}>
              {moment(tripData?.startDate).format('DD MMM') + " - " + moment(tripData?.endDate).format('DD MMM') + "   "}
              ({tripData?.totalDays} days)
            </Text>
        </View>

        <View>
            <Text>Budget</Text>
            <Text style={{ fontSize: 25}}>{tripData?.budget}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/create-trip/generate-trip")}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 16,
            fontFamily: "outfit",
            textAlign: "center",
            padding: 5,
          }}
        >
          Let's Build Your Trip!
        </Text>
      </TouchableOpacity>
    </View>
  );
}
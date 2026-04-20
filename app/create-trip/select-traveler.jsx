import { Colors } from "@/constants/Colors";
import { styles } from "@/constants/style";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { CreateTripContext } from "./../../context/CreateTripContext";

export default function SelectTraveler() {
  const router = useRouter();
  const [people, setPeople] = useState(1); 
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    setTripData({
      ...tripData,
      traveler: people,
    });
  }, [people]);

  const addNumber = () => {
    setPeople(prev => prev + 1);
  };

  const minusNumber = () => {
    if (people > 1) {
      setPeople(prev => prev - 1);
    }
  };

  const onClickNext = () => {
    if (!people || people < 1) {
      Alert.alert("Missing Traveler", "Please select at least one traveler.");
      return;
    }

    router.push("/create-trip/select-date");
  };

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

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 20,
        }}
      >
        <View style={styles.igSelected}></View>
        <View style={styles.igSelected}></View>
        <View style={styles.igUnselected}></View>
        <View style={styles.igUnselected}></View>
      </View>

      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          marginTop: 30,
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        Who's Travelling{"\n"} With You?
      </Text>

      <View style={{ marginVertical: 30, alignItems: "center" }}>
        <Text style={styles.subHead}>Total Travelers</Text>
        <Text style={styles.p}>Press Buttons below to Add or Minus</Text>
        <Text style={{
          fontSize: 60,
          marginTop: 20
        }}>{people}</Text>

        <View style={{ flexDirection: "row", gap: 20, marginTop: 20 }}>
          <TouchableOpacity onPress={addNumber}>
            <Ionicons name="add-circle" size={50} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={minusNumber}>
            <Ionicons name="remove-circle" size={50} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={onClickNext}>
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 16,
            fontFamily: "outfit",
            textAlign: "center",
            padding: 5,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}

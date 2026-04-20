import { Colors } from "@/constants/Colors";
import { styles } from "@/constants/style";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { budgetOptions } from "../../constants/Options";
import { CreateTripContext } from './../../context/CreateTripContext';

export default function SelectBudget() {
  const router = useRouter();

  const [selectBudget, setSelectedBudget] = useState(); 
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    selectBudget && setTripData({...tripData,
      budget: selectBudget?.title
    })
  },[selectBudget]);

  const onClickNext = ()=>{
    if(!selectBudget){
      Alert.alert("Missing Budget", "Please selectbudget option before continuing.");
      return;
    }
    router.push('/create-trip/review-trip')
  }

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

      {/* Instagram story look */}
      <View style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly", 
          marginTop: 20
      }}>
          <View style={styles.igSelected}></View>
          <View style={styles.igSelected}></View>
          <View style={styles.igSelected}></View>
          <View style={styles.igSelected}></View>

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
        What's Your Budget?
      </Text>

      <View
        style={{
          marginVertical: 30
        }}
      >
        <FlatList
          data={budgetOptions}
          renderItem={({item, index})=>(
            <TouchableOpacity 
            onPress={()=>setSelectedBudget(item)}
            style={{ paddingBottom: 15 }}>
              <OptionCard option={item} selectedOption={selectBudget}/>
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={onClickNext}
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
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}

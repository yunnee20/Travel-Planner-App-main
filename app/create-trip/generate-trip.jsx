import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { doc, setDoc } from "firebase/firestore";
import moment from "moment";
import { useContext, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { chatSession } from "../../configs/AiModal";
import { AI_PROMPT } from "../../constants/Options";
import { db } from "./../../configs/firebaseConfig";
// import { CreateUserTrip } from "../../context/CreateUserTrip";
import { CreateTripContext } from './../../context/CreateTripContext';

export default function GenerateTrip() {
    const { tripData, setTripData } = useContext(CreateTripContext);
    // const { userTrips, setUserTrips } = useState(CreateUserTrip);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(()=>{
        GenerateAiTrip()
    }, [])

    const GenerateAiTrip=async()=>{
        setLoading(true);

        // adjust the prompt in Option.js by replacing actual input
        const FINAL_PROMPT = AI_PROMPT
        .replace('{location}', tripData?.locationInfo?.name)
        .replaceAll('{startDate}', moment(tripData?.startDate).format('DD MMM yyyy'))
        .replaceAll('{endDate}', moment(tripData?.endDate).format('DD MMM yyyy'))
        .replaceAll('{totalNight}', tripData?.totalDays-1)
        .replaceAll('{totalNight}', tripData?.totalDays-1)
        .replaceAll('{totalDay}', tripData?.totalDays)
        .replaceAll('{totalNight}', tripData?.totalDays-1)
        .replace('{travelerNumber}', tripData?.traveler)
        .replace('{budget}', tripData?.budget)

        console.log("This is final prompt: ",FINAL_PROMPT);
        // router.push("/mytrip");
        const result = await chatSession.sendMessage(FINAL_PROMPT);

        const tripResponse = result.response.text();
        console.log("this", tripResponse);
        const cleaned = tripResponse.replace("```json", "");
        const cleaned2 = cleaned.replace("```", "");
        const cleanedJSON = JSON.parse(cleaned2);
        console.log(cleanedJSON);
        
        setLoading(false);
        // 

        // saving data to firebase database
        try{
          console.log("first")
          const docID = (Date.now()).toString(); //generate unique ID
          console.log("second")
          const tripResult = await setDoc(doc(db,"UserTrips", docID), {
              docID: docID,
              tripData: JSON.stringify(tripData),
              tripPlan:cleanedJSON
          })
          
          router.push("/mytrip");
          // console.log("done", tripResult)
        }catch(err){
          console.error(err);
        }
    }
    

  return (
    <View
          style={{
            padding: 25,
            paddingTop: 70,
            backgroundColor: Colors.WHITE,
            height: "100%",
          }}
        >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          marginTop: 50,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Generating...
      </Text>

      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 20,
          marginTop: 30,
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Building Your Dream Trip
      </Text>

      <Image source={require('./../../assets/images/loading2.gif')}
      style={{
        width:'100%',
        height: 500,
      }}
      />
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 15,
          color: "#C4C4C4",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Do Not Go Back or Exit App
      </Text>
    </View>
  )
}
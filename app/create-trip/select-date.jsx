import { Colors } from '@/constants/Colors';
import { styles } from '@/constants/style';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import moment from 'moment';
import { useContext, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { CreateTripContext } from './../../context/CreateTripContext';

export default function SelectDate() {
  const router = useRouter();
  const [selectedStartDate, setSelectedStartDate] = useState();
  const [selectedEndDate, setSelectedEndDate] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  const onDateChange = (date, type) => {
    if (type == 'START_DATE') {
      setSelectedStartDate(moment(date))
    }else{
      setSelectedEndDate(moment(date))
    }
  };

  // function define
  const onDateSelection =()=>{
    if(!selectedStartDate && !selectedEndDate){
      Alert.alert("Missing Date", "Please select date before continuing.");
      return;
    }
    const totalDays = selectedEndDate.diff(selectedStartDate, 'days');
    // console.log(totalDays+1);

    // add trip date details 
    setTripData({
      ...tripData, 
      startDate: selectedStartDate,
      endDate: selectedEndDate,
      totalDays: totalDays+1
    });

    // move to budget page
    router.push('/create-trip/select-budget');

  }

  return (
    <View
      style={{
        marginTop: 30,
        backgroundColor: Colors.WHITE,
        height: '100%',
        padding: 15
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
          <View style={styles.igUnselected}></View>

      </View>
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 30,
          marginTop: 30,
          textAlign: 'center',
          marginBottom: 40,
        }}
      >
        Choose the Date
      </Text>

      <View style={{ margin: 20 }}>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          textStyle={{ fontFamily: 'outfit', fontSize: 15 }}
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY
          }}
          selectedDayTextStyle = {{
            color: Colors.WHITE
          }}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
          //trigger button function
        onPress={onDateSelection}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 16,
            fontFamily: 'outfit',
            textAlign: 'center',
            padding: 5,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}

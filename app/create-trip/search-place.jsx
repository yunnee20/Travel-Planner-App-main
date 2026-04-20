import { Colors } from '@/constants/Colors';
import { styles } from '@/constants/style';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { useContext, useEffect } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from './../../context/CreateTripContext';

export default function SearchPlace() {
    const router= useRouter();
    const { tripData, setTripData } = useContext(CreateTripContext);

    const onClickNext = () => {
        if (!tripData?.locationInfo?.name) {
            Alert.alert("Missing Location", "Please select a location before continuing.");
            return;
        }
        // proceed next page
        router.push('/create-trip/select-traveler');
    };

    useEffect(() => {
        console.log(tripData);
    }), [tripData];

  return (
    <View
        style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: '100%'
        }}
    >
        
        <TouchableOpacity onPress={()=>router.back()}>
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
            <View style={styles.igUnselected}></View>
            <View style={styles.igUnselected}></View>
            <View style={styles.igUnselected}></View>

        </View>
        <Text 
            style={{
                fontFamily: 'outfit-bold', 
                fontSize: 30, 
                marginTop: 30,
                textAlign: 'center',
                marginBottom: 40
             }}
        >Where Do You {"\n"}Want To Go?</Text>

            <GooglePlacesAutocomplete
            placeholder='Search for a Location'
            textInputProps={{ placeholderTextColor: '#000' }}
            styles={{ 
                textInput: { 
                    fontSize: 16,
                    borderWidth: 1,
                    borderRadius: 15,
                    height: 70,
                    paddingLeft: 20
                } 
                
            }}
            fetchDetails={true}
            onPress={(data, details = null) => { 
                setTripData({
                    locationInfo:{
                        name: data.description,
                        coordinates: details?.geometry.location,
                        photoRef: details?.photos[0]?.photo_reference,
                        url: details?.url,
                        placeid : details?.place_id
                    },
                }) 
            }}
            

            query={{
                key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
                language: 'en',
            }}
            
            
            predefinedPlaces={[]}
            GoogleReverseGeocodingQuery={{}}
            isRowScrollable={true}
            keyboardShouldPersistTaps="always"
            listHoverColor="#ececec"
            listUnderlayColor="#c8c7cc"
            listViewDisplayed="auto"
            keepResultsAfterBlur={false}
            minLength={0}
            nearbyPlacesAPI="GooglePlacesSearch"
            numberOfLines={1}
            
        />

        
        <TouchableOpacity style={styles.button}
                        onPress={onClickNext}
              >
                <Text style={{
                    color:Colors.WHITE, 
                    fontSize:16,
                    fontFamily: 'outfit',
                    textAlign: "center",
                    padding: 5
                }}>Continue</Text>
        </TouchableOpacity >
    </View>
  )
}

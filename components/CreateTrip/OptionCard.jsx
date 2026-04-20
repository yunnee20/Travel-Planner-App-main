import { Colors } from "@/constants/Colors";
import { Text, View } from 'react-native';


export default function OptionCard({option, selectedOption}) {
    const isSelected = option?.id === selectedOption?.id;
  return (
    
    <View style={{
        backgroundColor: isSelected ? Colors.PRIMARY : "#f0f0f0",
        padding: 15,
        borderRadius: 10,
        marginRight: 15,
        alignItems: "center",
        minWidth: 100,
    }}>
      <View>
        <Text
          style={{
            color: isSelected ? "#FFFFFF" : "#333",
            fontFamily: "outfit-bold",
            textAlign: "center"
          }}
        >
          {option.title}
        </Text>
        <Text
          style={{
            color: isSelected ? "#FFFFFF" :"#666",
            fontFamily: "outfit",
            fontSize: 12,
            textAlign: "center"
          }}
        >
          {option.desc}
        </Text>
      </View>
    </View>
  )
}
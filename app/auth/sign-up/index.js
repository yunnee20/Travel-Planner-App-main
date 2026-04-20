import { Colors } from '@/constants/Colors';
import { styles } from '@/constants/style';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function SignUp() {

  const router = useRouter();

  return (
    <View style={{padding:25}}>
      <TouchableOpacity onPress={()=>router.back()}>
        <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{fontFamily: 'outfit-bold', fontSize: 30, marginTop: 30}}>Create New Account </Text>
      

      <View style={{
        paddingTop: 25,
        paddingBottom: 25
      }}>
        <Text>Your Full Name</Text>
        <TextInput style={styles.input} placeholder='Enter Full Name'/>

        <Text>Your Email</Text>
        <TextInput style={styles.input} placeholder='Enter Email'/>

        <Text>Your Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} placeholder='Enter Password'/>
      </View>

      <View>
        <Separator />
      </View>

      <View>
        
        <TouchableOpacity style={styles.button}
                  onPress={()=>router.push('')}
        >
          <Text style={{
              color:Colors.WHITE, 
              fontSize:16,
              fontFamily: 'outfit',
              textAlign: "center",
              padding: 5
          }}>Create Account</Text>
        </TouchableOpacity >

        <TouchableOpacity style={styles.button2}
                  onPress={()=>router.replace('auth/sign-in')}
        >
          <Text style={{
              color:Colors.PRIMARY, 
              fontSize:16,
              fontFamily: 'outfit',
              textAlign: "center",
              padding: 5
          }}>Sign In</Text>
        </TouchableOpacity >
        
      </View>
    </View>
  )
}

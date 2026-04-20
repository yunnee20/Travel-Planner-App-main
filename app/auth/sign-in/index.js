import { Colors } from '@/constants/Colors';
import { styles } from '@/constants/style';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import 'react-native-get-random-values';

const Separator = () => <View style={styles.separator} />;

export default function SignIn() {
  const correctUsername = "admin";
  const correctPassword = "hello123";
  let title = "";
  let sub="";

  const router = useRouter();
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  return (
    <View style={{padding:25}}>
      <TouchableOpacity onPress={()=>router.back()}>
        <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{fontFamily: 'outfit-bold', fontSize: 30, marginTop: 30}}>Let's Sign You In </Text>
      <Text style={{fontFamily: 'outfit-bold', fontSize: 20, paddingTop: 20}}>Welcome Back</Text>

      <View style={{
        paddingTop: 25,
        paddingBottom: 25
      }}>
        <Text>Your Username</Text>
        <TextInput 
        style={styles.input} 
        placeholder='Enter Username'
        onChangeText={onChangeUsername}
        value={username}
        />

        <Text>Your Password</Text>
        <TextInput 
        style={styles.input} 
        secureTextEntry={true} 
        placeholder='Enter Password'
        onChangeText={onChangePassword}
        value={password}
        />
      </View>

      <View>
        <Separator />
      </View>

      <View>
        
        <TouchableOpacity style={styles.button}
          onPress={()=>{
            
            if((username == correctUsername)&&(password==correctPassword)){
              // console.log("correct proceed");
              router.replace('/mytrip')
            }else{
              if((username == "")||(password=="")){
                title = "Please Enter Details";
                sub = "Do not leave blank";
              }else{
                title = "Incorrect Details";
                sub = "Incorrect Details Entered.\nTry Again";
              }
              Alert.alert(title, sub, [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                }])
            } 
          
          }}
        >
          <Text style={{
              color:Colors.WHITE, 
              fontSize:16,
              fontFamily: 'outfit',
              textAlign: "center",
              padding: 5
          }}>Continue</Text>
        </TouchableOpacity >

        <TouchableOpacity style={styles.button2}
                  onPress={()=>router.replace('auth/sign-up')}
        >
          <Text style={{
              color:Colors.PRIMARY, 
              fontSize:16,
              fontFamily: 'outfit',
              textAlign: "center",
              padding: 5
          }}>Create Account</Text>
        </TouchableOpacity >
        
      </View>
    </View>
  )
}

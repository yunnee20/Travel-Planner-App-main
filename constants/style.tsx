import { StyleSheet } from 'react-native';
import { Colors } from './Colors';

export const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.WHITE,
        marginTop: -20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:25,
        height:'100%'
    },

    button:{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius:99,
        marginTop: '25%'
    },

    button2:{
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius:99,
        borderWidth: 1,
        marginTop: '5%'
    },

    button3:{
        padding: 8,
        width: "20%", 
        backgroundColor: Colors.WHITE,
        borderRadius:60,
        // borderWidth: 1,
    },

    title:{
        fontSize:40,
        marginTop: 10,
        fontFamily: 'outfit-bold',
        textAlign: "center"
    },

    header:{
        fontSize:30,
        fontFamily: 'outfit-bold',
        textAlign: "center"
    },

    header2:{
        fontSize:25,
        fontFamily: 'outfit-bold',
        textAlign: "left"
    },

    subHead: {
        fontSize: 23,
        fontFamily: 'outfit-bold',
        textAlign: "center"
    },

    p:{
        fontSize:16,
        fontFamily: 'outfit',
        textAlign: "center",
        padding: 15
    }, 

    inBtn: {
        fontSize:16,
        fontFamily: 'outfit',
        textAlign: "left",
        padding: 5
    },

    input: {
        height: 60,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        padding: 15,
        fontSize: 20,
        borderRadius: 12,
        color: "#000"
    },

    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    igSelected:{
        backgroundColor: "#000", 
        width: "22%", 
        height: 10, 
        borderRadius: 6
    },

    igUnselected:{
        backgroundColor: "#ccc", 
        width: "22%", 
        height: 10, 
        borderRadius: 6
    },

    discoverBox:{
        borderRadius: 20, 
        marginBottom: 30,
        backgroundColor: "#ffffff",
        shadowColor: "#cccccc",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 5,
            width: 2
        }
    },

    discoverImg:{
        width:'100%',
        height: 120, 
        objectFit: "cover", 
        borderRadius: 12, 
        marginBottom: 20
    }

})
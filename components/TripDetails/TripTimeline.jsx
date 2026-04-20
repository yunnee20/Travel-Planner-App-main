import { Component } from 'react';
import { View } from 'react-native';
import Timeline from "react-native-beautiful-timeline";


class Itinerary extends Component {
  constructor(){
    const dateFormat = "DD ddd, HH:mm";
    const mydate = "2025-06-18T11:00:00.000Z";
    super()
    this.data = [
    {
      "date": mydate,
      "data": [
        {
          "title": "London Eye",
          "subtitle": "🚶‍➡️5 mins",
          "date": mydate,
        },
        {
          "title": "Sole Restaurant",
          "subtitle": "🚶‍➡️25 mins",
          "date": mydate
        }
      ]
    },
    {
      "date": mydate,
      "data": [
        {
          "title": "British Musuem",
          "subtitle": "🚶‍➡️10 mins",
          "date": mydate
        },
        {
          "title": "St James Park",
          "subtitle": "🚶‍➡️10 mins",
          "date": mydate
        },
        {
          "title": "Tate Modern",
          "subtitle": "🚶‍➡️10 mins",
          "date": mydate
        }
      ]
    },
    {
      "date": 1574125621000,
      "data": [
        {
          "title": "Natural History Musuem",
          "subtitle": "🚶‍➡️5 mins",
          "date": 1574125621000
        },
        {
          "title": "Ria Restaurant",
          "subtitle": "🚶‍➡️25 mins",
          "date": 1574125621000
        },
        {
          "title": "Thai Food",
          "subtitle": "🚶‍➡️5 mins",
          "date": 1574125621000
        },
        {
          "title": "Chinatown",
          "subtitle": "🚶‍➡️5 mins",
          "date": 1574125621000
        },
      ]
    }
  ]
}
render(){
  return (
    <View style={{
        marginTop: 30, 

    }}>
          <Timeline style={{
        paddingTop: 20, 
        width: "100%"
      }} data={this.data}/>

      
    </View>
  )
}
  
}
export default Itinerary;

// export const travelerOptions = [
//   { id: 1, title: "Just Me", icon: "", desc: "1" },
//   { id: 2, title: "A couple", icon: "", desc: "2" },
//   { id: 3, title: "Family", icon: "", desc: "3" },
//   { id: 4, title: "Friends", icon: "", desc: "5" },
// ];

export const budgetOptions = [
  { id: 1, title: "Low", icon: "", desc:"Lowest Cost Possible" },
  { id: 2, title: "Moderate", icon: "", desc:"Reasonable enjoyment" },
  { id: 3, title: "Luxury", icon: "", desc:"Enjoy to the MAX"}
];

export const AI_PROMPT = 'Generate Travel Plan for Location: {location}, from {startDate} to {endDate}, for {totalDay} Days and {totalNight} Night for total number of {travelerNumber} people, with a {budget} budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel Address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image URL, Geo Coordinates, ticket Pricing, Time to travel each of the location for {totalDay} days and {totalNight} night with each day plan with best time to visit in JSON format with no paragraph or additional comments, no ending note, just structured data'

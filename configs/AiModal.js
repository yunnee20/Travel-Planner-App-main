const {
    GoogleGenerativeAI,
    HarmCategory, 
    HarmBlockThreshold,
} = require("@google/generative-ai");

const API = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_KEY;
const genAI = new GoogleGenerativeAI(API);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
});

const genConfig ={
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
    // responseSchema: 
}

export const chatSession = model.startChat({
    genConfig, 
    history: [
    {
        role: 'user',
        parts: [
            {
            text: `Generate Travel Plan for Location: London, UK, from 2025-06-12 to 2025-06-14, for 3 Days and 2 Night total number of 3 people, with a Moderate budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel Address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image URL, Geo Coordinates, ticket Pricing, Time to travel each of the location for 3 days and 2 night with each day plan with best time to visit in JSON format with no paragraph or additional comments, no ending note, just structured data`,
            },
        ],
    },
    {
        role: 'model',
        parts: [
            {
            text: 
            `{
                "tripDetails": {
                    "location": "London, UK",
                    "duration": { "days": 3, "nights": 2 },
                    "numPeople": 3,
                    "dates":{ "start": "2025-06-12", "end":"2025-06-14"}
                    "budget": "Moderate"
                },
                "flights": [
                    {
                    "flightNumber": "BA2492",
                    "airline": "British Airways",
                    "departure": "JFK",
                    "arrival": "LHR",
                    "price": 600,
                    "bookingUrl": "https://www.britishairways.com",
                    "date": "2024-03-15"
                    }
                ],
                "hotels": [
                    {
                    "hotelName": "The Z Hotel Piccadilly",
                    "address": "66-70 Piccadilly, London W1J 9RU, UK",
                    "price": "150",
                    "imageUrl": "https://www.example.com/zhotel.jpg",
                    "geoCoordinates": { "latitude": "51.5074", "longitude": "-0.1338" },
                    "rating": "4",
                    "description": "Modern hotel in central London",
                    "nearbyPlaces": [
                        {
                        "placeName": "Buckingham Palace",
                        "details": "Royal residence",
                        "imageUrl": "https://www.example.com/buckinghampalace.jpg",
                        "geoCoordinates": { "latitude": "51.5014", "longitude": "-0.1419" },
                        "ticketPrice": "0",
                        "travelTime": "15 minutes"
                        },
                        {
                        "placeName": "National Gallery",
                        "details": "Art museum",
                        "imageUrl": "https://www.example.com/nationalgallery.jpg",
                        "geoCoordinates": { "latitude": "51.5074", "longitude": "-0.1278" },
                        "ticketPrice": "0",
                        "travelTime": "10 minutes"
                        }
                    ]
                    },
                    {
                    "hotelName": "Travelodge London Central Marylebone",
                    "address": "11-13 Chiltern St, Marylebone, London W1U 6JD, UK",
                    "price": "120",
                    "imageUrl": "https://www.example.com/travelodge.jpg",
                    "geoCoordinates": { "latitude": "51.522", "longitude": "-0.1587" },
                    "rating": "3.5",
                    "description": "Budget-friendly hotel near Regent's Park",
                    "nearbyPlaces": [
                        {
                        "placeName": "Regent's Park",
                        "details": "Large park",
                        "imageUrl": "https://www.example.com/regentspark.jpg",
                        "geoCoordinates": { "latitude": "51.5297", "longitude": "-0.1587" },
                        "ticketPrice": "0",
                        "travelTime": "5 minutes"
                        },
                        {
                        "placeName": "London Zoo",
                        "details": "Zoo",
                        "imageUrl": "https://www.example.com/londonzoo.jpg",
                        "geoCoordinates": { "latitude": "51.5362", "longitude": "-0.1529" },
                        "ticketPrice": "30",
                        "travelTime": "15 minutes"
                        }
                    ]
                    }
                ],
                "dailyPlan": {
                "day1": {
                "time": "Morning",
                "places": [
                    {
                    "placeName": "Tower of London",
                    "details": "Historic castle",
                    "imageUrl": "ExampleImageUrlTower",
                    "geoCoordinates": {
                        "latitude": 51.5081,
                        "longitude": -0.0759
                    },
                    "ticketPricing": "Paid",
                    "travelTime": "30 mins"
                    }
                ],
                "time": "Afternoon",
                "places": [
                    {
                    "placeName": "Tower Bridge",
                    "details": "Iconic bridge",
                    "imageUrl": "ExampleImageUrlTowerBridge",
                    "geoCoordinates": {
                        "latitude": 51.5055,
                        "longitude": -0.0759
                    },
                    "ticketPricing": "Paid (exhibition)",
                    "travelTime": "5 mins"
                    }
                ],
                "time": "Evening",
                "places": [
                    {
                    "placeName": "Borough Market",
                    "details": "Food market",
                    "imageUrl": "ExampleImageUrlBorough",
                    "geoCoordinates": {
                        "latitude": 51.5051,
                        "longitude": -0.0891
                    },
                    "ticketPricing": "Free entry",
                    "travelTime": "15 mins"
                    }
                ]
                },
                "day2": {
                "time": "Morning",
                "places": [
                    {
                    "placeName": "Buckingham Palace",
                    "details": "Royal residence",
                    "imageUrl": "ExampleImageUrlBuckingham",
                    "geoCoordinates": {
                        "latitude": 51.5014,
                        "longitude": -0.1419
                    },
                    "ticketPricing": "Free (exterior)",
                    "travelTime": "30 mins"
                    }
                ],
                "time": "Afternoon",
                "places": [
                    {
                    "placeName": "Westminster Abbey",
                    "details": "Historic church",
                    "imageUrl": "ExampleImageUrlWestminster",
                    "geoCoordinates": {
                        "latitude": 51.503,
                        "longitude": -0.127
                    },
                    "ticketPricing": "Paid",
                    "travelTime": "15 mins"
                    }
                ],
                "time": "Evening",
                "places": [
                    {
                    "placeName": "London Eye",
                    "details": "Observation wheel",
                    "imageUrl": "ExampleImageUrlLondonEye",
                    "geoCoordinates": {
                        "latitude": 51.5033,
                        "longitude": -0.1195
                    },
                    "ticketPricing": "Paid",
                    "travelTime": "10 mins"
                    }
                ]
                },
                "day3": {
                "time": "Morning",
                "places": [
                    {
                    "placeName": "British Museum",
                    "details": "World history museum",
                    "imageUrl": "ExampleImageUrlBritishMuseum",
                    "geoCoordinates": {
                        "latitude": 51.519,
                        "longitude": -0.127
                    },
                    "ticketPricing": "Free (general admission)",
                    "travelTime": "30 mins"
                    }
                ],
                "time": "Afternoon",
                "places":[
                    {
                    "placeName": "Hyde Park",
                    "details": "Large park",
                    "imageUrl": "ExampleImageUrlHydePark",
                    "geoCoordinates": {
                        "latitude": 51.507,
                        "longitude": -0.161
                    },
                    "ticketPricing": "Free",
                    "travelTime": "20 mins"
                    }
                ]
                }`
                ,
            },
        ],
    }],
});
    
 
    
    
    
    
    
    
    
    // history: [
    // {
    //     role: 'user',
    //     parts: [
    //         {
    //         text: `Generate Travel Plan for Location: Kuwait, for 3 Days and 2 Night for A couple, total number of 2 people, with a Moderate budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel Address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image URL, Geo Coordinates, ticket Pricing, Time to travel each of the location for 3 days and 2 night with each day plan with best time to visit in JSON format`,
    //         },
    //     ],
    // },
    // {
    //     role: 'model',
    //     parts: [
    //         {
    //         text: `[
    //         {
    //             "travelPlan": {
    //             "location": "Kuwait",
    //             "duration": "3 Days / 2 Nights",
    //             "travelers": {
    //                 "adults": 2
    //             },
    //             "budget": "Moderate",
    //             "flightDetails": {
    //                 "airline": "Kuwait Airways",
    //                 "price": "$800 (Round Trip)",
    //                 "bookingUrl": "https://www.kuwaitairways.com/"
    //             },
    //             "hotelOptions": [
    //                 {
    //                 "hotelName": "The Regency Kuwait",
    //                 "hotelAddress": "Al Taawun Street, Salmiya, Kuwait",
    //                 "price": "$250/night",
    //                 "hotelImageUrl": "https://example.com/regency_kuwait.jpg",
    //                 "geoCoordinates": {
    //                     "latitude": 29.3443,
    //                     "longitude": 48.0765
    //                 },
    //                 "rating": 4.5,
    //                 "description": "Luxurious hotel with private beach access, multiple restaurants, and a spa."
    //                 },
    //                 {
    //                 "hotelName": "Radisson Blu Hotel, Kuwait",
    //                 "hotelAddress": "Al Bida'a, Arabian Gulf Street, Kuwait",
    //                 "price": "$200/night",
    //                 "hotelImageUrl": "https://example.com/radisson_kuwait.jpg",
    //                 "geoCoordinates": {
    //                     "latitude": 29.3333,
    //                     "longitude": 48.0833
    //                 },
    //                 "rating": 4.2,
    //                 "description": "Modern hotel with sea views, swimming pools, and diverse dining options."
    //                 }
    //             ],
    //             "dailyPlan": [
    //                 {
    //                 "day": 1,
    //                 "theme": "Historical and Cultural Immersion",
    //                 "activities": [
    //                     {
    //                     "placeName": "Grand Mosque",
    //                     "placeDetails": "The largest mosque in Kuwait, known for its stunning Islamic architecture.",
    //                     "placeImageUrl": "https://example.com/grand_mosque.jpg",
    //                     "geoCoordinates": {
    //                         "latitude": 29.3753,
    //                         "longitude": 47.9769
    //                     },
    //                     "ticketPricing": "Free",
    //                     "timeToTravel": "15 minutes from Salmiya",
    //                     "bestTimeToVisit": "Morning (9:00 AM - 11:00 AM)"
    //                     },
    //                     {
    //                     "placeName": "Kuwait National Museum",
    //                     "placeDetails": "Showcasing Kuwait's history and heritage.",
    //                     "placeImageUrl": "https://example.com/national_museum.jpg",
    //                     "geoCoordinates": {
    //                         "latitude": 29.3789,
    //                         "longitude": 47.9722
    //                     },
    //                     "ticketPricing": "$5",
    //                     "timeToTravel": "5 minutes from Grand Mosque",
    //                     "bestTimeToVisit": "Afternoon (2:00 PM - 4:00 PM)"
    //                     },
    //                     {
    //                     "placeName": "Souk Al-Mubarakiya",
    //                     "placeDetails": "Traditional market with spices, dates, and local products.",
    //                     "placeImageUrl": "https://example.com/souk.jpg",
    //                     "geoCoordinates": {
    //                         "latitude": 29.3748,
    //                         "longitude": 47.9774
    //                     },
    //                     "ticketPricing": "Free (shopping costs vary)",
    //                     "timeToTravel": "5 minutes from Kuwait National Museum",
    //                     "bestTimeToVisit": "Evening (6:00 PM - 8:00 PM)"
    //                     }
    //                 ]
    //                 },
    //                 {
    //                 "day": 2,
    //                 "theme": "Modern Kuwait & Coastal Views",
    //                 "activities": [
    //                     {
    //                     "placeName": "Kuwait Towers",
    //                     "placeDetails": "Iconic landmark offering panoramic views of Kuwait City.",
    //                     "placeImageUrl": "https://example.com/kuwait_towers.jpg",
    //                     "geoCoordinates": {
    //                         "latitude": 29.3667,
    //                         "longitude": 47.9933
    //                     },
    //                     "ticketPricing": "$10",
    //                     "timeToTravel": "20 minutes from Souk Al-Mubarakiya",
    //                     "bestTimeToVisit": "Late Morning (11:00 AM - 1:00 PM)"
    //                     },
    //                     {
    //                     "placeName": "The Avenues Mall",
    //                     "placeDetails": "One of the largest malls in the Middle East, offering a wide range of shopping and dining experiences.",
    //                     "placeImageUrl": "https://example.com/avenues_mall.jpg",
    //                     "geoCoordinates": {
    //                         "latitude": 29.3000,
    //                         "longitude": 47.9167
    //                     },
    //                     "ticketPricing": "Free (shopping costs vary)",
    //                     "timeToTravel": "30 minutes from Kuwait Towers",
    //                     "bestTimeToVisit": "Afternoon (3:00 PM - 6:00 PM)"
    //                     },
    //                     {
    //                     "placeName": "Marina Beach",
    //                     "placeDetails": "A great place to relax and enjoy the sea view.",
    //                     "placeImageUrl": "https://example.com/beach.jpg",
    //                     "geoCoordinates": {
    //                         "latitude": 29.3346,
    //                         "longitude": 48.0939
    //                     },
    //                     "ticketPricing": "Free",
    //                     "timeToTravel": "15 minutes from Avenues Mall",
    //                     "bestTimeToVisit": "Evening (7:00 PM - 9:00 PM)"
    //                     }
    //                 ]
    //                 },
    //                 {
    //                 "day": 3,
    //                 "theme": "Island Escape and Relaxation",
    //                 "activities": [
    //                     {
    //                     "placeName": "Failaka Island",
    //                     "placeDetails": "Island with historical sites and beaches.",
    //                     "placeImageUrl": "https://example.com/failaka_island.jpg",
    //                     "geoCoordinates": {
    //                         "latitude": 29.4231,
    //                         "longitude": 48.3092
    //                     },
    //                     "ticketPricing": "$20 (ferry)",
    //                     "timeToTravel": "Ferry from Kuwait City (approx. 1 hour)",
    //                     "bestTimeToVisit": "Full day (10:00 AM - 5:00 PM)"
    //                     },
    //                     {
    //                     "placeName": "Relax at Hotel",
    //                     "placeDetails": "Enjoy the hotel ammenities",
    //                     "placeImageUrl": "https://example.com/relax.jpg",
    //                     "geoCoordinates": {
    //                         "latitude": 29.3443,
    //                         "longitude": 48.0765
    //                     },
    //                     "ticketPricing": "Free",
    //                     "timeToTravel": "Back to Hotel",
    //                     "bestTimeToVisit": "Evening (6:00 PM - 9:00 PM)"
    //                     }
    //                 ]
    //                 }
    //             ]
    //                 }
    //             }
    //             ]`,
    //         },
    //     ],
    // }]

// await main();
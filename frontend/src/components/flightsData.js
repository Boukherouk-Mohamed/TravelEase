
const flightsData= [
        {
            id :"1",
            flight_date: "2023-07-31",
            departure: {
                airport: "Da Nang",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:00:00",
                estimated: "2023-07-31T06:00:00+00:00",
            },
            arrival : {
                airport: "Tan Son Nhat International",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:40:00",
                estimated: "2023-07-31T07:40:00+00:00",
            },
            airline : {
                name: "Vietnam Airlines",
                iata: "VN",
                icao: "HVN"
            },
            flight : {
                number: "141",
                iata: "VN141",
                icao: "HVN141",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"2",
            flight_date: "2023-07-31",
            departure: {
                airport: "Da Nang",
                scheduled_date: "2023-07-31",
                scheduled_time :"05:45:00",
                estimated: "2023-07-31T05:45:00+00:00",
            },
            arrival : {
                airport: "Noibai International",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:25:00",
                estimated: "2023-07-31T07:25:00+00:00",
            },
            airline : {
                name: "Vietnam Airlines",
                iata: "VN",
                icao: "HVN"
            },
            flight : {
                number: "186",
                iata: "VN186",
                icao: "HVN186",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),

        },
        {
            id :"3",
            flight_date: "2023-07-31",
            departure: {
                airport: "Dubai",
                scheduled_date: "2023-07-31",
                scheduled_time :"05:05:00",
                estimated: "2023-07-31T05:05:00+00:00",
            },
            arrival : {
                airport: "Doha International",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:45:00",
                estimated: "2023-07-31T07:45:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "QR",
                icao: "QTR"
            },
            flight : {
                number: "643",
                iata: "QR643",
                icao: "QTR643",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"4",
            flight_date: "2023-07-31",
            departure: {
                airport: "Dubai",
                scheduled_date: "2023-07-31",
                scheduled_time :"05:05:00",
                estimated: "2023-07-31T05:05:00+00:00",
            },
            arrival : {
                airport: "Doha International",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:45:00",
                estimated: "2023-07-31T07:45:00+00:00",
            },
            airline : {
                name: "Finnair",
                iata: "AY",
                icao: "FIN"
            },
            flight : {
                number: "6512",
                iata: "AY6512",
                icao: "FIN6512",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"5",
            flight_date: "2023-07-31",
            departure: {
                airport: "Dubai",
                scheduled_date: "2023-07-31",
                scheduled_time :"05:05:00",
                estimated: "2023-07-31T05:05:00+00:00",
            },
            arrival : {
                airport: "Doha International",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:45:00",
                estimated: "2023-07-31T07:45:00+00:00",
            },
            airline : {
                name: "American Airlines",
                iata: "AA",
                icao: "AAL"
            },
            flight : {
                number: "8234",
                iata: "AA8234",
                icao: "AAL8234",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"6",
            flight_date: "2023-07-31",
            departure: {
                airport: "Dubai",
                scheduled_date: "2023-07-31",
                scheduled_time :"05:00:00",
                estimated: "2023-07-31T05:00:00+00:00",
            },
            arrival : {
                airport: "Kuwait International",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:05:00",
                estimated: "2023-07-31T08:05:00+00:00",
            },
            airline : {
                name: "Jazeera Airways",
                iata: "J9",
                icao: "JZR"
            },
            flight : {
                number: "532",
                iata: "J9532",
                icao: "JZR532",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"7",
            flight_date: "2023-07-31",
            departure: {
                airport: "Dubai",
                scheduled_date: "2023-07-31",
                scheduled_time :"05:00:00",
                estimated: "2023-07-31T05:00:00+00:00",
            },
            arrival : {
                airport: "Abu Dhabi",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:55:00",
                estimated: "2023-07-31T07:55:00+00:00",
            },
            airline : {
                name: "Etihad Airways",
                iata: "EY",
                icao: "ETD"
            },
            flight : {
                number: "235",
                iata: "EY235",
                icao: "ETD235",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"8",
            flight_date: "2023-07-31",
            departure: {
                airport: "Dubai",
                scheduled_date: "2023-07-31",
                scheduled_time :"05:00:00",
                estimated: "2023-07-31T05:00:00+00:00",
            },
            arrival : {
                airport: "Kuala Lumpur",
                scheduled_date: "2023-07-31",
                scheduled_time :"10:50:00",
                estimated: "2023-07-31T10:50:00+00:00",
            },
            airline : {
                name: "AirAsia",
                iata: "AK",
                icao: "AXM"
            },
            flight : {
                number: "76",
                iata: "AK76",
                icao: "AXM76",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"9",
            flight_date: "2023-07-31",
            departure: {
                airport: "Dubai",
                scheduled_date: "2023-07-31",
                scheduled_time :"04:20:00",
                estimated: "2023-07-31T04:20:00+00:00",
            },
            arrival : {
                airport: "Dubai",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:20:00",
                estimated: "2023-07-31T08:20:00+00:00",
            },
            airline : {
                name: "Biman Bangladesh Airlines",
                iata: "BG",
                icao: "BBC"
            },
            flight : {
                number: "3963",
                iata: "BG3963",
                icao: "BBC3963",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"10",
            flight_date: "2023-07-31",
            departure: {
                airport: "Dubai",
                scheduled_date: "2023-07-31",
                scheduled_time :"04:30:00",
                estimated: "2023-07-31T04:30:00+00:00",
            },
            arrival : {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"05:20:00",
                estimated: "2023-07-31T05:20:00+00:00",
            },
            airline : {
                name: "Sharp Airlines",
                iata: "SH",
                icao: "SHA"
            },
            flight : {
                number: "226",
                iata: "SH226",
                icao: "SHA226",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"11",
            flight_date: "2023-07-31",
            departure: {
                airport: "Dubai",
                scheduled_date: "2023-07-31",
                scheduled_time :"00:10:00",
                estimated: "2023-07-31T00:10:00+00:00",
            },
            arrival : {
                airport: "Dubai",
                scheduled_date: "2023-07-31",
                scheduled_time :"02:10:00",
                estimated: "2023-07-31T02:10:00+00:00",
            },
            airline : {
                name: "Air Mauritius",
                iata: "MK",
                icao: "MAU"
            },
            flight : {
                number: "9960",
                iata: "MK9960",
                icao: "MAU9960",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"12",
            flight_date: "2023-07-31",
            departure: {
                airport: "Dubai",
                scheduled_date: "2023-07-31",
                scheduled_time :"00:10:00",
                estimated: "2023-07-31T00:10:00+00:00",
            },
            arrival : {
                airport: "Rabat",
                scheduled_date: "2023-07-31",
                scheduled_time :"02:10:00",
                estimated: "2023-07-31T02:10:00+00:00",
            },
            airline : {
                name: "Air Canada",
                iata: "AC",
                icao: "ACA"
            },
            flight : {
                number: "7586",
                iata: "AC7586",
                icao: "ACA7586",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"13",
            flight_date: "2023-07-31",
            departure: {
                airport: "Dubai",
                scheduled_date: "2023-07-31",
                scheduled_time :"04:35:00",
                estimated: "2023-07-31T04:35:00+00:00",
            },
            arrival : {
                airport: "Dubai",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:05:00",
                estimated: "2023-07-31T07:05:00+00:00",
            },
            airline : {
                name: "Emirates",
                iata: "EK",
                icao: "UAE"
            },
            flight : {
                number: "523",
                iata: "EK523",
                icao: "UAE523",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"14",
            flight_date: "2023-07-31",
            departure: {
                airport: "Dubai",
                scheduled_date: "2023-07-31",
                scheduled_time :"04:10:00",
                estimated: "2023-07-31T04:10:00+00:00",
            },
            arrival : {
                airport: "Sharjah",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:00:00",
                estimated: "2023-07-31T07:00:00+00:00",
            },
            airline : {
                name: "Air India Express",
                iata: "IX",
                icao: "AXB"
            },
            flight : {
                number: "535",
                iata: "IX535",
                icao: "AXB535",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"15",
            flight_date: "2023-07-31",
            departure: {
                airport: "Dubai",
                scheduled_date: "2023-07-31",
                scheduled_time :"03:50:00",
                estimated: "2023-07-31T03:50:00+00:00",
            },
            arrival : {
                airport: "Doha",
                scheduled_date: "2023-07-31",
                scheduled_time :"05:55:00",
                estimated: "2023-07-31T05:55:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "QR",
                icao: "QTR"
            },
            flight : {
                number: "507",
                iata: "QR507",
                icao: "QTR507",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"16",
            flight_date: "2023-07-31",
            departure: {
                airport: "Dubai",
                scheduled_date: "2023-07-31",
                scheduled_time :"01:15:00",
                estimated: "2023-07-31T01:15:00+00:00",
            },
            arrival : {
                airport: "Rabat",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:15:00",
                estimated: "2023-07-31T06:15:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "DP",
                icao: "PBD"
            },
            flight : {
                number: "564",
                iata: "DP564",
                icao: "PBD564",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"17",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:05:00",
                estimated: "2023-07-31T07:05:00+00:00",
            },
            arrival : {
                airport: "Sharjah",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:50:00",
                estimated: "2023-07-31T09:50:00+00:00",
            },
            airline : {
                name: "Shandong Airlines",
                iata: "SC",
                icao: "CDG"
            },
            flight : {
                number: "2237",
                iata: "SC2237",
                icao: "CDG2237",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"18",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:05:00",
                estimated: "2023-07-31T07:05:00+00:00",
            },
            arrival : {
                airport: "Sharjah",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:50:00",
                estimated: "2023-07-31T09:50:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "ZH",
                icao: "CSZ"
            },
            flight : {
                number: "2587",
                iata: "ZH2587",
                icao: "CSZ2587",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"19",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:05:00",
                estimated: "2023-07-31T07:05:00+00:00",
            },
            arrival : {
                airport: "Sharjah",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:50:00",
                estimated: "2023-07-31T09:50:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "TV",
                icao: "TBA"
            },
            flight : {
                number: "6927",
                iata: "TV6927",
                icao: "TBA6927",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"20",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:05:00",
                estimated: "2023-07-31T07:05:00+00:00",
            },
            arrival : {
                airport: "Sharjah",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:50:00",
                estimated: "2023-07-31T09:50:00+00:00",
            },
            airline : {
                name: "China Express Air",
                iata: "G5",
                icao: "HXA"
            },
            flight : {
                number: "6451",
                iata: "G56451",
                icao: "HXA6451",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"21",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:05:00",
                estimated: "2023-07-31T07:05:00+00:00",
            },
            arrival : {
                airport: "Sharjah",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:50:00",
                estimated: "2023-07-31T09:50:00+00:00",
            },
            airline : {
                name: "Air China LTD",
                iata: "CA",
                icao: "CCA"
            },
            flight : {
                number: "4885",
                iata: "CA4885",
                icao: "CCA4885",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"22",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:05:00",
                estimated: "2023-07-31T07:05:00+00:00",
            },
            arrival : {
                airport: "Abu Dhabi",
                scheduled_date: "2023-07-31",
                scheduled_time :"10:00:00",
                estimated: "2023-07-31T10:00:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "NS",
                icao: "HBH"
            },
            flight : {
                number: "3283",
                iata: "NS3283",
                icao: "HBH3283",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"23",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:05:00",
                estimated: "2023-07-31T07:05:00+00:00",
            },
            arrival : {
                airport: "Abu Dhabi",
                scheduled_date: "2023-07-31",
                scheduled_time :"10:00:00",
                estimated: "2023-07-31T10:00:00+00:00",
            },
            airline : {
                name: "Xiamen Airlines",
                iata: "MF",
                icao: "CXA"
            },
            flight : {
                number: "7051",
                iata: "MF7051",
                icao: "CXA7051",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"24",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:05:00",
                estimated: "2023-07-31T07:05:00+00:00",
            },
            arrival : {
                airport: "Abu Dhabi",
                scheduled_date: "2023-07-31",
                scheduled_time :"10:00:00",
                estimated: "2023-07-31T10:00:00+00:00",
            },
            airline : {
                name: "China Southern Airlines",
                iata: "CZ",
                icao: "CSN"
            },
            flight : {
                number: "9750",
                iata: "CZ9750",
                icao: "CSN9750",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"25",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:00:00",
                estimated: "2023-07-31T07:00:00+00:00",
            },
            arrival : {
                airport: "Kuala Lumpur",
                scheduled_date: "2023-07-31",
                scheduled_time :"10:00:00",
                estimated: "2023-07-31T10:00:00+00:00",
            },
            airline : {
                name: "Xiamen Airlines",
                iata: "MF",
                icao: "CXA"
            },
            flight : {
                number: "8117",
                iata: "MF8117",
                icao: "CXA8117",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"26",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:00:00",
                estimated: "2023-07-31T07:00:00+00:00",
            },
            arrival : {
                airport: "Kuala Lumpur",
                scheduled_date: "2023-07-31",
                scheduled_time :"10:00:00",
                estimated: "2023-07-31T10:00:00+00:00",
            },
            airline : {
                name: "Sichuan Airlines",
                iata: "3U",
                icao: "CSC"
            },
            flight : {
                number: "2089",
                iata: "3U2089",
                icao: "CSC2089",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"27",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:00:00",
                estimated: "2023-07-31T07:00:00+00:00",
            },
            arrival : {
                airport: "Kuala Lumpur",
                scheduled_date: "2023-07-31",
                scheduled_time :"10:00:00",
                estimated: "2023-07-31T10:00:00+00:00",
            },
            airline : {
                name: "China Southern Airlines",
                iata: "CZ",
                icao: "CSN"
            },
            flight : {
                number: "4088",
                iata: "CZ4088",
                icao: "CSN4088",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"28",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:00:00",
                estimated: "2023-07-31T07:00:00+00:00",
            },
            arrival : {
                airport: "Kuala Lumpur",
                scheduled_date: "2023-07-31",
                scheduled_time :"10:00:00",
                estimated: "2023-07-31T10:00:00+00:00",
            },
            airline : {
                name: "China Eastern Airlines",
                iata: "MU",
                icao: "CES"
            },
            flight : {
                number: "3289",
                iata: "MU3289",
                icao: "CES3289",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"29",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:00:00",
                estimated: "2023-07-31T07:00:00+00:00",
            },
            arrival : {
                airport: "Kuala Lumpur",
                scheduled_date: "2023-07-31",
                scheduled_time :"10:00:00",
                estimated: "2023-07-31T10:00:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "GJ",
                icao: "CDC"
            },
            flight : {
                number: "3289",
                iata: "GJ3289",
                icao: "CDC3289",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"30",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:00:00",
                estimated: "2023-07-31T07:00:00+00:00",
            },
            arrival : {
                airport: "Kuala Lumpur",
                scheduled_date: "2023-07-31",
                scheduled_time :"10:00:00",
                estimated: "2023-07-31T10:00:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "NS",
                icao: "HBH"
            },
            flight : {
                number: "8119",
                iata: "NS8119",
                icao: "HBH8119",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"31",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:00:00",
                estimated: "2023-07-31T07:00:00+00:00",
            },
            arrival : {
                airport: "Shanghai Hongqiao International",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:50:00",
                estimated: "2023-07-31T08:50:00+00:00",
            },
            airline : {
                name: "Xiamen Airlines",
                iata: "MF",
                icao: "CXA"
            },
            flight : {
                number: "8501",
                iata: "MF8501",
                icao: "CXA8501",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"32",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:00:00",
                estimated: "2023-07-31T07:00:00+00:00",
            },
            arrival : {
                airport: "Shanghai Hongqiao International",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:50:00",
                estimated: "2023-07-31T08:50:00+00:00",
            },
            airline : {
                name: "Sichuan Airlines",
                iata: "3U",
                icao: "CSC"
            },
            flight : {
                number: "2415",
                iata: "3U2415",
                icao: "CSC2415",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"33",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:00:00",
                estimated: "2023-07-31T07:00:00+00:00",
            },
            arrival : {
                airport: "Shanghai Hongqiao International",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:50:00",
                estimated: "2023-07-31T08:50:00+00:00",
            },
            airline : {
                name: "China Southern Airlines",
                iata: "CZ",
                icao: "CSN"
            },
            flight : {
                number: "4414",
                iata: "CZ4414",
                icao: "CSN4414",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"34",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:00:00",
                estimated: "2023-07-31T07:00:00+00:00",
            },
            arrival : {
                airport: "Shanghai Hongqiao International",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:50:00",
                estimated: "2023-07-31T08:50:00+00:00",
            },
            airline : {
                name: "China Eastern Airlines",
                iata: "MU",
                icao: "CES"
            },
            flight : {
                number: "8075",
                iata: "MU8075",
                icao: "CES8075",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"35",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:00:00",
                estimated: "2023-07-31T07:00:00+00:00",
            },
            arrival : {
                airport: "Shanghai Hongqiao International",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:50:00",
                estimated: "2023-07-31T08:50:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "GJ",
                icao: "CDC"
            },
            flight : {
                number: "3615",
                iata: "GJ3615",
                icao: "CDC3615",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"36",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:00:00",
                estimated: "2023-07-31T07:00:00+00:00",
            },
            arrival : {
                airport: "Shanghai Hongqiao International",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:50:00",
                estimated: "2023-07-31T08:50:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "NS",
                icao: "HBH"
            },
            flight : {
                number: "8495",
                iata: "NS8495",
                icao: "HBH8495",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"37",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"07:00:00",
                estimated: "2023-07-31T07:00:00+00:00",
            },
            arrival : {
                airport: "Xiangfan",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:25:00",
                estimated: "2023-07-31T09:25:00+00:00",
            },
            airline : {
                name: "Fuzhou Airlines",
                iata: "FU",
                icao: "FZA"
            },
            flight : {
                number: "6723",
                iata: "FU6723",
                icao: "FZA6723",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"38",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:55:00",
                estimated: "2023-07-31T06:55:00+00:00",
            },
            arrival : {
                airport: "Hangzhou",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:25:00",
                estimated: "2023-07-31T08:25:00+00:00",
            },
            airline : {
                name: "Shandong Airlines",
                iata: "SC",
                icao: "CDG"
            },
            flight : {
                number: "2111",
                iata: "SC2111",
                icao: "CDG2111",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"39",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:55:00",
                estimated: "2023-07-31T06:55:00+00:00",
            },
            arrival : {
                airport: "Hangzhou",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:25:00",
                estimated: "2023-07-31T08:25:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "TV",
                icao: "TBA"
            },
            flight : {
                number: "6825",
                iata: "TV6825",
                icao: "TBA6825",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"41",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:55:00",
                estimated: "2023-07-31T06:55:00+00:00",
            },
            arrival : {
                airport: "Hangzhou",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:25:00",
                estimated: "2023-07-31T08:25:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "ZH",
                icao: "CSZ"
            },
            flight : {
                number: "2531",
                iata: "ZH2531",
                icao: "CSZ2531",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"42",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:55:00",
                estimated: "2023-07-31T06:55:00+00:00",
            },
            arrival : {
                airport: "Hangzhou",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:25:00",
                estimated: "2023-07-31T08:25:00+00:00",
            },
            airline : {
                name: "China Express Air",
                iata: "G5",
                icao: "HXA"
            },
            flight : {
                number: "8357",
                iata: "G58357",
                icao: "HXA8357",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"43",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:55:00",
                estimated: "2023-07-31T06:55:00+00:00",
            },
            arrival : {
                airport: "Hangzhou",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:25:00",
                estimated: "2023-07-31T08:25:00+00:00",
            },
            airline : {
                name: "Air China LTD",
                iata: "CA",
                icao: "CCA"
            },
            flight : {
                number: "4633",
                iata: "CA4633",
                icao: "CCA4633",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"44",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:55:00",
                estimated: "2023-07-31T06:55:00+00:00",
            },
            arrival : {
                airport: "Chongqing Jiangbei International",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:50:00",
                estimated: "2023-07-31T09:50:00+00:00",
            },
            airline : {
                name: "Shandong Airlines",
                iata: "SC",
                icao: "CDG"
            },
            flight : {
                number: "2135",
                iata: "SC2135",
                icao: "CDG2135",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"45",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:55:00",
                estimated: "2023-07-31T06:55:00+00:00",
            },
            arrival : {
                airport: "Chongqing Jiangbei International",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:50:00",
                estimated: "2023-07-31T09:50:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "TV",
                icao: "TBA"
            },
            flight : {
                number: "6857",
                iata: "TV6857",
                icao: "TBA6857",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"46",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:55:00",
                estimated: "2023-07-31T06:55:00+00:00",
            },
            arrival : {
                airport: "Chongqing Jiangbei International",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:50:00",
                estimated: "2023-07-31T09:50:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "ZH",
                icao: "CSZ"
            },
            flight : {
                number: "2545",
                iata: "ZH2545",
                icao: "CSZ2545",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"47",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:55:00",
                estimated: "2023-07-31T06:55:00+00:00",
            },
            arrival : {
                airport: "Chongqing Jiangbei International",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:50:00",
                estimated: "2023-07-31T09:50:00+00:00",
            },
            airline : {
                name: "China Express Air",
                iata: "G5",
                icao: "HXA"
            },
            flight : {
                number: "8405",
                iata: "G58405",
                icao: "HXA8405",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"48",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:55:00",
                estimated: "2023-07-31T06:55:00+00:00",
            },
            arrival : {
                airport: "Chongqing Jiangbei International",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:50:00",
                estimated: "2023-07-31T09:50:00+00:00",
            },
            airline : {
                name: "Air China LTD",
                iata: "CA",
                icao: "CCA"
            },
            flight : {
                number: "4647",
                iata: "CA4647",
                icao: "CCA4647",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"49",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:55:00",
                estimated: "2023-07-31T06:55:00+00:00",
            },
            arrival : {
                airport: "Xianyang",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:50:00",
                estimated: "2023-07-31T09:50:00+00:00",
            },
            airline : {
                name: "Xiamen Airlines",
                iata: "MF",
                icao: "CXA"
            },
            flight : {
                number: "8247",
                iata: "MF8247",
                icao: "CXA8247",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"50",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:55:00",
                estimated: "2023-07-31T06:55:00+00:00",
            },
            arrival : {
                airport: "Xianyang",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:50:00",
                estimated: "2023-07-31T09:50:00+00:00",
            },
            airline : {
                name: "Sichuan Airlines",
                iata: "3U",
                icao: "CSC"
            },
            flight : {
                number: "2187",
                iata: "3U2187",
                icao: "CSC2187",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"51",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:55:00",
                estimated: "2023-07-31T06:55:00+00:00",
            },
            arrival : {
                airport: "Xianyang",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:50:00",
                estimated: "2023-07-31T09:50:00+00:00",
            },
            airline : {
                name: "China Southern Airlines",
                iata: "CZ",
                icao: "CSN"
            },
            flight : {
                number: "4186",
                iata: "CZ4186",
                icao: "CSN4186",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"52",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:55:00",
                estimated: "2023-07-31T06:55:00+00:00",
            },
            arrival : {
                airport: "Xianyang",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:50:00",
                estimated: "2023-07-31T09:50:00+00:00",
            },
            airline : {
                name: "China Eastern Airlines",
                iata: "MU",
                icao: "CES"
            },
            flight : {
                number: "4837",
                iata: "MU4837",
                icao: "CES4837",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"53",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:55:00",
                estimated: "2023-07-31T06:55:00+00:00",
            },
            arrival : {
                airport: "Xianyang",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:50:00",
                estimated: "2023-07-31T09:50:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "GJ",
                icao: "CDC"
            },
            flight : {
                number: "3387",
                iata: "GJ3387",
                icao: "CDC3387",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"54",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:55:00",
                estimated: "2023-07-31T06:55:00+00:00",
            },
            arrival : {
                airport: "Xianyang",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:50:00",
                estimated: "2023-07-31T09:50:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "NS",
                icao: "HBH"
            },
            flight : {
                number: "8253",
                iata: "NS8253",
                icao: "HBH8253",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"55",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:50:00",
                estimated: "2023-07-31T06:50:00+00:00",
            },
            arrival : {
                airport: "Tianhe International",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:45:00",
                estimated: "2023-07-31T08:45:00+00:00",
            },
            airline : {
                name: "Shandong Airlines",
                iata: "SC",
                icao: "CDG"
            },
            flight : {
                number: "2217",
                iata: "SC2217",
                icao: "CDG2217",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"56",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:50:00",
                estimated: "2023-07-31T06:50:00+00:00",
            },
            arrival : {
                airport: "Tianhe International",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:45:00",
                estimated: "2023-07-31T08:45:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "ZH",
                icao: "CSZ"
            },
            flight : {
                number: "2579",
                iata: "ZH2579",
                icao: "CSZ2579",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"57",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:50:00",
                estimated: "2023-07-31T06:50:00+00:00",
            },
            arrival : {
                airport: "Tianhe International",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:45:00",
                estimated: "2023-07-31T08:45:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "TV",
                icao: "TBA"
            },
            flight : {
                number: "6919",
                iata: "TV6919",
                icao: "TBA6919",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"58",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:50:00",
                estimated: "2023-07-31T06:50:00+00:00",
            },
            arrival : {
                airport: "Tianhe International",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:45:00",
                estimated: "2023-07-31T08:45:00+00:00",
            },
            airline : {
                name: "China Express Air",
                iata: "G5",
                icao: "HXA"
            },
            flight : {
                number: "8489",
                iata: "G58489",
                icao: "HXA8489",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"59",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:50:00",
                estimated: "2023-07-31T06:50:00+00:00",
            },
            arrival : {
                airport: "Tianhe International",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:45:00",
                estimated: "2023-07-31T08:45:00+00:00",
            },
            airline : {
                name: "Air China LTD",
                iata: "CA",
                icao: "CCA"
            },
            flight : {
                number: "4715",
                iata: "CA4715",
                icao: "CCA4715",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"60",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:50:00",
                estimated: "2023-07-31T06:50:00+00:00",
            },
            arrival : {
                airport: "Chongqing Jiangbei International",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:40:00",
                estimated: "2023-07-31T09:40:00+00:00",
            },
            airline : {
                name: "Xiamen Airlines",
                iata: "MF",
                icao: "CXA"
            },
            flight : {
                number: "8403",
                iata: "MF8403",
                icao: "CXA8403",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"61",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:50:00",
                estimated: "2023-07-31T06:50:00+00:00",
            },
            arrival : {
                airport: "Chongqing Jiangbei International",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:40:00",
                estimated: "2023-07-31T09:40:00+00:00",
            },
            airline : {
                name: "Sichuan Airlines",
                iata: "3U",
                icao: "CSC"
            },
            flight : {
                number: "2323",
                iata: "3U2323",
                icao: "CSC2323",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"62",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:50:00",
                estimated: "2023-07-31T06:50:00+00:00",
            },
            arrival : {
                airport: "Chongqing Jiangbei International",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:40:00",
                estimated: "2023-07-31T09:40:00+00:00",
            },
            airline : {
                name: "China Southern Airlines",
                iata: "CZ",
                icao: "CSN"
            },
            flight : {
                number: "4322",
                iata: "CZ4322",
                icao: "CSN4322",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"63",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:50:00",
                estimated: "2023-07-31T06:50:00+00:00",
            },
            arrival : {
                airport: "Chongqing Jiangbei International",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:40:00",
                estimated: "2023-07-31T09:40:00+00:00",
            },
            airline : {
                name: "China Eastern Airlines",
                iata: "MU",
                icao: "CES"
            },
            flight : {
                number: "4983",
                iata: "MU4983",
                icao: "CES4983",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"64",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:50:00",
                estimated: "2023-07-31T06:50:00+00:00",
            },
            arrival : {
                airport: "Chongqing Jiangbei International",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:40:00",
                estimated: "2023-07-31T09:40:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "GJ",
                icao: "CDC"
            },
            flight : {
                number: "3523",
                iata: "GJ3523",
                icao: "CDC3523",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"65",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:50:00",
                estimated: "2023-07-31T06:50:00+00:00",
            },
            arrival : {
                airport: "Chongqing Jiangbei International",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:40:00",
                estimated: "2023-07-31T09:40:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "NS",
                icao: "HBH"
            },
            flight : {
                number: "8397",
                iata: "NS8397",
                icao: "HBH8397",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"66",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:50:00",
                estimated: "2023-07-31T06:50:00+00:00",
            },
            arrival : {
                airport: "Shanghai",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:40:00",
                estimated: "2023-07-31T08:40:00+00:00",
            },
            airline : {
                name: "Shandong Airlines",
                iata: "SC",
                icao: "CDG"
            },
            flight : {
                number: "2213",
                iata: "SC2213",
                icao: "CDG2213",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"67",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:50:00",
                estimated: "2023-07-31T06:50:00+00:00",
            },
            arrival : {
                airport: "Shanghai",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:40:00",
                estimated: "2023-07-31T08:40:00+00:00",
            },
            airline : {
                name: "Air China LTD",
                iata: "CA",
                icao: "CCA"
            },
            flight : {
                number: "4985",
                iata: "CA4985",
                icao: "CCA4985",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"68",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:45:00",
                estimated: "2023-07-31T06:45:00+00:00",
            },
            arrival : {
                airport: "Zhengzhou",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:15:00",
                estimated: "2023-07-31T09:15:00+00:00",
            },
            airline : {
                name: "Xiamen Airlines",
                iata: "MF",
                icao: "CXA"
            },
            flight : {
                number: "8291",
                iata: "MF8291",
                icao: "CXA8291",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"69",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:45:00",
                estimated: "2023-07-31T06:45:00+00:00",
            },
            arrival : {
                airport: "Zhengzhou",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:15:00",
                estimated: "2023-07-31T09:15:00+00:00",
            },
            airline : {
                name: "Sichuan Airlines",
                iata: "3U",
                icao: "CSC"
            },
            flight : {
                number: "2229",
                iata: "3U2229",
                icao: "CSC2229",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"70",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:45:00",
                estimated: "2023-07-31T06:45:00+00:00",
            },
            arrival : {
                airport: "Zhengzhou",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:15:00",
                estimated: "2023-07-31T09:15:00+00:00",
            },
            airline : {
                name: "China Southern Airlines",
                iata: "CZ",
                icao: "CSN"
            },
            flight : {
                number: "4228",
                iata: "CZ4228",
                icao: "CSN4228",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"71",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:45:00",
                estimated: "2023-07-31T06:45:00+00:00",
            },
            arrival : {
                airport: "Zhengzhou",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:15:00",
                estimated: "2023-07-31T09:15:00+00:00",
            },
            airline : {
                name: "China Eastern Airlines",
                iata: "MU",
                icao: "CES"
            },
            flight : {
                number: "4889",
                iata: "MU4889",
                icao: "CES4889",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"72",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:45:00",
                estimated: "2023-07-31T06:45:00+00:00",
            },
            arrival : {
                airport: "Zhengzhou",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:15:00",
                estimated: "2023-07-31T09:15:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "GJ",
                icao: "CDC"
            },
            flight : {
                number: "3429",
                iata: "GJ3429",
                icao: "CDC3429",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"73",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:45:00",
                estimated: "2023-07-31T06:45:00+00:00",
            },
            arrival : {
                airport: "Zhengzhou",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:15:00",
                estimated: "2023-07-31T09:15:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "NS",
                icao: "HBH"
            },
            flight : {
                number: "8301",
                iata: "NS8301",
                icao: "HBH8301",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"74",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:40:00",
                estimated: "2023-07-31T06:40:00+00:00",
            },
            arrival : {
                airport: "Zhoushan",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:10:00",
                estimated: "2023-07-31T08:10:00+00:00",
            },
            airline : {
                name: "Shandong Airlines",
                iata: "SC",
                icao: "CDG"
            },
            flight : {
                number: "4788",
                iata: "SC4788",
                icao: "CDG4788",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"75",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:40:00",
                estimated: "2023-07-31T06:40:00+00:00",
            },
            arrival : {
                airport: "Zhoushan",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:10:00",
                estimated: "2023-07-31T08:10:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "TV",
                icao: "TBA"
            },
            flight : {
                number: "7026",
                iata: "TV7026",
                icao: "TBA7026",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"76",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:40:00",
                estimated: "2023-07-31T06:40:00+00:00",
            },
            arrival : {
                airport: "Zhoushan",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:10:00",
                estimated: "2023-07-31T08:10:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "ZH",
                icao: "CSZ"
            },
            flight : {
                number: "2700",
                iata: "ZH2700",
                icao: "CSZ2700",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"77",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:40:00",
                estimated: "2023-07-31T06:40:00+00:00",
            },
            arrival : {
                airport: "Zhoushan",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:10:00",
                estimated: "2023-07-31T08:10:00+00:00",
            },
            airline : {
                name: "China Express Air",
                iata: "G5",
                icao: "HXA"
            },
            flight : {
                number: "6540",
                iata: "G56540",
                icao: "HXA6540",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"78",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:40:00",
                estimated: "2023-07-31T06:40:00+00:00",
            },
            arrival : {
                airport: "Zhoushan",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:10:00",
                estimated: "2023-07-31T08:10:00+00:00",
            },
            airline : {
                name: "Air China LTD",
                iata: "CA",
                icao: "CCA"
            },
            flight : {
                number: "4818",
                iata: "CA4818",
                icao: "CCA4818",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"79",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:40:00",
                estimated: "2023-07-31T06:40:00+00:00",
            },
            arrival : {
                airport: "Changsha",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:20:00",
                estimated: "2023-07-31T08:20:00+00:00",
            },
            airline : {
                name: "Xiamen Airlines",
                iata: "MF",
                icao: "CXA"
            },
            flight : {
                number: "8225",
                iata: "MF8225",
                icao: "CXA8225",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"80",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:40:00",
                estimated: "2023-07-31T06:40:00+00:00",
            },
            arrival : {
                airport: "Changsha",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:20:00",
                estimated: "2023-07-31T08:20:00+00:00",
            },
            airline : {
                name: "Sichuan Airlines",
                iata: "3U",
                icao: "CSC"
            },
            flight : {
                number: "2169",
                iata: "3U2169",
                icao: "CSC2169",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"81",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:40:00",
                estimated: "2023-07-31T06:40:00+00:00",
            },
            arrival : {
                airport: "Changsha",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:20:00",
                estimated: "2023-07-31T08:20:00+00:00",
            },
            airline : {
                name: "China Southern Airlines",
                iata: "CZ",
                icao: "CSN"
            },
            flight : {
                number: "4168",
                iata: "CZ4168",
                icao: "CSN4168",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"82",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:40:00",
                estimated: "2023-07-31T06:40:00+00:00",
            },
            arrival : {
                airport: "Changsha",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:20:00",
                estimated: "2023-07-31T08:20:00+00:00",
            },
            airline : {
                name: "China Eastern Airlines",
                iata: "MU",
                icao: "CES"
            },
            flight : {
                number: "4819",
                iata: "MU4819",
                icao: "CES4819",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"83",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:40:00",
                estimated: "2023-07-31T06:40:00+00:00",
            },
            arrival : {
                airport: "Changsha",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:20:00",
                estimated: "2023-07-31T08:20:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "GJ",
                icao: "CDC"
            },
            flight : {
                number: "3369",
                iata: "GJ3369",
                icao: "CDC3369",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"84",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:40:00",
                estimated: "2023-07-31T06:40:00+00:00",
            },
            arrival : {
                airport: "Changsha",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:20:00",
                estimated: "2023-07-31T08:20:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "NS",
                icao: "HBH"
            },
            flight : {
                number: "8229",
                iata: "NS8229",
                icao: "HBH8229",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"85",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:35:00",
                estimated: "2023-07-31T06:35:00+00:00",
            },
            arrival : {
                airport: "Zhoushan",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:10:00",
                estimated: "2023-07-31T08:10:00+00:00",
            },
            airline : {
                name: "Xiamen Airlines",
                iata: "MF",
                icao: "CXA"
            },
            flight : {
                number: "8575",
                iata: "MF8575",
                icao: "CXA8575",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"86",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:35:00",
                estimated: "2023-07-31T06:35:00+00:00",
            },
            arrival : {
                airport: "Zhoushan",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:10:00",
                estimated: "2023-07-31T08:10:00+00:00",
            },
            airline : {
                name: "Sichuan Airlines",
                iata: "3U",
                icao: "CSC"
            },
            flight : {
                number: "2477",
                iata: "3U2477",
                icao: "CSC2477",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"87",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:35:00",
                estimated: "2023-07-31T06:35:00+00:00",
            },
            arrival : {
                airport: "Zhoushan",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:10:00",
                estimated: "2023-07-31T08:10:00+00:00",
            },
            airline : {
                name: "China Southern Airlines",
                iata: "CZ",
                icao: "CSN"
            },
            flight : {
                number: "4476",
                iata: "CZ4476",
                icao: "CSN4476",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"88",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:35:00",
                estimated: "2023-07-31T06:35:00+00:00",
            },
            arrival : {
                airport: "Zhoushan",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:10:00",
                estimated: "2023-07-31T08:10:00+00:00",
            },
            airline : {
                name: "China Eastern Airlines",
                iata: "MU",
                icao: "CES"
            },
            flight : {
                number: "8137",
                iata: "MU8137",
                icao: "CES8137",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"89",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:35:00",
                estimated: "2023-07-31T06:35:00+00:00",
            },
            arrival : {
                airport: "Zhoushan",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:10:00",
                estimated: "2023-07-31T08:10:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "GJ",
                icao: "CDC"
            },
            flight : {
                number: "3677",
                iata: "GJ3677",
                icao: "CDC3677",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"89",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:35:00",
                estimated: "2023-07-31T06:35:00+00:00",
            },
            arrival : {
                airport: "Zhoushan",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:10:00",
                estimated: "2023-07-31T08:10:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "NS",
                icao: "HBH"
            },
            flight : {
                number: "8561",
                iata: "NS8561",
                icao: "HBH8561",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"90",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:35:00",
                estimated: "2023-07-31T06:35:00+00:00",
            },
            arrival : {
                airport: "Tianjin Binhai International",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:20:00",
                estimated: "2023-07-31T09:20:00+00:00",
            },
            airline : {
                name: "Xiamen Airlines",
                iata: "MF",
                icao: "CXA"
            },
            flight : {
                number: "8275",
                iata: "MF8275",
                icao: "CXA8275",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"91",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:35:00",
                estimated: "2023-07-31T06:35:00+00:00",
            },
            arrival : {
                airport: "Tianjin Binhai International",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:20:00",
                estimated: "2023-07-31T09:20:00+00:00",
            },
            airline : {
                name: "Sichuan Airlines",
                iata: "3U",
                icao: "CSC"
            },
            flight : {
                number: "2213",
                iata: "3U2213",
                icao: "CSC2213",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"92",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:35:00",
                estimated: "2023-07-31T06:35:00+00:00",
            },
            arrival : {
                airport: "Tianjin Binhai International",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:20:00",
                estimated: "2023-07-31T09:20:00+00:00",
            },
            airline : {
                name: "China Southern Airlines",
                iata: "CZ",
                icao: "CSN"
            },
            flight : {
                number: "4212",
                iata: "CZ4212",
                icao: "CSN4212",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"93",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:35:00",
                estimated: "2023-07-31T06:35:00+00:00",
            },
            arrival : {
                airport: "Tianjin Binhai International",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:20:00",
                estimated: "2023-07-31T09:20:00+00:00",
            },
            airline : {
                name: "China Eastern Airlines",
                iata: "MU",
                icao: "CES"
            },
            flight : {
                number: "4863",
                iata: "MU4863",
                icao: "CES4863",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"94",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:35:00",
                estimated: "2023-07-31T06:35:00+00:00",
            },
            arrival : {
                airport: "Tianjin Binhai International",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:20:00",
                estimated: "2023-07-31T09:20:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "GJ",
                icao: "CDC"
            },
            flight : {
                number: "3413",
                iata: "GJ3413",
                icao: "CDC3413",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"95",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:35:00",
                estimated: "2023-07-31T06:35:00+00:00",
            },
            arrival : {
                airport: "Tianjin Binhai International",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:20:00",
                estimated: "2023-07-31T09:20:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "NS",
                icao: "HBH"
            },
            flight : {
                number: "8279",
                iata: "NS8279",
                icao: "HBH8279",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"96",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:35:00",
                estimated: "2023-07-31T06:35:00+00:00",
            },
            arrival : {
                airport: "Yinchuan",
                scheduled_date: "2023-07-31",
                scheduled_time :"09:55:00",
                estimated: "2023-07-31T09:55:00+00:00",
            },
            airline : {
                name: "Shandong Airlines",
                iata: "SC",
                icao: "CDG"
            },
            flight : {
                number: "2259",
                iata: "SC2259",
                icao: "CDG2259",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"97",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:30:00",
                estimated: "2023-07-31T06:30:00+00:00",
            },
            arrival : {
                airport: "Qingdao",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:55:00",
                estimated: "2023-07-31T08:55:00+00:00",
            },
            airline : {
                name: "Shandong Airlines",
                iata: "SC",
                icao: "CDG"
            },
            flight : {
                number: "4786",
                iata: "SC4786",
                icao: "CDG4786",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"98",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:30:00",
                estimated: "2023-07-31T06:30:00+00:00",
            },
            arrival : {
                airport: "Qingdao",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:55:00",
                estimated: "2023-07-31T08:55:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "TV",
                icao: "TBA"
            },
            flight : {
                number: "7024",
                iata: "TV7024",
                icao: "TBA7024",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"99",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:30:00",
                estimated: "2023-07-31T06:30:00+00:00",
            },
            arrival : {
                airport: "Qingdao",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:55:00",
                estimated: "2023-07-31T08:55:00+00:00",
            },
            airline : {
                name: "Qatar Airways",
                iata: "ZH",
                icao: "CSZ"
            },
            flight : {
                number: "2698",
                iata: "ZH2698",
                icao: "CSZ2698",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        },
        {
            id :"100",
            flight_date: "2023-07-31",
            departure: {
                airport: "Xiamen",
                scheduled_date: "2023-07-31",
                scheduled_time :"06:30:00",
                estimated: "2023-07-31T06:30:00+00:00",
            },
            arrival : {
                airport: "Qingdao",
                scheduled_date: "2023-07-31",
                scheduled_time :"08:55:00",
                estimated: "2023-07-31T08:55:00+00:00",
            },
            airline : {
                name: "China Express Air",
                iata: "G5",
                icao: "HXA"
            },
            flight : {
                number: "6538",
                iata: "G56538",
                icao: "HXA6538",
            },
            aircraft : null,
           price: Math.floor(Math.random() * 4901) + 100, // Random number between 100 and 5000 (inclusive),
        }
]

export default flightsData

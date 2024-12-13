import { View, Text, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import { Colors } from './../../constants/Colors';

export default function Flightinfo(flightData) {
  // Function to handle redirection
  const handleBooking = () => {
    const url = 'https://www.skyscanner.net/';
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <View
      style={{
        marginTop: 20,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        padding: 10,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 20,
          }}
        >
          ✈️Flights
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 5,
            width: 100,
            borderRadius: 7,
            marginTop: 7,
          }}
          onPress={handleBooking} // Handle button press
        >
          <Text
            style={{
              textAlign: 'center',
              color: Colors.WHITE,
              fontFamily: 'outfit',
            }}
          >
            Book Here
          </Text>
        </TouchableOpacity>
      </View>

      {/* <Text
        style={{
          fontFamily: 'outfit',
          fontSize: 17,
          marginTop: 7,
        }}
      >
        Airline: Delta
      </Text> */}
      {/* <Text
        style={{
          fontFamily: 'outfit',
          fontSize: 17,
        }}
      >
        Price: {flightData?.price}
      </Text> */}
    </View>
  );
}
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function OneSelfBarcode() {

  // A state to hold the generated barcode value
  const [barcodeValue, setBarcodeValue] = useState('');

  // A function to generate a random barcode value
  const generateBarcode = () => {

    // Define the event name (name it to whatever you up to)
    const events = ['Stellaris'];

    // Randomly select an event name
    const randomEventIndex = Math.floor(Math.random() * events.length);
    
    // Generate a random name for the barcode
    const randomName = generateRandomName();

    // Combine the event name and the random name to form the barcode value
    const newBarcodeValue = `${events[randomEventIndex]}-${randomName}`;
    
    // Update the state with the new barcode value
    setBarcodeValue(newBarcodeValue);

    // Display it in the terminal
    console.log('Generated Barcode:', newBarcodeValue);
  };

  // A function to generate a random name with random numbers
  const generateRandomName = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomName = '';
    for (let i = 0; i < 8; i++) {
      randomName += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomName;
  };

  // JSX to render all the component
  return (
    <View style={styles.container}>

      {/* Button to generate the barcode */}
      <Button title="Generate Barcode" color='#509050' onPress={generateBarcode} />

      {/* Conditionally render the QR code and its value */}
      {barcodeValue ? (
        <View style={styles.attendeeContainer}>
          <QRCode value={barcodeValue} />
          <Text style={styles.attendeeName}>{barcodeValue}</Text> 
        </View>
      ) : null}

      {/* StatusBar component */}
      <StatusBar style="auto" />
    </View>
  );
}

// The Stylesheet
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 20,
  },
  attendeeContainer: {
    alignItems: 'center',
    margin: 20,
  },
  attendeeName: {
    marginTop: 10,
    textAlign: 'center',
  },
});

// --------This was for an event app----------

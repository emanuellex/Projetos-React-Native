import React from 'react';
import {StyleSheet, Text, TextInput, View, StatusBar, ImageBackground, ImageBackgroundComponent} from 'react-native';

import getImage from "./utils/ImagesForWeather";

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <ImageBackground
          source ={getImage('Light Cloud')}
          style={styles.imageContainer}
          imageStyle={styles.image}
          >
            <View style={styles.detailsContainer}>
          <Text style={[styles.lageText, styles.textStyle]}>San Francisco</Text>
            <Text style={[styles.smallText, styles.textStyle]}>nublado</Text>
            <Text style={[styles.lageText, styles.textStyle]}>24</Text>
            <TextInput
            style={styles.input}
            placeholder="Procurar outra cidade"
            placeholderTextColor="white"
            />
            </View>
          </ImageBackground>
            <StatusBar style="auto" />
        </View>
    );
  }

  }


const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
   imageContainer : {
      flex : 1,
    },
    image : {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
    },
    detailsContainer : {
      flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0,0,0,0.2)',

    },
    lageText: {
      fontSize : 40,
    },
    smallText: {
      fontSize : 26
    },
    textStyle : {
      textAlign: 'center',
      color: 'white',
    },
    input : {
      backgroundColor: '#666',
        color: '#fff',
        fontSize: 30,
        width: 300,
        marginTop : 30,
        marginHorizontal : 20,
        paddingHorizontal: 10,
        alignSelf: 'center',
    }
});

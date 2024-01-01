import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Title } from 'react-native-paper';
import { Image, StyleSheet } from 'react-native';

import {

  SafeAreaView,
  ScrollView,

} from 'react-native';


import ledoff from './image/e.jpg';
import ledon from './image/l.jpg';

import led1off from './image/e.jpg';
import led1on from './image/l.jpg';


import led2off from './image/e.jpg';
import led2on from './image/l.jpg';

const styles = StyleSheet.create({

  tinyLogo: {
    width: 140,
    height: 100,
    borderRadius: 10,
  }
});


const SettingsScreen = () => {



  const [led1status, setled1Status] = useState(0);
  const [led2status, setled2Status] = useState(0);
  const [led3status, setled3Status] = useState(0);

  const [led1image, setled1Image] = useState(ledoff);
  const [led2image, setled2Image] = useState(ledoff);
  const [led3image, setled3Image] = useState(ledoff);

  let led1state = '';

  let led2state = '';

  let led3state = '';


  function LED1() {
    if (led1status == 1) {
      setled1Status(0)
      console.log('Light off')
      setled1Image(ledoff)
      fetch('http://192.168.131.35/lightoff')
        .then((response) => response.json())
        .then((data) => console.log(data));

    }


    else {
      setled1Status(1)
      console.log('Light on')
      setled1Image(ledon)
      fetch('http://192.168.131.35/lighton')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }


  }

  if (led1status == 1) {
    led1state = 'ON'
  }
  else {
    led1state = 'OFF'

  }


  
  function LED2() {
    if (led2status == 1) {
      setled2Status(0)
      console.log('Light off')
      setled2Image(led1off)
      fetch('http://192.168.131.35/light1off')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    else {
      setled2Status(1)
      console.log('Light on')
      setled2Image(led1on)
      fetch('http://192.168.131.35/light1on')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }


  }

  if (led2status == 1) {
    led2state = 'ON'
  }
  else {
    led2state = 'OFF'

  }


  function LED3() {
    if (led3status == 1) {
      setled3Status(0)
      console.log('Light off')
      setled3Image(led2off)
      fetch('http://192.168.131.35/light2off')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    else {
      setled3Status(1)
      console.log('Light on')
      setled3Image(led2on)
      fetch('http://192.168.131.35/light2on')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }


  }

  if (led3status == 1) {
    led3state = 'ON'
  }
  else {
    led3state = 'OFF'

  }

  

  return (

    <SafeAreaView>
      <ScrollView>

        <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>

          <Title>ROOM LIGHT</Title>

          <View style={{ flexDirection: 'row', width: '100%', alignSelf: 'center', justifyContent: 'center' }}>

            {/* <View style={styles.container} /> */}


            <TouchableOpacity style={{ backgroundColor: 'green', width: 140, height: 140, borderRadius: 11, margin: 5, marginRight: 20 }} onPress={LED1}>
              <Image style={styles.tinyLogo} source={led1image} />
              <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: 10, fontWeight: 'bold', color: '#fff' }}>{led1state}</Text>
            </TouchableOpacity>

          </View>



          <Title>BATHROOM LIGHT</Title>

          <View style={{ flexDirection: 'row', width: '100%', alignSelf: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: 'green', width: 140, height: 140, borderRadius: 10, margin: 5, marginRight: 20 }} onPress={LED2}>
              <Image style={styles.tinyLogo} source={led2image} />
              <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: 10, fontWeight: 'bold', color: '#fff' }}>{led2state}</Text>
            </TouchableOpacity>

          </View>

          <Title>KITCHEN LIGHT</Title>

          <View style={{ flexDirection: 'row', width: '100%', alignSelf: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: 'green', width: 140, height: 140, borderRadius: 10, margin: 5, marginRight: 20 }} onPress={LED3}>
              <Image style={styles.tinyLogo} source={led3image} />
              <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: 10, fontWeight: 'bold', color: '#fff' }}>{led3state}</Text>
            </TouchableOpacity>

          </View>



        </View>

      </ScrollView>
    </SafeAreaView >


  )




}
 
export default SettingsScreen;

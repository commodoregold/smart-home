import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 375,
    height: 450,
  },
  logo: {
    width: 66,
    height: 59,
  },
});

const Details = () => {
  return (
    <SafeAreaView>
      <ScrollView>
         <View style={styles.container}>
      <  Image style={styles.tinyLogo} source={require('./image/a.jpg')} />

         </View>
     </ScrollView>
    </SafeAreaView>
  );
};


export default Details;
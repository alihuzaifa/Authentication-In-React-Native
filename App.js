import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  logo: {
    width: 200,
    height: 200,
  }
});
function App() {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Image source={require('./assets/image/lock.gif')} style={styles.logo} />
      </View>
    </View>
  );
}
export default App;
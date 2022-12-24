import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  logo: {
    width: 300,
    height: 300,
    marginTop: 50,
  },
  head: {
    color: 'orange',
    fontSize: 28,
    marginTop: -60,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 17,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  btnContainer: {
    width: 270,
    borderRadius: '100px',
    marginVertical: 10
  },
  button: {
    padding: 50,
  }
});
function App() {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Image source={require('./assets/image/lock.gif')} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.head}>
          Login Template
        </Text>
      </View>
      <View>
        <Text style={styles.title}>
          The easiest way to start with your amazing application.
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          style={styles.button, { marginTop: 20 }}
          title='Login'
          color='orange'
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          style={styles.button}
          title='Sign up'
          color='orange'
        />
      </View>
    </View>
  );
}
export default App;
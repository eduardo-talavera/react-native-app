import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObjectModel</Text> */}
      {/* <View style={styles.purpleBox}></View> */}
      {/* <View style={styles.purpleBox}></View> */}
      <View style={styles.purpleBox}>
        <Text style={{ color: 'white' }}>Hola Mundo</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // toma todo el espacio disponible
        backgroundColor: 'red'
    },
    title: {
        fontSize: 30,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderWidth: 10
    },
    purpleBox: {
        height: 30,
        //margin: 20,
        marginHorizontal: 20,
        marginVertical: 50,
        backgroundColor: 'purple',
        padding: 5
    }
})

export { BoxObjectModelScreen }


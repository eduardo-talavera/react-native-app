import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PrimaryButton } from '../Components'
import { Button } from 'react-native-paper'

export const CounterScreen = () => {
  const [count, setCount] = useState(10)  
 
  const handlePress = () => {
    setCount(c => c+1)
  }  

  return (
    <View style={ styles.container }>
        <Text style={ styles.title }> { count } </Text>

       {/* <PrimaryButton 
            label='Incrementar +1'
            onPress={handlePress}
            onLongPress={() => setCount(0)}
       /> */}

       <Button
            onPress={handlePress}
            onLongPress={() => setCount(0)}
            mode='contained'
        >
            Incrementar +1
        </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300'
    }
})



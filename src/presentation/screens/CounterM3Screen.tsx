import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../Theme/global.styles'
import { FAB } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'


export const CounterM3Screen = () => {
  const [count, setCount] = useState(10)  
 
  const handlePress = () => {
    setCount(c => c+1)
  }  

  return (
    <View style={ globalStyles.centerContainer }>
        <Text style={ globalStyles.title }> { count } </Text>

        {/* <Icon name='accessibility-outline' size={25} /> */}

        <FAB
          icon='add'
          //label='+1'
          style={globalStyles.fab}
          onPress={handlePress}
          onLongPress={() => setCount(0)}
        />
    </View>
  )
}




import React from 'react'
import { Text,StyleSheet,View } from 'react-native'

export default function Counter({title, nb}) {
  return (
    <View>
      <Text style={styles.nb}>{nb}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    nb:{
        fontSize:20,
        fontWeight:"bold"
    },
    title:{
        fontSize:16,
        color:"grey",
        fontWeight:"bold"
    }
})
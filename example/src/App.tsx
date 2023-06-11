import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RNNairaModule, { Naira } from 'react-native-naira'

const App = () => {
  useEffect(() => {
    console.log(RNNairaModule)
  })

  return (
    <View style={styles.background}>
      <Text>I Paid John <Naira>{10000}</Naira> for his car today!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#3b4d61"
  },
  amount: {
    color: '#fff',
    fontSize: 25,
    fontWeight: "800"
  }
})

export default App

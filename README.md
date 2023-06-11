# React Native Naira

A React Native package for displaying amount figures with the Nigerian Naira symbol.

## Installation

```
npm install react-native-naira
```
or

```
yarn add react-native-naira
```

## Usage

Import the `Naira` component and use in your JSX.

### Example 1
```javascript
import { Naira } from 'react-native-naira'

const App = () => {
  return (
    <Naira>{10000}</Naira> 
  )
}

```

### Example 2
Use inside a `Text` component.

E.g: `I Paid John ₦10,000.00 for his car today!`
```javascript
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Naira } from 'react-native-naira'

const App = () => {
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
```

### Props
| Props        | Type                    | Required | Description |
| -------------|-------------------------| ---------| ----------- |
| style        | `StyleProp<TextStyle>`  | Optional | Add your styles directly to the component. |
| decimalPlaces| `number`                | Optional | This prop is used to describe the number of digits that appear after the decimal point in a number. |
| children     | `number`                | true     | Pass a number to be rendered by the component. The value you pass here must not be a string! |
| -------------|-------------| --------- | ----------- |


### Testing

This package uses Jest for testing, make sure you have the following configurations setup in package.json file:
```json
  "jest": {
    "preset": "react-native",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ]
  }
```

## Licensing

This project is licensed under MIT license.
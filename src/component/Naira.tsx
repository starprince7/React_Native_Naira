import * as React from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'

import 'intl'
import 'intl/locale-data/jsonp/en'

type NairaProps = {
  children: number
  style?: StyleProp<TextStyle>
  decimalPlaces?: number
}

const Naira = (props: NairaProps) => {
  const { children, style, decimalPlaces = 0 } = props;
  
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: decimalPlaces,
  })

  return <Text style={style}>{formatter.format(children)}</Text>
}

export default Naira

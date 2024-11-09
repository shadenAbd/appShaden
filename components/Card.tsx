import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = (props:any) => {
    const{name,year,point}=props
  return (
    <View>
      <Text>{name}</Text>
      <Text>{year}</Text>
      <Text>{point}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})
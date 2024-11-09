import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Card from '@/components/Card'

const index = () => {
  return (
    <View style={styles.Sceen}>
      <SafeAreaView style={styles.cont}>

       
        <View style={styles.rect}>
          <View style={styles.container}>
            <View style={styles.bgc}>
            </View>
            <View>
              <Text>Name: shaden</Text>
              <Text>ID: 1</Text>
            </View>
          </View>

          <View style={styles.rect1}>
            <Text>My first UI</Text>
          </View>

        </View>

        <View style={styles.rect}>
        <Card name='Hakeem' year='2022' points='100'/>
        </View>

        <View style={styles.rect}>
          <Card name='Sanad' year='2024' points='100'/>
          </View>
        

      </SafeAreaView>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  Sceen: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent:'center',
    alignItems:'center'
  },
  cont: {
    flex: 1,
    // backgroundColor: '#fff',
    // padding: 24,
    alignItems: 'center',
    // marginTop: 32,
  },
  container: {
    flexDirection: 'row',

  },
  bgc: {
    // color: 'blue',
    backgroundColor: 'blue',
    // flex:1,
    width:'20%'

  },
  rect: {
    borderWidth: 1,
    width:'90%',
  },
  rect1:{
    width:'100%',
    alignSelf:'center',
    borderWidth: 2,
  }
})
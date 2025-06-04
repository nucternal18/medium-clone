import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function write() {
  return (
      <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>write</Text>
          </View>
    </SafeAreaView>
  )
}
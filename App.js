import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const hello = () => {
    alert("yo")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.scoreOXStyle}>0:0</Text>
      <View style={styles.TicTacBoard}>
        <View style={{flexDirection:'row'}}>
        <Pressable onPress={hello} style={styles.PressableStyle}><Text style={styles.scoreOXStyle}>O</Text></Pressable>
        <Pressable onPress={hello} style={styles.PressableStyle}><Text style={styles.scoreOXStyle}>X</Text></Pressable>
        <Pressable onPress={hello} style={styles.PressableStyle}><Text style={styles.scoreOXStyle}>O</Text></Pressable>
        </View>
        <View style={{flexDirection:'row'}}>
        <Pressable onPress={hello} style={styles.PressableStyle}><Text style={styles.scoreOXStyle}>X</Text></Pressable>
        <Pressable onPress={hello} style={styles.PressableStyle}><Text style={styles.scoreOXStyle}>O</Text></Pressable>
        <Pressable onPress={hello} style={styles.PressableStyle}><Text style={styles.scoreOXStyle}>X</Text></Pressable>
        </View>
        <View style={{flexDirection:'row'}}>
        <Pressable onPress={hello} style={styles.PressableStyle}><Text style={styles.scoreOXStyle}>O</Text></Pressable>
        <Pressable onPress={hello} style={styles.PressableStyle}><Text style={styles.scoreOXStyle}>X</Text></Pressable>
        <Pressable onPress={hello} style={styles.PressableStyle}><Text style={styles.scoreOXStyle}>O</Text></Pressable>
        </View>
        
      </View>

      <Text style={styles.turn}>Player 1's Turn</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:35,
    flex: 1,
    backgroundColor: '#40E0D0',
    alignItems: 'center',
  },
  TicTacBoard:{
    marginTop:80,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  scoreOXStyle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white'
  },
  PressableStyle: {
    backgroundColor: "#FF69B4",
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin:1
  },
  turn:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  }
});

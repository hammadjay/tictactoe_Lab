import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';


const Grid =["","","","","","","","",""]
export default function App() {
  const [playerTurn,setPlayerTurn] = useState(true);
  const [symbol, setSymbol] = useState("X");
 
  const checkTurn =()=>{

    if(playerTurn){
     return "Player 1's Turn"
    }
    else{
      return "Player 2's Turn"
    }
  }

  const checkMove = (gridNo) => {
    if(playerTurn){
      console.log(Grid[gridNo].length)
      if(Grid[gridNo].length<1){
        Grid[gridNo] = symbol
        console.log("player 1",Grid)
        setSymbol("O")
        setPlayerTurn(false)
      }
      else{
        alert("illegal Move")
      }
      
    }
    else{
      if(Grid[gridNo].length<1){
        Grid[gridNo] = symbol
        console.log("player 2",Grid)
        setSymbol("X")
        setPlayerTurn(true)
      }
      else{
        alert("illegal Move")
      }
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.scoreOXStyle}>0:0</Text>
      <View style={styles.TicTacBoard}>
        <View style={{flexDirection:'row'}}>
        <Pressable onPress={()=>{checkMove(0)}} style={styles.PressableStyle}><Text style={styles.scoreOXStyle}>{Grid[0]}</Text></Pressable>
        <Pressable onPress={()=>{checkMove(1)}} style={styles.PressableStyle}><Text style={styles.scoreOXStyle}>{Grid[1]}</Text></Pressable>
        <Pressable onPress={()=>{checkMove(2)}} style={styles.PressableStyle}><Text style={styles.scoreOXStyle}>{Grid[2]}</Text></Pressable>
        </View>
        <View style={{flexDirection:'row'}}>
        <Pressable onPress={()=>{checkMove(3)}} style={styles.PressableStyle}><Text style={styles.scoreOXStyle}>{Grid[3]}</Text></Pressable>
        <Pressable onPress={()=>{checkMove(4)}} style={styles.PressableStyle}><Text style={styles.scoreOXStyle}>{Grid[4]}</Text></Pressable>
        <Pressable onPress={()=>{checkMove(5)}} style={styles.PressableStyle}><Text style={styles.scoreOXStyle}>{Grid[5]}</Text></Pressable>
        </View>
        <View style={{flexDirection:'row'}}>
        <Pressable onPress={()=>{checkMove(6)}} style={styles.PressableStyle}><Text style={styles.scoreOXStyle}>{Grid[6]}</Text></Pressable>
        <Pressable onPress={()=>{checkMove(7)}} style={styles.PressableStyle}><Text style={styles.scoreOXStyle}>{Grid[7]}</Text></Pressable>
        <Pressable onPress={()=>{checkMove(8)}} style={styles.PressableStyle}><Text style={styles.scoreOXStyle}>{Grid[8]}</Text></Pressable>
        </View>
        
      </View>

        <Text style={styles.turn}>{checkTurn()}</Text>

       

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
    color: 'white',
    marginTop:10
  }
});

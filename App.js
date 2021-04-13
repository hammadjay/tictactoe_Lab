import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';


const Grid =["","","","","","","","",""]
const drawGrid = [false,false,false,false,false,false,false,false,false]

export default function App() {
  const [playerTurn,setPlayerTurn] = useState(true);
  const [gameOver,setGameOver] = useState(false);
  const [symbol, setSymbol] = useState("X");
 
  const checkWinner = () =>{
      const winCombo = [[0,4,8],[1,4,7],[2,4,6],[0,3,6],[2,5,8],[0,1,2],[3,4,5],[6,7,8]]
      for (let i=0 ; i<winCombo.length ; i++){
        if(Grid[winCombo[i][0]] == symbol && Grid[winCombo[i][1]] == symbol && Grid[winCombo[i][2]] == symbol ){
          return true
        }
      }
      return false
  }
  const checkDraw = ()=>{
    
    for(let i = 0; i < Grid.length ; i++){
      if(Grid[i].length < 1){
        return false
      }
    }
    return true;
  }


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
      if(Grid[gridNo].length < 1){
        Grid[gridNo] = symbol
        console.log("player 1",Grid,checkDraw())
        
        if(checkWinner()){
          console.log("Player 1 won")
        }
        else if(checkDraw()){
          
          console.log("match drawn")
        }
        else{
          setSymbol("O")
          setPlayerTurn(false)
        }
      }
      else{
        alert("illegal Move")
      }
      
    }
    else{
      if(Grid[gridNo].length < 1){
        Grid[gridNo] = symbol
        console.log("player 2",Grid)
        if(checkWinner()){
          console.log("Player 2 won")
        }
        else if(checkDraw()){
          
          console.log("match drawn")
        }
        else{
          setSymbol("X")
          setPlayerTurn(true)
        }
        
      }
      else{
        alert("illegal Move")
      }
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.scoreOXStyle}>0 : 0</Text>
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

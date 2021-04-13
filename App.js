import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert,Pressable, Modal , StyleSheet, Text, View } from 'react-native';


var Grid =["","","","","","","","",""]
var P1score = 0
var P2score = 0

export default function App() {
  const [playerTurn,setPlayerTurn] = useState(true);
 
  const [symbol, setSymbol] = useState("X");
  const [modalVisible, setModalVisible] = useState(false);
 
  const playAgain = () =>{
    Grid =["","","","","","","","",""]
    setSymbol("X")
    setPlayerTurn(true)
    setModalVisible(false)

  }
  const ResetplayAgain = () =>{
    Grid =["","","","","","","","",""]
    setSymbol("X")
    setPlayerTurn(true)
    setModalVisible(false)
    P1score=0
    P2score=0

  }
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

  const GameOverMsg = ()=>{
    
    if(checkWinner()){
      return playerTurn ? "Player 1 wins" : "Player 2 wins"
    }
    else{
      return "Match Drawn"
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
          P1score++
          setModalVisible(true)
        }
        else if(checkDraw()){
          console.log("match drawn")
          setModalVisible(true)

        }
        else{
          setSymbol("O")
          setPlayerTurn(false)
        }
      }
      else{
        alert("illegal Move")
      }
      console.log("hello")
    }
    else{
      if(Grid[gridNo].length < 1){
        Grid[gridNo] = symbol
        console.log("player 2",Grid)
        if(checkWinner()){
          console.log("Player 2 won")
          P2score++
          setModalVisible(true)

        }
        else if(checkDraw()){
          console.log("match drawn")
          setModalVisible(true)

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
      
      <Text style={styles.scoreOXStyle}>{P1score} : {P2score}</Text>
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
        <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{GameOverMsg()}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={playAgain}
            >
              <Text style={styles.textStyle}>Play Again</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={ResetplayAgain}
            >
              <Text style={styles.textStyle}>Reset and Play</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
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
  ,
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 8,
    marginTop:5
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    fontSize:30,
    fontWeight:'bold',
    textAlign: "center"
  }
});

import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React, { useState } from 'react'

const minimum = () => {
   const [firstNumber, setFirstNumber] =  useState<string>();
   const [secondNumber, setSecondNumber] =  useState<string>();
   const [thirdNumber, setThirdNumber] =  useState<string>();
         function getTheMinimum(){
            if(!firstNumber || !secondNumber  ||  !thirdNumber) {
                return '';
            }else{
                const number1 =  Number(firstNumber);
                const number2 = Number(secondNumber);
                const number3 =  Number(thirdNumber);
                const max = Math.min(number1, Math.min(number2, number3));
                return max.toString();
            }
         }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainter}>
        <Text>First Number</Text>
        <TextInput style={styles.textInput} value={firstNumber}  onChangeText={setFirstNumber} placeholder='Enter your first number'/>
      </View>
      <View style={styles.inputContainter}>
        <Text>First Number</Text>
        <TextInput style={styles.textInput} value={secondNumber} onChangeText={setSecondNumber} placeholder='Enter your second number'/>
      </View>
      <View style={styles.inputContainter}>
        <Text>First Number</Text>
        <TextInput style={styles.textInput} value={thirdNumber}  onChangeText={setThirdNumber} placeholder='Enter your third number'/>
      </View>
      <View style={styles.inputContainter}>
        <Text>The  Minimum Is :  {getTheMinimum()}</Text>
      </View>
    </View>
  )
}

export default minimum

const styles = StyleSheet.create({
    container :{
        flex :1,
        justifyContent:"center",
        alignItems:"center",
    },
    inputContainter : {
        marginVertical:20,
    },
    textInput :{
        borderWidth:2,
        borderBlockColor:"black"
    }
})
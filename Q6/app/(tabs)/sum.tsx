import { StyleSheet, Text, View, TextInput} from 'react-native'
import React, { useState } from 'react'

const sum = () => {
    const [number,setNumber] =  useState('');
    function handleChangeText(text : string){
        const cleaned = text.replace(/[^0-9]/g, '');
        setNumber(cleaned);
    }
    function getSumDigit(numberStr : string){
        if(!numberStr){
            return "";
        }else if(numberStr.length == 1){
            return numberStr;
        }else{
            return String(Number(numberStr.charAt(0).toString()) + Number(numberStr.charAt(numberStr.length-1).toString()));
        }
    }
  return (
    <View style={styles.container}>
        <TextInput value={number}  onChangeText={setNumber} keyboardType="number-pad" style={styles.textInput} placeholder='Enter your number'/>
        <Text>Sum of first and last digit of your number</Text>
        <View>
            <Text>Current enter number : {number}</Text>
            <Text>Result : {getSumDigit(number)}</Text>
        </View>
    </View>
  )
}

export default sum

const styles = StyleSheet.create({
    container :{
        flex :1,
        justifyContent:"center",
        alignItems:"center",
    },
    textInput :{
        borderWidth:2,
        borderBlockColor:"black",
        padding:10,
        borderRadius:10,
    }
})
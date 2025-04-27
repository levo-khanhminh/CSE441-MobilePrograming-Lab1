import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { IconSymbol } from '@/components/ui/IconSymbol'


const Profile = () => {
    function handleUpdate(){
        Alert.alert("Successfully update");
    }
  return (
    <View style={styles.container}>
        <View>

        <IconSymbol size={180} name="account-icon" color={"gray"} />

        </View>
            <View style={styles.subContainer}>
                <Text style={styles.textLabel}>Name:</Text>
                <TextInput value={"Khanh Minh"}  style={styles.textInput} placeholder='Your name goes here. ....'/>
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.textLabel}>Age:</Text>
                <TextInput  value={"22"} style={styles.textInput} placeholder='Your name goes here. ....'/>
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.textLabel}>Occupation:</Text>
                <TextInput value='Student' style={styles.textInput} placeholder='Your name goes here. ....'/>
            </View>
            <View style={styles.subContainer}>

                <Button title="Update" onPress={() => handleUpdate()} color="#111"/>
            </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container :{
        flex :1,
        color:"red",
        justifyContent:"center",
        alignItems:"center",
    },
    subContainer :{
        width:300,
        marginTop:20,
    },
    textLabel : {
        fontWeight:"500",
        color :"black",
    },
    textInput :{
        width:"100%",
        borderBlockColor:"black",
        padding:10,
        borderWidth:2,
        borderRadius:10,
        marginTop:5,
    }
})
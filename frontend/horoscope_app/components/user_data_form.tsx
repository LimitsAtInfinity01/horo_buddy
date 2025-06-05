import React from 'react';
import { View, TextInput, StyleSheet, TextStyle, Pressable, Text } from "react-native";


export default function UserForm() {
    const [name, onChangeName] = React.useState('')
    const [zodiacSign, onChangeSign] = React.useState('')

    return (
        <View style={ styles.container }>

            <View>
                <Text style={ styles.label }>Enter your name.</Text>
                <TextInput style={ styles.textInput } onChangeText={onChangeName} value={name} />
            </View>

            <View>
                <Text style={ styles.label } >Enter your name.</Text>
                <TextInput style={ styles.textInput } onChangeText={onChangeSign} value={zodiacSign} />
            </View>


            <Pressable style={ styles.pressable }>
                <Text style={ styles.textPressable }>Submit</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 50,
        alignItems: 'center',
    },

    textInput: {
        color: 'black',
        width: 350,
        height: 40,
        backgroundColor: 'white'
    },

    pressable: {
        width:  300,
        height: 35,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textPressable: {
        textAlign: 'justify',
        fontSize: 20,
    },

    label:{
        color: 'white',
        fontSize: 15,
        marginBottom: 5
    }

})
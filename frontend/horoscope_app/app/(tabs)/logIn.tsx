import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet  } from 'react-native';

export default function LoginForm(){

    const [email, onChangeEmail] = useState('')
    const [password, onChangePassword] =  useState('')


    return (
        <View>
            <View>
                <Text  style={ styles.label }>Enter your name.</Text>
                <TextInput placeholder='Email' placeholderTextColor="#999" style={ styles.textInput } onChangeText={onChangeEmail} value={email} />
            </View>

            <View>
                <Text style={ styles.label } >Enter your zodiac sign.</Text>
                <TextInput placeholder='Password' placeholderTextColor="#999" style={ styles.textInput } onChangeText={onChangePassword} value={password} />
            </View>
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
        fontSize: 20,
        paddingLeft: 10,
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
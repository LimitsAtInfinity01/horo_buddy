import React, {useState} from 'react';
import { Link, useFocusEffect, useRouter } from 'expo-router';
import { View, Text, TextInput, StyleSheet, Alert  } from 'react-native';


import SubmitButton from '@/components/button';
import { COLORS } from '@/constants/theme';


export default function RegisterForm(){
    const router = useRouter();

    interface RegisterUserResponse {
        // Define the expected properties of the response here
        // For example:
        id: number;
        username: string;
        // Add more fields as needed
    }

    interface RegisterUserError {
        // Define the expected error properties here
        // For example:
        detail?: string;
        errors?: Record<string, string[]>;
        // Add more fields as needed
    }

    // 192.168.1.150.
    async function registerUser(username: string, password: string): Promise<boolean> {
        try {
            const response = await fetch('http://192.168.1.150:8000/api/register/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),  // ← we’ll fix this in a sec
            });

            const data = await response.json()
            if (!response.ok) {
                console.error('Registration failed:', data);
                Alert.alert('Error', JSON.stringify(data));
                return false
            }

            console.log('Registered:', response);
            return true
        } catch (err) {
            if (err instanceof Error) {
                Alert.alert('Network error', err.message);
            } else {
                Alert.alert('Network error', 'An unknown error occurred');
            }
            return false
        }
    }

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            return Alert.alert('Error', 'Passwords do not match');
        }
        const success = await registerUser(username, password);  
        if ( success ) {
            router.push('/(auth)/logIn'); 
        }
    };

    const [username, setUsername] = useState('')
    const [password, setPassword] =  useState('')
    const [confirmPassword, setConfirmPassword] = useState('')



    return (
        <View style={styles.container}>

            <View>
                <Text style={ styles.title }>Register Here</Text>
            </View>

            <View>
                <Text  style={ styles.label }>Enter your username.</Text>
                <TextInput placeholder='username' placeholderTextColor="#999" style={ styles.textInput } onChangeText={setUsername} value={username} />
            </View>

            <View>
                <Text style={ styles.label } >Enter your password.</Text>
                <TextInput placeholder='Password' placeholderTextColor="#999" style={ styles.textInput } onChangeText={setPassword} value={password} secureTextEntry />
            </View>

            <View>
                <Text style={ styles.label } >Enter your password again.</Text>
                <TextInput placeholder='Password' placeholderTextColor="#999" style={ styles.textInput } onChangeText={setConfirmPassword} value={confirmPassword} secureTextEntry />
            </View>
            
            <SubmitButton text='Register' onPress={handleSubmit}/>

            <Link href={'/(auth)/logIn'} style={ styles.link } >
                <Text>Back to Log in</Text>
            </Link>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 50,
        alignItems: 'center',
        backgroundColor: COLORS.mainBackgroundColor
    },

    textInput: {
        color: 'black',
        width: 350,
        height: 40,
        fontSize: 20,
        paddingLeft: 10,
        backgroundColor: 'white'
    },

    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3',
    },

     buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white',
    },

    label:{
        color: 'white',
        fontSize: 15,
        marginBottom: 5
    },

    title: {
        color: 'white',
        fontSize: 30,
        marginTop: 20,
    },

    link: {
        color: 'white'
    }
})
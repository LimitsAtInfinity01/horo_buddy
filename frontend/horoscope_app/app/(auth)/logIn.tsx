// login.tsx
import React, {useState} from 'react';
import { Link, useRouter } from 'expo-router';
import { View, Text, TextInput, StyleSheet, Alert  } from 'react-native';

import SubmitButton from '@/components/button';
import { COLORS } from '@/constants/theme';

import * as SecureStore from 'expo-secure-store'


export default function LogIn(){

    const [username, setUsername] = useState('')
    const [password, setPassword] =  useState('')

    const router = useRouter()

    // router.replace('/(tabs)')
    
    interface AuthResponse {
        access: string;
        refresh: string;
        [key: string]: any;
    }

    interface AuthError {
        detail?: string;
        [key: string]: any;
    }

    async function authenticate(username: string, password: string): Promise<AuthResponse> {
        const response = await fetch('http://192.168.1.150:8000/api/token/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        });

        // console.log('HTTP', response.status)
        const data: AuthResponse | AuthError = await response.json();
        // console.log('Body', data)
        if (!response.ok){
            throw data;
        }

        await SecureStore.setItemAsync('accessToken', data.access);
        await SecureStore.setItemAsync('refreshToken', data.refresh);
        
        return data as AuthResponse;
    }


    const handleLogin = async () => {
        // console.log('≫ handleLogin fired')
        if (!username || !password) {
            return Alert.alert('Error','Please enter both username and password');
        }
        try {
            const auth = await authenticate(username, password);
            // console.log('✅ authenticate() ok:', auth);
            router.replace('/(tabs)')
        } catch (err) {
            // console.log('❌ auth error', err);
            let errorMessage = 'Login failed';
            if (err && typeof err === 'object' && 'detail' in err) {
                errorMessage = (err as { detail?: string }).detail || errorMessage;
            }
            Alert.alert('Login Error', errorMessage);
        }
    };


    return (
        <View style={ styles.container }>
            <View>
                <Text  style={ styles.label }>Enter your username.</Text>
                <TextInput placeholder='username' placeholderTextColor="#999" style={ styles.textInput } onChangeText={setUsername} value={username} />
            </View>

            <View>
                <Text style={ styles.label } >Enter your password.</Text>
                <TextInput placeholder='Password' secureTextEntry placeholderTextColor="#999" style={ styles.textInput } onChangeText={setPassword} value={password} />
            </View>

            <View>
                <SubmitButton text='Login' onPress={handleLogin}></SubmitButton>
            </View>

            <Link href={'/(auth)/register'} style={ styles.link }>
                <Text>Register</Text>
            </Link>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 50,
        alignItems: 'center',
        backgroundColor: COLORS.background
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
    },

    link: {
        color: 'white'
    }

})
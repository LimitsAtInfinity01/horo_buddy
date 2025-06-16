import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

interface Props {
    text: string;
    onPress: () => void;
}

export default function SubmitButton({ text, onPress }: Props) {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
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
})
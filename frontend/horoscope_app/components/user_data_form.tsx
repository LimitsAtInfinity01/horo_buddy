import React, {useState} from 'react';
import { View, TextInput, StyleSheet, Pressable, Text, Button, Platform } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import moment from 'moment';

import { globalStyles } from '@/global_styles/global_styles';

type UserFormProps = {
    onSubmit?: (data: { name: string; lastName: string, zodiacSign: string, email: string, birthdate: string }) => void;
};

export default function UserForm({ onSubmit }: UserFormProps) {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [zodiacSign, setSign] = useState('')
    const [birthdate, setBirthdate] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false);
    const [email, setEmail] = useState('');
    

    const handleSubmit = () => {
        if ( !name || !lastName || !zodiacSign || !email || !birthdate ){
            alert("Please fill out all fields")
            return;
        }

        if (onSubmit) {
            onSubmit({ name, lastName, zodiacSign, birthdate: birthdate.toISOString(), email });
            alert("Profile created")
        }
    }

    const onChangeSetDate = (event: DateTimePickerEvent, selectedDate?: Date | undefined) => {
        setShowPicker(Platform.OS === 'ios' || Platform.OS === 'web' || Platform.OS === 'android');
        if (selectedDate) {
          setBirthdate(selectedDate);
        }
    };

      const showDatepicker = () => {
        setShowPicker(true);
      };

    return (
        <View style={ styles.container }>

            <View>
                <Text  style={ styles.label }>Enter your name.</Text>
                <TextInput placeholder='First name' placeholderTextColor="#999" style={ styles.textInput } onChangeText={setName} value={name} />
            </View>

            <View>
                <Text  style={ styles.label }>Enter your last name.</Text>
                <TextInput placeholder='Last name' placeholderTextColor="#999" style={ styles.textInput } onChangeText={setLastName} value={lastName} />
            </View>

            <View>
                <Text style={ styles.label } >Enter your zodiac sign.</Text>
                <TextInput placeholder='Scorpio' placeholderTextColor="#999" style={ styles.textInput } onChangeText={setSign} value={zodiacSign} />
            </View>


            <View>
                <Text style={ styles.label } >Enter your email address.</Text>
                <TextInput placeholder='Email' placeholderTextColor="#999" style={ styles.textInput } onChangeText={setEmail} value={email} />
            </View>

            <View>
                <Button title="Select Date" onPress={showDatepicker} />
                {showPicker && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={birthdate}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChangeSetDate}
                    />
                )}
            </View>

            <Pressable style={ styles.pressable } onPress={handleSubmit}>
                <Text style={ styles.textPressable }>Submit</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        gap: 50,
        alignItems: 'center',
        backgroundColor: 'black',
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
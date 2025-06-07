import React, {useState} from 'react';
import { View, TextInput, StyleSheet, Pressable, Text, Button, Platform } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import moment from 'moment';

type UserFormProps = {
    onSubmit?: (data: { name: string; zodiacSign: string }) => void;
};

export default function UserForm({ onSubmit }: UserFormProps) {
    const [name, onChangeName] = useState('')
    const [zodiacSign, onChangeSign] = useState('')
    const [date, setDate] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false);


    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit({ name, zodiacSign });
        }
    }


    const onChange = (event: DateTimePickerEvent, selectedDate?: Date | undefined) => {
        setShowPicker(Platform.OS === 'ios' || Platform.OS === 'web' || Platform.OS === 'android');
        if (selectedDate) {
          setDate(selectedDate);
        }
    };

      const showDatepicker = () => {
        setShowPicker(true);
      };

    return (
        <View style={ styles.container }>

            <View>
                <Text  style={ styles.label }>Enter your name.</Text>
                <TextInput placeholder='John Doe' placeholderTextColor="#999" style={ styles.textInput } onChangeText={onChangeName} value={name} />
            </View>

            <View>
                <Text style={ styles.label } >Enter your zodiac sign.</Text>
                <TextInput placeholder='Scorpio' placeholderTextColor="#999" style={ styles.textInput } onChangeText={onChangeSign} value={zodiacSign} />
            </View>

            <View>
                <Text style={ styles.label } >Selected Date: {moment(date).format('YYYY-MM-DD')}</Text>
                <Button title="Select Date" onPress={showDatepicker} />
                {showPicker && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
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
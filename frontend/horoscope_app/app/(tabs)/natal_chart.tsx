import { View, Text, StyleSheet, FlatList, } from 'react-native'
import { globalStyles } from '@/global_styles/global_styles';


export default function Natal_Chart() {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title}>
                Here you&apos;ll see your natal chart
            </Text>
            <FlatList
                data={[
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                ]}
                renderItem={({ item }) => (
                    <Text style={{ color: 'white', padding: 8 }}>{item.key}</Text>
                )}
                keyExtractor={item => item.key}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00193b',
    },

    title: {
        color: 'white',
        textAlign: 'center',
    }

})
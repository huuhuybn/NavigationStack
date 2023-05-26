import {StatusBar} from 'expo-status-bar';
import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";


export default function Profile({route}) {

    const {name} = route.params
    const {number} = route.params

    return (
        <View style={styles.container}>
            {/*navigation*/}
            <Text>Profile</Text>
            <Text>{name}</Text>
            <Text>{number}</Text>

            <StatusBar style="auto"/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

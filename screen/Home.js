import {StatusBar} from 'expo-status-bar';
import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";


export default function Home({navigation}) {

    return (
        <View style={styles.container}>
            {/*navigation*/}
            <Text>HOME</Text>
            <Button title={"Go to Profile"} onPress={()=>{
               navigation.navigate('Profile',
                   { name : 'Huy Nguyen', number : '0987654321'})
            //     Profile là name được định nghĩa bên file App.js
            }}/>

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

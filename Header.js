import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

export default function Header(props) {
    return (
        <View>
            <Text>Header 123</Text>
            <Text>{props.dulieu1}</Text>
            <Text>{props.dulieu2}</Text>
            <Text>{props.dulieu3}</Text>
            <Button title={"update"}
                    onPress={()=>{
                        props.change("OK OK")
                    }}/>

        </View>
    );
}


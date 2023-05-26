import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./screen/Home";
import Profile from "./screen/Profile";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>{
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={Home} />
                <Stack.Screen name={"Profile"} component={Profile} />
            {/* name là hằng số đặt cho màn hình, sử dụng để định danh như
            1 ID */}
            </Stack.Navigator>
        }</NavigationContainer>
    );
}
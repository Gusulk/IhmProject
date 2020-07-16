import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Main from "./pages/main";
import Settings from "./pages/settings";
import Search from "./pages/search";
import Chat from "./pages/chat";


export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Main" screenOptions={{ headerStyle: {backgroundColor: "#0D0D0D"}, headerTintColor: "#FFF"}}>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
    );
}

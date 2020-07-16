import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Input, Image } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';



export default function Chat({ route }) {


    const { tema } = route.params;
    const { nome } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.settings}>
                <Text style={styles.settingsText}>Tema: {JSON.stringify(tema)} </Text>
                <Text style={styles.settingsText}>{JSON.stringify(nome)}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", width: 300 }}>
                <Image
                    source={require("../images/user-image.png")}
                    style={styles.image}
                />
                <Text style={styles.name}>Fulano, 20</Text>
            </View>


            <View style={styles.divider}>
                <Input
                    placeholder='Digite uma mensagem..'
                    leftIcon={
                        <FontAwesome
                            name='keyboard-o'
                            size={24}
                            color='black'
                        />
                    }

                />
            </View>



        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#D9D9D9'
    },
    name: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 18,
        color: '#737373',
        marginTop: 25
    },
    settingsText: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 18,
        color: '#0D0D0D'
    },
    image: {
        width: 70,
        height: 70,
        borderColor: "#D9D9D9",
        borderRadius: 10,
        borderWidth: 5,

    },
    divider: {
        width: 350,
        height: 450,
        backgroundColor: "#f2f2f2",
        borderColor: "#D9D9D9",
        borderRadius: 10,
        borderWidth: 2,
        elevation: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginVertical: 5,

    },


})
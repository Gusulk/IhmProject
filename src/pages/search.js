import React, { Component, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Image } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';


export default function Search({ route, navigation }) {

    function navigateToChat() {
        navigation.navigate('Chat',{
            nome: nome,
            tema: tema,
            id: id,
        })
    }
    const [id, setId] = useState(1);

    
    const { nome } = "Fulano";
    const { idade } = route.params;
    const { sexo } = route.params;
    const { tema } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.settings}>
                <Text style={styles.settingsText}>Tema: {JSON.stringify(tema)} </Text>
                <Text style={styles.settingsText}>Sexo: {JSON.stringify(sexo)} / Idade: 18 - {JSON.stringify(idade)} / Localidade: ???</Text>
            </View>

            <Text style={styles.name}> Fulano{JSON.stringify(id)} , 20</Text>
            <Image
                source={require("../images/user-image.png")}
                style={styles.image}
            />
            <View style={styles.divider}>
                <Text style={styles.description}> Ut dolor aliquip consequat occaecat aute pariatur laboris nulla incididunt nostrud fugiat proident. Aliqua nostrud ad irure ea Lorem id. Fugiat occaecat ad esse adipisicing enim sunt nostrud ad et tempor veniam.</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", width: 300 }}>
                <FontAwesome name="times-circle" size={60} onPress={()=>setId(id+1)} />
                <FontAwesome name="check-circle" size={60} onPress={navigateToChat} />
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
    settings: {
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 15,
    },
    settingsText: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 18,
        color: '#0D0D0D'
    },

    name: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 18,
        color: '#737373'
    },
    image: {
        width: 250,
        height: 250,
        borderColor: "#D9D9D9",
        borderRadius: 10,
        borderWidth: 5,

    },
    divider: {
        width: 300,
        backgroundColor: "#f2f2f2",
        borderColor: "#D9D9D9",
        borderRadius: 10,
        borderWidth: 2,
        elevation: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        marginVertical: 5,

    },

    description: {
        textAlign: "justify",
        fontSize: 14
    }
})

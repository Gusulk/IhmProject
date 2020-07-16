import React, { Component, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SearchBar, ListItem, Button } from 'react-native-elements';





export default function Main({ navigation }) {

    function navigateToSettings() {
        navigation.navigate('Settings', {
            tema:  theme,
        })
    };
    const [theme, setTheme] = useState('');
    const [search, setSearch] = useState('');

    const list = [
        { title: 'Strange Things' },
        { title: 'Covid-19' },
        { title: 'Politica' },
        { title: 'Youtube' },
        { title: 'Jogos' },
        { title: 'Twitter' },
        { title: 'Futebol' },
        { title: 'Trump' },
        { title: 'PS5' },
        { title: 'Netflix' },
        { title: 'Compras' },
        { title: 'Geek' },
        { title: 'Pokemon' },
        { title: 'Filmes' },
    ];

    return (

        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text style={styles.title}>Escolha um Assunto</Text>
                <SearchBar
                    placeholder="Procurar..."
                    round={true}
                    onChangeText={setSearch}
                    value={search}
                    lightTheme={true}
                    containerStyle={
                        {
                            backgroundColor: '#F2F2F2',
                            marginBottom: 20,
                        }
                    }
                    platform="android"
                />
            </View>

            <View style={styles.containerView}>
                <ScrollView>
                    {
                        list.map((l, i) => (
                            <ListItem
                                key={i}
                                title={l.title}
                                bottomDivider
                                chevron
                                onPress={
                                    () => {setTheme(l.title)}
                                }
                               
                                containerStyle={
                                    
                                    {
                                        backgroundColor: '#F2F2F2',
                                        borderRadius: 10,
                                    }
                                }
                                titleStyle={
                                    {
                                        textAlign: "left",
                                        fontWeight: 'bold',
                                        color: '#737373'
                                    }
                                }
                            />
                        ))
                    }
                </ScrollView>
            </View>
            <View style={styles.containerBottom}>
                <Button
                    title="Procurar"
                    onPress={navigateToSettings}
                    disabled={theme === '' ? true : false}
                    raised
                    buttonStyle={{
                        backgroundColor:'#0D0D0D',
                        width: 100,
                        borderRadius: 10,
                        color: '#D9D9D9'
                    }}
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
        backgroundColor: '#F2F2F2'
    },
    containerTop: {
        justifyContent: "center",
        marginVertical: 10,
        height: 50,
        width: 400

    },

    title:{
        justifyContent: "center",
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 50,
        color: '#737373'
    },
    containerView: {
        flex: 1,
        margin: 20,
        width: 400,
        justifyContent: "center",

    },
    containerBottom: {
        marginBottom: 20,

    }
});
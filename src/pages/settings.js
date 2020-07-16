import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, CheckBox, Slider, Divider } from 'react-native-elements';
import MapView from 'react-native-maps';

export default function Settings({ route ,navigation }) {

    function navigateToSearch() {
        navigation.navigate('Search',{
            idade: state,
            sexo: checked,
            tema: tema,
        })
    }
    const { tema } = route.params;
    const [state, setState] = useState(18);
    const [checked, setChecked] = useState('Homem');

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text style={styles.title}>Configurações</Text>
            </View>
            <View style={styles.settings}>
                <Text style={styles.settingsText}>Tema: {JSON.stringify(tema)} </Text>
            </View>
            <View style={styles.containerView}>
                <View style={styles.divider}>
                    <Text style={{ textAlign: "center", fontWeight: 'bold', fontSize: 18, color: '#737373' }}> Sexo </Text>
                    <View style={{
                        flexDirection: "row",
                    }}>
                        <CheckBox
                            center
                            title='Homem'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={checked === 'Homem' ? true : false}
                            onPress={() => setChecked('Homem')}
                            iconRight
                            containerStyle={{
                                width: 200,
                                height: 30,
                                justifyContent: "center",
                                backgroundColor: "transparent",
                                borderWidth: 0,
                                flex: 1
                            }}
                            textStyle={{
                                fontSize: 16,
                                color: "#737373",

                            }}
                        />
                        <CheckBox
                            center
                            title='Mulher'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={checked === 'Mulher' ? true : false}
                            onPress={() => setChecked('Mulher')}
                            iconRight
                            containerStyle={{
                                width: 200,
                                height: 30,
                                justifyContent: "center",
                                backgroundColor: "transparent",
                                borderWidth: 0,
                                flex: 1
                            }}
                            textStyle={{
                                fontSize: 16,
                                color: "#737373",

                            }}
                        />
                        <CheckBox
                            center
                            title='Ambos'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={checked === 'Ambos' ? true : false}
                            onPress={() => setChecked('Ambos')}
                            iconRight
                            containerStyle={{
                                width: 200,
                                height: 30,
                                justifyContent: "center",
                                backgroundColor: "transparent",
                                borderWidth: 0,
                                flex: 1
                            }}
                            textStyle={{
                                fontSize: 16,
                                color: "#737373",

                            }}
                        />
                    </View>

                </View>

                <View style={styles.divider}>
                    <Text style={{ textAlign: "center", fontWeight: 'bold', fontSize: 18, color: '#737373' }} >Idade: 18 - {state}</Text>
                    <View >
                        <Slider
                            value={state}
                            onValueChange={setState}
                            minimumValue={18}
                            maximumValue={90}
                            step={1}
                            thumbTintColor={'#0D0D0D'}
                            style={{
                                width: 200
                            }}

                        />
                    </View>


                </View>
                <View style={styles.divider}>
                    <Text style={{ textAlign: "center", fontWeight: 'bold', fontSize: 18, color: '#737373', marginBottom: 10 }} >Localidade</Text>
                    <MapView
                        style={styles.mapView}
                        initialRegion={{
                            latitude: -22.122,
                            longitude: -51.399,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </View>

            </View>
            <View style={styles.containerBottom}>
                <Button
                    title="Buscar"
                    onPress={navigateToSearch}

                    raised
                    buttonStyle={{
                        backgroundColor: '#0D0D0D',
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
        backgroundColor: '#D9D9D9'
    },
    containerTop: {
        justifyContent: "center",
        marginVertical: 10,
        height: 50,
        width: 400

    },
    settingsText: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 18,
        color: '#0D0D0D'
    },
    title: {
        justifyContent: "center",
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 25,
        color: '#0D0D0D'
    },

    containerView: {
        flex: 1,
        margin: 20,
        width: 400,
        justifyContent: "center",
        alignItems: "center"

    },

    divider: {
        width: 400,
        backgroundColor: "#f2f2f2",
        borderColor: "#D9D9D9",
        borderRadius: 10,
        borderWidth: 2,
        elevation: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        marginVertical: 5
    },

    mapView: {
        width: 300,
        height: 150,
        justifyContent: "center",
        
    },
    containerBottom: {
        marginBottom: 20,

    }
});
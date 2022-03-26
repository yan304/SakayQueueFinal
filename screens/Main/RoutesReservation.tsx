import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import AvailableRoutes from './AvailableRoutes'
import { Button } from 'react-native-paper';
import {TextInput, StyleSheet, TouchableOpacity, Text, View, Alert, Image} from "react-native";

export default function RoutesReservation({back, allBack}) {
    const [search, onSearch] = useState("");
    const [availableRoutesState, setAvailableRoutesState] = useState(false);

    const handleAvailableRoutes = () => {
        setAvailableRoutesState(true);
    }

    const handleAllBack = () => {
        allBack();
        setAvailableRoutesState(false)
    }

    return (
        availableRoutesState ? <AvailableRoutes back={() => setAvailableRoutesState(false)} allBack={() => handleAllBack()}/> :
            <View>
                <View style={styles.backButton}>
                    <TouchableOpacity onPress={back} style={{ display: "flex", flexDirection: "row", marginTop: 15, marginBottom: 10}}>
                        <Image source={require('../../assets/icons/arrow.png')} style={styles.backlogo} />
                        <Text style={styles.backFont}>
                            Available Routes
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.mainTransparent}>
                    <View style={styles.transparent}>
                        <View style={styles.searchArea}>
                            <TextInput
                                style={styles.input}
                                onChangeText={onSearch}
                                value={search}
                                placeholder="   CDO to Iligan"
                            />
                        </View>
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => handleAvailableRoutes()}>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
                                <View style={{ paddingTop: 30, paddingBottom: 30}}>
                                    <Text style={styles.buttonPlaceLeftLabel}>
                                        CDO
                                    </Text>
                                    <Text style={styles.buttonLabel}>
                                        01:00 PM
                                    </Text>
                                </View>
                                <View style={{ paddingTop: 20}}>
                                    <Image source={require('../../assets/images/Bus.png')} style={styles.logo}/>
                                </View>
                                <View style={{ paddingTop: 30, paddingBottom: 30}}>
                                    <Text style={styles.buttonPlaceRightLabel}>
                                        Iligan
                                    </Text>
                                    <Text style={styles.buttonLabel}>
                                        03:00 PM
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backlogo: {
        width: 10,
        height: 15,
        marginRight: 10,
        marginTop: 2,
        marginLeft: 5
    },
    backFont: {
        fontSize: 15,
        marginTop: -1
    },
    buttonDateLabel: {
        padding: 2,
        fontSize: 15,
        color: "#00000094",
    },
    buttonPlaceLeftLabel: {
        padding: 2,
        fontSize: 25,
        color: "#F9AD10",
        fontWeight: "700"
    },
    buttonPlaceRightLabel: {
        padding: 2,
        fontSize: 25,
        color: "#177FF4",
        fontWeight: "700"
    },
    transparent: {
        width: "100%",
        display: "flex",
        padding: 25,
        paddingTop: 1,
        borderRadius: 31,
        // alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    logo: {
        width: 160,
        height: 20,
        marginTop: 30,
    },
    mainTransparent: {
        display: "flex",
        marginTop: -20,
        height: '100%',
        alignItems: "center",
    },
    buttonStyle: {
        padding: 8,
        fontSize: 20,
        width: "100%",
        marginTop: 10,
        color: "white",
        display: "flex",
        marginBottom: 15,
        borderRadius: 19,
        fontWeight: "700",
        textAlign: "center",
        backgroundColor: "#D9D9D9",
    },
    backButtonStyle: {
        width: "50%",
        display: "flex",
        marginTop: 15,
        borderRadius: 19,
        color: "black"
    },
    buttonLabel: {
        padding: 2,
        fontSize: 15,
        color: "black",
    },
    input: {
        height: 40,
        margin: 12,
        width: "100%",
        backgroundColor: "#D9D9D9",
        borderRadius: 20,
        padding: 10,
    },
    register: {
        fontSize: 15,
        fontWeight: "700",
        color: "#177FF4"
    },
    backButton: {
        color: "black",
        backgroundColor: "#F3F1F1",
        paddingBottom: 30,
        paddingLeft: 10,
    },
    searchArea: {
        display: "flex",
        width: "100%",
        marginTop: 1,
        marginLeft: -12
    },
});

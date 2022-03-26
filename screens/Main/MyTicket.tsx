import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { Button } from 'react-native-paper';
import {TextInput, StyleSheet, ScrollView, Text, View, Alert, Image, TouchableOpacity, FlatList} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MyTicket({back}) {
    const [search, onSearch] = useState("");
    const [userReservation, setUserReservation] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('userReservation')
            jsonValue != null ? setUserReservation(JSON.parse(jsonValue)) : null;
        } catch(e) {
            console.log(e);
        }
    }

    const Item = ({ item }) => (
        <View style={styles.transparent}>
            <View style={styles.buttonStyle}>
                <Text style={styles.buttonDateLabel}>
                    December 6, 2021
                </Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <View>
                        <Text style={styles.buttonLabel}>
                            From
                        </Text>
                        <Text style={styles.buttonPlaceLabel}>
                            CDO
                        </Text>
                        <Text style={styles.buttonLabel}>
                            01:00 PM
                        </Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/images/Bus.png')} style={styles.logo}/>
                    </View>
                    <View>
                        <Text style={styles.buttonLabel}>
                            To
                        </Text>
                        <Text style={styles.buttonPlaceLabel}>
                            Iligan
                        </Text>
                        <Text style={styles.buttonLabel}>
                            03:00 PM
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.otherInformation} onPress={() => Alert.alert('Discount')}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <View style={{ width: "40%" }}>
                        <Text style={styles.buttonLabel}>
                            Passenger
                        </Text>
                        <Text style={styles.buttonOtherLabel}>
                            Sakay Queue
                        </Text>
                    </View>
                    <View style={{ width: "33%" }}>
                        <Text style={styles.buttonLabel}>
                            Bus No.
                        </Text>
                        <Text style={styles.buttonOtherLabel}>
                            BUS - {userReservation?.busCode}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.buttonLabel}>
                            Seat No.
                        </Text>
                        <Text style={styles.buttonOtherLabel}>
                            {item}A
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )

    return (
        <View>
            <View style={styles.backButton}>
                <TouchableOpacity onPress={back} style={{ display: "flex", flexDirection: "row", marginTop: 15, marginBottom: 10}}>
                    <Image source={require('../../assets/icons/arrow.png')} style={styles.backlogo} />
                    <Text style={styles.backFont}>
                        My Ticket
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.mainTransparent}>
                <View style={styles.transparent}>
                    <Text style={styles.titleStyle}>
                        My Ticket(s)
                    </Text>
                </View>
                <ScrollView style={{ height: "100%"}}>
                {!Array.isArray(userReservation) &&
                    userReservation?.seatBooked.map((item) => (
                    item !== '' &&
                    <View style={styles.transparent}>
                        <View style={styles.buttonStyle}>
                            <Text style={styles.buttonDateLabel}>
                                December 6, 2021
                            </Text>
                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <View>
                                    <Text style={styles.buttonLabel}>
                                        From
                                    </Text>
                                    <Text style={styles.buttonPlaceLabel}>
                                        CDO
                                    </Text>
                                    <Text style={styles.buttonLabel}>
                                        01:00 PM
                                    </Text>
                                </View>
                                <View>
                                    <Image source={require('../../assets/images/Bus.png')} style={styles.logo}/>
                                </View>
                                <View>
                                    <Text style={styles.buttonLabel}>
                                        To
                                    </Text>
                                    <Text style={styles.buttonPlaceLabel}>
                                        Iligan
                                    </Text>
                                    <Text style={styles.buttonLabel}>
                                        03:00 PM
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.otherInformation} onPress={() => Alert.alert('Discount')}>
                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <View style={{ width: "40%" }}>
                                    <Text style={styles.buttonLabel}>
                                        Passenger
                                    </Text>
                                    <Text style={styles.buttonOtherLabel}>
                                        Sakay Queue
                                    </Text>
                                </View>
                                <View style={{ width: "33%" }}>
                                    <Text style={styles.buttonLabel}>
                                        Bus No.
                                    </Text>
                                    <Text style={styles.buttonOtherLabel}>
                                        BUS - {userReservation?.busCode}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.buttonLabel}>
                                        Seat No.
                                    </Text>
                                    <Text style={styles.buttonOtherLabel}>
                                        {item}A
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        // marginTop: 300,
        marginTop: -20,
        alignItems: "center",
    },
    titleStyle: {
        padding: 25,
        fontSize: 25,
        marginTop: 10,
        width: "100%",
        color: "black",
        display: "flex",
        borderRadius: 19,
        marginBottom: -30,
        textAlign: "center",
    },
    buttonStyle: {
        width: "100%",
        display: "flex",
        marginTop: 15,
        marginBottom: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderStyle: "dotted",
        borderBottomWidth: 2,
        borderRadius: 19,
        alignItems: "center",
        backgroundColor: "#D9D9D9",
    },
    otherInformation: {
        width: "100%",
        display: "flex",
        marginTop: -15,
        marginBottom: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 19,
        alignItems: "center",
        backgroundColor: "#D9D9D9",
    },
    buttonDateLabel: {
        padding: 2,
        fontSize: 15,
        color: "#00000094",
    },
    buttonOtherLabel: {
        padding: 2,
        fontSize: 20,
        color: "black",
        fontWeight: "700"
    },
    backButtonStyle: {
        width: "30%",
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
    buttonPlaceLabel: {
        padding: 2,
        fontSize: 25,
        color: "black",
        fontWeight: "700"
    },
    searchArea: {
        display: "flex",
        width: "100%",
        marginTop: 1,
        marginLeft: -12
    },
    input: {
        height: 40,
        margin: 12,
        width: "100%",
        backgroundColor: "#D9D9D9",
        borderRadius: 20,
        padding: 10,
    },
    inputLabel: {
        textAlign: "left",
        fontSize: 18,
        marginBottom: 10,
    },
    inputContainer: {
        marginLeft: -10,
    },
    register: {
        fontSize: 15,
        fontWeight: "700",
        color: "#177FF4"
    },
    normalText: {
        fontSize: 15,
        color: "black",
        marginBottom: 170,
    },
    registerStyles: {
        display: "flex",
        alignItems: "center"
    },
    forgotStyles: {
        display: "flex",
        alignItems: "center",
        marginBottom: 70
    },
    backButton: {
        color: "black",
        backgroundColor: "#F3F1F1",
        paddingBottom: 30,
        paddingLeft: 10,
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
        marginTop: 1
    },
    forgotFont: {
        fontSize: 28,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: "700",
    },
    centerForgotDescription: {
        display: "flex",
        alignItems: "center"
    }
});

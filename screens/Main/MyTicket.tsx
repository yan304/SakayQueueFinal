import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Button } from 'react-native-paper';
import {TextInput, StyleSheet, Pressable, Text, View, Alert, Image} from "react-native";

export default function MyTicket({back}) {
    const [search, onSearch] = useState("");
    return (
        <View>
            <View style={styles.backButton}>
                <Button icon='arrow-left' size={24} color="black" style={styles.backButtonStyle} onPress={back}>
                    My Ticket
                </Button>
            </View>
            <View style={styles.mainTransparent}>
                <View style={styles.transparent}>
                    <Pressable style={styles.titleStyle}>
                        <Text style={styles.titleLabel}>
                            My Ticket(s)
                        </Text>
                    </Pressable>
                </View>
                <View style={styles.transparent}>
                    <Pressable style={styles.buttonStyle} onPress={() => Alert.alert('Discount')}>
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
                    </Pressable>
                    <Pressable style={styles.otherInformation} onPress={() => Alert.alert('Discount')}>
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
                                    BUS - A01
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.buttonLabel}>
                                    Seat No.
                                </Text>
                                <Text style={styles.buttonOtherLabel}>
                                    21A
                                </Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
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
        width: "100%",
        display: "flex",
        marginTop: 10,
        marginBottom: -30,
        borderRadius: 19,
        alignItems: "center",
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
    titleLabel: {
        padding: 25,
        fontSize: 25,
        color: "black",
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
        paddingTop: 50,
        paddingBottom: 30,
        paddingLeft: 10,
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

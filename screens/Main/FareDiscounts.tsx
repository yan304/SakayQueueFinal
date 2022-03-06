import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Button } from 'react-native-paper';
import {TextInput, StyleSheet, Pressable, Text, View, Alert, Image} from "react-native";

export default function FareDiscounts({back}) {
    const [search, onSearch] = useState("");
    return (
        <View>
            <View style={styles.backButton}>
                <Button icon='arrow-left' size={24} color="black" style={styles.backButtonStyle} onPress={back}>
                    Fair & Discounts
                </Button>
            </View>
            <View style={styles.mainTransparent}>
                <View style={styles.transparent}>
                    <View style={styles.searchArea}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onSearch}
                            value={search}
                            placeholder="   Student"
                        />
                    </View>
                    <Pressable style={styles.buttonStyle} onPress={() => Alert.alert('Discount')}>
                        <Text style={styles.buttonLabel}>
                            Loading...
                        </Text>
                    </Pressable>
                    <Pressable style={styles.buttonStyle} onPress={() => Alert.alert('Discount')}>
                        <Text style={styles.buttonLabel}>
                            Loading...
                        </Text>
                    </Pressable>
                    <Pressable style={styles.buttonStyle} onPress={() => Alert.alert('Discount')}>
                        <Text style={styles.buttonLabel}>
                            Loading...
                        </Text>
                    </Pressable>
                    <Pressable style={styles.buttonStyle} onPress={() => Alert.alert('Discount')}>
                        <Text style={styles.buttonLabel}>
                            Loading...
                        </Text>
                    </Pressable>
                    <Pressable style={styles.buttonStyle} onPress={() => Alert.alert('Discount')}>
                        <Text style={styles.buttonLabel}>
                            Loading...
                        </Text>
                    </Pressable>
                    <Pressable style={styles.buttonStyle} onPress={() => Alert.alert('Discount')}>
                        <Text style={styles.buttonLabel}>
                            Loading...
                        </Text>
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
        width: 60,
        height: 60,
        marginTop: 30,
    },
    mainTransparent: {
        display: "flex",
        // marginTop: 300,
        marginTop: -20,
        alignItems: "center",
    },
    buttonStyle: {
        width: "100%",
        display: "flex",
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 19,
        alignItems: "center",
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
        padding: 25,
        fontSize: 15,
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

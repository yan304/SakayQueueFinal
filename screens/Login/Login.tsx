import React, { useState, useEffect } from 'react';
import { ImageBackground, Image, StyleSheet, Pressable, Text, View, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({dashboard, login, register}) {
    const [currentUser, setCurrentUser] = useState(null);

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('userCredentials')
            jsonValue != null ? setCurrentUser(JSON.parse(jsonValue)) : null;
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (currentUser) {
            dashboard(currentUser.role);
            console.log(currentUser, "Login Successfully");
        }
    }, [currentUser])

    useEffect(() => {
        getData();
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/Login.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.mainTransparent}>
                    <View style={styles.transparent}>
                        <Image source={require('../../assets/images/bus-logo.png')} style={styles.logo}/>
                        <Text style={styles.text}>
                            Sakay Queue
                        </Text>
                        <Text style={styles.buttonLabel} onPress={login}>
                            Log In
                        </Text>
                        <Text style={styles.normalText} onPress={register}>
                            No Account?
                            <Text style={styles.register}>
                                &thinsp; Register
                            </Text>
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    image: {
        justifyContent: "center"
    },
    text: {
        fontSize: 33,
        lineHeight: 84,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
    transparent: {
        width: "80%",
        display: "flex",
        borderRadius: 31,
        alignItems: "center",
        backgroundColor: "#FFFFFFc0"
    },
    mainTransparent: {
        display: "flex",
        marginTop: 300,
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 30,
        marginBottom: -30
    },
    register: {
        fontSize: 20,
        fontWeight: "700",
        color: "#177FF4"
    },
    normalText: {
        fontSize: 20,
        color: "black",
        marginBottom: 170,
    },
    buttonLabel: {
        padding: 8,
        fontSize: 20,
        width: "80%",
        marginTop: 100,
        color: "white",
        display: "flex",
        marginBottom: 15,
        borderRadius: 19,
        fontWeight: "700",
        textAlign: "center",
        backgroundColor: "#177FF4",
    },
});
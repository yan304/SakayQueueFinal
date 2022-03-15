import { registerUser } from '../../src/config';
import React, { useState } from "react";
import { TextInput, StyleSheet, Pressable, Text, View, Alert  } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Register({back}) {
    const [role, setRole] = useState("");
    const [email, onEmailChange] = useState("");
    const [username, onUsernameChange] = useState("");
    const [password, onPasswordChange] = useState("");;
    const [confirmPassword, onConfirmPasswordChange] = useState("");

    const [registerState, setRegisterState] = useState();

    const storeData = async () => {
        try {
            const jsonValue = JSON.stringify({
                username: email,
                password: password,
                role: role
            })
            await AsyncStorage.setItem('userCredentials', jsonValue)
        } catch (e) {
            console.log(e);
        }
    }

    const handleSubmit = () => {
        storeData();
        registerUser({
            email: username,
            password: password,
        }, setRegisterState);
    }

    return (
        <View>
            <View style={styles.backButton}>
                <Text style={styles.inputLabel} onPress={back}>Register</Text>
            </View>
            <View style={styles.mainTransparent}>
                <View style={styles.transparent}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onUsernameChange}
                            value={username}
                            placeholder="   Username"
                        />
                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onEmailChange}
                            value={email}
                            placeholder="   Email"
                        />
                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onPasswordChange}
                            value={password}
                            placeholder="   Password"
                        />
                        <Text style={styles.inputLabel}>Confirm Password</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onConfirmPasswordChange}
                            value={confirmPassword}
                            placeholder="   Confirm Password"
                        />
                    </View>
                    <Text style={styles.buttonStyle} onPress={() => Alert.alert('Register is currently on Fix')}>
                        Register
                    </Text>
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
        padding: 50,
        paddingTop: 100,
        borderRadius: 31,
        // alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    mainTransparent: {
        display: "flex",
        // marginTop: 300,
        marginTop: -20,
        alignItems: "center",
    },
    buttonStyle: {
        padding: 8,
        fontSize: 20,
        width: "100%",
        marginTop: 100,
        color: "white",
        display: "flex",
        marginBottom: 15,
        borderRadius: 19,
        fontWeight: "700",
        textAlign: "center",
        backgroundColor: "#177FF4",
    },
    buttonLabel: {
        padding: 8,
        fontSize: 20,
        color: "white",
        fontWeight: "700",
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
        marginLeft: 15,
        fontSize: 20
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
        backgroundColor: "#F3F1F1",
        paddingTop: 5,
        paddingBottom: 30
    }
});

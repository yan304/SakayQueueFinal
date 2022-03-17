import React, { useState, useEffect } from "react";
import { loginUser } from '../../src/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, StyleSheet, Pressable, Text, View, Alert } from "react-native";

export default function InputLogin({login, register, forgot}) {
    const [username, onUsernameChange] = useState("");
    const [password, onPasswordChange] = useState("");
    const [role, setRole] = useState("");
    const [loginState, setLoginState] = useState();

    const storeData = async (roles) => {
        try {
            const jsonValue = JSON.stringify({
                username: username,
                password: password,
                role: roles
            })
            await AsyncStorage.setItem('userCredentials', jsonValue)
        } catch (e) {
            console.log(e);
        }
    }

    const handleSubmit = () => {
        if (username !== "" && password !== "") {
            loginUser({
                email: username,
                password: password,
            }, setLoginState);
        }
        else {
            setLoginState({
                message: "Invalid Credentials",
                color: "red"
            });
        }
    }

    useEffect(() => {
        // @ts-ignore
        if (loginState?.message === "Successfully Authenticated") {
            var roles = "";
            if (username.includes('@admin.com')) {
                roles = "admin";
                setRole("admin");
            }
            if (username.includes('@conductor.com')) {
                roles = "conductor";
                setRole("conductor");
            }
            if (username.includes('@customer.com')) {
                roles = "customer";
                setRole("customer");
            }
            storeData(roles);
            login(roles);
        }
    }, [loginState])

    return (
        <View style={styles.mainTransparent}>
            <View style={styles.transparent}>
                <Text style={styles.text}>
                    Welcome Back!
                </Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onUsernameChange}
                        value={username}
                        placeholder="   Username"
                    />
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onPasswordChange}
                        value={password}
                        placeholder="   Password"
                    />
                    <Text style={{ color: loginState?.color, marginLeft: 20}}>
                        {loginState && loginState.message}
                    </Text>
                </View>
                <Text style={styles.buttonLabel} onPress={() => handleSubmit()}>
                    Log In
                </Text>
                <View style={styles.forgotStyles}>
                    <Text style={styles.register} onPress={forgot}>
                        Forgot Password
                    </Text>
                </View>
                <View style={styles.registerStyles}>
                    <Text style={styles.normalText} onPress={register}>
                        No Account?
                        <Text style={styles.register}>
                            &thinsp; Register
                        </Text>
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
    text: {
        fontSize: 45,
        lineHeight: 84,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 70,
        marginTop: '10%'
    },
    transparent: {
        width: "80%",
        display: "flex",
        borderRadius: 31,
    },
    mainTransparent: {
        display: "flex",
        alignItems: "center",
    },
    buttonLabel: {
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
        marginLeft: -10
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
    }
});

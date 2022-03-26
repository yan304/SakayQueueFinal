import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageBackground, Image, StyleSheet, TouchableOpacity, Text, View, Alert, Dimensions   } from "react-native";

export default function MenuScreen({back, logout}) {
    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem("userCredentials");
            logout();
            return true;
        }
        catch(exception) {
            return false;
        };
    }
    return (
        <View style={{ height: "100%" }}>
            <TouchableOpacity onPress={back} style={styles.menuContainer}>
                <Image source={require('../assets/icons/nav-menu.png')} style={styles.menu} />
            </TouchableOpacity>
            <View style={styles.centerContainer}>
                <Image source={require('../assets/images/bus-logo2.png')} style={styles.profile} />
            </View>
            <View style={styles.centerContainer}>
                <Text style={styles.nameStyle}>
                    Sakay Queue
                </Text>
            </View>
            <View style={styles.centerContainer}>
                <View style={{ backgroundColor: "#ADADAD50", borderRadius: 10, padding: 10, width: "60%", marginTop: 30}}>
                    <Text style={styles.gmailStyle}>
                        Send Us Feedback
                    </Text>
                    <View style={{ display: "flex", flexDirection: "row"}}>
                        <Image source={require('../assets/images/facebook.png')} style={{ marginLeft: "10%", width: 20, height: 20}} />
                        <Text style={styles.linkStyle}>
                            @sakayqueue
                        </Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row"}}>
                        <Image source={require('../assets/images/gmail.png')} style={{ marginLeft: "10%", width: 20, height: 15}}  />
                        <Text style={styles.linkStyle}>
                            sakayqueue@gmail.com
                        </Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.logoutContainer} onPress={() => handleLogout()}>
                <View style={styles.logoutButton}>
                    <Text style={styles.logoutStyle}>
                        Log Out
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    centerContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    logoutContainer: {
        position: 'absolute',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        bottom: 50,
        left: "10%"
    },
    menu: {
        width: 40,
        height: 40,
    },
    menuContainer: {
        position: 'absolute',
        left: 15,
        top: 15,
        zIndex: 1,
    },
    profile: {
        width: 200,
        height: 200,
        marginTop: 70
    },
    image: {
        height: '100%',
        justifyContent: "center"
    },
    nameStyle: {
        fontSize: 35,
        fontWeight: "700",
    },
    gmailStyle: {
        fontSize: 20,
        textAlign: "center"
    },
    linkStyle: {
        fontSize: 15,
        paddingTop: 2,
        paddingLeft: "3%"
    },
    logoutStyle: {
        fontSize: 20,
        color: "white",
        padding: 12,
        fontWeight: "700",
        textAlign: "center",
    },
    logoutButton: {
        width: "80%",
        borderRadius: 15,
        backgroundColor: "#0374F9",
    }
});

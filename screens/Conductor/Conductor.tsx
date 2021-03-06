import React, { useState, useEffect } from "react";
import GetLocation from 'react-native-get-location'
import { createFunc, updateUserFunc, fetchFunc } from '../../src/config';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import SeatManagement from "./SeatManagement";
import MenuScreen from "../MenuScreen";
import { ImageBackground, Image, StyleSheet, TouchableOpacity, Text, View, Alert, Dimensions   } from "react-native";

export default function Conductor({back}) {
    const [seatManagementState, setSeatManagementState] = useState(false);
    const [menuState, setMenuState] = useState(false);

    const [myLocation, setMyLocation] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
    });
    const [busOneLocation, setBusOneLocation] = useState(myLocation);
    const [busTwoLocation, setBusTwoLocation] = useState(myLocation);

    useEffect(() => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                setMyLocation({
                    latitude: location.latitude,
                    longitude: location.longitude,
                });
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    }, []);

    const Countdown = () => {
        const [timeLeft, setTimeLeft] = useState(5);
        useEffect(() => {
            const intervalId = setInterval(() => {
                setTimeLeft((t) => t - 1);
            }, 1000);
            return () => clearInterval(intervalId);
        }, []);

        if (timeLeft === 0) {
            fetchFunc(setBusOneLocation, "busOneLocation");
            fetchFunc(setBusTwoLocation, "busTwoLocation");
        }
        return true;
    };

    const handleSeatManagement = () => {
        setSeatManagementState(true);
    }

    const handleMenu = () => {
        setMenuState(false);
    }

    return (
        menuState ? <MenuScreen back={() => handleMenu()} logout={back}/> :
        seatManagementState ?
            <SeatManagement back={() => setSeatManagementState(false)} data={"A01"} backData={(e,k) => console.log(e,k)}/>
            :
            <View style={styles.container}>
                <Countdown />
                <ImageBackground source={require('../../assets/images/Login.png')} resizeMode="cover" style={styles.image}
                                 blurRadius={1}>
                    <View style={styles.mapContainer}>
                        <View style={styles.mapContainer}>
                            <TouchableOpacity onPress={() => setMenuState(true)} style={styles.menuContainer}>
                                <Image source={require('../../assets/icons/nav-menu.png')} style={styles.menu} />
                            </TouchableOpacity>
                            <MapView
                                style={styles.map}
                                initialRegion={{
                                    latitude: myLocation.latitude,
                                    longitude: myLocation.longitude,
                                    latitudeDelta: 0.1,
                                    longitudeDelta: 0.0421,
                                }}
                            >
                                <Marker
                                    key={1}
                                    coordinate={myLocation}
                                    title={"Location"}
                                    description={"Me"}
                                />
                                <Marker
                                    key={2}
                                    coordinate={busOneLocation}
                                    title={"Bus Location"}
                                    description={"Bus 1"}
                                />
                                <Marker
                                    key={3}
                                    coordinate={busTwoLocation}
                                    title={"Bus Location"}
                                    description={"Bus 2"}
                                />
                            </MapView>
                        </View>
                    </View>
                    <View style={styles.mainTransparent}>
                        <View style={styles.transparent}>
                            <View style={{ display: "flex", flexDirection: "row"}}>
                                <Text style={styles.buttonStyle}>
                                    Routes &{"\n"} Reservation
                                </Text>
                                <Text style={styles.ticketButtonStyle}>
                                    My Ticket
                                </Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row"}}>
                                <Text style={styles.anotherButton}>
                                    Fair &{"\n"} Discounts
                                </Text>
                                <Text style={styles.buttonStyle} onPress={() => handleSeatManagement()}>
                                    Seat{"\n"} Management
                                </Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
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
    image: {
        height: '100%',
        justifyContent: "center"
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 250,
    },
    mapContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35
    },
    text: {
        fontSize: 33,
        lineHeight: 84,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
    transparent: {
        paddingTop: '3%',
        paddingBottom: '3%',
        width: "85%",
        display: "flex",
        borderRadius: 31,
        alignItems: "center",
        backgroundColor: "#FFFFFFd0"
    },
    mainTransparent: {
        display: "flex",
        marginTop: 20,
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
    buttonStyle: {
        padding: 8,
        fontSize: 20,
        margin: 5,
        width: "50%",
        marginTop: 10,
        color: "white",
        display: "flex",
        marginBottom: 15,
        borderRadius: 19,
        fontWeight: "700",
        textAlign: "center",
        backgroundColor: "#177FF4",
    },
    anotherButton: {
        padding: 8,
        fontSize: 20,
        margin: 5,
        marginTop: 10,
        color: "white",
        display: "flex",
        marginBottom: 15,
        borderRadius: 19,
        fontWeight: "700",
        textAlign: "center",
        backgroundColor: "#177FF4",
    },
    ticketButtonStyle: {
        padding: 8,
        paddingTop: 18,
        fontSize: 20,
        marginTop: 10,
        width: "35%",
        color: "white",
        display: "flex",
        marginBottom: 15,
        borderRadius: 19,
        fontWeight: "700",
        textAlign: "center",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#F9AD10",
    },
    buttonLabel: {
        padding: 8,
        fontSize: 20,
        color: "white",
        fontWeight: "700",
    },
});

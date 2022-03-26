import React, { useState, useEffect } from "react";
import GetLocation from 'react-native-get-location'
import { updateBusFunc } from '../../src/config';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import SeatManagement from "./SeatManagement";
import MenuScreen from "../MenuScreen";
import FareDiscounts from "./FareDiscounts";
import { ImageBackground, Image, StyleSheet, TouchableOpacity, Text, View, Alert, Dimensions   } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Conductor({back}) {
    const [seatManagementState, setSeatManagementState] = useState(false);
    const [menuState, setMenuState] = useState(false);
    const [fairDiscountState, setFairDiscountState] = useState(false);

    const [currentUser, setCurrentUser] = useState(null);
    const [currentConductorBus, setCurrentConductorBus] = useState();

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('userCredentials')
            jsonValue != null ? setCurrentUser(JSON.parse(jsonValue)) : null;
        } catch(e) {
            console.log(e);
        }
    }

    const [myLocation, setMyLocation] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
    });

    useEffect(() => {
        getData();
        getCurrentLocation();
    }, []);

    const getCurrentLocation = () => {
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
    }

    useEffect(() => {
        if (currentUser) {
            confirmation();
        }
    }, [myLocation])

    useEffect(() => {
        if (currentUser) {
            setCurrentConductorBus(currentUser.username.includes("conductor_one") ? "A01" : "A02");
        }
    }, [currentUser])

    const confirmation = () => {
        updateBusFunc({
            latitude: myLocation.latitude,
            longitude: myLocation.longitude,
        }, currentUser.username.includes("conductor_one") ? "busOneLocation" : "busTwoLocation" )
    }

    const Countdown = () => {
        const [timeLeft, setTimeLeft] = useState(5);
        useEffect(() => {
            const intervalId = setInterval(() => {
                setTimeLeft((t) => t - 1);
            }, 1000);
            return () => clearInterval(intervalId);
        }, []);

        if (timeLeft === 0) {
            getCurrentLocation();
            // fetchFunc(setBusOneLocation, "busOneLocation");
            // fetchFunc(setBusTwoLocation, "busTwoLocation");
        }
        return true;
    };

    const handleSeatManagement = () => {
        setSeatManagementState(true);
    }

    const handleClose = () => {
        setMenuState(false);
        setFairDiscountState(false);
    }

    const handleMenu = () => {
        setMenuState(false);
    }

    const handleFairDiscounts = () => {
        setMenuState(true);
        setFairDiscountState(true);
    }

    return (
        menuState ? fairDiscountState ? <FareDiscounts back={() => handleClose()}/> :
                <MenuScreen back={() => handleMenu()} logout={back}/> :
        seatManagementState ?
            <SeatManagement back={() => setSeatManagementState(false)} data={currentConductorBus} backData={(e,k) => console.log(e,k)}/>
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
                                region={{
                                    latitude: myLocation.latitude,
                                    longitude: myLocation.longitude,
                                    latitudeDelta: 0.1,
                                    longitudeDelta: 0.0421,
                                }}
                            >
                                <Marker
                                    key={2}
                                    coordinate={myLocation}
                                    title={"Bus Location"}
                                    description={"Bus 1"}
                                >
                                    <Image source={require('../../assets/icons/bus-1.png')} style={{height: 35, width:35 }} />
                                </Marker>
                            </MapView>
                        </View>
                    </View>
                    <View style={styles.mainTransparent}>
                        <View style={styles.transparent}>
                                <Text style={styles.anotherButton} onPress={() => handleFairDiscounts()}>
                                    Fair & Discounts
                                </Text>
                                <Text style={styles.buttonStyle} onPress={() => handleSeatManagement()}>
                                    Seat Management
                                </Text>
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
        padding: 12,
        fontSize: 30,
        margin: 5,
        width: "85%",
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
        padding: 12,
        fontSize: 30,
        margin: 5,
        width: "85%",
        marginTop: 10,
        color: "white",
        display: "flex",
        marginBottom: 15,
        borderRadius: 19,
        fontWeight: "700",
        textAlign: "center",
        backgroundColor: "#F9AD10",
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

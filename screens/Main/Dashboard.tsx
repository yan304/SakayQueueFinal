import React, { useState, useEffect } from "react";
import FareDiscounts from './FareDiscounts'
import MyTicket from './MyTicket'
import GetLocation from 'react-native-get-location'
import { createFunc, updateUserFunc, fetchFunc } from '../../src/config';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import MenuScreen from "../MenuScreen";
import RoutesReservation from './RoutesReservation';
import {
    ImageBackground,
    Image,
    StyleSheet,
    Pressable,
    Text,
    View,
    Alert,
    Dimensions,
    TouchableOpacity
} from "react-native";

export default function Dashboard({back}) {
    const [menuState, setMenuState] = useState(false);
    const [mainState, setMainState] = useState(false);
    const [myTicketState, setMyTicketState] = useState(false);
    const [routesReservationState, setRoutesReservationState] = useState(false);

    const handleBack = () => {
        setMainState(false);
        setMyTicketState(false);
        setRoutesReservationState(false);
    }

    const handleFareDiscounts = () => {
        setMainState(true);
    }

    const handleMyTicket = () => {
        setMainState(true);
        setMyTicketState(true);
    }

    const handleRoutesReservation = () => {
        setMainState(true);
        setRoutesReservationState(true);
    }

    const [myLocation, setMyLocation] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
    });
    const [busOneLocation, setBusOneLocation] = useState(myLocation);
    const [busTwoLocation, setBusTwoLocation] = useState(myLocation);

    // useEffect(() => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                console.log(location, "Here");
                // setMyLocation({
                //     latitude: location.latitude,
                //     longitude: location.longitude,
                // });
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    // }, [])
    console.log(myLocation);

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

    useEffect(() => {
        // createFunc({
        //     email: "admin@admin.com",
        //     password: "admin",
        //     role: "Admin",
        // },
        // "users");
    }, [])

    const handleMenu = () => {
        setMenuState(false);
    }

    return (
        menuState ? <MenuScreen back={() => handleMenu()} logout={back} /> :
        mainState ?
            myTicketState ?
                <MyTicket back={ () => handleBack()}/>
                :
                routesReservationState ?
                    <RoutesReservation back={ () => handleBack()}/>
                    :
                    <FareDiscounts back={ () => handleBack()}/>
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
                        <Text style={styles.buttonStyle} onPress={() => handleRoutesReservation()}>
                            Routes & Reservation
                        </Text>
                        <Text style={styles.buttonStyle} onPress={() => handleFareDiscounts()}>
                            Fair & Discounts
                        </Text>
                        <Text style={styles.ticketButtonStyle} onPress={() => handleMyTicket()}>
                            My Ticket
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
        padding: 8,
        fontSize: 20,
        width: "80%",
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
        fontSize: 20,
        width: "80%",
        marginTop: 10,
        color: "white",
        display: "flex",
        marginBottom: 15,
        borderRadius: 19,
        fontWeight: "700",
        textAlign: "center",
        backgroundColor: "#F9AD10",
    },
    buttonLabel: {
        padding: 8,
        fontSize: 20,
        color: "white",
        fontWeight: "700",
    },
});

import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import FareDiscounts from './FareDiscounts'
import MyTicket from './MyTicket'
import MapView from 'react-native-maps';
import RoutesReservation from './RoutesReservation'
import { ImageBackground, Image, StyleSheet, Pressable, Text, View, Alert, Dimensions   } from "react-native";

export default function Dashboard({}) {
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
    return (
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
            <ImageBackground source={require('../../assets/images/Login.png')} resizeMode="cover" style={styles.image}
                             blurRadius={1}>
                 <View style={styles.mapContainer}>
                     <View style={styles.mapContainer}>
                         <MapView
                             style={styles.map}
                             initialRegion={{
                                 latitude: 37.78825,
                                 longitude: -122.4324,
                                 latitudeDelta: 0.0922,
                                 longitudeDelta: 0.0421,
                             }}
                         />
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

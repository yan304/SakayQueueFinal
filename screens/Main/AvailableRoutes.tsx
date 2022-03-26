import React, {useEffect, useState} from "react";
import MapView, {Marker} from 'react-native-maps';
import SeatReservation from './SeatReservation'
import ConfirmReservation from './ConfirmReservation'
import { fetchFunc } from '../../src/config';
import {ImageBackground, Image, StyleSheet, Text, View, Dimensions, TouchableOpacity} from "react-native";
import GetLocation from "react-native-get-location";

export default function AvailableRoutes({back, allBack}) {
    const [bus, setBus] = useState('');
    const [seatData, setSeatData] = useState();
    const [reserved, setReserved] = useState([]);
    const [userSeatData, setUserSeatData] = useState();
    const [mainState, setMainState] = useState(false);
    const [confirmReservationState, setConfirmReservationState] = useState(false);

    const [myLocation, setMyLocation] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
    });
    const [busOneLocation, setBusOneLocation] = useState(myLocation);
    const [busTwoLocation, setBusTwoLocation] = useState(myLocation);

    useEffect(() => {
        fetchFunc(setBusOneLocation, "busOneLocation");
        fetchFunc(setBusTwoLocation, "busTwoLocation");
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                console.log(location);
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

    const handleBack = () => {
        setBus('');
        setMainState(false);
        setConfirmReservationState(false);
    }

    const handleMyTicket = (data) => {
        setBus(data);
        setMainState(true);
    }

    const handleConfirm = (e,c,k) => {
        setSeatData(e);
        setUserSeatData(c);
        setReserved(k);
        setConfirmReservationState(true);
    }

    return (
        mainState ?
            confirmReservationState ?
                <ConfirmReservation data={[seatData, userSeatData, reserved]} back={() => handleBack()} busName={bus} allBack={allBack}/>
            :
                <SeatReservation back={() => handleBack()} data={bus} backData={(e,c,k) => handleConfirm(e,c,k)}/>
        :
         <View style={styles.image}>
             <View style={styles.mapContainer}>
                 <View style={styles.mapContainer}>
                     <TouchableOpacity onPress={back} style={styles.menuContainer}>
                         <Image source={require('../../assets/icons/arrow.png')} style={styles.backlogo} />
                         <Text style={{ fontSize: 20, fontWeight: "700"}}>
                             Select Ongoing bus
                         </Text>
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
                         >
                             <Image source={require('../../assets/icons/bus-1.png')} style={{height: 35, width:35 }} />
                         </Marker>
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
                    <View>
                        <Text style={styles.buttonPlaceLeftLabel}>
                            ONGOING
                        </Text>
                    </View>
                    <Text style={styles.ticketButtonStyle} onPress={() => handleMyTicket("A01")}>
                        BUS - A01
                    </Text>
                    <Text style={styles.ticketButtonStyle} onPress={() => handleMyTicket("A02")}>
                        BUS - A02
                    </Text>
                    <Text style={styles.noteStyle}>
                        <Text style={{ fontWeight: "bold" }}>
                            NOTE:&nbsp;
                        </Text>
                        View the map to locate the
                    </Text>
                    <Text style={styles.noteStyle}>
                        nearest ongoing bus near you
                    </Text>
                </View>
            </View>
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
    backlogo: {
        width: 10,
        height: 15,
        marginRight: 10,
        marginTop: 6,
        marginLeft: 10
    },
    menuContainer: {
        display: "flex",
        flexDirection: "row",
        position: 'absolute',
        left: 15,
        top: 15,
        zIndex: 1,
    },
    image: {
        height: '100%',
        backgroundColor: "#F3F1F1",
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
        padding: 5,
        paddingBottom: 10,
        width: "100%",
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
        width: "80%",
        display: "flex",
        marginTop: 10,
        marginBottom: 15,
        borderRadius: 19,
        alignItems: "center",
        backgroundColor: "#177FF4",
    },
    ticketButtonStyle: {
        padding: 8,
        fontSize: 20,
        width: "90%",
        color: "white",
        display: "flex",
        marginBottom: 15,
        borderRadius: 19,
        fontWeight: "700",
        textAlign: "center",
        backgroundColor: "#F9AD10",
    },
    buttonLabel: {
        display: "flex",
        padding: 8,
        fontSize: 40,
        color: "white",
        fontWeight: "700",
    },
    buttonPlaceLeftLabel: {
        marginLeft: 0,
        padding: 2,
        fontSize: 30,
        color: "#F9AD10",
        fontWeight: "700"
    },
    noteStyle: {
        marginLeft: 0,
        padding: 2,
        fontSize: 15,
        color: "black",
    }
});

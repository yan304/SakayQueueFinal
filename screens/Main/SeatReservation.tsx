import React, { useState, useEffect } from "react";
import { Button } from 'react-native-paper';
import { fetchFunc } from '../../src/config';
import {TouchableOpacity, StyleSheet, ScrollView, Text, View} from "react-native";

export default function SeatReservation({back, data, backData}) {
    const [search, onSearch] = useState("");
    const [occupied, setOccupied] = useState([]);
    const [busOneData, setBusOneData] = useState([]);

    useEffect(() => {
        setOccupied([]);
        fetchFunc(setBusOneData, data == "A01" ? "busOneData" : "busTwoData");
    }, [])

    const handleSeat = (seat) => {
        if (occupied.includes(seat)) {
            var seatCount = [];
            occupied.map((item) =>
                item == seat ? null : seatCount.push(item)
            )
            setOccupied(seatCount)
        } else {
        var count = [];
            occupied.map((item) =>
                item == seat ? null : count.push(item)
            )
            count.push(seat);
            setOccupied(count);
        }
    };

    useEffect(() => {
        if (busOneData?.seatBooked) {
            if (busOneData.seatBooked.length > 0) {
                setOccupied(busOneData.seatBooked);
            }
        }
    }, [busOneData])

    return (
        <View>
            <View style={styles.backButton}>
                <Button icon='arrow-left' size={24} color="black" style={styles.backButtonStyle} onPress={back}>
                    Seat Reservation
                </Button>
            </View>
            <View style={styles.mainTransparent}>
                <View style={styles.transparent}>
                    <View style={styles.buttonStyle}>
                        <Text style={styles.buttonDateLabel}>
                            <Text style={styles.titleLabel}>
                                Choose {data} Seat
                            </Text>
                        </Text>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "space-between", marginTop: -15}}>
                            <View style={{ backgroundColor: "#14FF00", height: 14, width: 14, marginBottom: 5, marginRight: 5 }}/>
                                <Text style={styles.buttonDateLabel}>
                                    <Text style={styles.titleOptionLabel}>
                                        Available
                                    </Text>
                                </Text>
                            <View style={{ backgroundColor: "#A4A3A3", height: 14, width: 14, marginBottom: 5, marginLeft: 10, marginRight: 5 }}/>
                                <Text style={styles.buttonDateLabel}>
                                    <Text style={styles.titleOptionLabel}>
                                        Occupied
                                    </Text>
                                </Text>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView style={{ height: '100%' }}>
            <View style={styles.transparentSeats}>
                    {[1,21,41].map(items => (
                        <View style={{ marginBottom: 10 }}>
                            {[items,items+5,items+10,items+15].map(item => (
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "space-between" }}>
                                    {occupied.includes(item) ?
                                        <View style={{ backgroundColor: "#A4A3A3", height: 25, width: 30, borderRadius: 5, margin: 2}}>
                                            <Button icon='check-circle-outline' labelStyle={{fontSize: 23, marginLeft: 25}} color="white"  onPress={() => handleSeat(item)}/>
                                        </View>
                                    :
                                        <TouchableOpacity key={item} onPress={() => handleSeat(item)}>
                                            <View style={{ backgroundColor: "#14FF00", height: 25, width: 30, borderRadius: 5, margin: 3}} />
                                        </TouchableOpacity>
                                    }
                                    {occupied.includes(item + 1) ?
                                        <View style={{ backgroundColor: "#A4A3A3", height: 25, width: 30, borderRadius: 5, margin: 3}}>
                                            <Button icon='check-circle-outline' labelStyle={{fontSize: 23, marginLeft: 25}} color="white" onPress={() => handleSeat(item + 1)}/>
                                        </View>
                                    :
                                        <TouchableOpacity key={item+1} onPress={() => handleSeat(item + 1)}>
                                            <View style={{ backgroundColor: "#14FF00", height: 25, width: 30, borderRadius: 5, margin: 3 }} />
                                        </TouchableOpacity>
                                    }
                                    {occupied.includes(item + 2) ?
                                        <View style={{ backgroundColor: "#A4A3A3", height: 25, width: 30, borderRadius: 5, margin: 3}}>
                                            <Button icon='check-circle-outline' labelStyle={{fontSize: 23, marginLeft: 25}} color="white" onPress={() => handleSeat(item + 2)}/>
                                        </View>
                                    :
                                        <TouchableOpacity key={item+2} onPress={() => handleSeat(item + 2)}>
                                            <View style={{ backgroundColor: "#14FF00", height: 25, width: 30, borderRadius: 5, margin: 3 }} />
                                        </TouchableOpacity>
                                    }
                                    <View style={{ display: "flex", flexDirection: "row", alignItems: "space-between", marginLeft: 50 }}>
                                        {occupied.includes(item + 3) ?
                                            <View style={{ backgroundColor: "#A4A3A3", height: 25, width: 30, borderRadius: 5, margin: 3}}>
                                                <Button icon='check-circle-outline' labelStyle={{fontSize: 23, marginLeft: 25}} color="white" onPress={() => handleSeat(item + 3)}/>
                                            </View>
                                        :
                                            <TouchableOpacity key={item+3} onPress={() => handleSeat(item + 3)}>
                                                <View style={{ backgroundColor: "#14FF00", height: 25, width: 30, borderRadius: 5, margin: 3 }} />
                                            </TouchableOpacity>
                                        }
                                        {occupied.includes(item + 4) ?
                                            <View style={{ backgroundColor: "#A4A3A3", height: 25, width: 30, borderRadius: 5, margin: 3}}>
                                                <Button icon='check-circle-outline' labelStyle={{fontSize: 23, marginLeft: 25}} color="white" onPress={() => handleSeat(item + 4)}/>
                                            </View>
                                        :
                                            <TouchableOpacity key={item+4} onPress={() => handleSeat(item + 4)}>
                                                <View style={{ backgroundColor: "#14FF00", height: 25, width: 30, borderRadius: 5, margin: 3 }} />
                                            </TouchableOpacity>
                                        }
                                    </View>
                                </View>
                            ))}
                        </View>
                    ))}
            </View>
            <View style={styles.transparent}>
                {occupied.length < 1 ?
                    <TouchableOpacity style={styles.ticketDisabledButtonStyle }>
                        <Text style={styles.buttonLabel}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                :
                    <TouchableOpacity style={styles.ticketButtonStyle} onPress={() => backData(occupied)}>
                        <Text style={styles.buttonLabel}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                }
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ticketButtonStyle: {
        width: "90%",
        display: "flex",
        marginBottom: 15,
        borderRadius: 19,
        alignItems: "center",
        backgroundColor: "#F9AD10",
    },
    ticketDisabledButtonStyle: {
        width: "90%",
        display: "flex",
        marginBottom: 15,
        borderRadius: 19,
        alignItems: "center",
        backgroundColor: "#A4A3A3",
    },
    transparent: {
        width: "100%",
        display: "flex",
        padding: 25,
        paddingTop: 1,
        paddingBottom: 0,
        borderRadius: 31,
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    transparentSeats: {
        width: "100%",
        display: "flex",
        paddingTop: 1,
        borderRadius: 31,
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    logo: {
        width: 160,
        height: 20,
        marginTop: 30,
    },
    mainTransparent: {
        display: "flex",
        // marginTop: 300,
        marginTop: -20,
        alignItems: "center",
    },
    titleStyle: {
        width: "100%",
        display: "flex",
        borderRadius: 19,
        alignItems: "center",
    },
    buttonStyle: {
        width: "100%",
        display: "flex",
        marginTop: 15,
        marginBottom: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 19,
        alignItems: "center",
        backgroundColor: "#D9D9D9",
    },
    otherInformation: {
        width: "100%",
        display: "flex",
        marginTop: -15,
        marginBottom: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 19,
        alignItems: "center",
        backgroundColor: "#D9D9D9",
    },
    buttonDateLabel: {
        padding: 2,
        paddingTop: 10,
        fontSize: 15,
        color: "#00000094",
    },
    buttonOtherLabel: {
        padding: 2,
        fontSize: 20,
        color: "black",
        fontWeight: "700"
    },
    backButtonStyle: {
        width: "40%",
        display: "flex",
        marginTop: 15,
        borderRadius: 19,
        color: "black"
    },
    buttonLabel: {
        display: "flex",
        padding: 8,
        fontSize: 25,
        color: "white",
        fontWeight: "700",
    },
    buttonPlaceLabel: {
        padding: 2,
        fontSize: 25,
        color: "black",
        fontWeight: "700"
    },
    titleLabel: {
        padding: 25,
        fontSize: 25,
        width: "100%",
        color: "black",
        display: "flex",
        borderRadius: 19,
        fontWeight: "700",
        textAlign: "center",
    },
    titleOptionLabel: {
        fontSize: 20,
        width: "100%",
        color: "black",
        display: "flex",
        borderRadius: 19,
        textAlign: "center",
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

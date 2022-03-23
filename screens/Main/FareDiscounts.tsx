import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Button } from 'react-native-paper';
import {TextInput, StyleSheet, ScrollView, Text, View, Alert, Image} from "react-native";

export default function FareDiscounts({back}) {
    const [search, onSearch] = useState("");
    return (
        <View>
            <View style={styles.backButton}>
                <Button icon='arrow-left' size={24} color="black" style={styles.backButtonStyle} onPress={back}>
                    Fair & Discounts
                </Button>
            </View>
            <View style={styles.mainTransparent}>
                <View style={styles.transparent}>
                    <View style={styles.buttonStyle}>
                        <Text style={styles.title}>
                            Fair and Discounts {'\n'}
                            (AIRCON)
                        </Text>
                        <View style={styles.titleBar}>
                            <Text style={styles.fontStylesPlace}>
                                PLACE
                            </Text>
                            <Text style={styles.fontStyles}>
                                REGULAR
                            </Text>
                            <Text style={styles.fontStyles}>
                                SP/SC/PWD
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.mainTransparent}>
                <View style={styles.transparent}>
                    <ScrollView style={styles.buttonStyle}>
                        <Text style={styles.fontStyles}>
                            CAGAYAN
                        </Text>
                        <Image source={require('../../assets/images/dot-line.png')} style={styles.dotStyle} />
                        <View style={styles.titleBar}>
                            <Text style={styles.fontStylesPlace}> OPOL </Text>
                            <Text style={styles.fontStyles}> 30.00 </Text>
                            <Text style={styles.fontStyles}> 20.00 </Text>
                        </View>
                        <Image source={require('../../assets/images/dot-line.png')} style={styles.dotStyle} />
                        <View style={styles.titleBar}>
                            <Text style={styles.fontStylesPlace}> EL SALVADOR </Text>
                            <Text style={styles.fontStyles}> 60.00 </Text>
                            <Text style={styles.fontStyles}> 40.00 </Text>
                        </View>
                        <Image source={require('../../assets/images/dot-line.png')} style={styles.dotStyle} />
                        <View style={styles.titleBar}>
                            <Text style={styles.fontStylesPlace}> ALUBIJID </Text>
                            <Text style={styles.fontStyles}> 90.00 </Text>
                            <Text style={styles.fontStyles}> 60.00 </Text>
                        </View>
                        <Image source={require('../../assets/images/dot-line.png')} style={styles.dotStyle} />
                        <View style={styles.titleBar}>
                            <Text style={styles.fontStylesPlace}> LAGUINDINGAN </Text>
                            <Text style={styles.fontStyles}> 105.00 </Text>
                            <Text style={styles.fontStyles}> 70.00 </Text>
                        </View>
                        <Image source={require('../../assets/images/dot-line.png')} style={styles.dotStyle} />
                        <View style={styles.titleBar}>
                            <Text style={styles.fontStylesPlace}> GITAGUM </Text>
                            <Text style={styles.fontStyles}> 130.00 </Text>
                            <Text style={styles.fontStyles}> 85.00 </Text>
                        </View>
                        <Image source={require('../../assets/images/dot-line.png')} style={styles.dotStyle} />
                        <View style={styles.titleBar}>
                            <Text style={styles.fontStylesPlace}> LIBERTAD </Text>
                            <Text style={styles.fontStyles}> 170.00 </Text>
                            <Text style={styles.fontStyles}> 110.00 </Text>
                        </View>
                        <Image source={require('../../assets/images/dot-line.png')} style={styles.dotStyle} />
                        <View style={styles.titleBar}>
                            <Text style={styles.fontStylesPlace}> INITAO </Text>
                            <Text style={styles.fontStyles}> 200.00 </Text>
                            <Text style={styles.fontStyles}> 130.00 </Text>
                        </View>
                        <Image source={require('../../assets/images/dot-line.png')} style={styles.dotStyle} />
                        <View style={styles.titleBar}>
                            <Text style={styles.fontStylesPlace}> NAAWAN </Text>
                            <Text style={styles.fontStyles}> 240.00 </Text>
                            <Text style={styles.fontStyles}> 155.00 </Text>
                        </View>
                        <Image source={require('../../assets/images/dot-line.png')} style={styles.dotStyle} />
                        <View style={styles.titleBar}>
                            <Text style={styles.fontStylesPlace}> MATICAO </Text>
                            <Text style={styles.fontStyles}> 260.00 </Text>
                            <Text style={styles.fontStyles}> 165.00 </Text>
                        </View>
                        <Image source={require('../../assets/images/dot-line.png')} style={styles.dotStyle} />
                        <View style={styles.titleBar}>
                            <Text style={styles.fontStylesPlace}> LUGAIT </Text>
                            <Text style={styles.fontStyles}> 290.00 </Text>
                            <Text style={styles.fontStyles}> 185.00 </Text>
                        </View>
                        <Image source={require('../../assets/images/dot-line.png')} style={styles.dotStyle} />
                        <View style={styles.titleBar}>
                            <Text style={styles.fontStylesPlace}> LIWALAN </Text>
                            <Text style={styles.fontStyles}> 320.00 </Text>
                            <Text style={styles.fontStyles}> 210.00 </Text>
                        </View>
                        <Image source={require('../../assets/images/dot-line.png')} style={styles.dotStyle} />
                        <View style={styles.titleBar}>
                            <Text style={styles.fontStylesPlace}> ILIGAN </Text>
                            <Text style={styles.fontStyles}> 350.00 </Text>
                            <Text style={styles.fontStyles}> 225.00 </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dotStyle: {
       width: 330,
       height: 2,
       marginTop: 10,
        marginBottom: -10
    },
    fontStylesPlace: {
        width: "40%",
        fontSize: 20,
        fontWeight: "700",
    },
    fontStyles: {
        fontSize: 20,
        fontWeight: "700",
    },
    title: {
        fontSize: 25,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        fontWeight: "700",
    },
    titleBar: {
      marginTop: 20,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    transparent: {
        width: "100%",
        display: "flex",
        padding: 25,
        paddingTop: 1,
        borderRadius: 31,
        // alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    logo: {
        width: 60,
        height: 60,
        marginTop: 30,
    },
    mainTransparent: {
        display: "flex",
        // marginTop: 300,
        marginTop: -20,
        alignItems: "center",
    },
    buttonStyle: {
        padding: 25,
        fontSize: 15,
        marginTop: 15,
        width: "100%",
        color: "black",
        display: "flex",
        marginBottom: 15,
        borderRadius: 19,
        textAlign: "center",
        backgroundColor: "#D9D9D9",
    },
    backButtonStyle: {
        width: "50%",
        display: "flex",
        marginTop: 15,
        borderRadius: 19,
        color: "black"
    },
    buttonLabel: {
        padding: 25,
        fontSize: 15,
        color: "black",
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

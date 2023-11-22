import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/Colors";

const AuthHeader = ({title}) => {

    return(
        <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 54
    },
    title: {
        color: Colors.blue,
        fontSize: 26,
        fontWeight: "500",
        paddingHorizontal: 16
    }
})

export default AuthHeader;
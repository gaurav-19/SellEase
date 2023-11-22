import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../utils/Colors";


const Button = ({title, onPress, style}) => {

    return(
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.blue,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 30,
        flex: 1
    },
    title:{
        color: Colors.white,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    }
})

export default React.memo(Button);
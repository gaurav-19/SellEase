import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "./../utils/Colors";

const CategoryBox = ({ title, onPress, isFirst, isSelected }) => {
    return (
        <Pressable style={[styles.container, isFirst ? { marginLeft: 24 } : {} ]} onPress={onPress}>
            <Text style={[styles.title, isSelected ? {color: Colors.blue, fontWeight: "600" } : {}]}> { title } </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }, 
    title:{
        padding: 10,
        color: Colors.grey,
    },
})

export default CategoryBox;
import React, { useState } from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/Colors";
const { width } = Dimensions.get('window');

const ProductHomeItem = ({ title, image, price, onPress }) => {
    return (    
        <Pressable style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={{uri: image}}/>
            <Text style={styles.title}> { title } </Text>
            <Text style={styles.price}> { price } </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container:{
        margin: 8,
    }, 
    title:{
        color: Colors.darkGrey,
        paddingVertical:  8,
        fontWeight:'600'
    },
    image : {
        width: (width - 64) / 2,
        height: 200,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: Colors.lightGrey
    },
    price:{
        color: Colors.black,  
        paddingBottom: 8,
        fontWeight:'500'
    }
})

export default ProductHomeItem;
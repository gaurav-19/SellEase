import React from "react";

import { Dimensions, Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "././../components/Button";
import { Colors } from "../utils/Colors";
const { height } = Dimensions.get('window');


const ProductDetails = ({ navigation, route }) => {
    const { product } = route?.params || {}

    const onBackPress = () => {
        navigation.goBack();
    }

    const onContact = () => {
        
    }

    return (
        <View style={styles.safe}>
             <ScrollView contentContainerStyle={styles.container}>
                 <Image  style={styles.image} source={{uri: product?.image}} />
                
                <View style={styles.content}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>

                <Pressable onPress={onBackPress} style={styles.backContainer} >
                    <Image style={styles.backIcon} source={require('./../assets/back.png')} />
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Button onPress={onContact} title="Contact seller" />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    safe:{
        flexGrow: 1
    },
    footer:{
        padding: 24,
        flexDirection: "row",
        alignItems: "center"
    },
    image:{
        width: "100%",
        height: height * 0.45
    },
    content:{
        backgroundColor: Colors.theme,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderTopColor: Colors.lightGrey,
        marginTop: -40,
        paddingHorizontal: 24
    },
    title:{
        marginTop: 40,
        fontSize: 24,
        fontWeight: "500"
    },
    price:{
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 8
    },
    description:{
        color: Colors.darkGrey,
        fontWeight: "300",
        marginVertical: 8
    },
    backContainer:{
        position: "absolute",
        padding: 8,
        borderWidth:1,
        borderRadius: 8,
        borderColor: Colors.grey,
        backgroundColor: Colors.borderColor,
        margin: 24
    },
    backIcon:{
        width: 20,
        height: 20,
    }
})

export default ProductDetails;
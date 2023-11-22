import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { Colors } from "../utils/Colors";

const Header = ({title, onBackPress, onLogout, showBack, showLogout, showSearch, onSearch, keyword }) => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    const onClickSearch = () => {
        setShowSearchInput(i => !i);
    }
    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {showBack ? (
                <Pressable hitSlop={20}   onPress={onBackPress}>
                    <Image style={styles.icon} source={require('./../assets/back.png')} />
                </Pressable> 
                ) : showSearch ? (
                <Pressable hitSlop={20}   onPress={onClickSearch}>
                    <Image style={styles.icon} source={require('./../assets/search.png')} />
                </Pressable>
                ) : <View style={styles.space} /> 
                }
                
                <Text style={styles.title}>{title}</Text>

                { showLogout ? (
                <Pressable hitSlop={20}   onPress={onLogout}>
                    <Image style={styles.icon} source={require('./../assets/logout.png')} />
                </Pressable>
                ) : <View style={styles.space} />
                }
                
            </View>

            {showSearchInput ? 
            <Input onChangeText={onSearch} value={keyword} placeholder="Type your keyword..."/> 
            : null}
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 24
    },
    container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }, 
    title:{
        color: Colors.black,
        fontSize: 16,
        fontWeight: "bold"
    },
    icon : {
        width: 24,
        height: 24
    },
    space:{
        width: 24,
    }
})

export default Header;
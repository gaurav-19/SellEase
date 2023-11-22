import React, { useState } from 'react';
import { Pressable, Text, TextInput, View, Image, StyleSheet } from 'react-native';
import { Colors } from '../utils/Colors';

const Input = ({ label, options, isPassword, value, onChangeText, placeholder, style, ...props }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
    
                <View style={styles.inputContainer}>
                    <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={isPassword && !isPasswordVisible} style={[styles.input, style]} {...props} placeholderTextColor={Colors.lightGrey}/>

                    {isPassword ? (
                        <Pressable onPress={onEyePress}>
                            <Image style={styles.eye} source={isPasswordVisible ? require('./../assets/eye.png') : require('./../assets/eye_closed.png')} />
                        </Pressable>
                    ) : null}
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    label: {
        marginBottom: 8,
        color: Colors.blue,
        fontSize: 14,
        fontWeight: '500'
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 18,
        flex: 1,
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16,
    },
});

export default React.memo(Input);
import React, { useContext, useState } from "react";
import AuthHeader from "./../components/AuthHeader";

import { ScrollView, StyleSheet, Text, View } from "react-native";
import Input from "./../components/Input";
import Button from "./../components/Button";
import { Colors } from "../utils/Colors";
import { UserContext } from "../../App";

const Signup = ({ navigation }) => {
    const {setIsLoggedIn} = useContext(UserContext);

    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [showError, SetShowerror] = useState('');

    const onSignIn = () => {
        navigation.navigate("Signin");
    };

    const onSubmit = () => {
        if(email && password){
            setIsLoggedIn(true);
            SetShowerror(false)
        }
        else{
            SetShowerror(true)
        }
    };

    return (
        <ScrollView style={styles.container}>
            <AuthHeader title="Sign Up"/>
            <Input label="Name" placeholder="John Doe"/>
            <Input label="Email *" placeholder="example@gmail.com" value={email} onChangeText={SetEmail}/>
            <Input isPassword  label="Password *" placeholder="********" value={password} onChangeText={SetPassword}/>

            {showError && <Text style={styles.error}>Enter the required details</Text>}

            <Button style={styles.button} title="Sign Up" onPress={onSubmit}/>

            <Text style={styles.footerText}>
                Already have an account? 
                <Text onPress={onSignIn} style={styles.footerLink}> Sign In</Text>
            </Text>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    agreeRow:{
        flexDirection: "row",
        alignItems: "center",

    },
    agreeText:{
        color: Colors.blue,
        marginHorizontal: 13
    },
    agreeTextBold:{
        fontWeight: "bold"
    },
    button:{
        marginVertical: 20
    },
    footerText:{
        color: Colors.blue,
        marginVertical: 56,
        textAlign: "center"
    },
    footerLink:{
        fontWeight: "bold"
    },
    error:{
        color: Colors.red,
    }
})

export default Signup;
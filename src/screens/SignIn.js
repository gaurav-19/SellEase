import React, { useContext, useState } from "react";
import AuthHeader from "./../components/AuthHeader";

import { ScrollView, StyleSheet, Text, View } from "react-native";
import Input from "./../components/Input";
import Button from "./../components/Button";
import { Colors } from "../utils/Colors";
import { UserContext } from "../../App";

const Signin = ({ navigation }) => {
    const {setIsLoggedIn} = useContext(UserContext);

    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [showError, SetShowerror] = useState('');

    const onSignUp = () => {
        navigation.navigate("Signup");
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
                <AuthHeader title="Sign In"/>
                <Input label="Email *" placeholder="example@gmail.com" value={email} onChangeText={SetEmail}/>
                <Input isPassword  label="Password *" placeholder="********" value={password} onChangeText={SetPassword}/>

                {showError && <Text style={styles.error}>Enter the required details</Text>
}
                <Button style={styles.button} title="Sign In" onPress={onSubmit}/>

                <Text style={styles.footerText}>
                    Don't have an account? 
                    <Text onPress={onSignUp} style={styles.footerLink}> Sign Up</Text>
                </Text>
            </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
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

export default Signin;
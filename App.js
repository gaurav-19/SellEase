import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Signin from './src/screens/SignIn';
import Signup from './src/screens/SignUp';
import { Colors } from './src/utils/Colors';
import ProductDetails from './src/screens/ProductDetails';

const Stack = createStackNavigator();
export const UserContext = React.createContext({});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const theme = {
    colors:{
      background: Colors.theme
    }
  }
  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <SafeAreaView style={styles.backgroundStyle}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator>
            {isLoggedIn ? <>
            <Stack.Screen name="Home" component={Home}options={ {headerShown: false} }/>
            <Stack.Screen name="ProductDetails" component={ProductDetails}options={ {headerShown: false} }/>
            </> :
            <>
            <Stack.Screen name="Signin" component={Signin} options={ {headerShown: false} }/>
            <Stack.Screen name="Signup" component={Signup} 
            options={ {headerShown: false} }/>
            </>
          }
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex:1,
    backgroundColor: Colors.theme,
  },
});

export default App;

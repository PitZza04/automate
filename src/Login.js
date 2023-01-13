import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordShown, setPasswordShown] = React.useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

    return (
    <ScrollView>
        
        <SafeAreaView style={styles.container}>
            
            <View style={styles.mainlogo}>
                <Image style={{
                    resizeMode: "contain",
                    height: 350,
                    width: 350,
                            }} 
                source={require('../assets/main-logo.png')} 
                />

                <Text style={styles.tagline}>Your Personalized Mechanic</Text>
            </View>
            
            <View style={styles.loginForm}>
                
                <TextInput
                    style={{ 
                            padding: 5,
                            paddingStart: 20,
                            height: 50, 
                            width: "80%",
                            borderColor: 'red',
                            borderWidth: 1,
                            borderRadius: 20
                        }}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email or Mobile Number"
                />

                <TextInput
                    style={{ 
                            padding: 5,
                            paddingStart: 20,
                            height: 50, 
                            width: "80%",
                            borderColor: 'red',
                            borderWidth: 1,
                            borderRadius: 20
                        }}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    secureTextEntry={true}
                />

                {/* <div className="login-password">
                        <input type={passwordShown ? "text" : "password"} placeholder="Password" required />
                        <button className="show-pass" onClick={togglePassword}><img src={eyecon} /></button> 
                        
                        
                    </div> */}


                <Text> Dont have an account? </Text>
                <TouchableOpacity onPress={()=> navigation.navigate("Register")}>
                    <Text style={styles.registerText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </ScrollView>
    );
}

export default () => {
    return (
        <Login />
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'rgb(255,0,0)'
    },

    mainlogo:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    tagline:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '75%',
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        textShadowOffset: {width: 2, height: 2},
        textShadowColor: 'black',
        textShadowRadius: 15
    },

    loginForm:{
        paddingTop: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        borderRadius: 20
    }

})
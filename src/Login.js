import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordShown, setPasswordShown] = React.useState(true);
    
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
                
                <View style={styles.userInput}>
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
                        returnKeyType="send"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Email or Mobile Number"
                    />
                </View>

                <View style={styles.passInput}>              
                    <TextInput
                        style={{ 
                            alignSelf: 'stretch',
                            padding: 5,
                            paddingStart: 20,
                            height: 50, 
                            width: "80%",
                            borderColor: 'red',
                            borderWidth: 1,
                            borderRadius: 20
                            }}
                        returnKeyType="send"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Password"
                        secureTextEntry={passwordShown}
                    />
                    <TouchableOpacity style={styles.eyecon} onPress={()=>{setPasswordShown((prev) => !prev)}}>
                        <Image style={{
                        resizeMode: "contain",
                        height: 20,
                        width: 20,
                                }} 
                        source={passwordShown ? require('../assets/details-icon/eye-show.png') : require('../assets/details-icon/eye-hide.png')}
                />
                    </TouchableOpacity>
                </View> 

                {/* <div className="login-password">
                        <input type={passwordShown ? "text" : "password"} placeholder="Password" required />
                        <button className="show-pass" onClick={togglePassword}><img src={eyecon} /></button>                         
                    </div> */}

                <View style={styles.forgotPass}>
                    <TouchableOpacity onPress={()=> navigation.navigate("")}>
                        <Text style={styles.forgotText}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
            
            
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
        alignItems: 'center',
        backgroundColor:'white',
        borderRadius: 20
    },

    userInput:{
        width: "100%",
        alignItems: 'center'
    },

    passInput:{
        paddingTop: 15,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%"
    },

    forgotPass:{
        paddingTop: 15,
    },

    forgotText:{
        color: 'red',
        fontSize: 15,
        fontWeight: '700'
    },

    eyecon:{
        position: 'absolute',
        paddingTop: 15,
        right: 50
    }

})
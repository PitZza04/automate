import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Pressable, Alert, Dimensions } from 'react-native';
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
      
        <View style={styles.container}>
            
            <View style={styles.mainlogo}>
                
                <Image style={{
                    resizeMode: "contain",
                    height: 500,
                    width: '90%',
                            }} 
                source={require('../assets/main-icon/main-logo.png')} 
                />

                <Text style={styles.tagline}>Your Personalized Mechanic</Text>
            </View>
            
            
            <View style={styles.loginForm}>
                
                <View style={styles.userInput}>

                    <Image style={{
                        padding: 10,
                        margin: 5,
                        height: 25,
                        width: 25,
                        resizeMode : 'stretch',
                        alignItems: 'center'
                                }} 
                        source={require('../assets/details-icon/user-icon.png')}
                    />

                    <TextInput
                        style={{ 
                            padding: 5,
                            paddingStart: 15,
                            height: 50, 
                            width: "90%",
                            borderColor: 'red',
                            borderWidth: 1,
                            borderRadius: 20,
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

                    <Image style={{
                        padding: 10,
                        margin: 5,
                        height: 25,
                        width: 25,
                        resizeMode : 'stretch',
                        alignItems: 'center'
                                }} 
                        source={require('../assets/details-icon/pass-icon.png')}
                    />

                    <TextInput
                        style={{ 
                            padding: 5,
                            paddingStart: 15,
                            height: 50, 
                            width: "90%",
                            borderColor: 'red',
                            borderWidth: 1,
                            borderRadius: 20,
                            }}
                        returnKeyType="send"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Password"
                        secureTextEntry={passwordShown}
                        underlineColorAndroid="transparent"
                    />

                    <TouchableOpacity style={styles.eyecon} onPress={()=>{setPasswordShown((prev) => !prev)}}>
                        <Image style={{
                        resizeMode: "stretch",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center', 
                        position: 'absolute',
                        right: 0,
                        height: 25,
                        width: 25,
                                }} 
                        source={passwordShown ? require('../assets/details-icon/eye-show.png') : require('../assets/details-icon/eye-hide.png')}
                />
                    </TouchableOpacity>
                </View> 

                <View style={styles.forgotPass}>
                    <TouchableOpacity onPress={()=> navigation.navigate("")}>
                        <Text style={styles.forgotText}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.logButton}>
                    <Pressable
                        style={styles.button}
                        onPress={() =>Alert.alert('Welcome!')}
                    >
                    <Text style={styles.logIn}>
                        LOG IN
                    </Text>
                    </Pressable>
                    
                </View>
                
                <View style={styles.register}>
                    <Text style={styles.text}>Don't have an Account yet? Tap </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate("Register")}>
                        <Text style={styles.regLink}>here </Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>to Register.</Text>
                </View>

            
            </View>
        </View>
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
        height: '100%',
        backgroundColor: 'rgb(255,0,0)',
    },

    mainlogo:{
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    tagline:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '75%',
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        textShadowOffset: {width: 2, height: 2},
        textShadowColor: 'black',
        textShadowRadius: 15
    },

    loginForm:{
        display:'flex',
        height: '50%',
        paddingTop: 5,
        width: '100%',
        backgroundColor:'white',
        borderRadius: 20,    
    },

    userInput:{
        flex: 1,
        paddingTop: 5,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%"
    },

    passInput:{
        paddingTop: 2,
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

    logButton:{
        paddingTop: 15,
        width: 120
    },

    button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 35,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'red',
    },

    logIn:{
        color:'white'
    },

    register:{
        marginRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        left: 12
    },

    text:{
        fontSize: 12
    },

    regLink:{
        fontSize: 14,
        color: 'red'
    }



})
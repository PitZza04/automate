import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Pressable, Alert } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Register() {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordShown, setPasswordShown] = React.useState(true);
    
    // onChanged(text)
    // {
    //   let newText = '';
    //   let numbers = '0123456789';
  
    //   for (var i=0; i < text.length; i++) {
    //       if(numbers.indexOf(text[i]) > -1 ) 
    //       {
    //           newText = newText + text[i];
    //       }
    //       else 
    //       {
    //           // your call back function
    //           alert("please enter numbers only");
    //       }
    //     }
    //     this.setState({ myNumber: newText });
    //     };

    return (

      
    <ScrollView>
        
        <SafeAreaView style={styles.container}>
            
            <View style={styles.mainlogo}>
                <Image style={{
                    resizeMode: "contain",
                    height: 250,
                    width: 250,
                            }} 
                source={require('../assets/main-icon/main-logo.png')} 
                />

                <Text style={styles.tagline}>Your Personalized Mechanic</Text>
            </View>
            
            <View style={styles.regForm}>
                
                <View style={styles.reguserText}>
                  <Text style={styles.reguserLabel}>
                            Enter your Mobile Number:
                  </Text>
                </View>
                <View style={styles.userInput}>
                    <TextInput
                        style={{ 
                            padding: 1,
                            paddingStart: 20,
                            height: 30, 
                            width: "90%",
                            borderColor: 'red',
                            borderBottomWidth: 1
                            }}
                        returnKeyType="send"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Mobile Number"
                        keyboardType='numeric'
                    />
                </View>

                <View style={styles.passInput}>              
                    <TextInput
                        style={{ 
                            alignSelf: 'stretch',
                            padding: 5,
                            paddingStart: 20,
                            height: 30, 
                            width: "90%",
                            borderColor: 'red',
                            borderBottomWidth: 1
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

                <View style={styles.forgotPass}>
                    <TouchableOpacity onPress={()=> navigation.navigate("")}>
                        <Text style={styles.forgotText}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.logButton}>
                    <Pressable
                        style={styles.button}
                        onPress={() =>navigation.navigate("")}
                    >
                    <Text style={styles.next}>
                        NEXT
                    </Text>
                    </Pressable>
                    
                </View>
                
                <View style={styles.login}>
                    <Text style={styles.text}>Already have an Account? Tap </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
                        <Text style={styles.logLink}>here </Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>to Log In.</Text>
                </View>

            </View>
        </SafeAreaView>
    </ScrollView>
    );
}

export default () => {
    return (
        <Register />
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
        fontSize: 14,
        fontWeight: '700',
        textShadowOffset: {width: 2, height: 2},
        textShadowColor: 'black',
        textShadowRadius: 15
    },

    regForm:{
        paddingTop: 30,
        width: '100%',
        alignItems: 'center',
        backgroundColor:'white',
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
        right: 30
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

    next:{
        color:'white'
    },

    login:{
        marginRight: 25,
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

    logLink:{
        fontSize: 14,
        color: 'red'
    }



})
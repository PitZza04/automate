import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";

import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
  const [set, isSet] = useState(null);
  const handleLogout = async () => {
    signOut(auth);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            position: "absolute",
            width: "20%",
            height: 120,
            backgroundColor: "transparent",
            paddingTop: 45,
            paddingLeft: 15,
          }}
        >
          <View
            style={{
              borderWidth: 0.5,
              borderRadius: 5,
              borderColor: "#b1b1b1",
              width: "90%",
              alignSelf: "center",
              height: 70,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              elevation: 20,
            }}
          >
            <Image
              source={require("../assets/Models/avalon.png")}
              style={{ height: 40, width: 40, resizeMode: "contain" }}
            />
            <Text
              style={{ fontSize: 10, fontWeight: "bold", color: "#DF3111" }}
            >
              Swift
            </Text>
            <Text
              style={{ fontSize: 6, fontWeight: "bold", letterSpacing: 0.3 }}
            >
              ABD 6532
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            width: "80%",
            height: 120,
            flexDirection: "row",
            right: 0,
            backgroundColor: "transparent",
          }}
        >
          <View
            style={{
              width: "8%",
              backgroundColor: "transparent",
              paddingTop: 70,
              height: 120,
            }}
          >
            <Entypo name="location-pin" size={30} color="#DF3111" />
          </View>
          <View
            style={{
              width: "72%",
              backgroundColor: "transparent",
              paddingTop: 60,
              height: 120,
            }}
          >
            <Text
              style={{
                color: "#DF3111",
                fontSize: 11,
                fontWeight: "bold",
              }}
            >
              CURRENT LOCATION
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 11,
                fontWeight: "bold",
                marginLeft: 5,
              }}
            >
              Araneta Street, Barangay Singcang-Airport, Bacolod City, 6100,
              Negros Occidental
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <SafeAreaView
        edges={["bottom", "left", "right"]}
        style={{ width: "100%" }}
      >
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              height: 700,
              width: "100%",
              backgroundColor: "#e6e6e6",
              marginTop: 60,
            }}
          >
            <View
              style={{
                backgroundColor: "#DF3111",
                width: "100%",
                height: 25,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  width: "10%",
                  backgroundColor: "transparent",
                  left: 50,
                }}
              >
                <FontAwesome5 name="phone-alt" size={15} color="#fff" />
              </View>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Emergency
              </Text>
            </View>

            <View
              style={{
                width: "100%",
                height: 220,
                backgroundColor: "#fff",
              }}
            >
              <View
                style={{
                  marginTop: 25,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  marginVertical: 10,
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#ececec",
                      height: 50,
                      width: 50,
                      borderWidth: 1,
                      borderRadius: 30,
                      borderColor: "#ececec",
                      elevation: 10,
                    }}
                  >
                    <FontAwesome5 name="car-crash" size={28} color="#DF3111" />
                    <View
                      style={{
                        position: "absolute",
                        height: 10,
                        width: "100%",
                        borderTopWidth: 0.5,
                        borderBottomWidth: 0.5,
                        borderColor: "#fb7878",
                        backgroundColor: "#fb7878",
                        justifyContent: "center",
                        alignItems: "center",
                        elevation: 10,
                        opacity: 0.9,
                      }}
                    >
                      <Text style={{ fontSize: 7, fontWeight: "bold" }}>
                        Coming Soon
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      marginTop: 2,
                      color: "black",
                      fontSize: 12,
                    }}
                  >
                    Accident
                  </Text>
                </View>

                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      height: 50,
                      width: 50,
                      borderWidth: 1,
                      borderRadius: 30,
                      borderColor: "#ececec",
                      elevation: 10,
                    }}
                  >
                    <FontAwesome5
                      name="car-battery"
                      size={28}
                      color="#DF3111"
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      marginTop: 2,
                      color: "black",
                      fontSize: 12,
                    }}
                  >
                    Battery
                  </Text>
                </View>

                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      height: 50,
                      width: 50,
                      borderWidth: 1,
                      borderRadius: 30,
                      borderColor: "#ececec",
                      elevation: 10,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="tow-truck"
                      size={33}
                      color="#DF3111"
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      marginTop: 2,
                      color: "black",
                      fontSize: 12,
                    }}
                  >
                    Towing
                  </Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      height: 50,
                      width: 50,
                      borderWidth: 1,
                      borderRadius: 30,
                      borderColor: "#ececec",
                      elevation: 10,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="tire"
                      size={33}
                      color="#DF3111"
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      marginTop: 2,
                      color: "black",
                      fontSize: 12,
                    }}
                  >
                    Flat Tire
                  </Text>
                </View>
              </View>

              <View
                style={{
                  marginTop: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  marginVertical: 10,
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      height: 50,
                      width: 50,
                      borderWidth: 1,
                      borderRadius: 30,
                      borderColor: "#ececec",
                      elevation: 10,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="fuel"
                      size={33}
                      color="#DF3111"
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      marginTop: 2,
                      color: "black",
                      fontSize: 12,
                    }}
                  >
                    Fuel
                  </Text>
                </View>

                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      height: 50,
                      width: 50,
                      borderWidth: 1,
                      borderRadius: 30,
                      borderColor: "#ececec",
                      elevation: 10,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="car-seat-heater"
                      size={33}
                      color="#DF3111"
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      marginTop: 2,
                      color: "black",
                      fontSize: 12,
                    }}
                  >
                    Overheat
                  </Text>
                </View>

                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      height: 50,
                      width: 50,
                      borderWidth: 1,
                      borderRadius: 30,
                      borderColor: "#ececec",
                      elevation: 10,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="car-cog"
                      size={33}
                      color="#DF3111"
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      marginTop: 2,
                      color: "black",
                      fontSize: 12,
                    }}
                  >
                    Hard Start
                  </Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      height: 50,
                      width: 50,
                      borderWidth: 1,
                      borderRadius: 30,
                      borderColor: "#ececec",
                      elevation: 10,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="car-key"
                      size={33}
                      color="#DF3111"
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      marginTop: 2,
                      color: "black",
                      fontSize: 12,
                    }}
                  >
                    Key
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                marginTop: 20,
                width: "100%",
                height: 600,
                backgroundColor: "#fff",
              }}
            >
              <View
                style={{
                  backgroundColor: "#DF3111",
                  width: "100%",
                  height: 25,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    width: "10%",
                    left: 50,
                    backgroundColor: "transparent",
                  }}
                >
                  <FontAwesome5 name="wrench" size={15} color="#fff" />
                </View>

                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Vehicle Services
                </Text>
              </View>
              <TouchableOpacity
                onPress={handleLogout}
                style={{
                  backgroundColor: "red",
                  padding: 20,
                  margin: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 100,
                }}
              >
                <Text>Logout</Text>
              </TouchableOpacity>

              <View
                style={{
                  width: "100%",
                  height: 300,
                  marginTop: 25,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 10,
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      height: 110,
                      width: 100,
                      borderWidth: 1,
                      borderRadius: 15,
                      borderColor: "#ececec",
                      elevation: 10,
                    }}
                  >
                    <FontAwesome5 name="car-crash" size={28} color="#DF3111" />
                    <Text
                      style={{
                        marginTop: 2,
                        color: "black",
                        fontSize: 12,
                      }}
                    >
                      Accident
                    </Text>
                  </View>
                </View>
                <View style={{ alignItems: "center" }}>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      height: 110,
                      width: 100,
                      borderWidth: 1,
                      borderRadius: 15,
                      borderColor: "#ececec",
                      elevation: 10,
                    }}
                  >
                    <FontAwesome5 name="car-crash" size={28} color="#DF3111" />
                    <Text
                      style={{
                        marginTop: 2,
                        color: "black",
                        fontSize: 12,
                      }}
                    >
                      Accident
                    </Text>
                  </View>
                </View>

                <View style={{ alignItems: "center" }}>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      height: 110,
                      width: 100,
                      borderWidth: 1,
                      borderRadius: 15,
                      borderColor: "#ececec",
                      elevation: 10,
                    }}
                  >
                    <FontAwesome5 name="car-crash" size={28} color="#DF3111" />
                    <Text
                      style={{
                        marginTop: 2,
                        color: "black",
                        fontSize: 12,
                      }}
                    >
                      Accident
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{ marginBottom: 10 }}
          >
            <View style={styles.loginButton}>
              <Text style={styles.textLogin}>Logout</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          height: 60,
          backgroundColor: "#fff",
          width: "100%",
          borderWidth: 1,
          borderColor: "#d6d4d4",
          elevation: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            width: "25%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity>
            <Entypo name="home" size={35} color="#DF3111" />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Home</Text>
        </View>

        <View
          style={{
            width: "25%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="comment-multiple-outline"
              size={35}
              color="#DF3111"
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            Notification
          </Text>
        </View>
        <View
          style={{
            width: "25%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity>
            <Entypo name="wallet" size={35} color="#DF3111" />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Wallet</Text>
        </View>

        <View
          style={{
            width: "25%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity>
            <FontAwesome5 name="user-alt" size={33} color="#DF3111" />
          </TouchableOpacity>
          <Text style={{ fontSize: 12 }}>Profile</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  header: {
    width: "100%",
    height: 120,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  loginButton: {
    marginVertical: 15,
    backgroundColor: "#DF3111",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    borderRadius: 10,
    padding: 5,
    height: 40,
  },
  textLogin: {
    color: "#fff",
  },
});

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, message } from "react-native";

export default function ScreenA() {
    const navigation = useNavigation();
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {message &&
                <Text 
                    style={{
                        margin: 20,
                        fontSize: 20,
                        color:"#ff0000",
                    }}
                >
                   Message:{message} 
                </Text>
            }
            <TouchableOpacity
                style={{
                    backgroundColor: "#007aff",
                    paddingHorizontal: 30,
                    paddingVertical: 20,
                    borderRadius: 10,
                }}
                onPress={() => navigation.navigate("ScreenB", { message: 'come from screenA' })}
            >
                <Text
                    style={{
                        fontSize: 40,
                        fontWeight: "400",
                        color: "#fff"
                    }}
                >ScreenB</Text>
            </TouchableOpacity>

        </View>
    )
}
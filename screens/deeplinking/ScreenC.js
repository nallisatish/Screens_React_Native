import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function ScreenC() {
    const navigation = useNavigation();
    return(
        <View 
            style={{
                flex:1,
                alignItems:"center",
                justifyContent:"center"
            }}
        >
            <TouchableOpacity
                style={{
                    backgroundColor:"#007aff",
                    paddingHorizontal: 30,
                    paddingVertical: 20,
                    borderRadius: 10,
                }} 
                onPress={() => navigation.navigate("LinkingSc")}
            >
                <Text 
                    style={{
                        fontSize:40,
                        fontWeight: "400",
                        color:"#fff"
                    }}
                >Linking</Text>
            </TouchableOpacity>
            
        </View>
    )
}
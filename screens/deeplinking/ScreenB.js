import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity} from "react-native";

export default function ScreenB() {
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
                onPress={() => navigation.navigate("ScreenC")}
            >
                <Text 
                    style={{
                        fontSize:40,
                        fontWeight: "400",
                        color:"#fff"
                    }}
                >ScreenC</Text>
            </TouchableOpacity>
            
        </View>
    )
}
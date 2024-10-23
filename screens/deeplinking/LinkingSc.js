import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import * as Linking from 'expo-linking';

export default function LinkingSc() {
    const Url_A = "myapp://app/a";
    const Url_B = "myapp://app/b/come-from-url";
    const Url_C = "myapp://app/c";
    return(
        <View 
            style={{
                flex:1,
                alignItems:"center",
                justifyContent:"center",
                gap: 5,
            }}
        >
            <TouchableOpacity
                style={{
                    backgroundColor:"#007aff",
                    paddingHorizontal: 30,
                    paddingVertical: 20,
                    borderRadius: 10,
                }} 
                onPress={() => Linking.openURL(Url_A)}
            >
                <Text 
                    style={{
                        fontSize:30,
                        fontWeight: "400",
                        color:"#fff"
                    }}
                >Deep link to ScreenA</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor:"#007aff",
                    paddingHorizontal: 30,
                    paddingVertical: 20,
                    borderRadius: 10,
                }} 
                onPress={() => Linking.openURL(Url_B)}
            >
                <Text 
                    style={{
                        fontSize:30,
                        fontWeight: "400",
                        color:"#fff"
                    }}
                >Deep link to ScreenB</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor:"#007aff",
                    paddingHorizontal: 30,
                    paddingVertical: 20,
                    borderRadius: 10,
                }} 
                onPress={() => Linking.openURL(Url_C)}
            >
                <Text 
                    style={{
                        fontSize:30,
                        fontWeight: "400",
                        color:"#fff"
                    }}
                >Deep link to ScreenC</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor:"#007aff",
                    paddingHorizontal: 30,
                    paddingVertical: 20,
                    borderRadius: 10,
                }} 
                onPress={() => Linking.openURL("http://reactnative.dev/")}
            >
                <Text 
                    style={{
                        fontSize:30,
                        fontWeight: "400",
                        color:"#fff"
                    }}
                >Open link to URL</Text>
            </TouchableOpacity>
                    
            
        </View>
    )
}
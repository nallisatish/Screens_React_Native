import React from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

const data = [
    { name: "satish" },
    { name: "Vignesh" },
    { name: "MArtin" },
    { name: "Vasanth" },
    { name: "Rasheka" },
    { name: "Danne" },
    { name: "Harshi" },
    { name: "Sowmya" },
    { name: "Show" },
    { name: "lirrle" },
    { name: "single" },
    { name: "mine" },
    { name: "Refer" },
    { name: "Normal" }
];
const images = [
    {
        image:require('../assests/images/Watermelon.jpg')
    },
];

export default function ProductList() {
    return (
        <View style={{ flex: 1, marginTop: 20 }}>
            <FlatList
                data={data}
                numColumns={2}
                columnWrapperStyle={{ gap: 10, paddingHorizontal: 12 }}
                contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
                keyExtractor={(item, idx) => item.name + idx}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "row",
                                backgroundColor: "pink",
                                flex: 1,
                                height: 200,
                                borderRadius: 20,
                            }}
                        >
                            <Text style={{ color: "white" }}>{item.name}</Text>
                        </TouchableOpacity>
                    );
                }}
                ListHeaderComponentStyle={{ marginVertical: 10 }}
                ListHeaderComponent={() => (
                    <View>
                        <FlatList
                            horizontal={true}
                            style = {{paddingVertical:5}}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ gap:10,paddingHorizontal: 12}}
                            data={data}
                            keyExtractor={(item,idx) => item + idx}
                            renderItem={({item})=> (
                                <TouchableOpacity
                                    style={{
                                        display: "flex",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        flexDirection:"row",
                                        width:300,
                                        height:240,
                                        backgroundColor: "#fca5a5",
                                        borderRadius: 30,
                                    }}
                                >
                                    <Text>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <View
                            style={{
                                display:"flex",
                                justifyContent:"space-between",
                                alignItems:"center",
                                flexDirection:"row",
                                paddingHorizontal: 12,
                                marginBottom: 5,
                            }}
                        >
                            <TextInput placeholder="Search" style={{ borderRadius: 20, borderWidth: 2, width: 320, height:50}}/>
                            <Text>See All</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}
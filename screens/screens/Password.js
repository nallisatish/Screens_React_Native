import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Clipboard,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const App = () => {
    const [website, setWebsite] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwords, setPasswords] = useState([]);
    const [alertVisible, setAlertVisible] = useState(false);
    const [editing, setEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        showPasswords();
    }, []);

    const maskPassword = (pass) => {
        let str = "";
        for (let index = 0; index < pass.length; index++) {
            str += "*";
        }
        return str;
    };

    const copyText = async (txt) => {
        try {
            await Clipboard.setString(txt);
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
            }, 2000);
        } catch (error) {
            console.error("Error copying text:", error);
        }
    };

    const deletePassword = (website) => {
        const updatedPasswords = passwords.filter(
            (e) => e.website !== website
        );
        setPasswords(updatedPasswords);
        alert(`Successfully deleted ${website}'s password`);
    };

    const showPasswords = () => {
        setPasswords([]);
        setWebsite("");
        setUsername("");
        setPassword("");
        setEditing(false);
        setEditIndex(null);
    };

    const savePassword = () => {
    
        // Check if any of the input fields is empty
        if (!website || !username || !password) {
            alert("Please fill in all fields.");
            return;
        }

        if (editing && editIndex !== null) {
            const updatedPasswords = [...passwords];
            updatedPasswords[editIndex] = {
                website,
                username,
                password,
            };
            setPasswords(updatedPasswords);
            setEditing(false);
            setEditIndex(null);
        } else {
            const newPassword = {
                website,
                username,
                password,
            };
            setPasswords([...passwords, newPassword]);
        }
        setWebsite("");
        setUsername("");
        setPassword("");
    };

    const editPassword = (index) => {
        setEditing(true);
        setEditIndex(index);
        setWebsite(passwords[index].website);
        setUsername(passwords[index].username);
        setPassword(passwords[index].password);
    };

    const renderPasswordList = () => {
        return passwords.map((item, index) => (
            <View style={styles.passwordItem} key={index}>
                <View style={styles.listItem}>
                    <Text style={styles.listLabel}>
                        Website:
                    </Text>
                    <Text style={styles.listValue}>
                        {item.website}
                    </Text>
                    <TouchableOpacity
                        style={styles.copyIcon}
                        onPress={() =>
                            copyText(item.website)
                        }>
                        
                        <Icon
                            name="copy"
                            size={20}
                            color="#555"/>
                            
                    </TouchableOpacity>
                </View>

                <View style={styles.listItem}>
                    <Text style={styles.listLabel}>
                        Username:
                    </Text>
                    <Text style={styles.listValue}>
                        {item.username}
                    </Text>
                    <TouchableOpacity
                        style={styles.copyIcon}
                        onPress={() =>
                            copyText(item.username)
                        }>
                        
                        <Icon
                            name="copy"
                            size={20}
                            color="#555"/>
                            
                    </TouchableOpacity>
                </View>

                <View style={styles.listItem}>
                    <Text style={styles.listLabel}>
                        Password:
                    </Text>
                    <Text style={styles.listValue}>
                        {maskPassword(item.password)}
                    </Text>
                    <TouchableOpacity
                        style={styles.copyIcon}
                        onPress={() =>
                            copyText(item.password)
                        }>
                        
                        <Icon
                            name="copy"
                            size={20}
                            color="#555"/>
                            
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={() => editPassword(index)}>
                        
                        <Icon
                            name="edit"
                            size={20}
                            color="#fff"/>
                            
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={() =>
                            deletePassword(item.website)}>
                        
                        <Icon
                            name="trash"
                            size={20}
                            color="white"/>
                            
                    </TouchableOpacity>
                </View>
            </View>
        ));
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.heading}>
                    Password Manager
                </Text>
                <Text style={styles.subHeading}>
                    Your Passwords
                    {alertVisible && (
                        <Text id="alert"> (Copied!)</Text>
                    )}
                </Text>
                {passwords.length === 0 ? (
                    <Text style={styles.noData}>
                        No Data To Show
                    </Text>
                ) : (
                    <ScrollView horizontal>
                        <View style={styles.table}>
                            {renderPasswordList()}
                        </View>
                    </ScrollView>
                )}

                <Text style={styles.subHeading}>
                    {editing
                        ? "Edit Password"
                        : "Add a Password"}
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Website"
                    value={website}
                    onChangeText={(text) =>
                        setWebsite(text)
                    }/>
                    
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) =>
                        setUsername(text)}/>
                        
                    
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) =>
                        setPassword(text)
                    }/>
                    
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={savePassword}>
                    
                    <Text style={styles.submitButtonText}>
                        {editing
                            ? "Update Password"
                            : "Add Password"}
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default App;

import {View,TextInput,Text,StyleSheet} from "react-native";
import React from "react";

const SearchBar = (props)=>{
    return(
        <View style={styles.container}>
            <TextInput
                placeholder="SEARCH HERE"
                style={styles.input}
                value={props.searchText}
                onChangeText={(text)=>props.setSearchText(text)}
                onSubmitEditing={props.onSubmit}
            />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    container:{
        margin: 10
    },
    input:{
        backgroundColor:"#fff",
        padding: 15,
        borderRadius: 10,
        color: "#000",
        borderWidth: 1
    }
});
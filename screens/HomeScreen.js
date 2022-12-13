import React, {useEffect, useState} from "react";
import {View,StyleSheet,Text,SafeAreaView, FlatList} from "react-native";
import Article from "../components/Article";
import axios from "axios";


const HomeScreen = () => {
    const [articles,setArticles] = useState([]);
    const getNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=265717422f534fc6a8bfb535e474d143',{
            params:{
                category: "science",
            }
        })
            .then( (response) =>{
                setArticles(response.data.articles);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
    }

    // In here used useEffect React Hook To perform specific client of the code it depends on the state
    useEffect(() => {
        getNews();
    },[]);

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={articles}
                renderItem = {({item}) =>
                    <Article
                        urlToImage = {item.urlToImage}
                        title = {item.title}
                        description = {item.description}
                        author = {item.author}
                        publishedAt = {item.publishedAt}
                        sourceName = {item.source.name}
                        url={item.url}
                    />}
                keyExtractor = {(item) => item.title}
            />

        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#5A5A5A', 
    }
})
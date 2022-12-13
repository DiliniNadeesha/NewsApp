import react, {useState} from "react"
import {View, Text, StyleSheet, FlatList} from "react-native";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import Article from "../components/Article";

const SearchScreen = () => {
    const [searchText,setSearchText] = useState("");
    const [articles,setArticles] = useState([]);

const searchArticles = () =>{
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=265717422f534fc6a8bfb535e474d143',{
        params:{
            category: "science",
            q: searchText
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
    return (
        <View style={styles.container}>
            <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={searchArticles}/>
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
                    />}
                keyExtractor={(item) => item.title}
            />
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5A5A5A', 
    }
})
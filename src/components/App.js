import React from "react";
import SearchBar from './SearchBar';
import google from '../apis/googleBooks';
import BookList from './BookList'

class App extends React.Component{
    state = {books: []};

    onTermSubmit = async term => {
        const response = await google.get('/search', {
            params:{
                q: term
            }
        });        
        this.setState({books: response.data.items});
    };

    render(){
        return(
            <div className = "ui container">
                <SearchBar
                    onFormSubmit = {this.onTermSubmit}
                />
                <BookList books = {this.state.books}></BookList>
            </div>
        );
    }
};

export default App;
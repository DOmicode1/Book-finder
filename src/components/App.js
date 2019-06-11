import React from "react";
import SearchBar from './SearchBar';
import books from '../apis/googleBooks';
import BookList from './BookList'
import BookDetail from './BookDetail'

class App extends React.Component{
    state = {books: [], selectedBook: null};

    onTermSubmit = async term => {
        const response = await books.get(`${term}`, {
            params:{
                q: term,
                maxResults: 5
            }
        });        
        this.setState({
            books: response.data.items,
            selctedBook: response.data.items[0]
        
        });                
    };

    onBookSelect = (book) => {
        this.setState({selectedBook: book});
    }

    render(){
        return(
            <div className = "ui container">
                <SearchBar
                    onFormSubmit = {this.onTermSubmit}
                />
                <BookDetail book = {this.state.selectedBook}></BookDetail>
                <BookList
                    onBookSelect = {this.onBookSelect}
                    books = {this.state.books}>
                </BookList>
                
            </div>
        );
    }
};

export default App;
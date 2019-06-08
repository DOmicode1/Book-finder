import React from "react";
import SearchBar from './SearchBar';
import google from '../apis/googleBooks'

class App extends React.Component{
    onTermSubmit = (term) => {
        google.get('/search', {
            params:{
                q: term
            }
        })
    };

    render(){
        return(
            <div className = "ui container">
                <SearchBar
                    onFormSubmit = {this.onTermSubmit}
                />
            </div>
        );
    }
};

export default App;
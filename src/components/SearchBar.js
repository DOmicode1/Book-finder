import React from 'react';
//import books from '../apis/googleBooks';

class SearchBar extends React.Component{
    state = {term: ''};
    onInputChange = event => {
        this.setState({term: event.target.value});
    };
    onFormSubmit = event => {
        event.preventDefault();//prevents refreshing app
        this.props.onFormSubmit(this.state.term);
        console.log(this.state.term)
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form 
                    onSubmit = {this.onFormSubmit}
                    className="ui form">
                    <div className="field">
                        <label>Book search</label>
                        <input 
                            type = "text" 
                            value = {this.state.term}
                            onChange = {this.onInputChange}
                        />
                    </div>
                </form>
                </div>
        );
    }
}

export default SearchBar;


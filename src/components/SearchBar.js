import React from 'react';

class SearchBar extends React.Component{
    render(){
        return (
            <div className="search-bar ui segment">
                <form  className="ui form">
                    <div className="field">
                        <label>Videosearch</label>
                        <input/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
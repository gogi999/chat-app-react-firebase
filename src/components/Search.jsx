import React from 'react';

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a user" />
            </div>
            <div className="userChat">
                <img src="https://cdn.cliqueinc.com/posts/280096/jane-levy-interview-280096-1558564358457-image.700x0c.jpg" alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    );
}

export default Search;

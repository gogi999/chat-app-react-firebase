import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <span>Gogi9 Chat</span>
            <div className="user">
                <img src="https://cdn.cliqueinc.com/posts/280096/jane-levy-interview-280096-1558564358457-image.700x0c.jpg" alt="" />
                <span>Jane</span>
                <button>Logout</button>
            </div>
        </div>
    );
}

export default Navbar;

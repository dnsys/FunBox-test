import React from 'react';
import {Link} from 'react-router-dom';
import './Header/index.sass';

class Header extends React.Component{
    constructor (){
        super()
    }

    render() {
        return (
            <header className="header">
                <Link to="/" className={'header__back-link'}><i></i> Back to task</Link>
            </header>
        );
    }
}

export default Header
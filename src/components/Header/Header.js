import React from 'react';

import './Header.css';
import '../LeftSection/index'

const imgUrl = 
"https://raw.githubusercontent.com/Silzhar/cv-html/master/img/boootcamp-pic.jpeg";

class Header extends React.Component{
    render(){
        return (
            <header className="header">
                <img className="header_avatar" src={imgUrl} alt="" srcset=""/>

                <ul className="header_list">
                    <li>Name: Luis Ruiz Fernández</li>
                    <li>  -- </li>
                    <li>Email: luis.ruizfer@gmail.com</li>
                </ul>
            </header>
        )
    }
}

export default Header;
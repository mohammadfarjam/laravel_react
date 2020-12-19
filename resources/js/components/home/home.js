import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/Header';
import Baner from "../Baner/Baner";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import style from '../../style.css'


export default function Home(props) {
    return (
        <div>
            <Header/>
            <Baner/>
        </div>


    )
}

if (document.getElementById('Main')) {
    ReactDOM.render(<Home/>, document.getElementById('Main'));
}

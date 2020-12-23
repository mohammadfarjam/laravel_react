import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/Header';
import Baner from "../Baner/Baner";
import About from '../About/About';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import style from '../../style.css'
import Brand from "../Brand/Brand";
import Services from "../Services/Service";
import Project from '../Project/Project';


export default function Home(props) {
    return (
        <div>
            <Header/>
            <Baner/>
            <About />
            <Brand />
            <Services />
            <Project />
        </div>


    )
}

if (document.getElementById('Main')) {
    ReactDOM.render(<Home/>, document.getElementById('Main'));
}

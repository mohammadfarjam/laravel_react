import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'antd/dist/antd.css';
import AppHeader from '../AppHeader/AppHeader';
import AppCarousel from '../AppCarousel/AppCarousel';

export default function Home(props) {
    return (
        <div>
            <AppHeader />
            <AppCarousel />
        </div>




    )
}

if (document.getElementById('Main')) {
    ReactDOM.render(<Home />, document.getElementById('Main'));
}

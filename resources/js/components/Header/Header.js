import React from 'react';
// import { NavLink } from 'react-router-dom';
import logo from '../.././../image/logo.png';
import styles from './Header.css'





export default function Header(props) {


    return (
        <div className = 'header_area' >
        <div className = 'main_menu' >
        <nav className = "navbar navbar-expand-lg navbar-light" >
        <div className = "container-fluid" >
        <a className = "navbar-brand" href ="#"> < img src={ logo } className='img-responsive' width ='80px' /></a>
        <button className ="navbar-toggler" type ="button" data-bs-toggle="collapse" data-bs-target ="#navbarNav" aria-controls = "navbarNav" aria-expanded = "false" aria-label = "Toggle navigation" >
        <span className = "navbar-toggler-icon" />
        </button>
        <div className = "collapse navbar-collapse" id = "navbarNav" >
        <div className = 'mr-auto' >
        </div>
        <ul className = "navbar-nav" >
        <li className = "nav-item" >
        <a className = "nav-link active" aria-current = "page" href = "#" > Home </a>
        </li>
        <li className = "nav-item" >
        <a className = "nav-link" href = "#" > About </a>
        </li>
        <li className = "nav-item" >
        <a className = "nav-link" href = "#" > Services </a> </li>
        <li className = "nav-item" >
        <a className = "nav-link " href = "#" > Portfplio </a> </li>
        <li className = "nav-item" >
        <a className = "nav-link " href = "#" > Pages </a> </li>
         <li className = "nav-item" >
        <a className = "nav-link " href = "#" > Blog </a> </li>
        <li className = "nav-item" >
        <a className = "nav-link " href = "#" > Contacts </a> </li>
        </ul>
         </div>
          </div>
          </nav>

        </div>
        </div>



    )
}


import React, { Component } from 'react';
import './NavBar.css';



class NavBar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() { 
        return ( 
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Custom Clothing
                                </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="Clothing.js">See All Options</a></li>
                                <li><a class="dropdown-item" href="#">Tank Top</a></li>
                                <li><a class="dropdown-item" href="#">Skort</a></li>
                            </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Fabric Options
                                </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="Fabric.js">By Theme</a></li>
                                <li><a class="dropdown-item" href="#">By Fabric Type</a></li>
                                <li><a class="dropdown-item" href="#">By Clothing Item</a></li>
                            </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Ready to Ship</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Sale</a>
                            </li>
                            
                        </ul>
                        </div>
                    </div>
                    <button type="button" class="btn btn-info">Log In</button>
                    </nav>
         );
    }
}

 
export default NavBar;
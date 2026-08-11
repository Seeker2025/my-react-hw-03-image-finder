import React, { Component } from "react";
import {
    Form
} from './Searchbar.styled';

// import { toGetData } from '../../added/added';

export class Searchbar extends Component{
    state ={

    };

   
    
    render(){
        return (
            <header className="searchbar">
                <Form>
                    <button type="submit" className="button">
                    <span className="button-label">Search</span>
                    </button>

                    <input
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </Form>
            </header>

        )
    }
}
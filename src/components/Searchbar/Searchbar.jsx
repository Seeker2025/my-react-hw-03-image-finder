import React, { Component } from "react";
import {
    Form
} from './Searchbar.styled';

export class Searchbar extends Component{
    state ={

    };
    
    render(){
        return (
            <header class="searchbar">
                <Form>
                    <button type="submit" class="button">
                    <span class="button-label">Search</span>
                    </button>

                    <input
                    class="input"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                    />
                </Form>
            </header>

        )
    }
}
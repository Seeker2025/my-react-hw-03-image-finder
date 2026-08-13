import React, { Component } from "react";
import {
    Form
} from './Searchbar.styled';

// import { toGetData } from '../../added/added';

export class Searchbar extends Component{
    state ={
         value: '',
    };

    handleChange = (e) => {
        this.setState({ value:e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
        this.props.handleSearch(this.state.value)
    }
    
    render(){
        return (
            <header className="searchbar">
                <Form onSubmit={this.handleSubmit}>
                    <button type="submit" className="button">
                    <span className="button-label">Search</span>
                    </button>

                    <input
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange ={this.handleChange}
                    />
                </Form>
            </header>

        )
    }
}
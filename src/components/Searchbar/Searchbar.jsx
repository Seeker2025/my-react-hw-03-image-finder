import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
                        SearchForm,
                        HeaderSearchbar,
                        SearchFormButton,
                        SearchFormInput,
                        SearchFormButtonLabel
    
} from './Searchbar.styled';

// import { toGetData } from '../../added/added';

export class Searchbar extends Component{
    state ={
         value: '',
    };

    handleChange = (e) => {
        this.setState({ value:e.target.value })
    }

    handleSubmit = (e, {resetForm}) => {
        e.preventDefault()
        console.log(this.state);
        this.props.handleSearch(this.state.value);
        resetForm();
    }
    
    render(){
        return (
            <>
            
            <HeaderSearchbar>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchFormButton type="submit" className="button">
                        <SearchFormButtonLabel className="button-label">Search</SearchFormButtonLabel>
                    </SearchFormButton>

                    <SearchFormInput
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange ={this.handleChange}
                    />
                </SearchForm>
            </HeaderSearchbar>

            </>

        )
    }
}

Searchbar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};
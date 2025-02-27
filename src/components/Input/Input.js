import React, { useState } from "react";
import lupa from '../../img/lupa.svg';
import '../../components/Input/input.css';
import { filterSearch } from "../../utils/filterSearch";

const Input = ({ placeholder }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        filterSearch(searchTerm);
    };

    return (
        <div className="sidebar_search">
            <form onSubmit={handleSubmit}>
                <input 
                    id="sidebar_input" 
                    placeholder={placeholder} 
                    type="search" 
                    value={searchTerm} 
                    onChange={handleChange} 
                />
                <button type="submit">
                    <img src={lupa} id="search_icon" alt="Search" />
                </button>
            </form>
        </div>
    );
};

export default Input;

import React from "react";
import Lupa from '../../img/lupa.svg';
import './SearchMenu.css';
import SearchMenuList from "../SearchMenuList/SearchMenuList";
import useToggle from "../../hooks/useToggle/useToggle";

export default function SearchMenu() {
    const [isOpen, toggleSearch] = useToggle(false);

    const openClass_search = isOpen ? 'open' : '';

    return (
        <>
            <button onClick={toggleSearch} className={`toggle-button btn_icon_search ${openClass_search}`}>
                    <img src={Lupa} alt="Search Menu" />
            </button>
            <SearchMenuList openClass_search={openClass_search} toggleSearch={toggleSearch}/>
        </>
    )
}
import React from "react";
import Close from '../../img/close.svg';
import Input from "../Input/Input";
import '../SearchMenuList/SearchMenuList.css';
import RoutesList from "../RoutesList/RoutesList";

export default function SearchMenuList({openClass_search, toggleSearch}) {
    return (
        <div className={`searchMenu ${openClass_search}`}>
                    <div className="top_bar">
                    <button onClick={toggleSearch} className={`close_btn_search ${openClass_search}`}>
                        <img src={Close} alt='Close'/>
                    </button>
                    </div>
                    <Input placeholder={"Найти маршрут..."} />
                    <RoutesList />
        </div>
    )
}
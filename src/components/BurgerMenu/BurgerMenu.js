import React from 'react';
import './BurgerMenu.css';
import Burger from '../../img/burger.png';
import BurgerMenuList from '../BurgerMenuList/BurgerMenuList';
import useToggle from '../../hooks/useToggle/useToggle';

export default function BurgerMenu() {
    const [isOpen, toggleBurger] = useToggle(false);

    const openClass_burger = isOpen ? 'open' : '';

    return (
        <>
            <button onClick={toggleBurger} className={`toggle-button btn_icon_burger ${openClass_burger}`}>
                <img src={Burger} alt="Burger Menu" />
            </button>
            <BurgerMenuList toggleBurger = {toggleBurger} openClass_burger = {openClass_burger}/>
        </>
    )
}
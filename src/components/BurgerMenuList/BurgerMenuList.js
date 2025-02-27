import React from "react";
import Close from '../../img/close.svg';
import '../BurgerMenuList/BurgerMenuList.css';

export default function BurgerMenuList({toggleBurger, openClass_burger}) {
    return (
         <div className={`burgerMenu ${openClass_burger}`}>
                    <button onClick={toggleBurger} className={`close_btn_burger ${openClass_burger}`}>
                        <img src={Close} alt="Close" />
                    </button>
                        <div className="subsections_menu">
                        <h1 className="subsections_title">Разделы</h1>
                        <ul className="subsections_ul">
                            <li>
                                <div className="subsections_item">
                                    <button className='subsections_item_title'>Карта</button>
                                </div>
                            </li>
                            <li>
                                <div className="subsections_item">
                                    <button className='subsections_item_title'>Транспорт</button>
                                    <div className='subsections_item_list'>
                                        <button>Расписание</button>
                                        <button>Перевозчики</button>
                                        <button>Отчеты</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="subsections_item">
                                    <button className='subsections_item_title'>Личные</button>
                                    <div className='subsections_item_list'>
                                        <button>Дом</button>
                                        <button>Работа</button>
                                        <button>Любимые места</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        </div>
                    </div>
    )
}
import React from "react";
import { useState } from "react";
import '../LayersList/LayersList.css';

export default function LayersList({isOpen}) {
    return (
        <div className={`layers ${isOpen ? 'open' : ''} layers_list`}>
            <h1>Слои</h1>
            <ul>
                <li>
                    <input type="checkbox" id="stops"/>
                    <p>Остановки</p>
                </li>
                <li>
                    <input type="checkbox" />
                    <p>Погода</p>
                </li>
                <li>
                    <input type="checkbox" />
                    <p>Ресторан</p>
                </li>
                <li>
                    <input type="checkbox" />
                    <p>Отели</p>
                </li>
                <li>
                    <input type="checkbox" />
                    <p>Парки</p>
                </li>
                <li>
                    <input type="checkbox" />
                    <p>Аптеки</p>
                </li>
                <li>
                    <input type="checkbox" />
                    <p>Банкоматы</p>
                </li>
                <li>
                    <input type="checkbox" />
                    <p>Кафе</p>
                </li>
            </ul>
        </div>
    )
}
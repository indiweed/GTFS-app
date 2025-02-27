import React from "react";
import '../RoutesList/RoutesList.css';

export default function RoutesList() {
    return (
        <div className="routes">
            <ul className="routes items list">
                <li>
                    <h1 className="route_num">193</h1>
                    <div className="route_num_info">
                        <button className="direct_button">Прямой</button>
                        <p>-</p>
                        <button className="reverse_button">Обратный</button>
                        <input type="hidden" className="routeId" value={3812}/>
                    </div>
                </li>
                <li>
                    <h1 className="route_num">351Б</h1>
                    <div className="route_num_info">
                        <button className="circular">Кольцевой</button>
                        <input type="hidden" className="routeId" value={3918}/>
                    </div>
                </li>
                <li>
                    <h1 className="route_num">194</h1>
                    <div className="route_num_info">
                        <button className="direct_button">Прямой</button>
                        <span>-</span>
                        <button className="reverse_button">Обратный</button>
                        <input type="hidden" className="routeId" value={4055}/>
                    </div>
                </li>
                <li>
                    <h1 className="route_num">385</h1>
                    <div className="route_num_info">
                        <button className="direct_button">Прямой</button>
                        <span>-</span>
                        <button className="reverse_button">Обратный</button>
                        <input type="hidden" className="routeId" value={4095}/>
                    </div>
                </li>
                <li>
                    <h1 className="route_num">138</h1>
                    <div className="route_num_info">
                        <button className="direct_button">Прямой</button>
                        <span>-</span>
                        <button className="reverse_button">Обратный</button>
                        <input type="hidden" className="routeId" value={223}/>
                    </div>
                </li>
                <li>
                    <h1 className="route_num">136</h1>
                    <div className="route_num_info">
                        <button className="direct_button">Прямой</button>
                        <span>-</span>
                        <button className="reverse_button">Обратный</button>
                        <input type="hidden" className="routeId" value={224}/>
                    </div>
                </li>
                <li>
                    <h1 className="route_num">22</h1>
                    <div className="route_num_info">
                        <button className="direct_button">Прямой</button>
                        <span>-</span>
                        <button className="reverse_button">Обратный</button>
                        <input type="hidden" className="routeId" value={225}/>
                    </div>
                </li>
                <li>
                    <h1 className="route_num">137</h1>
                    <div className="route_num_info">
                        <button className="direct_button">Прямой</button>
                        <span>-</span>
                        <button className="reverse_button">Обратный</button>
                        <input type="hidden" className="routeId" value={226}/>
                    </div>
                </li>
                <li>
                    <h1 className="route_num">174</h1>
                    <div className="route_num_info">
                        <button className="direct_button">Прямой</button>
                        <span>-</span>                                                                                                                                                                                                                                                   
                        <button className="reverse_button">Обратный</button>
                        <input type="hidden" className="routeId" value={241}/>
                    </div>
                </li>
            </ul>
        </div>
    )
}
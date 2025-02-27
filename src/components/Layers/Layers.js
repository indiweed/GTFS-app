import React from "react";
import '../Layers/Layers.css';
import iconLayers from '../../img/layers.png';
import LayersList from "../LayersList/LayersList";
import useToggle from "../../hooks/useToggle/useToggle";

export default function Layers() {
    const [isOpen, toggleLayers] = useToggle(false);

    const openClass_layers = isOpen ? 'open' : '';

    return (
        <>
        <button onClick={toggleLayers} className={`toggle-layers layers_icon ${openClass_layers}`}>
            <img src={iconLayers} alt="Layers Menu" />
        </button>
        <LayersList isOpen = {isOpen}/>
        </>
    )
}
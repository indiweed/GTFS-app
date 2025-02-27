import React from "react";

const fetchExtractData = async (feed, id, onSuccess) => {
    try {
        if (feed.hasOwnProperty(id)) {
            const data = feed[id]; // Получаем данные по id
            onSuccess(data); // Вызываем функцию onSuccess с полученными данными
        } else {
            console.warn(`ID ${id} not found in feed`);
        } 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export {fetchExtractData}
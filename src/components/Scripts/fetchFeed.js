import React from "react";
import { processData } from "./processData";

const fetchFeed = async (feed) => {
    const fileName_ = feed.split('/').pop(); // Извлечение имени файла  
    const response = await fetch(feed);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.text();
    const tableData = processData(data);
    return tableData;
};

export {fetchFeed}
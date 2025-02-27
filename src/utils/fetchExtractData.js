const fetchExtractData = async (feed, id, onSuccess) => {
    if (feed.hasOwnProperty(id)) {
        const data = feed[id]; // Получаем данные по id
        onSuccess(data); // Вызываем функцию onSuccess с полученными данными
    } else {
        console.warn(`ID ${id} not found in feed`);
    } 
    
};

export {fetchExtractData}
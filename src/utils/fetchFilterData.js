const fetchFilterData = (feed, k, onSuccess) => {

    const results = [];
    const data = []
    const keys = Array.isArray(k) ? k : [k];

    for (const key of keys) {
        if (feed.hasOwnProperty(key)) {
            data.push(feed[key]);
            results.push(data);
        }
    }
    onSuccess(data);

    // Если нужно вернуть все найденные данные
    return results.length > 0 ? results : null;
};

export {fetchFilterData}
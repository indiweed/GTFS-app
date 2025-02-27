const processData = (data) => {
    const rows = data.trim().split('\n');
    const headers = rows[0].split(',');
    return rows.slice(1).map(row => {
        const values = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        return headers.reduce((obj, header, index) => {
            if (values[index] !== undefined) {
                obj[header] = values[index].replace(/(^"|"$)/g, '');
            } else {
                obj[header] = null;
            }
            return obj;
        }, {});
    });
};

export {processData}
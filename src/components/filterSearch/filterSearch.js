import notFoundImg from '../../img/ic_baseline-search-off.svg';
import './filterSearch.css';

const filterSearch = (searchTerm) => {
    console.log("Поиск:", searchTerm);
    const routes = document.querySelectorAll('.routes.items.list li');
    let found = false; 

    routes.forEach(route => {
        const children = route.querySelectorAll('h1, button');
        let routeHasMatch = false; 

        children.forEach(el => {
            if (el.textContent.includes(searchTerm)) {
                routeHasMatch = true; 
                found = true;
                route.style.display = ''; 
            }
        });
        
        if (!routeHasMatch) {
            route.style.display = 'none'; 
        }
    });

    const existingSpan = document.getElementById('notFoundText');
    if (existingSpan) {
        const notFoundContainers = document.querySelectorAll('.notFoundContainer');
        notFoundContainers.forEach(container => container.remove());
    }

    if (!found) {
        divContainer()
    }
};

const divContainer = async () => {
    let span = document.createElement('span');
    let image = document.createElement('img');
    let div = document.createElement('div');
    div.className = 'notFoundContainer';
    image.src = notFoundImg;
    image.id = 'notFoundImage';
    span.id = 'notFoundText';
    span.textContent = 'Ничего не найдено, попробуйте изменить запрос';
    document.querySelector('.searchMenu').appendChild(div);
    document.querySelector('.notFoundContainer').appendChild(image);
    document.querySelector('.notFoundContainer').appendChild(span);
}

export {filterSearch};

document.addEventListener('DOMContentLoaded', () => {
    const newForm = document.querySelector('#new-item-form');
    newForm.addEventListener('submit', handleNewFormSubmit);

    const deleteButtonItem = document.createElement('button');
    deleteButtonItem.id = 'delete';
    deleteButtonItem.textContent = "delete all"
    document.body.appendChild(deleteButtonItem);

    const button = document.querySelector('#delete');
    button.addEventListener('click', handleDelete);

})

// define function
const handleNewFormSubmit = function (event) {
    event.preventDefault();

    const poetryListItem = createPoetryListItem(event.target);
    const poetryList = document.querySelector('#poetry-list');
    poetryList.appendChild(poetryListItem);

    event.target.reset();
}

const createPoetryListItem = function (form) {
    const poetryListItem = document.createElement('li');
    poetryListItem.classList.add('poetry-list-item')

    const title = document.createElement('h2');
    title.textContent = `Title: ${form.title.value}`;
    poetryListItem.appendChild(title);

    const author = document.createElement('h3');
    author.textContent = `Author: ${form.author.value}`;
    poetryListItem.appendChild(author);

    const subgenre = document.createElement('h4');
    subgenre.textContent = `Subgenre: ${form.subgenre.value}`;
    poetryListItem.appendChild(subgenre);

    const read = document.createElement('p')
    read.textContent = `I have ${form.read.value} this poem`;
    poetryListItem.appendChild(read);

    return poetryListItem;
}


const handleDelete = function (event) {
    const poetryList = document.querySelector('#poetry-list');
    poetryList.innerHTML = '';

}

    



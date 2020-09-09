const headingOne = document.getElementById('heading-one');
headingOne.style.color = "blue";

let listItems = document.getElementsByTagName('li');

const ingredientInput = document.querySelector('#ingredient-input');
const button = document.querySelector('#submit-btn');
console.log(ingredientInput);

let lastItem = listItems[listItems.length-1];
const getList = () => {
    listItems = document.getElementsByTagName('li');
    lastItem = listItems[listItems.length-1];
}

ingredientInput.addEventListener('input', (event) => {
    lastItem.innerText = ingredientInput.value;
});


function newListItem(){
    const list = document.getElementById('shopping-list');
    let newLi = document.createElement('li');
    newLi.addEventListener('click', (ev)=>{
       ev.target.remove();
    })
    list.appendChild(newLi);
    getList();
}
newListItem();

ingredientInput.addEventListener('change', (event) => {
    newListItem();
    ingredientInput.value = '';
});
const headingOne = document.getElementById('heading-one');
headingOne.innerText = 'Cinco de Mayo | Taco Tuesday Shopping List';
headingOne.style.color = 'red';

//take what's been typed into the input and create a list item from it
function addIngredient(){
    const ingredient = document.createElement('li');
    const ingredientInput = document.getElementById('ingredient-input');
    ingredient.innerText = ingredientInput.value;
    
    const doneBtn = document.createElement('button');
    doneBtn.innerText = 'Done';
    doneBtn.addEventListener('click', function(event){
        event.target.parentNode.remove();
    })
    ingredient.appendChild(doneBtn);

    document.getElementById('shopping-list').appendChild(ingredient);
    ingredientInput.value = '';
}


















// const list = document.querySelector('ul')
// console.log(list.innerHTML)
// console.log(document.getElementsByTagName('li'))

// console.log(document.querySelector('.ingredients'))
// const ingredients = document.querySelectorAll('.ingredients');
// ingredients[0].classList.add('active')
// ingredients[0].classList.remove('ingredients')
// ingredients[0].classList.toggle('ingredients')
// console.log(ingredients[0].className);

// const ingredientInput = document.getElementById('ingredient-input');
// ingredientInput.addEventListener('keypress', function(event){
//     console.log(event.target.value)
// })

// document.getElementById('child').addEventListener('click', function(event){
//     event.stopPropagation()
//     console.log('child button clicked')
// })

// function submit(){
//     console.log('button clicked')
// }

// document.getElementById('form-btn').addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('form submitted')
// })
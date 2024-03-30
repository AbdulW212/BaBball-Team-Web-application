//get elements from html
const commentBtn = document.getElementById('btnMent')
const inputText = document.getElementById('inputMent')
const ul = document.getElementById('ulI')
const li = document.createElement("li");


//console.log elements to make sure i have them
console.log(commentBtn)
console.log(inputText)
console.log(ul)


//addEventListener to button
commentBtn.addEventListener('click', (event) => {
    //console.log(inputText.value)
    commentBtn.textContent = "Thanks for the support";// When btn is clicked text will change
    const li = document.createElement("li");//Create a li
    li.textContent = inputText.value;  //Set the textContent of the li to the input value
   
    ul.appendChild(li)
   
    console.log(li)
})

let input = document.querySelector("input");
let ul = document.querySelector("ul")
let form = document.querySelector("form")

let h1 = document.createElement("h1")
h1.innerText = "There is no TODO"
h1.className = "text-center"
ul.appendChild(h1)
// console.log(h1)

input.focus()
const saveTodo = () => {
    // prevent.preventDefault()
    h1.remove()

    newListItem = document.createElement("li");
    newListItem.innerText = input.value
    newListItem.className = "list-group-item rounded-0 "
    let newdate = new Date()
    let date = newdate.getDate();
    let month = newdate.getMonth();
    let year = newdate.getFullYear();
    let paragraph = document.createElement("p")
    paragraph.innerText = date + "/" + month + "/" + year
    paragraph.className = "d-inline ms-5 float-end"
    newListItem.appendChild(paragraph)
    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"
    deleteBtn.setAttribute = "button"
    deleteBtn.className = "btn btn-sm btn-danger rounded-0 float-end";
    newListItem.appendChild(deleteBtn)
    ul.appendChild(newListItem)
    form.reset()
    input.focus()
}

console.log(Date.now())

form.addEventListener("submit", (e) => {
    e.preventDefault();
    saveTodo();
})

ul.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-danger')) { //event.target.innerText === 'Delete'
        event.target.parentElement.remove();
    }
    // if (event.target.classList('btn-danger')) { //event.target.innerText === 'Delete'
    //     event.target.parentElement.remove();
    // }
    if (ul.children.length == 0) {
        ul.appendChild(h1)
    }
})

let btn = document.querySelector("button")

const mode = () => {
    if (btn.innerText == "Dark mode") {
        document.body.style.backgroundColor = "gray"
        btn.innerText = "Light mode"
    }
    else {
        btn.innerText = "Dark mode"
        document.body.style.backgroundColor = "white"
    }
}

btn.addEventListener("click", mode)



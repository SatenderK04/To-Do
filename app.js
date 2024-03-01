let bt = document.querySelector("button");
let inp = document.querySelector("input")
let list = document.querySelector("ul");

bt.addEventListener("click", function(){
    let item = document.createElement("li");
    // let delBtn = document.createElement("button");
    // delBtn.innerText = "delete";
    item.innerText = inp.value;
    // delBtn.classList.add("delBtn");

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("check")

    if(inp.value !== ""){
        list.appendChild(item);
        item.appendChild(checkBox);
        // item.appendChild(delBtn);
    }
    inp.value = "";

    // delBtn.addEventListener("click", function(){
    //     item.remove();
    // })
});

// another way to delete items

list.addEventListener("click", function (event) {
    if (event.target.classList.contains("check")) {
        let par = event.target.parentElement;
        par.remove();
    }
})

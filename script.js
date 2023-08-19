let body = document.querySelector("body");
let newEl = document.createElement("p");
let addd = document.querySelector("#plus");
let minus = document.querySelector("#minus")
let count = 0;

body.append(newEl);

function add(){
  count++;
  
  if(count < 0){
    count++
  }
  newEl.textContent = count;
}

function min(){
  newEl.textContent = count--;
}

addd.addEventListener('click', add);
minus.addEventListener('click', min);
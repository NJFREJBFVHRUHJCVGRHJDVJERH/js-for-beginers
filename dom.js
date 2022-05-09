let elem = document.getElementById('h1');
console.log(elem);

let elemc = document.getElementsByClassName('click');
console.log(elemc);

// elemc[0].style.background = "yellow";
elemc[0].classList.add("bg-primary");
elemc[0].classList.add("text-sucess");
console.log(elemc.innerHTML);
console.log(elemc.innerText);

console.log(elemc[0].innerHTML);
console.log(elemc[0].innerText);

tn = document.getElementsByTagName('button')
console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "this is a created element";
tn[0].appendChild(createdElement);

a = document.title
console.log(a)
b = document.URL
console.log(b)
c = document.scripts
console.log(c)
d = document.domain
console.log(d)
// 1
// priviligier le classList au setAttribute car plus de fonctionalité lié aux class
let myH1 = document.querySelector("h1");
myH1.addEventListener('click', () => {
    myH1.classList.add('text-blue')

})
// console.log(myH1);
// 2
let h3 = document.querySelector("h3");
h3.addEventListener("dblclick", ()=>{
    h3.classList.add('text-error')
})
// console.log(h3);
// 3
let firstP = document.querySelector('p')
firstP.addEventListener('click', () => {
    // le toggle sert a axtivé et désactivé les valeurs de la classe comme une boucle comme dans l'exercice précédent
    firstP.classList.toggle('text-style')
})

// 4
let span = Array.from(document.querySelectorAll('p')[1].children)
console.log(span);

span.forEach(el => {
    el.addEventListener('click', () =>{
        el.classList.toggle('bolder-red')
    })
})

// 5
let mySpan2 = Array.from(document.querySelectorAll('p')[2].children)
console.log(mySpan2);

mySpan2.forEach(el =>{
    el.addEventListener('click', () =>{
        mySpan2.forEach(el =>{
        el.classList.remove('bolder-red')
        })
        el.classList.add('bolder-red')
    })
})
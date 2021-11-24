let body = document.body
// pour un titre
let monTitre = document.createElement('h1')
monTitre.innerText = 'Mon titre crée en JS'
body.appendChild(monTitre)
console.log(monTitre);

// btn
let myBtn = document.createElement('button')
myBtn.innerText = 'clicquez'
myBtn.classList.add('seed')
body.appendChild(myBtn)

// div
let myDiv = docuement.createElement('div')
myDiv.append(myBtn, monTitre, 'HELLO')
body.append(myDiv)
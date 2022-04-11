const resultat = document.getElementById('resultat');
const buttons = document.querySelectorAll('.button');
const egale = document.querySelector('.egale');
const suppression = document.querySelector('.suppression')

buttons.forEach((button) => {
     button.addEventListener('click', (e)=> {
          resultat.innerHTML += e.target.id

     })
})
egale.addEventListener('click', ()=> {
     resultat.innerHTML = eval(resultat.textContent)
     if(resultat.innerHTML == "undefined"){
          resultat.innerHTML = ''
     }
})
suppression.addEventListener('click', ()=> {
     resultat.innerHTML = " "
})
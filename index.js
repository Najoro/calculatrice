const contenaire = document.querySelector('.contenaire')
const boxes = document.querySelectorAll('.boxes')
const resultat = document.getElementById('resultat')
const egale = document.querySelector('.egale')
const clear = document.querySelector('.clear')



boxes.forEach((boxe) => {
     boxe.addEventListener('click', (e) => {
          resultat.textContent += e.target.id
     })
     //---------------------------------------------
     function change_color(color){
          contenaire.style.borderColor = `${color}`
          resultat.style.background =`${color}`
          resultat.style.color = "#000"
          egale.style.borderColor = `${color}`
          boxe.style.borderColor = `${color}`
     }
     //---------------------------------------------
     fotsy.style.background = "#fff"
     fotsy.addEventListener('click', () => {
          change_color('#fff')
     })
     //---------------------------------------------
     maitso.style.background= "green"
     maitso.addEventListener('click' ,() => {
         change_color('green')
          
     })
     manga.style.background= "blue"
     manga.addEventListener('click' ,() => {
          change_color('blue')
          
     })
     mavo.style.background= "yellow"
     mavo.addEventListener('click' ,() => {
          change_color('yellow')
     })
})
egale.addEventListener('click' , () => {
     resultat.textContent = eval(resultat.textContent)
})
clear.addEventListener('click', () => {
     resultat.textContent = ''
})
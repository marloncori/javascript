//kod w nowszym stylu JavaScript, bez ";" oraz z użyciem lambdy "(<param>) =>"

const liczby = document.querySelectorAll('.liczba')
const operatory = document.querySelectorAll('.operator')
const wyczysc = document.querySelector('.wyczysc')
const usun = document.querySelector('.usun')
const rownosc = document.querySelector('.rownosc')
const wynikPoprzedni = document.querySelector('.poprzednie-dzialanie')
const wynikAktualny = document.querySelector('.akutalne-dzialanie')

//puste zmienne, zawsze gdy możliwe, powinniśmy używać LET zamiast VAR
let aktualneDzialanie = ''
let poprzednieDzialanie = ''

// niezadeklarowana zmienna, obecnie wybrana operacja na kalkulatorze, np + lub - lub / itd
let operacja = undefined

// dostepne FUNKCJE
const oblicz = () => {
   let dzialanie
   if(!poprzednieDzialanie || !aktualneDzialanie){
      return   
   }
    //przerabiamy String na Float, 
   const poprzednie = parseFloat(poprzednieDzialanie)
   const aktualne = parseFloat(aktualneDzialanie)
   
   if(isNaN(poprzednie) || isNaN(akutalne)) {
     return       
   }
    
   switch(operacja){
     case '+':
          dzialanie = poprzednie + aktualne
          break;
     case '-':
          dzialanie = poprzednie - aktualne
          break;
     case '×':
          dzialanie = poprzednie * aktualne
          break;
     case '÷':
         if(aktualneDzialanie === 0){
            wyczyscWynik()
            return
         }
          dzialanie = poprzednie / aktualne
          break;
     case '√':
           dzialanie = Math.pow(poprzednie, 1/aktualne)
          break;
     case '%':
          dzialanie = (poprzednie / 100) * aktualne
          break;
     case '^':
          dzialanie = Math.pow(poprzednie, aktualne) 
          break;
     case 'log':
          dzialanie = Math.log(poprzednie) / Math.log(aktualne)
          break;
     default:
           return
   } 
   aktualneDzialanie = dzialanie
   operacja = undefined
   poprzednieDzialanie = ''
}

const wybierzOperacje = (operator) => {
    if(aktualDzialanie === ''){
       return
    }
    if(poprzednieDzialanie !== ''){
      cosnt poprzednie = poprzednieDzialanie.innerText
       if(aktualneDzialanie.toString() === '0' && poprzednie[poprzednie.length-1] === '÷'){
         wyczyscWynik()
         return
       }
      oblicz()
    }
    operacja = operator
    poprzednieDzialanie = aktualneDzialanie
    aktualDzialanie = ''
}

const zaktualizujWynik = () => {
    wynikAktualny.innerText = aktualneDzialanie
    if(operacja != null) {
      wynikPoprzedni.innerText = poprzednieDzialanie + operacja 
    } else {
       wynikPoprzedni.innerText = ''
    }
}

const dodajLiczbe = (liczba) => {
    if(liczba === '•') {
       if(aktualDzialanie.includes('.')) {
         return
       }
      liczba = '.' //w taki sposob dodajemy kropke tylko raz
    }
    aktualneDzialanie = aktualneDzialanie.toString() + liczba.toString()
}

const usunLiczbe = () => {
    aktualneDzialanie = aktualneDzialanie.toString().slice(0, -1)  
}

const wyczyscWynik = () => {
    aktualneDzialanie = ''
    poprzednieDzialanie = ''
    operacja = undefined
}

liczby.forEach((liczba) => {
    liczba.addEventListener('click', () => {
       dodajLiczbe(liczba.innerText)
       zaktualizujWynik()
    })
}) //"forEach" ends here

usun.addEventListener('click', () => {
    usunLiczbe()
    zaktualizujWynik()
})

operatory.forEach((operator) => {
    operator.addEventListener('click', () => {
        wybierzOperacje(operator.innerText)
        zaktualizujWynik()
    })
})

rownosc.addEventListener('click', () => {
     oblicz()
     zaktualizujWynik()
})

wyczysc.addEventListener('click', () => {
    wyczyscWynik()
    zaktualizujWynik()
})

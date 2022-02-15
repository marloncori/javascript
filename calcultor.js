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

const zaktualizujWynik = () => {
    wynikAktualny.innerText = aktualneDzialanie
    wynikPoprzedni.innerText = poprzednieDzialanie
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


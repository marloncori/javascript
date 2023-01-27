import view from '../views/About.view.html'

export default class {
    constructor(){
        this.container = document.createElement('div')
        this.container.innerHTML = view
    }
    
    getHTML(){
       const button = this.container.querySelector('#btnClick')
        button.addEventListener('click', () => {
            alert('\x1B[1;31m OH NO!!! DANGEROUS BUTTON HAS BEEN PUSHED! \x1B[0m')
        })
      return this.container
    }
}
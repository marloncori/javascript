import view from '../views/Home.view.html'

export default class {
    constructor(){
        this.container = document.createElement('div')
        this.container.innerHTML = view
    }

    getHTML(){
        const button = this.container.querySelector('#btnClick')
        button.addEventListener('click', () => {
            alert(' Button has been pressed!')
        })
        return this.container
    }
}
import view from '../views/Products.view.html'

export default class {
    constructor(){
        this.container = document.createElement('div')
        this.container.innerHTML = view
    }

    getHTML(){
        return this.container
    }
}
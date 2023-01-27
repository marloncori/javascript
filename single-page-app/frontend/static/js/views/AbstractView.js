
export default class {
    constructor(){
        console.log(" >>> AbsctractView class has been entended by a view object.");
    }

    setTitle(title){
        document.title = title;
    }

    async getHtml(){
        return "";
    }
}
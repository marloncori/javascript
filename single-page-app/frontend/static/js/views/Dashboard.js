import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Dashboard");
    }

    async getHtml(){
        return `
                    <div id="welcome">
                        <h1> Welcome back, Master Marlon! </h1>
                    </div>
                    </br>
                    </br>
                    <div id="paragraph">
                        <p> In this article, we will learn how to use Behavior Subject in Angular 10. 
                            Behavior Subject is a part of the RxJs library and is used for cross component 
                            communications. We can send data from one component to other components using 
                            Behavior Subject. In Behavior Subject we can set the initial value .</p>
                    </div>
                    </br>
                    <div id="list">
                        <ul> <h2><em>Prerequisites</em></h2> 
                            <li>Basic Knowledge of Angular 2 or higher </li>
                            <li>Visual Studio Code </li>
                            <li>Visual studio and SQL Server Management studio </li>
                            <li>Node and NPM installed </li>
                            <li>Bootstrap </li>
                        </ul>
                    </div>
                        </br>
                    <div>
                        <p>
                            <a href="/posts" data-link> View recent posts</a>
                        </p>
                    </div>      
                `;
    }
}
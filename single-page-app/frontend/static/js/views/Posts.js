import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Posts");
    }

    async getHtml(){
        return `
        <div id="welcome">
            <h1> Welcome back, Master Marlon! </h1>
        </div>
        </br>
        </br>
        <div id="paragraph">
            <p> Create an Angular project by using the following command.
            ng new SubjectbehaviourDemo  
            Open this project in Visual Studio Code and install Bootstrap by using following command.
            npm install bootstrap --save   
            Now open styles.css file and add Bootstrap file reference. To add reference in styles.css file add this line.
            @import '~bootstrap/dist/css/bootstrap.min.css';  
            Now create a folder named 'Layout' and inside it create three components. In this demo we send data from home component to leftsidebar component.
            Home
            Header
            Leftsidebar 
            ng g c Home    
            ng g c Header       
            ng g c Leftsidebar   </p>
        </div>
        </br>
        <div id="list">
            <p>
            Now create a service to call the Web API by using the following command.
            ng g s ShareDataService    
            Now open share-data.service.ts file and add the following lines,
            </p>
            <code>
            import { Injectable } from '@angular/core';    
            import { HttpClient } from "@angular/common/http";    
            import { BehaviorSubject } from 'rxjs';    
            @Injectable({    
                providedIn: 'root'    
            })    
            export class ShareDataService {    
            name: any;    
            public content = new BehaviorSubject<any>(this.name);    
            public share = this.content.asObservable();    
            public Employeename = [];    
            constructor(private http: HttpClient) { }    
            getLatestValue(data) {    
            debugger;    
            this.content.next(data);    
            this.Employeename = data;    
            console.log(this.Employeename);    
            }    
            Saveuser(data) {    
            debugger;    
            return this.http.post('http://localhost:1680/api/employee/InsertEmployee', data)    
            }    
             getdetails() {    
             debugger;    
             return this.http.get('http://localhost:1680/api/employee/Getdetaisl')    
             }    
        
            }  
            </code>
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
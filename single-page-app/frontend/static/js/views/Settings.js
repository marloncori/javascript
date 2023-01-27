import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Settings");
    }

    async getHtml(){
        return `
        <div id="welcome">
            <h1> Welcome back, Master Marlon! </h1>
        </div>
        </br>
        </br>
        <div id="paragraph">
            <p>  Now open left-sidebar.component.ts file and add the following code: </p>
        </div>
        </br>
        <div id="list">
           <code>
           import { Component, OnInit } from '@angular/core';    
           import { ShareDataService } from "../../share-data.service";    
           @Component({    
             selector: 'app-left-sidebar',    
             templateUrl: './left-sidebar.component.html',    
             styleUrls: ['./left-sidebar.component.css']    
           })    
           export class LeftSidebarComponent implements OnInit {    
           name:any;    
           employeenameLatest: any;    
           playListDetails:any;    
             constructor(public shareDataService:ShareDataService) { }    
             ngOnInit(): void {    
               this.shareDataService.share.subscribe(x =>    
                 this.employeenameLatest = x)    
                 this.employeenameLatest = this.employeenameLatest;    
                 console.log(this.employeenameLatest);    
               this.shareDataService.getdetails().subscribe((data: any) => {    
                 this.name = data;    
                 console.log(this.name);    
                 this.shareDataService.Employeename = this.name;    
               })    
             }    
           }   
           </code>
        </div>
        <div id="code-block" >
           <p>Now open left-sidebar.component.html file and add the following code,</p>
           <code>
           import { Component, OnInit } from '@angular/core';    
            import { ShareDataService } from "../../share-data.service";    
                @Component({    
                selector: 'app-home',    
                templateUrl: './home.component.html',    
                styleUrls: ['./home.component.css']    
                })    
                export class HomeComponent implements OnInit {    
                    users = new Users();    
                    empDetails: any;    
                    constructor(private shareDataService: ShareDataService) { }    
                        data: any;    
                    ngOnInit(): void {    
                    }    
                    showname() {    
                        this.shareDataService.getdetails().subscribe((data: any) => {    
                        this.empDetails = data;    
                        debugger;    
                        this.shareDataService.getLatestValue(this.empDetails);    
                        })    
                    }    
                    saveuser() {    
                    debugger;    
                    this.shareDataService.Saveuser(this.users).subscribe(res => {    
                    this.showname();    
                    })    

                        }    
                    }    
                    class Users {    
                        EmployeeName: any;    
                        city: any;    
                        email: any;    
                        password: any;    
                        department: any;    
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
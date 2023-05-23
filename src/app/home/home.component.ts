import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private http: HttpClient){
    this.loadPost();

  }


  loadPost(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (response)=>{
        alert(JSON.stringify(response));
    });
  }
}

import { Component } from '@angular/core';
import {InfoService} from './service/info.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  profile={};


  constructor(private info: InfoService) {



    this.info.getInfo().subscribe(res => {

      this.profile = res.json();

      console.log(this.profile);

    })

    
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //pipe
  title = 'Pipes class';
todaydate=new Date();




//json obj pipe
jsonobj={name:"madhu",age:"20",address:{apartment:"tvr"}};
months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];


name="pipe";

}
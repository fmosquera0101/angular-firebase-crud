import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Show} from './show.interface';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular';
  
}



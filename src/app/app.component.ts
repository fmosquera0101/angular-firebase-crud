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
  showCollection: AngularFirestoreCollection<Show>;
  showList: Observable<Show[]>;
  constructor(private db: AngularFirestore){
    this.showCollection = db.collection('fredy_shows');
    this.showList = this.showCollection.valueChanges();
  }
  add(){
    const id = this.db.createId();
    const picture = this.getRandomPicture();
    const name = '';
    this.showCollection.doc(id).set({name, picture, id});
  }
 getRandomPicture(){
   const randomNumber = Math.round(Math.random() * 20);
  return 'https://picsum.photos/100/100?image=' + randomNumber;
 }
 updatePicture(id: string){
   const picture = prompt('Please enter an image');
   if(picture){
     this.showCollection.doc(id).update({picture});
   }
 }
 updateName(id: string, name: string){
   this.showCollection.doc(id).update({name});
 }
  
}



import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }
  loginAnon(){
    this.afAuth.auth.signInAnonymously();
  }
}

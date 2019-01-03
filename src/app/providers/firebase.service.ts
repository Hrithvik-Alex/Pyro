import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app'
import { Session } from '../models/session'
import { switchMap } from 'rxjs/operators'
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  session: Observable<Session>;
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, public afStore: AngularFirestore) {
    this.user = afAuth.authState;
  }
  loginAnon(isHost: boolean, code: string){
    this.afAuth.auth.signInAnonymously().then((credential) => {
      if(isHost){
        this.createSession(credential.user, code);
      }
      else{
        this.joinSession(credential.user, code);
      }
    });
  }

  logoutAnon(){
    this.afAuth.auth.signOut();
  }

  createSession(host, code: string) {
    this.afStore.doc(`sessions/${code}`).ref.get().then((documentSnapshot) => {
      if(documentSnapshot.exists) {
        console.log("This session already exists!");
      }
      else {
        const sessionRef: AngularFirestoreDocument<any> = this.afStore.doc(`sessions/${code}`);
        const data: Session = {
          code: code,
          playlist: "Chinguacousy",
          members: "Glenforest",
          hostUID: host.uid
        }
        return sessionRef.set(data, {merge: true});
      }
    });
  }

  joinSession(user, code: string){

  }
}

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
          playlist: null,
          members: [host.uid],
          hostUID: host.uid
        }
        return sessionRef.set(data, {merge: true});
      }
    });
  }

  joinSession(member, code: string){
  var sessionRef = this.afStore.collection("sessions").doc(`${code}`);
  sessionRef.get().forEach(function(doc) {
    // doc.data() is never undefined for query doc snapshots
    var currentSession = doc.data();
    var currentMembers: [String] = doc.data().members
    if(currentMembers.indexOf(member.uid) <= -1){
      sessionRef.update({members: currentMembers.concat([member.uid])});
    }
    else {
      console.log("You are already in this session.");
    }
  });
  }
}

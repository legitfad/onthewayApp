import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { take, map, tap } from 'rxjs/operators';

export interface UserCredentials {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = null;
  username = '';

  constructor(
    private afAuth: AngularFireAuth, 
    private db: AngularFirestore
  ) { 
    this.afAuth.authState.subscribe(res => {
      this.user = res;
      if (this.user) {
        this.db.doc(`users/${this.currentUserId}`).valueChanges().pipe(
          tap(res => {
            this.username = res['username'];
          })
        ).subscribe();
      }
    })
  }

  signUp(credentials: UserCredentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((data) => {
        return this.db.doc(`users/${data.user.uid}`).set({
          username: credentials.username,
          email: data.user.email,
          created: firebase.firestore.FieldValue.serverTimestamp()
        });
      });
  }

  isUsernameAvailable(name) {
    return this.db.collection('users', ref => ref.where('username', '==', name).limit(1)).valueChanges().pipe(
      take(1),
      map(user =>{
        return user;
      })
    );
  }

  signIn(credentials: UserCredentials) {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }
 
  signOut() {
    return this.afAuth.auth.signOut();
  }
 
  resetPw(email) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }
 
  updateUser(username) {
    return this.db.doc(`users/${this.currentUserId}`).update({
      username
    });
  }
 
  get authenticated(): boolean {
    return this.user !== null;
  }
 
  get currentUser(): any {
    return this.authenticated ? this.user : null;
  }
 
  get currentUserId(): string {
    return this.authenticated ? this.user.uid : '';
  }

  getCurrentUser(){
    return this.user;
  }
 


}
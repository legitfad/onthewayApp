import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { take, map, tap, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';

export interface UserCredentials {
  username: string;
  email: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static user: User = null;
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
    });
    firebase.auth().onAuthStateChanged((firebaseUser: firebase.User) => {
      if (firebaseUser) {
        this.user.email = firebaseUser.email;
      } else {
        this.user.email = '';
      }
    })
  }

  signUp(credentials: UserCredentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((data) => {
        return this.db.doc(`users/${data.user.uid}`).set({
          username: credentials.username,
          email: data.user.email,
          created: firebase.firestore.FieldValue.serverTimestamp(),
          role: credentials.role
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
    return from(this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)).pipe(
      switchMap(user => {
        console.log('real user: ', user);
        if (user) {
          return this.db.doc(`users/${user.user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
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

  getEmail() {
    return this.afAuth.auth.currentUser.email;
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

  static initialize() {
    firebase.auth().onAuthStateChanged((firebaseUser: firebase.User) => {
      if (firebaseUser) {                
          this.user.email = firebaseUser.email;
          console.log('User ' + this.user.email);            
      } else {                
          console.log('User logged out');                
          this.user.email = undefined;            
      }        
    });    
  }
 


}
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC7CWVsfjoHqWNhmaGFafvtP5nZ2HOF-pU",
  authDomain: "moodystore2-15929.firebaseapp.com",
  databaseURL: "https://moodystore2-15929-default-rtdb.firebaseio.com",
  projectId: "moodystore2-15929",
  storageBucket: "moodystore2-15929.appspot.com",
  messagingSenderId: "761012315",
  appId: "1:761012315:web:027153629ce74d372a1f7e",
  measurementId: "G-4RE3T2GBD7"
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  private auth!: Auth;

  constructor() { }

  public initialize() {
    const app = initializeApp(firebaseConfig); 
    this.auth = getAuth(app);//именно из-за этой строчки бьет ошибку, без неё все работает

    console.log(this.auth);
  }
}

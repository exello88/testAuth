import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AlzaSyC7CWVs00HqWNhmaGFafvtP5nZ2HOF-plJ",
  authDomain: "moodystore2-15929.firebaseapp.com",
  projectId: "moodystore2-15929",
  storageBucket: "moodystore2-15929.appspot.com",
  messagingSenderId: "761012315",
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

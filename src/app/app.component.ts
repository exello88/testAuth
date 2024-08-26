import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from './firebase-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'testAuth';

  constructor(private authService : FirebaseAuthService) { }

  ngOnInit(){
    this.authService.initialize()
  }
}

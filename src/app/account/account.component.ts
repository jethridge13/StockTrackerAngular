import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  displayName = '';

  constructor(public afAuth: AngularFireAuth) {}

  ngOnInit() {
      this.afAuth.authState.subscribe((data) => {
          if (data) {
              this.displayName = data.displayName;
          } else {
              this.displayName = '';
          }
      });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}

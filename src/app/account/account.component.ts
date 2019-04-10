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
  showLoginMenu = false;
  showCreateAccountMenu = false;

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

  showCreateAccount() {
      this.showLoginMenu = false;
      this.showCreateAccountMenu = true;
  }

  signInWithGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  loginClick() {
      this.showLoginMenu = !this.showLoginMenu;
      this.showCreateAccountMenu = false;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}

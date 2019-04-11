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
  loading = false;

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
      this.loading = true;
    const login = this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    login.then((value) => {
        console.log(value);
        this.loading = false;
        this.showLoginMenu = false;
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}

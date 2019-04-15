import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { AbstractControl, FormBuilder, FormControl,
    FormGroup, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';

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

  createAccountForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      passwordGroup: new FormGroup({
          password: new FormControl('', [Validators.required]),
          passwordConfirm: new FormControl('', [Validators.required])
      }, [this.checkPasswords()]),
      legalCheck: new FormControl('', [Validators.requiredTrue])
  });

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

  checkPasswords(): ValidatorFn {
      return (group: FormGroup): ValidationErrors => {
          const password = group.get('password');
          const confirm = group.get('passwordConfirm');

          if (password.value !== confirm.value) {
              return {notEquivalent: true};
          } else {
              return null;
          }
      };
  }

  createAccount() {
      // TODO
      console.log(this.createAccountForm.value);
  }

  showCreateAccount(form) {
      console.log(form);
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

  getErrorMessage(type: string) {
      if (type === 'email') {
          if (this.createAccountForm.get('email').hasError('required')) {
              return 'Required';
          } else if (this.createAccountForm.get('email').hasError('email')) {
              return 'Not a valid email';
          }
      } else if (type === 'password') {
          if (this.createAccountForm.get('passwordGroup').get('password').hasError('required')) {
              return 'Required';
          }
      } else if (type === 'passwordConfirm') {
          if (this.createAccountForm.get('passwordGroup').get('passwordConfirm').hasError('required')) {
              return 'Required';
          } else if (this.createAccountForm.get('passwordGroup').hasError('notEquivalent')) {
              return 'Passwords must match';
          }
      }
  }

}

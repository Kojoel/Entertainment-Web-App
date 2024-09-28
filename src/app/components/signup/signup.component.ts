import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../../validators/password-match.validator';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(
    private router: Router
  ) {

    this.signupForm = new FormGroup(
      {
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required, Validators.minLength(4)]),
        rePassword: new FormControl("", [Validators.required])
      },
      { validators: passwordMatchValidator() }
    );

  }

  // onSubmitAndLogin() {
  //   this.onSubmit();
  //   this.goToLogIn();
  // }

  goToLogIn() {
    if(this.isFormSubmitted) {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    const isFormValid = this.signupForm.valid;
    debugger;
    this.isFormSubmitted = isFormValid;
    console.log(this.isFormSubmitted)
    this.goToLogIn()
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../../validators/password-match.validator';
import { ApiService } from '../../services/api.service';

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

  successResponse: boolean = false;
  successMessage: string = '';
  errorResponse: boolean = false;
  errorMessage: string = '';
  emptyFormDetect: boolean = false;

  constructor(
    private router: Router,
    public api: ApiService
  ) {

    this.signupForm = new FormGroup(
      {
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [
          Validators.required, 
          Validators.minLength(6),
          // Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/),
        ]),
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
    if(this.successResponse) {
      this.router.navigate(['/']);
    } 

    else if(this.errorResponse) {
      // this.router.navigate(['/']);
    }
  }

  goToLogInNoVal() {
    this.router.navigate(['/']);
  }

  onSubmit(signupForm: any) {

    const signupFormCheck = {
      email: signupForm.value.email,
      password: signupForm.value.password,
    }

    if(signupForm.value.email !== '' && signupForm.value.password !== '') {

      // console.log(signupFormCheck);
      this.api.onSignUp(signupFormCheck).subscribe({
        next: (response) => {
          if(response.message) {
            // console.log('signup successful: ', response)
            this.successResponse = true;
            this.successMessage = response.message;
            this.goToLogIn()
          }
        },
        error: (error) => {
          this.errorResponse = true;
          if (error.status === 400) {
          this.errorMessage = error.error.message;
        } else if (error.status === 500) {
          // console.log('Server error: ', error.error.message); 
          this.errorMessage = error.error.message;
        } else {
          // console.log('Signup failed: ', error.message);
          this.errorMessage = error.error.message;
        }
      },
      complete: () => {
        console.log('signup operation completed');
      }
    })
  }
  else {
    this.emptyFormDetect = true;
  }


    // const isFormValid = this.signupForm.valid;

    // this.isFormSubmitted = isFormValid;
    // this.signupForm.markAllAsTouched();
    // this.goToLogIn()
  }

}
